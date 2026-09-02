import { Notice, Setting, TFile, TFolder } from 'obsidian';
import type MeldEncrypt from '../../main.ts';
import PluginPasswordModal from '../../PluginPasswordModal.ts';
import { SessionPasswordService, type PasswordAndHint } from '../../services/SessionPasswordService.ts';
import type { IMeldEncryptPluginSettings } from '../../settings/MeldEncryptPluginSettings.ts';
import type { IFeatureCanvasEncryptSettings } from './IFeatureCanvasEncryptSettings.ts';
import type { IMeldEncryptPluginFeature } from '../IMeldEncryptPluginFeature.ts';
import {
	decodeEncryptedCanvasWrapper, decryptCanvasData, encryptCanvasData,
	hasEncryptedCanvasMarker, isEncryptedCanvasWrapper,
	verifyEncryptedCanvas,
} from './CanvasEncryptionWrapper.ts';
import { CanvasPatcher } from './CanvasPatcher.ts';
import { assertCanvasData, isNativeCanvasView, type CanvasData, type NativeCanvasView } from './CanvasTypes.ts';
import { CanvasConfirmationModal } from './CanvasConfirmationModal.ts';

export default class FeatureCanvasEncrypt implements IMeldEncryptPluginFeature {
	private plugin: MeldEncrypt;
	private featureSettings: IFeatureCanvasEncryptSettings;
	private patcher: CanvasPatcher;
	private statusIndicator: HTMLElement;
	private decoratedViews = new WeakSet<NativeCanvasView>();
	private disposed = false;
	private altPressed = false;

