// This function is serialized into the isolated Obsidian renderer. Keep it self-contained.
export async function runScenarios({ pluginId, version, expectedVault, fixture, timeout = 30000 }) {
	const app = globalThis.app;
	const checks = [];
	const assert = (condition, message) => { if (!condition) throw new Error(message); };
	const wait = async (check, message) => {
		const end = Date.now() + timeout;
		do {
			const value = await check();
			if (value) return value;
			await new Promise(resolve => setTimeout(resolve, 100));
		} while (Date.now() < end);
		throw new Error(message);
	};
	const step = async (name, action) => {
		const start = Date.now();
		try { await action(); checks.push({ name, status: 'passed', durationMs: Date.now() - start }); }
		catch (error) { checks.push({ name, status: 'failed', durationMs: Date.now() - start, error: error.message }); throw error; }
	};
	const doc = () => typeof activeDocument === 'undefined' ? document : activeDocument;
	const fill = (input, value) => {
		assert(input, 'Expected a dialog input');
		input.value = value;
		input.dispatchEvent(new Event('input', { bubbles: true }));
		input.dispatchEvent(new Event('change', { bubbles: true }));
	};
	const button = label => {
		const result = [...doc().querySelectorAll('.modal button')].find(element => element.textContent.trim() === label);
		assert(result, `Missing dialog button: ${label}`);
		return result;
	};
	const password = async (value, confirm = true, hint) => {
		const modal = await wait(() => [...doc().querySelectorAll('.modal')].find(element => element.querySelectorAll('input[type=password]').length >= (confirm ? 2 : 1)), 'Password dialog did not open');
		const inputs = modal.querySelectorAll('input[type=password]');
		fill(inputs[0], value);
		if (confirm) fill(inputs[1], value);
		if (hint !== undefined) fill(modal.querySelector('input[placeholder="Password hint"]'), hint);
		button('Confirm').click();
		await wait(() => !modal.isConnected, 'Password dialog did not accept the input');
	};
	const command = id => assert(app.commands.executeCommandById(`${pluginId}:${id}`), `Command unavailable: ${id}`);
	const activeEncrypted = () => app.workspace.activeLeaf?.view?.getViewType() === 'meld-encrypted-view' && app.workspace.activeLeaf.view.isSavingEnabled && app.workspace.activeLeaf.view;
	const save = async view => { await view.save(); if (view.saveInProgress) await view.saveInProgress; };
	const diskFormat = async file => {
		try { return JSON.parse(await app.vault.read(file)).version; }
		catch (error) { if (error instanceof SyntaxError) return null; throw error; }
	};
	const selectAll = view => {
		view.editor.focus();
		view.editor.setSelection({ line: 0, ch: 0 }, view.editor.offsetToPos(view.editor.getValue().length));
	};
	let view;
	try {
		await step('packaged plugin and disposable vault', async () => {
			const adapter = app.vault.adapter;
			const actualVault = typeof adapter.getBasePath === 'function' ? adapter.getBasePath() : adapter.basePath;
			assert(actualVault === expectedVault, 'Refusing to run smoke checks in an unexpected vault');
			assert(app.plugins.plugins[pluginId]?.manifest.version === version, 'Packaged plugin version is not loaded');
		});
		await step('create and edit a v3 whole note', async () => {
			command('create-new-note');
			await password(fixture.password);
			view = await wait(activeEncrypted, 'Encrypted view did not open');
			await app.fileManager.renameFile(view.file, 'smoke-whole.mdenc');
			view.editor.setValue(fixture.wholeText);
			await save(view);
			const disk = await app.vault.read(view.file);
			assert(JSON.parse(disk).version === '3.0', 'New whole note is not v3');
			assert(!disk.includes(fixture.wholeText), 'Whole-note plaintext was written to disk');
			assert(view.editor.getValue() === fixture.wholeText, 'Whole-note edit was lost');
		});
		await step('change password, lock, and reopen', async () => {
			const changing = view.changePassword();
			await password(fixture.changedPassword);
			await changing;
			const file = view.file;
			view.lockAndClose();
			await wait(() => !app.workspace.getLeavesOfType('meld-encrypted-view').some(leaf => leaf.view === view), 'Lock did not close the note');
			const leaf = app.workspace.getLeaf(true);
			const opening = leaf.openFile(file);
			opening.catch(() => {});
			await password(fixture.changedPassword, false);
			await opening;
			view = leaf.view;
			assert(view.editor.getValue() === fixture.wholeText, 'Changed password did not reopen the original plaintext');
		});
		await step('convert unsaved edits and convert back', async () => {
			const file = view.file;
			view.editor.setValue(fixture.conversionText);
			command('convert-to-or-from-encrypted-note');
			await wait(async () => file.extension === 'md' && await app.vault.read(file) === fixture.conversionText, 'Decrypt conversion lost unsaved edits');
			await wait(() => app.workspace.activeLeaf?.view?.getViewType() === 'markdown' && app.workspace.activeLeaf.view.file === file, 'Converted Markdown did not reopen');
			command('convert-to-or-from-encrypted-note');
			await wait(async () => file.extension === 'mdenc' && await diskFormat(file) === '3.0', 'Encrypt conversion did not write v3');
			await wait(() => activeEncrypted()?.file === file, 'Converted encrypted note did not reopen');
		});
		await step('heading navigation in plain and encrypted notes', async () => {
			const headingWait = async (check, message) => {
				for (let attempt = 0; attempt < 50; attempt++) {
					const result = await check();
					if (result) return result;
					await new Promise(resolve => setTimeout(resolve, 100));
				}
				throw new Error(message);
			};
			const text = '## Table of Contents\n[[#subtitle|Go to subtitle]]\n\n'
				+ Array.from({ length: 100 }, (_, index) => `Paragraph ${index}\n`).join('\n')
				+ '\n### subtitle\nContent...';
			const plain = await app.vault.create('smoke-headings.md', text);
			view = await headingWait(activeEncrypted, 'Converted encrypted note is not ready');
			const encrypted = view.file;
			view.editor.setValue(text);
			await save(view);
			const leaf = app.workspace.getLeaf(true);
			for (const file of [plain, encrypted]) {
				await leaf.openFile(file);
				const headingView = leaf.view;
				for (const mode of ['preview', 'source']) {
					await headingView.setState({ ...headingView.getState(), mode, source: false }, {});
					headingView.setEphemeralState({ line: 0, scroll: 0 });
					await headingWait(() => headingView.currentMode.getScroll() < 1, `${file.extension} ${mode}: heading test did not return to the top`);
					if (mode === 'preview') {
						const link = await headingWait(() => headingView.containerEl.querySelector('a.internal-link[data-href="#subtitle"]'), 'Heading link did not render');
						link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: link.ownerDocument.defaultView }));
						await headingWait(() => headingView.currentMode.getScroll() > 100, `${file.extension}: clicking a heading link did not scroll`);
					}
					headingView.setEphemeralState({ line: 0, scroll: 0 });
					await headingWait(() => headingView.currentMode.getScroll() < 1, `${file.extension} ${mode}: heading test did not reset`);
					// openFile is also how Obsidian delivers incoming subpath navigation.
					await leaf.openFile(file, { eState: { subpath: '#subtitle' } });
					await headingWait(() => headingView.currentMode.getScroll() > 100, `${file.extension}: incoming heading navigation failed in ${mode}`);
				}
			}
			assert(!app.metadataCache.getFileCache(encrypted)?.headings?.length, 'Encrypted headings leaked into shared metadata');
		});
		await step('inline encrypt and edit while retaining the hint and markers', async () => {
			const file = await app.vault.create('smoke-inline.md', fixture.inlineText);
			const leaf = app.workspace.getLeaf(true);
			await leaf.openFile(file);
			const inline = leaf.view;
			selectAll(inline);
			command('in-place-encrypt');
			await password(fixture.inlinePassword, true, fixture.inlineHint);
			await wait(() => inline.editor.getValue().includes('🔐γ'), 'Inline encryption did not write gamma markers');
			const before = inline.editor.getValue();
			assert(!before.includes(fixture.inlineText), 'Inline encryption retained plaintext');
			assert(before.includes(`💡${fixture.inlineHint}💡`), 'Inline hint was lost');
			await save(inline);
			selectAll(inline);
			command('in-place-decrypt');
			await password(fixture.inlinePassword, false);
			const textarea = await wait(() => doc().querySelector('.meld-encrypt-decrypt-modal textarea'), 'Inline edit dialog did not open');
			assert(textarea.value === fixture.inlineText, 'Inline decryption returned different text');
			fill(textarea, fixture.inlineEditedText);
			button('Save').click();
			await wait(() => inline.editor.getValue() !== before, 'Inline edit was not re-encrypted');
			await save(inline);
			const disk = await app.vault.read(file);
			assert(disk.includes('🔐γ') && disk.includes(`💡${fixture.inlineHint}💡`), 'Inline save lost markers or hint');
			assert(before.startsWith('%%') === disk.startsWith('%%'), 'Inline save changed marker visibility');
			assert(!disk.includes(fixture.inlineEditedText), 'Inline save exposed plaintext');
		});
		await step('legacy whole-note decryption and upgrade', async () => {
			const file = app.vault.getAbstractFileByPath('legacy-whole.mdenc');
			assert(file, 'Legacy whole-note fixture is missing');
			const leaf = app.workspace.getLeaf(true);
			const opening = leaf.openFile(file);
			opening.catch(() => {});
			await password(fixture.legacyPassword, false);
			await opening;
			assert(leaf.view.editor.getValue() === fixture.legacyText, 'Legacy whole-note plaintext differs');
			leaf.view.editor.setValue(fixture.legacyEditedText);
			await save(leaf.view);
			assert(await diskFormat(file) === '3.0', 'Legacy whole-note save did not upgrade to v3');
		});
		await step('legacy inline decryption and upgrade', async () => {
			const file = app.vault.getAbstractFileByPath('legacy-inline.md');
			assert(file, 'Legacy inline fixture is missing');
			const leaf = app.workspace.getLeaf(true);
			await leaf.openFile(file);
			selectAll(leaf.view);
			command('in-place-decrypt');
			await password(fixture.legacyPassword, false);
			const textarea = await wait(() => doc().querySelector('.meld-encrypt-decrypt-modal textarea'), 'Legacy inline dialog did not open');
			assert(textarea.value === fixture.legacyText, 'Legacy inline plaintext differs');
			button('Save').click();
			await wait(() => leaf.view.editor.getValue().includes('🔐γ'), 'Legacy inline save did not upgrade to v3');
			await save(leaf.view);
			assert((await app.vault.read(file)).includes('🔐γ'), 'Upgraded inline block was not saved');
		});
		return { status: 'passed', checks };
	} catch (error) { return { status: 'failed', checks, error: error.message }; }
}