	async onload(plugin: MeldEncrypt, settings: IMeldEncryptPluginSettings): Promise<void> {
		this.disposed = false;
		this.plugin = plugin;
		this.featureSettings = settings.featureCanvasEncrypt;
		this.patcher = new CanvasPatcher(plugin.app, (file, hint, forcePrompt) =>
			this.resolvePassword(file, hint, forcePrompt));
		if (!this.featureSettings.enabled) return;
		this.patcher.installWriteGuard();
		await this.discoverProtectedFiles();
		await this.tryBootstrapCanvasPrototype();

		this.statusIndicator = plugin.addStatusBarItem();
		this.statusIndicator.setText('🔒 Meld Encrypted Canvas');
		this.statusIndicator.hide();

		const installFromLeaves = (): void => {
			for (const leaf of plugin.app.workspace.getLeavesOfType('canvas')) {
				if (this.patcher.tryInstall(leaf.view)) break;
			}
		};
		const initializeCanvasRuntime = async (): Promise<void> => {
			if (this.disposed) return;
			await this.discoverProtectedFiles();
			if (this.disposed) return;
			installFromLeaves();
			await this.reloadProtectedOpenViews();
			this.updateActiveCanvasUi();
			if (this.patcher.hasProtectedFiles() && !this.patcher.isInstalled()) {
				new Notice('Encrypted Canvas support is unavailable in this Obsidian version');
				for (const leaf of plugin.app.workspace.getLeavesOfType('canvas')) leaf.detach();
			}
		};
		if (plugin.app.workspace.layoutReady) await initializeCanvasRuntime();
		else plugin.app.workspace.onLayoutReady(() => { void initializeCanvasRuntime(); });
		plugin.registerEvent(plugin.app.workspace.on('active-leaf-change', leaf => {
			if (leaf !== null && this.patcher.tryInstall(leaf.view)) void this.reloadProtectedOpenViews();
			this.updateActiveCanvasUi();
		}));
		plugin.registerEvent(plugin.app.workspace.on('file-open', file => {
			if (file?.extension !== 'canvas') return;
			for (const leaf of plugin.app.workspace.getLeavesOfType('canvas')) {
				if (isNativeCanvasView(leaf.view) && leaf.view.file === file) this.patcher.tryInstall(leaf.view);
			}
			void this.reloadProtectedOpenViews();
		}));
		const canvasNodeObserver = new MutationObserver(() => {
			const candidate = plugin.app.workspace.getMostRecentLeaf()?.view;
			if (isNativeCanvasView(candidate) && this.patcher.isProtected(candidate.file)) {
				this.patcher.decorateUnencryptedNodes(candidate);
			}
		});
		canvasNodeObserver.observe(document.body, { childList: true, subtree: true });
		plugin.register(() => canvasNodeObserver.disconnect());
		plugin.registerDomEvent(document, 'keydown', event => { this.altPressed = event.altKey; }, true);
		plugin.registerDomEvent(document, 'keyup', event => { this.altPressed = event.altKey; }, true);
		plugin.registerDomEvent(window, 'blur', () => { this.altPressed = false; });
		plugin.registerDomEvent(document, 'paste', event => {
			const candidate = plugin.app.workspace.getMostRecentLeaf()?.view;
			if (!isNativeCanvasView(candidate) || !this.patcher.isProtected(candidate.file)) return;
			const hasImage = Array.from(event.clipboardData?.files ?? []).some(file => file.type.startsWith('image/'));
			if (hasImage && this.altPressed) {
				this.patcher.allowNextCreatedImageUnencrypted(candidate);
				return;
			}
			if (!hasImage || typeof candidate.canvas.createTextNode !== 'function') return;
			event.preventDefault();
			event.stopImmediatePropagation();
			void this.patcher.handleImagePaste(candidate, event).then(handled => {
				if (!handled) new Notice('Encrypted image paste is unavailable in this Obsidian version');
			});
		}, true);
		plugin.registerEvent(plugin.app.vault.on('create', file => {
			if (!(file instanceof TFile)) return;
			const candidate = plugin.app.workspace.getMostRecentLeaf()?.view;
			if (isNativeCanvasView(candidate) && this.patcher.isProtected(candidate.file)) {
				this.patcher.trackCreatedImage(candidate, file);
			}
		}));

		plugin.addCommand({
			id: 'meld-canvas-encrypt-current-experimental',
			name: 'Encrypt current Canvas (experimental)',
			checkCallback: checking => this.withCurrentCanvas(checking, view => this.encryptCurrent(view)),
		});
		plugin.addCommand({
			id: 'meld-canvas-permanently-decrypt-experimental',
			name: 'Permanently decrypt current Canvas (experimental)',
			checkCallback: checking => this.withCurrentCanvas(checking, view => this.permanentlyDecrypt(view), true),
		});
		plugin.addCommand({
			id: 'meld-canvas-lock-close-current-experimental',
			name: 'Lock & Close current encrypted Canvas (experimental)',
			checkCallback: checking => this.withCurrentCanvas(checking, view => this.lockAndClose(view), true),
		});
		plugin.addCommand({
			id: 'meld-canvas-change-password-experimental',
			name: 'Change password for encrypted Canvas (experimental)',
			checkCallback: checking => this.withCurrentCanvas(checking, view => this.changePassword(view), true),
		});
		plugin.addCommand({
			id: 'meld-canvas-lock-close-all-experimental',
			name: 'Lock & Close all encrypted Canvases (experimental)',
			callback: async () => { await this.lockAndCloseAll(); },
		});

		plugin.registerEvent(plugin.app.workspace.on('file-menu', (menu, file) => {
			if (!(file instanceof TFile) || file.extension !== 'canvas') return;
			const openView = this.findOpenCanvasView(file);
			if (!this.patcher.isProtected(file)) {
				menu.addItem(item => item
					.setTitle('Meld Encrypt: Encrypt Canvas (experimental)')
					.setIcon('file-lock-2')
					.onClick(() => { void (openView === null ? this.encryptClosedFile(file) : this.encryptCurrent(openView)); }));
				return;
			}
			menu.addItem(item => item
				.setTitle('Meld Encrypt: Change Canvas password (experimental)')
				.setIcon('key-round')
				.onClick(() => { void (openView === null ? this.changeClosedFilePassword(file) : this.changePassword(openView)); }));
			if (openView !== null) {
				menu.addItem(item => item
					.setTitle('Meld Encrypt: Lock & Close Canvas (experimental)')
					.setIcon('lock')
					.onClick(() => { void this.lockAndClose(openView); }));
			}
			menu.addItem(item => item
				.setTitle('Meld Encrypt: Permanently decrypt Canvas')
				.setIcon('unlock')
				.onClick(() => { void (openView === null ? this.permanentlyDecryptClosedFile(file) : this.permanentlyDecrypt(openView)); }));
		}));

		plugin.registerEvent(plugin.app.vault.on('rename', (file, oldPath) => {
			if (file instanceof TFile) this.patcher.rename(oldPath, file.path);
			else if (file instanceof TFolder) this.patcher.renameFolder(oldPath, file.path);
		}));
	}

	private findOpenCanvasView(file: TFile): NativeCanvasView | null {
		for (const leaf of this.plugin.app.workspace.getLeavesOfType('canvas')) {
			if (isNativeCanvasView(leaf.view) && leaf.view.file === file) return leaf.view;
		}
		return null;
	}

	private async tryBootstrapCanvasPrototype(): Promise<void> {
		if (this.disposed || this.patcher.isInstalled()) return;
		try {
			const leaf = this.plugin.app.workspace.getLeaf(true);
			await leaf.setViewState({ type: 'canvas', active: false });
			if (this.disposed) { leaf.detach(); return; }
			this.patcher.tryInstall(leaf.view);
			leaf.detach();
		} catch (error) {
			console.info('Meld Canvas prototype bootstrap deferred', {
				errorType: error instanceof Error ? error.name : typeof error,
			});
		}
	}

	private async reloadProtectedOpenViews(): Promise<void> {
		if (this.disposed) return;
		for (const leaf of this.plugin.app.workspace.getLeavesOfType('canvas')) {
			if (!isNativeCanvasView(leaf.view) || leaf.view.file === null
				|| !this.patcher.isProtected(leaf.view.file)
				|| this.patcher.hasViewState(leaf.view)) continue;
			const contents = await this.plugin.app.vault.read(leaf.view.file);
			if (this.disposed || this.patcher.hasViewState(leaf.view)) continue;
			leaf.view.setViewData(contents, true);
		}
	}

	private updateActiveCanvasUi(): void {
		const candidate = this.plugin.app.workspace.getMostRecentLeaf()?.view;
		if (!isNativeCanvasView(candidate) || !this.patcher.isProtected(candidate.file)) {
			this.statusIndicator?.hide();
			return;
		}
		this.statusIndicator?.show();
		this.patcher.decorateUnencryptedNodes(candidate);
		if (this.decoratedViews.has(candidate) || typeof candidate.addAction !== 'function') return;
		candidate.addAction('lock', 'Lock & Close', () => { void this.lockAndClose(candidate); });
		candidate.addAction('key-round', 'Change password', () => { void this.changePassword(candidate); });
		this.decoratedViews.add(candidate);
	}

	private withCurrentCanvas(
		checking: boolean,
		action: (view: NativeCanvasView) => Promise<void>,
		requireProtected = false,
	): boolean {
		const candidate = this.plugin.app.workspace.getMostRecentLeaf()?.view;
		if (!isNativeCanvasView(candidate) || candidate.file === null
			|| (requireProtected && !this.patcher.isProtected(candidate.file))) return false;
		if (!checking) void action(candidate);
		return true;
	}

	private async discoverProtectedFiles(): Promise<void> {
		const files = this.plugin.app.vault.getFiles().filter(file => file.extension === 'canvas');
		await Promise.all(files.map(async file => {
			try {
				const contents = await this.plugin.app.vault.cachedRead(file);
				if (hasEncryptedCanvasMarker(contents)) {
					this.patcher.markProtected(file);
				}
			} catch (error) {
				console.error('Meld encrypted Canvas scan failed', { path: file.path, errorType: this.errorType(error) });
			}
		}));
	}

	private async resolvePassword(file: TFile, hint: string, forcePrompt: boolean): Promise<PasswordAndHint | null> {
		if (this.disposed) return null;
		if (!forcePrompt) {
			const cached = await SessionPasswordService.getByFile(file);
			if (cached.password.length > 0) return { password: cached.password, hint };
		}
		const result = await new PluginPasswordModal(
			this.plugin.app, `Decrypting "${file.basename}"`, false, false,
			{ password: '', hint },
		).open2Async();
		if (result !== null) SessionPasswordService.putByFile(result, file);
		return result;
	}

	private async promptForNewPassword(file: TFile, title: string): Promise<PasswordAndHint | null> {
		return new PluginPasswordModal(
			this.plugin.app, title, true, true, await SessionPasswordService.getByFile(file),
		).open2Async();
	}

	private async encryptCurrent(view: NativeCanvasView): Promise<void> {
		if (view.file === null) return;
		try {
			this.patcher.tryInstall(view);
			await view.save();
			const diskBefore = await this.plugin.app.vault.read(view.file);
			if (isEncryptedCanvasWrapper(diskBefore) || this.patcher.isProtected(view.file)) {
				new Notice('Canvas is already encrypted');
				return;
			}
			const credentials = await this.promptForNewPassword(view.file, `Encrypting "${view.file.basename}"`);
			if (credentials === null) return;
			if (await this.plugin.app.vault.read(view.file) !== diskBefore) {
				throw new Error('Canvas changed during encryption');
			}
			const value: unknown = view.canvas.getData();
			assertCanvasData(value);
			const wrapper = await encryptCanvasData(value, credentials.password, credentials.hint);
			if (!await verifyEncryptedCanvas(wrapper, credentials.password, value)) {
				throw new Error('Encrypted Canvas verification failed');
			}
			this.patcher.markProtected(view.file);
			try { await this.plugin.app.vault.modify(view.file, wrapper); }
			catch (error) { this.patcher.unmarkProtected(view.file); throw error; }
			this.patcher.registerUnlocked(view, wrapper, credentials);
			SessionPasswordService.putByFile(credentials, view.file);
			new Notice('Canvas encrypted');
		} catch (error) {
			console.error('Meld Canvas encryption failed', { path: view.file.path, errorType: this.errorType(error) });
			new Notice('Canvas encryption failed; original file was not replaced');
		}
	}

	private async encryptClosedFile(file: TFile): Promise<void> {
		try {
			const original = await this.plugin.app.vault.read(file);
			if (isEncryptedCanvasWrapper(original) || this.patcher.isProtected(file)) return;
			const value: unknown = JSON.parse(original);
			assertCanvasData(value);
			const credentials = await this.promptForNewPassword(file, `Encrypting "${file.basename}"`);
			if (credentials === null) return;
			const wrapper = await encryptCanvasData(value, credentials.password, credentials.hint);
			if (!await verifyEncryptedCanvas(wrapper, credentials.password, value)) throw new Error('Verification failed');
			if (await this.plugin.app.vault.read(file) !== original) throw new Error('Canvas changed during encryption');
			this.patcher.markProtected(file);
			try { await this.plugin.app.vault.modify(file, wrapper); }
			catch (error) { this.patcher.unmarkProtected(file); throw error; }
			SessionPasswordService.putByFile(credentials, file);
			new Notice('Canvas encrypted');
		} catch (error) {
			console.error('Closed Canvas encryption failed', { path: file.path, errorType: this.errorType(error) });
			new Notice('Canvas encryption failed; original file was not replaced');
		}
	}

	private async lockAndClose(view: NativeCanvasView): Promise<void> {
		if (view.file === null) return;
		try {
			await this.saveLockAndClose(view);
		} catch {
			new Notice('Lock & Close aborted because the encrypted save failed');
		}
	}

	private async saveLockAndClose(view: NativeCanvasView): Promise<void> {
		if (view.file === null) return;
		await view.save();
		this.patcher.disable(view);
		SessionPasswordService.clearForFile(view.file);
		view.leaf.detach();
	}

	private async lockAndCloseAll(): Promise<void> {
		for (const leaf of this.plugin.app.workspace.getLeavesOfType('canvas')) {
			if (!isNativeCanvasView(leaf.view) || !this.patcher.isProtected(leaf.view.file)) continue;
			try { await this.saveLockAndClose(leaf.view); }
			catch {
				new Notice(`Could not lock Canvas: ${leaf.view.file?.path ?? 'unknown file'}`);
			}
		}
	}

	private async changePassword(view: NativeCanvasView): Promise<void> {
		if (view.file === null) return;
		try {
			await view.save();
			const credentials = await this.promptForNewPassword(view.file, `Change password for "${view.file.basename}"`);
			if (credentials === null) return;
			await this.patcher.assertDiskUnchanged(view);
			const value: unknown = view.canvas.getData();
			assertCanvasData(value);
			const wrapper = await encryptCanvasData(value, credentials.password, credentials.hint);
			if (!await verifyEncryptedCanvas(wrapper, credentials.password, value)) throw new Error('Verification failed');
			await this.plugin.app.vault.modify(view.file, wrapper);
			this.patcher.registerUnlocked(view, wrapper, credentials);
			SessionPasswordService.putByFile(credentials, view.file);
			new Notice('Canvas password changed');
		} catch (error) {
			console.error('Meld Canvas password change failed', { path: view.file.path, errorType: this.errorType(error) });
			new Notice('Canvas password was not changed');
		}
	}

	private async decryptClosedFile(file: TFile): Promise<{ data: CanvasData; wrapperText: string } | null> {
		const wrapperText = await this.plugin.app.vault.read(file);
		const wrapper = decodeEncryptedCanvasWrapper(wrapperText);
		if (wrapper === null) throw new Error('Encrypted Canvas wrapper is invalid');
		let credentials = await this.resolvePassword(file, wrapper.meldEncryptedCanvas.payload.hint, false);
		let data = credentials === null ? null : await decryptCanvasData(wrapper, credentials.password);
		while (credentials !== null && data === null) {
			new Notice('Decryption failed');
			credentials = await this.resolvePassword(file, wrapper.meldEncryptedCanvas.payload.hint, true);
			data = credentials === null ? null : await decryptCanvasData(wrapper, credentials.password);
		}
		return data === null ? null : { data, wrapperText };
	}

	private async changeClosedFilePassword(file: TFile): Promise<void> {
		try {
			const decrypted = await this.decryptClosedFile(file);
			if (decrypted === null) return;
			const credentials = await this.promptForNewPassword(file, `Change password for "${file.basename}"`);
			if (credentials === null) return;
			const wrapper = await encryptCanvasData(decrypted.data, credentials.password, credentials.hint);
			if (!await verifyEncryptedCanvas(wrapper, credentials.password, decrypted.data)) throw new Error('Verification failed');
			if (await this.plugin.app.vault.read(file) !== decrypted.wrapperText) throw new Error('Canvas changed externally');
			await this.plugin.app.vault.modify(file, wrapper);
			SessionPasswordService.putByFile(credentials, file);
			new Notice('Canvas password changed');
		} catch (error) {
			console.error('Closed Canvas password change failed', { path: file.path, errorType: this.errorType(error) });
			new Notice('Canvas password was not changed');
		}
	}

	private async permanentlyDecrypt(view: NativeCanvasView): Promise<void> {
		if (view.file === null) return;
		const confirmed = await new CanvasConfirmationModal(
			this.plugin.app,
			'Permanently decrypt Canvas?',
			'This writes the complete decrypted Canvas permanently to disk. This cannot be undone by Meld Encrypt.',
			'Write plaintext to disk',
		).openAsync();
		if (!confirmed) return;
		try {
			await view.save();
			await this.patcher.assertDiskUnchanged(view);
			const value: unknown = view.canvas.getData();
			assertCanvasData(value);
			const plaintext = JSON.stringify(value, null, 2);
			this.patcher.unmarkProtected(view.file);
			try { await this.plugin.app.vault.modify(view.file, plaintext); }
			catch (error) { this.patcher.markProtected(view.file); throw error; }
			this.patcher.disable(view);
			SessionPasswordService.clearForFile(view.file);
			this.statusIndicator.hide();
			new Notice('Canvas permanently decrypted');
		} catch (error) {
			console.error('Permanent Canvas decryption failed', { path: view.file.path, errorType: this.errorType(error) });
			new Notice('Canvas was not permanently decrypted');
		}
	}

	private async permanentlyDecryptClosedFile(file: TFile): Promise<void> {
		const confirmed = await new CanvasConfirmationModal(
			this.plugin.app, 'Permanently decrypt Canvas?',
			'This writes the complete decrypted Canvas permanently to disk. This cannot be undone by Meld Encrypt.',
			'Write plaintext to disk',
		).openAsync();
		if (!confirmed) return;
		try {
			const decrypted = await this.decryptClosedFile(file);
			if (decrypted === null) return;
			if (await this.plugin.app.vault.read(file) !== decrypted.wrapperText) throw new Error('Canvas changed externally');
			const plaintext = JSON.stringify(decrypted.data, null, 2);
			this.patcher.unmarkProtected(file);
			try { await this.plugin.app.vault.modify(file, plaintext); }
			catch (error) { this.patcher.markProtected(file); throw error; }
			SessionPasswordService.clearForFile(file);
			new Notice('Canvas permanently decrypted');
		} catch (error) {
			console.error('Closed Canvas permanent decryption failed', { path: file.path, errorType: this.errorType(error) });
			new Notice('Canvas was not permanently decrypted');
		}
	}

	async onunload(): Promise<void> {
		this.disposed = true;
		this.patcher.stopAcceptingLoads();
		try {
			for (const leaf of this.plugin.app.workspace.getLeavesOfType('canvas')) {
				if (!isNativeCanvasView(leaf.view) || !this.patcher.isProtected(leaf.view.file)) continue;
				try { await this.saveLockAndClose(leaf.view); }
				catch {
					new Notice(`Could not lock Canvas: ${leaf.view.file?.path ?? 'unknown file'}`);
				}
			}
		} finally {
			this.patcher?.uninstall();
		}
	}
	private errorType(error: unknown): string { return error instanceof Error ? error.name : typeof error; }

	buildSettingsUi(containerEl: HTMLElement, saveSettingCallback: () => Promise<void>): void {
		new Setting(containerEl)
			.setHeading()
			.setName('Encrypted Canvas (experimental)');
		new Setting(containerEl)
			.setName('Enable encrypted Canvas support')
			.setDesc('Adds commands and menu actions to encrypt .canvas files. Experimental: '
				+ 'patches Obsidian\'s internal Canvas view. Restart Obsidian after changing this setting.')
			.addToggle(toggle => toggle
				.setValue(this.featureSettings.enabled)
				.onChange(async value => {
					this.featureSettings.enabled = value;
					await saveSettingCallback();
				}));
	}
}
