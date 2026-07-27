import { Editor, EditorPosition, MarkdownView, MarkdownPostProcessorContext, normalizePath, Notice, Setting, TFile } from "obsidian";
import DecryptModal from "./DecryptModal.ts";
import { IMeldEncryptPluginFeature } from "../IMeldEncryptPluginFeature.ts";
import MeldEncrypt from "../../main.ts";
import { IMeldEncryptPluginSettings } from "../../settings/MeldEncryptPluginSettings.ts";
import { IFeatureInplaceEncryptSettings } from "./IFeatureInplaceEncryptSettings.ts";
import PasswordModal from "./PasswordModal.ts";
import { UiHelper } from "../../services/UiHelper.ts";
import { SessionPasswordService } from "../../services/SessionPasswordService.ts";
import { CryptoHelperFactory } from "../../services/CryptoHelperFactory.ts";
import { Decryptable } from "./Decryptable.ts";
import { FeatureInplaceTextAnalysis } from "./featureInplaceTextAnalysis.ts";
import { ENCRYPTED_ICON, MELD_ENCRYPT_BLOCK_HEADER, MELD_ENCRYPT_FENCE_LANG, MELD_ENCRYPT_FENCE_LANG_LEGACY, _HINT, _PREFIXES, _PREFIX_ENCODE_DEFAULT, _PREFIX_ENCODE_DEFAULT_VISIBLE, _SUFFIXES, _SUFFIX_NO_COMMENT, _SUFFIX_WITH_COMMENT } from "./FeatureInplaceConstants.ts";

type EditorCipherContext = { editor: Editor; innerStart: EditorPosition; innerEnd: EditorPosition };

enum EncryptOrDecryptMode{
	Encrypt = 'encrypt',
	Decrypt = 'decrypt'
}

export default class FeatureInplaceEncrypt implements IMeldEncryptPluginFeature{
	plugin:MeldEncrypt;
	pluginSettings: IMeldEncryptPluginSettings;
	featureSettings:IFeatureInplaceEncryptSettings;

	async onload(plugin:MeldEncrypt, settings:IMeldEncryptPluginSettings) {
		this.plugin = plugin;
		this.pluginSettings = settings;
		this.featureSettings = settings.featureInplaceEncrypt;

		this.plugin.registerMarkdownPostProcessor(
			(el,ctx) => this.processEncryptedCodeBlockProcessor(el, ctx)
		);

		const renderEncryptFence = (source: string, el: HTMLElement, ctx: MarkdownPostProcessorContext) =>
			this.renderEncryptFenceBlock(source, el, ctx);
		this.plugin.registerMarkdownCodeBlockProcessor(MELD_ENCRYPT_FENCE_LANG, renderEncryptFence);
		this.plugin.registerMarkdownCodeBlockProcessor(MELD_ENCRYPT_FENCE_LANG_LEGACY, renderEncryptFence);

		plugin.addCommand({
			id: 'meld-encrypt-in-place-encrypt',
			name: 'Encrypt Selection',
			icon: 'lock-keyhole',
			editorCheckCallback: (checking, editor, view) => this.processEncryptCommand( checking, editor )
		});

		plugin.addCommand({
			id: 'meld-encrypt-in-place-decrypt',
			name: 'Decrypt',
			icon: 'lock-keyhole-open',
			editorCheckCallback: (checking, editor, view) => this.processDecryptCommand( checking, editor )
		});

		this.plugin.addRibbonIcon(
			'lock-keyhole',
			'Encrypt Selection',
			(_) => {
				const activeView = this.plugin.app.workspace.getActiveViewOfType(MarkdownView);
				if (activeView == null ){
					return;
				}
				return this.processEncryptCommand(false, activeView.editor);
			}
		);

		this.plugin.addRibbonIcon(
			'lock-keyhole-open',
			'Decrypt at Cursor',
			(_) => {
				const activeView = this.plugin.app.workspace.getActiveViewOfType(MarkdownView);
				if (activeView == null ){
					return;
				}
				return this.processDecryptCommand(false, activeView.editor);
			}
		);

	}

	onunload(){

	}

	private replaceMarkersRecursive( node: Node, rlevel: number = 0 ) : Node[] {
		
		if ( node instanceof HTMLElement ){
			for( const n of Array.from(node.childNodes) ){
				var childNodes = this.replaceMarkersRecursive( n, rlevel+1 );
				n.replaceWith( ...childNodes );
			}
			return [node];
		}

		if ( node instanceof Text ){
			if ( node.parentElement?.closest('.meld-encrypt-skip-marker-replace') ){
				return [node];
			}

			const text = node.textContent;

			if ( text == null ){
				return [node];
			}

			if ( !text.contains( '🔐' ) ){
				return [node];
			}

			const reInplaceMatcher = /🔐(.*?)🔐/g;

			const splits = text.split( reInplaceMatcher );
			
			const nodes : Node[] = [];

			for (let i = 0; i < splits.length; i++) {
				const t = splits[i];
				if (  i % 2 != 0 ){
					// odd indexes have indicators
					const node = createSpan({
						cls: 'meld-encrypt-inline-reading-marker',
						text: '🔐',
						attr: {
							'data-meld-encrypt-encrypted' : `🔐${t}🔐`
						}
					})
					nodes.push( node );
				} else {
					nodes.push( new Text( t ) );
				}
			}

			return nodes;

		}

		return [node];
	}

	private async processEncryptedCodeBlockProcessor(el: HTMLElement, ctx: MarkdownPostProcessorContext){
		const replacementNodes = this.replaceMarkersRecursive(el);
		el.replaceWith( ...replacementNodes );
		const markers: HTMLElement[] = [];
		for (const n of replacementNodes) {
			this.collectInlineReadingMarkers(n, markers);
		}
		this.bindReadingIndicatorEventHandlers(ctx.sourcePath, markers);
	}

	private collectInlineReadingMarkers(node: Node, out: HTMLElement[]): void {
		if (node instanceof HTMLElement) {
			if (node.classList.contains('meld-encrypt-inline-reading-marker')) {
				out.push(node);
			}
			for (const c of Array.from(node.childNodes)) {
				this.collectInlineReadingMarkers(c, out);
			}
		}
	}

	private renderEncryptFenceBlock(
		source: string,
		el: HTMLElement,
		ctx: MarkdownPostProcessorContext
	): void {
		el.empty();
		el.addClass('meld-encrypt-skip-marker-replace');
		const innerTrim = source.trim();
		const analysis = new FeatureInplaceTextAnalysis(innerTrim);
		const path = ctx.sourcePath;

		if (analysis.canDecrypt && analysis.decryptable != null) {
			const details = el.createEl('details', { cls: 'meld-encrypt-fenced-details' });
			details.createEl('summary', { cls: 'meld-encrypt-fenced-summary', text: 'ENCRYPTED DATA' });
			const body = details.createDiv({ cls: 'meld-encrypt-fenced-body' });
			body.createEl('pre', { cls: 'meld-encrypt-fenced-cipher', text: innerTrim });
			const actions = el.createDiv({ cls: 'meld-encrypt-fenced-actions' });
			const btn = actions.createEl('button', { text: 'Decrypt', cls: 'mod-cta meld-encrypt-fenced-decrypt-btn' });
			const decryptable = analysis.decryptable;
			btn.onClickEvent((ev) => {
				ev.preventDefault();
				void this.handleReadingIndicatorClick(path, decryptable, innerTrim);
			});
			return;
		}

		if (analysis.canEncrypt && innerTrim.length > 0) {
			const details = el.createEl('details', { cls: 'meld-encrypt-fenced-details' });
			details.createEl('summary', { cls: 'meld-encrypt-fenced-summary', text: 'Set for Encryption' });
			const body = details.createDiv({ cls: 'meld-encrypt-fenced-body' });
			body.createEl('pre', { cls: 'meld-encrypt-fenced-cipher', text: source.replace(/\r\n/g, '\n') });
			const actions = el.createDiv({ cls: 'meld-encrypt-fenced-actions' });
			const btn = actions.createEl('button', { text: 'Encrypt', cls: 'mod-cta meld-encrypt-fenced-encrypt-btn' });
			btn.onClickEvent((ev) => {
				ev.preventDefault();
				void this.handleEncryptFencePlaintextClick(path, innerTrim);
			});
			return;
		}

		el.createEl('pre', { text: source });
	}

	private wrapSelectionEncryptedBlock(encodedPayload: string): string {
		return (
			'```'
			+ MELD_ENCRYPT_FENCE_LANG
			+ '\n'
			+ encodedPayload
			+ '\n'
			+ '```\n'
		);
	}

	private findMeldEncryptedFenceBounds(
		full: string,
		innerLo: number,
		innerHi: number
	): { start: number; end: number } | null {
		for (const lang of [MELD_ENCRYPT_FENCE_LANG, MELD_ENCRYPT_FENCE_LANG_LEGACY]) {
			const b = this.tryFindFenceBoundsForLang(lang, full, innerLo, innerHi);
			if (b) {
				return b;
			}
		}
		return null;
	}

	private tryFindFenceBoundsForLang(
		lang: string,
		full: string,
		innerLo: number,
		innerHi: number
	): { start: number; end: number } | null {
		const fenceOpen = '```' + lang;
		const before = full.slice(0, innerLo);

		let openLineStart = -1;
		let contentStart = -1;
		let searchIdx = before.length;
		while (searchIdx >= 0) {
			const found = before.lastIndexOf(fenceOpen, searchIdx);
			if (found < 0) {
				return null;
			}
			const lineStart = found === 0 ? 0 : before.lastIndexOf('\n', found - 1) + 1;
			if (found !== lineStart) {
				searchIdx = found - 1;
				continue;
			}
			const afterOpen = before.slice(found + fenceOpen.length);
			const nl = afterOpen.match(/^\s*\r?\n/);
			if (!nl) {
				searchIdx = found - 1;
				continue;
			}
			contentStart = found + fenceOpen.length + nl[0].length;
			openLineStart = lineStart;
			break;
		}
		if (contentStart < 0 || innerLo < contentStart) {
			return null;
		}

		const afterInner = full.slice(innerHi);
		const closeM = afterInner.match(/^\r?\n\s*```\s*(?:\r?\n|$)/);
		if (!closeM) {
			return null;
		}
		const end = innerHi + closeM.index! + closeM[0].length;

		let start = openLineStart;
		const pre = full.slice(0, openLineStart);
		const marker = MELD_ENCRYPT_BLOCK_HEADER;
		const li = pre.lastIndexOf(marker);
		if (li >= 0) {
			const tail = pre.slice(li);
			if (/^ENCRYPTED DATA:\s*\r?\n(?:\s*\r?\n)*$/i.test(tail)) {
				start = li;
			}
		}
		return { start, end };
	}

	/** Match fence body across \\r\\n vs \\n and outer trim (preview vs editor). */
	private normalizeEncryptFenceInner(s: string): string {
		return s.replace(/\r\n/g, '\n').trim();
	}

	/** Full ```encrypt|meld-encrypted … ``` range in source string. */
	private findPlainEncryptFenceBlockRange(full: string, innerTrimmed: string): { blockStart: number; blockEnd: number; plainInner: string } | null {
		const target = this.normalizeEncryptFenceInner(innerTrimmed);
		for (const lang of [MELD_ENCRYPT_FENCE_LANG, MELD_ENCRYPT_FENCE_LANG_LEGACY]) {
			const token = '```' + lang;
			let searchFrom = 0;
			while (searchFrom < full.length) {
				const openIdx = full.indexOf(token, searchFrom);
				if (openIdx < 0) {
					break;
				}
				const lineStart = openIdx === 0 ? 0 : full.lastIndexOf('\n', openIdx - 1) + 1;
				if (openIdx !== lineStart) {
					searchFrom = openIdx + 1;
					continue;
				}
				const afterOpen = full.slice(openIdx + token.length).match(/^\s*\r?\n/);
				if (!afterOpen) {
					searchFrom = openIdx + 1;
					continue;
				}
				const innerStart = openIdx + token.length + afterOpen[0].length;
				const closeM = full.slice(innerStart).match(/\r?\n\s*```\s*(?:\r?\n|$)/);
				if (!closeM) {
					return null;
				}
				const innerEnd = innerStart + closeM.index!;
				const plainInner = full.slice(innerStart, innerEnd);
				if (this.normalizeEncryptFenceInner(plainInner) !== target) {
					searchFrom = innerStart;
					continue;
				}
				const blockEnd = innerStart + closeM.index! + closeM[0].length;
				return { blockStart: openIdx, blockEnd, plainInner };
			}
		}
		return null;
	}

	/**
	 * Prefer any open Markdown editor buffer for this file (unsaved text matches preview).
	 * Same encrypt path as "Encrypt selection": {@link encryptSelection}.
	 */
	private findPlainEncryptFenceInOpenEditors(
		path: string,
		innerTrimmed: string
	): { editor: Editor; blockStart: EditorPosition; blockEnd: EditorPosition; plainInner: string } | null {
		const targetPath = normalizePath(path);
		const leaves = this.plugin.app.workspace.getLeavesOfType('markdown');
		for (const leaf of leaves) {
			const view = leaf.view;
			if (!(view instanceof MarkdownView) || !view.file || normalizePath(view.file.path) !== targetPath) {
				continue;
			}
			const editor = view.editor;
			const range = this.findPlainEncryptFenceBlockRange(editor.getValue(), innerTrimmed);
			if (range != null) {
				return {
					editor,
					blockStart: editor.offsetToPos(range.blockStart),
					blockEnd: editor.offsetToPos(range.blockEnd),
					plainInner: range.plainInner,
				};
			}
		}
		return null;
	}

	private async handleEncryptFencePlaintextClick(path: string, innerTrimmed: string): Promise<void> {
		const file = this.plugin.app.vault.getAbstractFileByPath(path);
		if (!(file instanceof TFile)) {
			new Notice('Could not open this note file.');
			return;
		}

		const editorHit = this.findPlainEncryptFenceInOpenEditors(path, innerTrimmed);

		let defaultPassword = '';
		let defaultHint = '';
		if (this.pluginSettings.rememberPassword) {
			const guess = SessionPasswordService.getByPath(path);
			defaultPassword = guess.password;
			defaultHint = guess.hint;
		}

		const confirmPassword = this.pluginSettings.confirmPassword;
		const pwModal = new PasswordModal(
			this.plugin.app,
			true,
			confirmPassword,
			this.featureSettings.showMarkerWhenReadingDefault,
			defaultPassword,
			defaultHint
		);

		pwModal.onClose = async () => {
			if (!pwModal.resultConfirmed) {
				return;
			}
			const pw = pwModal.resultPassword ?? '';
			const hint = pwModal.resultHint ?? '';
			const showReading =
				pwModal.resultShowInReadingView ?? this.featureSettings.showMarkerWhenReadingDefault;

			if (editorHit != null) {
				const encryptable = new Encryptable();
				encryptable.text = editorHit.plainInner.replace(/\r\n/g, '\n');
				encryptable.hint = hint;
				await this.encryptSelection(
					editorHit.editor,
					encryptable,
					pw,
					editorHit.blockStart,
					editorHit.blockEnd,
					showReading
				);
				SessionPasswordService.putByPath({ password: pw, hint }, path);
				return;
			}

			const full = await this.plugin.app.vault.read(file);
			const range = this.findPlainEncryptFenceBlockRange(full, innerTrimmed);
			if (range == null) {
				new Notice(
					'Could not find this ```encrypt``` block on disk. Save the note (Ctrl+S), or open it in Edit / Live Preview so the block is in the editor, then try again.'
				);
				return;
			}
			const crypto = CryptoHelperFactory.BuildDefault();
			const encodedText = this.encodeEncryption(
				await crypto.encryptToBase64(range.plainInner.replace(/\r\n/g, '\n'), pw),
				hint,
				showReading
			);
			const wrapped = this.wrapSelectionEncryptedBlock(encodedText);
			const latest = await this.plugin.app.vault.read(file);
			const rangeAgain = this.findPlainEncryptFenceBlockRange(latest, innerTrimmed);
			if (rangeAgain == null) {
				new Notice('Could not find this ```encrypt``` block (file changed). Save and try again.');
				return;
			}
			const newContent =
				latest.slice(0, rangeAgain.blockStart) + wrapped + latest.slice(rangeAgain.blockEnd);
			await this.plugin.app.vault.modify(file, newContent);
			SessionPasswordService.putByPath({ password: pw, hint }, path);
		};
		pwModal.open();
	}

	/** Locate cipher in raw markdown: exact line, then full line containing base64 (spacing / line endings). */
	private resolveCipherInnerOffsets(
		full: string,
		decryptable: Decryptable,
		cipherLine?: string
	): { lo: number; hi: number } | null {
		if (cipherLine != null && cipherLine.length > 0) {
			const i = full.indexOf(cipherLine);
			if (i >= 0) {
				return { lo: i, hi: i + cipherLine.length };
			}
		}
		const built = this.buildEncryptedLineFromDecryptable(decryptable);
		let i = full.indexOf(built);
		if (i >= 0) {
			return { lo: i, hi: i + built.length };
		}
		const b64 = decryptable.base64CipherText;
		i = full.indexOf(b64);
		if (i < 0) {
			return null;
		}
		const lineStart = i === 0 ? 0 : full.lastIndexOf('\n', i - 1) + 1;
		const lineEndIdx = full.indexOf('\n', i);
		const hi = lineEndIdx < 0 ? full.length : lineEndIdx;
		return { lo: lineStart, hi };
	}

	/**
	 * Expand replacement span to include ```encrypt … ``` when strict innerHi→closing-fence check fails
	 * (e.g. line length / whitespace mismatch).
	 */
	private findEncryptFenceContainingCipher(
		full: string,
		innerLo: number,
		innerHi: number
	): { start: number; end: number } | null {
		for (const lang of [MELD_ENCRYPT_FENCE_LANG, MELD_ENCRYPT_FENCE_LANG_LEGACY]) {
			const token = '```' + lang;
			let searchIdx = innerLo;
			while (searchIdx >= 0) {
				const openIdx = full.lastIndexOf(token, searchIdx);
				if (openIdx < 0) {
					break;
				}
				const lineStart = openIdx === 0 ? 0 : full.lastIndexOf('\n', openIdx - 1) + 1;
				if (openIdx !== lineStart) {
					searchIdx = openIdx - 1;
					continue;
				}
				const afterOpen = full.slice(openIdx + token.length).match(/^\s*\r?\n/);
				if (!afterOpen) {
					searchIdx = openIdx - 1;
					continue;
				}
				const contentStart = openIdx + token.length + afterOpen[0].length;
				const closeM = full.slice(contentStart).match(/\r?\n\s*```\s*(?:\r?\n|$)/);
				if (!closeM) {
					searchIdx = openIdx - 1;
					continue;
				}
				const contentEnd = contentStart + closeM.index!;
				const blockEnd = contentStart + closeM.index! + closeM[0].length;
				const overlaps = innerLo < contentEnd && innerHi > contentStart;
				if (overlaps) {
					return { start: openIdx, end: blockEnd };
				}
				searchIdx = openIdx - 1;
			}
		}
		return null;
	}

	private resolveDecryptFenceReplaceOffsets(
		full: string,
		innerLo: number,
		innerHi: number
	): { start: number; end: number } {
		const classic = this.findMeldEncryptedFenceBounds(full, innerLo, innerHi);
		if (classic != null) {
			return { start: classic.start, end: classic.end };
		}
		const contain = this.findEncryptFenceContainingCipher(full, innerLo, innerHi);
		if (contain != null) {
			return { start: contain.start, end: contain.end };
		}
		return { start: innerLo, end: innerHi };
	}

	private expandMeldEncryptedFenceIfAny(
		editor: Editor,
		innerStart: EditorPosition,
		innerEnd: EditorPosition
	): { start: EditorPosition; end: EditorPosition } {
		const full = editor.getValue();
		const a = editor.posToOffset(innerStart);
		const b = editor.posToOffset(innerEnd);
		const span = this.resolveDecryptFenceReplaceOffsets(full, a, b);
		return {
			start: editor.offsetToPos(span.start),
			end: editor.offsetToPos(span.end),
		};
	}

	private bindReadingIndicatorEventHandlers( sourcePath: string, elements: Iterable<HTMLElement> ){
		for (const el of elements) {
			const htmlEl = el as HTMLElement;
			if ( htmlEl == null ){
				return;
			}
			
			htmlEl.onClickEvent( async (ev) => {
				const targetEl = ev.target as HTMLElement;
				if ( targetEl == null ){
					return;
				}
				const encryptedText = targetEl.dataset['meldEncryptEncrypted'] as string;
				if ( encryptedText == null ){
					return;
				}
				const selectionAnalysis = new FeatureInplaceTextAnalysis( encryptedText );
				await this.handleReadingIndicatorClick( sourcePath, selectionAnalysis.decryptable );
			});
		}
	}

	private async handleReadingIndicatorClick( path: string, decryptable?:Decryptable, cipherLine?: string ){
		if (decryptable == null){
			new Notice('❌ Decryption failed!');
			return;
		}

		if ( await this.showDecryptedTextIfPasswordKnown( path, decryptable, cipherLine ) ){
			return;
		}

		const pw = await this.fetchPasswordFromUser( decryptable.hint );

		if ( pw == null ){
			return;
		}

		if ( await this.showDecryptedResultForPassword( path, decryptable, pw, cipherLine ) ){
			SessionPasswordService.putByPath(
				{
					password: pw,
					hint: decryptable.hint
				},
				path
			);
		}else{
			new Notice('❌ Decryption failed!');
		}

	}

	private buildEncryptedLineFromDecryptable(decryptable: Decryptable): string {
		return this.encodeEncryption(
			decryptable.base64CipherText,
			decryptable.hint ?? '',
			decryptable.showInReadingView
		);
	}

	private resolveEditorCipherRange(
		path: string,
		decryptable: Decryptable,
		cipherLine?: string
	): EditorCipherContext | null {
		const targetPath = normalizePath(path);
		const leaves = this.plugin.app.workspace.getLeavesOfType('markdown');
		for (const leaf of leaves) {
			const view = leaf.view;
			if (!(view instanceof MarkdownView) || !view.file || normalizePath(view.file.path) !== targetPath) {
				continue;
			}
			const editor = view.editor;
			const inner = this.resolveCipherInnerOffsets(editor.getValue(), decryptable, cipherLine);
			if (inner == null) {
				continue;
			}
			return {
				editor,
				innerStart: editor.offsetToPos(inner.lo),
				innerEnd: editor.offsetToPos(inner.hi),
			};
		}
		return null;
	}

	private async resolveVaultDecryptReplaceRange(
		path: string,
		decryptable: Decryptable,
		cipherLine?: string
	): Promise<{ file: TFile; start: number; end: number } | null> {
		const af = this.plugin.app.vault.getAbstractFileByPath(path);
		if (!(af instanceof TFile)) {
			return null;
		}
		const full = await this.plugin.app.vault.read(af);
		const inner = this.resolveCipherInnerOffsets(full, decryptable, cipherLine);
		if (inner == null) {
			return null;
		}
		const span = this.resolveDecryptFenceReplaceOffsets(full, inner.lo, inner.hi);
		return { file: af, start: span.start, end: span.end };
	}

	/** Same Decrypt modal as the editor command (Save / Copy / Decrypt in-place); prefers live editor, else vault. */
	private async presentDecryptModal(
		decryptable: Decryptable,
		password: string,
		decryptedText: string,
		editorApply: EditorCipherContext | null,
		vaultApply: { file: TFile; start: number; end: number } | null
	): Promise<boolean> {
		return new Promise<boolean>((resolve) => {
			const decryptModal = new DecryptModal(this.plugin.app, '🔓', decryptedText);
			decryptModal.onClose = async () => {
				if (!decryptModal.decryptInPlace && !decryptModal.save) {
					resolve(true);
					return;
				}
				const applyEditor = async (): Promise<boolean> => {
					if (editorApply == null) {
						return false;
					}
					if (!decryptModal.decryptInPlace && !decryptModal.save) {
						return false;
					}
					const replaceRange = this.expandMeldEncryptedFenceIfAny(
						editorApply.editor,
						editorApply.innerStart,
						editorApply.innerEnd
					);
					editorApply.editor.focus();
					if (decryptModal.decryptInPlace) {
						editorApply.editor.setSelection(replaceRange.start, replaceRange.end);
						editorApply.editor.replaceSelection(decryptModal.text);
					} else if (decryptModal.save) {
						const crypto = CryptoHelperFactory.BuildDefault();
						const encodedText = this.encodeEncryption(
							await crypto.encryptToBase64(decryptModal.text, password),
							decryptable.hint ?? '',
							decryptable.showInReadingView
						);
						const wrapped = this.wrapSelectionEncryptedBlock(encodedText);
						editorApply.editor.setSelection(replaceRange.start, replaceRange.end);
						editorApply.editor.replaceSelection(wrapped);
					}
					return true;
				};
				const applyVault = async (): Promise<boolean> => {
					if (vaultApply == null) {
						return false;
					}
					const full = await this.plugin.app.vault.read(vaultApply.file);
					let insertion: string;
					if (decryptModal.decryptInPlace) {
						insertion = decryptModal.text;
					} else {
						const crypto = CryptoHelperFactory.BuildDefault();
						const encodedText = this.encodeEncryption(
							await crypto.encryptToBase64(decryptModal.text, password),
							decryptable.hint ?? '',
							decryptable.showInReadingView
						);
						insertion = this.wrapSelectionEncryptedBlock(encodedText);
					}
					const newContent =
						full.slice(0, vaultApply.start) + insertion + full.slice(vaultApply.end);
					await this.plugin.app.vault.modify(vaultApply.file, newContent);
					return true;
				};
				const usedEditor = await applyEditor();
				if (!usedEditor) {
					const usedVault = await applyVault();
					if (!usedVault) {
						new Notice('Could not update the note (cipher text not found on disk).');
					}
				}
				resolve(true);
			};
			decryptModal.open();
		});
	}

	private async openDecryptModalForInPlaceEditor(
		editor: Editor,
		decryptable: Decryptable,
		password: string,
		selectionStart: EditorPosition,
		selectionEnd: EditorPosition,
		decryptedText: string
	): Promise<boolean> {
		const active = this.plugin.app.workspace.getActiveFile();
		const vaultApply =
			active != null
				? await this.resolveVaultDecryptReplaceRange(active.path, decryptable, undefined)
				: null;
		return this.presentDecryptModal(decryptable, password, decryptedText, {
			editor,
			innerStart: selectionStart,
			innerEnd: selectionEnd,
		}, vaultApply);
	}
	
	private async showDecryptedResultForPassword(
		vaultPath: string,
		decryptable: Decryptable,
		pw: string,
		cipherLine?: string
	): Promise<boolean> {
		const crypto =  CryptoHelperFactory.BuildFromDecryptableOrThrow( decryptable );

		const decryptedText = await crypto.decryptFromBase64( decryptable.base64CipherText, pw );

		if (decryptedText === null) {
			return false;
		}

		const editorContext = this.resolveEditorCipherRange(vaultPath, decryptable, cipherLine);
		const vaultApply = await this.resolveVaultDecryptReplaceRange(vaultPath, decryptable, cipherLine);
		return this.presentDecryptModal(decryptable, pw, decryptedText, editorContext, vaultApply);
	}

	private async fetchPasswordFromUser( hint:string ): Promise<string|null|undefined> {
		// fetch password
		return new Promise<string|null|undefined>( (resolve) => {
			const pwModal = new PasswordModal(
				this.plugin.app,
				/*isEncrypting*/ false,
				/*confirmPassword*/ false,
				/*defaultShowInReadingView*/ this.featureSettings.showMarkerWhenReadingDefault,
				'',
				hint
			);

			pwModal.onClose = () =>{
				resolve( pwModal.resultPassword );
			}

			pwModal.open();


		} );
	}

	private async showDecryptedTextIfPasswordKnown(
		filePath: string,
		decryptable: Decryptable,
		cipherLine?: string
	) : Promise<boolean> {
		const bestGuessPasswordAndHint = await SessionPasswordService.getByPathAsync(filePath);
		if ( bestGuessPasswordAndHint.password == null ){
			return false;
		}

		return await this.showDecryptedResultForPassword(
			filePath,
			decryptable,
			bestGuessPasswordAndHint.password,
			cipherLine
		);
	}

	public buildSettingsUi(
		containerEl: HTMLElement,
		saveSettingCallback : () => Promise<void>
	): void {
		new Setting(containerEl)
			.setHeading()
			.setName('In-place encryption')
		;

		// Selection encrypt feature settings below
		new Setting(containerEl)
			.setName('Expand selection to whole line?')
			.setDesc('Partial selections will get expanded to the whole line.')
			.addToggle( toggle =>{
				toggle
					.setValue(this.featureSettings.expandToWholeLines)
					.onChange( async value =>{
						this.featureSettings.expandToWholeLines = value;
						await saveSettingCallback();
					})
			})
		;

		new Setting(containerEl)
			.setName('Search limit for markers')
			.setDesc('How far to look for markers when encrypting/decrypting.')
			.addText( text => {
				text
					.setValue(this.featureSettings.markerSearchLimit?.toString() ?? '10000' )
					.onChange( async value => {
						const num = parseInt(value);
						if ( !isNaN(num) ){
							this.featureSettings.markerSearchLimit = num;
							await saveSettingCallback();
						}
					})
				;
				text.inputEl.type = 'number';
				text.inputEl.min = '1000';
				text.inputEl.max = '9999999';
			})

		new Setting(containerEl)
			.setName('By default, show encrypted marker when reading')
			.setDesc('When encrypting inline text, should the default be to have a visible marker in Reading view?')
			.addToggle( toggle =>{
				toggle
					.setValue(this.featureSettings.showMarkerWhenReadingDefault)
					.onChange( async value =>{
						this.featureSettings.showMarkerWhenReadingDefault = value;
						await saveSettingCallback();
					})
			})
		;
	}

	private processEncryptCommand(
		checking: boolean,
		editor: Editor
	): boolean {
		if ( checking && UiHelper.isSettingsModalOpen() ){
			// Settings is open, ensures this command can show up in other
			// plugins which list commands e.g. customizable-sidebar
			return true;
		}

		let startPos = editor.getCursor('from');
		let endPos = editor.getCursor('to');

		const nothingSelected = !editor.somethingSelected();
		if ( nothingSelected){
			if ( this.featureSettings.expandToWholeLines ){
				const startLine = startPos.line;
				startPos = { line: startLine, ch: 0 }; // want the start of the first line

				const endLine = endPos.line;
				const endLineText = editor.getLine(endLine);
				endPos = { line: endLine, ch: endLineText.length }; // want the end of last line
			}else{
				if (!checking){
					new Notice('Please select text to encrypt.');
				}
				return false;
			}
		}

		// check we are not within encrypted text or have selected encrypted text

		const foundStartMarkerPos = this.getClosestPrefixCursorPos( editor, startPos );
		const foundEndMarkerPos = this.getClosestSuffixCursorPos( editor, startPos );

		if ( foundStartMarkerPos != null && foundEndMarkerPos != null && foundStartMarkerPos.line === foundEndMarkerPos.line ){

			// start pos checks
			// check if the start position is within the encrypted text
			if ( startPos.line === foundStartMarkerPos.line && startPos.ch >= foundStartMarkerPos.ch && startPos.ch < foundEndMarkerPos.ch ){
				// the start position is within the encrypted text, so we do not encrypt
				return false;
			}

			// end pos checks
			// check if the end position is within the encrypted text
			if ( endPos.line === foundEndMarkerPos.line && endPos.ch >= foundStartMarkerPos.ch && endPos.ch < foundEndMarkerPos.ch ){
				// the end position is within the encrypted text, so we do not encrypt
				return false;
			}
			
		}
			
		// get selection to encrypt
		const selectionText = editor.getRange(startPos, endPos);

		// check have not selected encrypted text or part of it
		if ( selectionText.includes( ENCRYPTED_ICON ) ){
			return false; // do not encrypt within encrypted text
		}
		
		// Encrypt selected text
		if ( selectionText.length === 0 ){
			// prompt to encrypt text
			// selection is empty, prompt for text to encrypt
			return checking || this.promptForTextToEncrypt(
				checking,
				editor,
				startPos
			);
		}

		return this.processSelection(
			checking,
			editor,
			selectionText,
			startPos,
			endPos,
			EncryptOrDecryptMode.Encrypt
		);
	}

	private processDecryptCommand(
		checking: boolean,
		editor: Editor
	): boolean {

		if ( checking && UiHelper.isSettingsModalOpen() ){
			// Settings is open, ensures this command can show up in other
			// plugins which list commands e.g. customizable-sidebar
			return true;
		}

		let startPos = editor.getCursor('from');
		let endPos = editor.getCursor('to');

		const nothingSelected = !editor.somethingSelected();

		if ( nothingSelected ){
			// nothing selected, first assume user wants to decrypt, expand to start and end markers...
			// but if no markers found then prompt to encrypt text
			const foundStartPos = this.getClosestPrefixCursorPos( editor, startPos );
			const foundEndPos = this.getClosestSuffixCursorPos( editor, startPos );

			if (
				foundStartPos == null
				|| foundEndPos == null
				|| ( startPos.line < foundStartPos.line )
				|| ( endPos.line > foundEndPos.line )
			){
				if( !checking ){
					new Notice('Please select text to decrypt or place cursor on encrypted text.');
				}
				return false;
			}

			startPos = foundStartPos;
			endPos = foundEndPos;
		}

		const innerSpan = this.getInnerDecryptSpan(editor, startPos, endPos);
		const decryptStart = innerSpan?.start ?? startPos;
		const decryptEnd = innerSpan?.end ?? endPos;
		const selectionText = editor.getRange(decryptStart, decryptEnd);

		return this.processSelection(
			checking,
			editor,
			selectionText,
			decryptStart,
			decryptEnd,
			EncryptOrDecryptMode.Decrypt
		);
	}

	/** If the range wraps a fenced block, narrow to the inline cipher span for parsing and decrypt. */
	private getInnerDecryptSpan(
		editor: Editor,
		rangeStart: EditorPosition,
		rangeEnd: EditorPosition
	): { start: EditorPosition; end: EditorPosition } | null {
		const oA = editor.posToOffset(rangeStart);
		const oB = editor.posToOffset(rangeEnd);
		const midPos = editor.offsetToPos(Math.floor((oA + oB) / 2));
		const p = this.getClosestPrefixCursorPos(editor, midPos);
		const s = this.getClosestSuffixCursorPos(editor, midPos);
		if (p == null || s == null) {
			return null;
		}
		const oP = editor.posToOffset(p);
		const oS = editor.posToOffset(s);
		if (oP < oA || oS > oB) {
			return null;
		}
		return { start: p, end: s };
	}

	private promptForTextToEncrypt(
		checking: boolean,
		editor: Editor,
		pos: CodeMirror.Position
	) : boolean {

		// show dialog with password, confirmation, hint and text
		// insert into editor at pos

		const activeFile = this.plugin.app.workspace.getActiveFile();
		if (activeFile == null){
			return false;
		}
		
		if (checking) {
			return true;
		}

		// Fetch password from user

		// determine default password and hint
		let defaultPassword = '';
		let defaultHint = '';
		if ( this.pluginSettings.rememberPassword ){
			const bestGuessPasswordAndHint = SessionPasswordService.getByPath( activeFile.path );

			defaultPassword = bestGuessPasswordAndHint.password;
			defaultHint = bestGuessPasswordAndHint.hint;
		}

		const confirmPassword = this.pluginSettings.confirmPassword;

		const pwModal = new PasswordModal(
			this.plugin.app,
			true,
			confirmPassword,
			/*defaultShowInReadingView*/ this.featureSettings.showMarkerWhenReadingDefault,
			defaultPassword,
			defaultHint,
			/*showTextToEncrypt*/ true
		);
		pwModal.onClose = async () => {
			if ( !pwModal.resultConfirmed ){
				return;
			}
			const pw = pwModal.resultPassword ?? ''
			const hint = pwModal.resultHint ?? '';
			const textToEncrypt = pwModal.resultTextToEncrypt ?? '';

			const encryptable = new Encryptable();
			encryptable.text = textToEncrypt;
			encryptable.hint = hint;

			this.encryptSelection(
				editor,
				encryptable,
				pw,
				pos,
				pos,
				pwModal.resultShowInReadingView ?? this.featureSettings.showMarkerWhenReadingDefault
			);

			// remember password
			SessionPasswordService.putByPath( { password:pw, hint: hint }, activeFile.path );
		}
		pwModal.open();

		return false;
	}

	private getClosestPrefixCursorPos( editor: Editor, fromEditorPosition: EditorPosition ): EditorPosition | null{
		
		const maxLookback = this.featureSettings.markerSearchLimit;

		const maxLengthPrefix = _PREFIXES.reduce((prev,cur, i) => {
			if (i== 0) return cur;
			if ( cur.length > prev.length ) return cur;
			return prev;
		} );
		const initOffset = editor.posToOffset( fromEditorPosition ) + maxLengthPrefix.length;

		const minOffset = Math.max(initOffset - maxLookback, 0);

		for (let offset = initOffset; offset >= minOffset; offset--) {
			const offsetPos = editor.offsetToPos(offset);
			for (const prefix of _PREFIXES) {
				const prefixStartOffset = offset - prefix.length;
				const prefixStartPos = editor.offsetToPos(prefixStartOffset);
			
				const testText = editor.getRange( prefixStartPos, offsetPos );

				if (testText == prefix){
					return editor.offsetToPos(prefixStartOffset);
				}
			}
		}

		return null;

	}

	private getClosestSuffixCursorPos( editor: Editor, fromEditorPosition:EditorPosition ): EditorPosition | null{
		const maxLookForward = this.featureSettings.markerSearchLimit;

		const maxLengthPrefix = _PREFIXES.reduce((prev,cur, i) => {
			if (i== 0) return cur;
			if ( cur.length > prev.length ) return cur;
			return prev;
		} );
		
		const initOffset = editor.posToOffset( fromEditorPosition ) - maxLengthPrefix.length + 1;
		const lastLineNum = editor.lastLine();

		const maxOffset = Math.min( initOffset + maxLookForward, editor.posToOffset( {line:lastLineNum, ch:editor.getLine(lastLineNum).length} ) );

		for (let offset = initOffset; offset <= maxOffset; offset++) {
			const offsetPos = editor.offsetToPos(offset);
			for (const suffix of _SUFFIXES) {	
				const textEndOffset = offset + suffix.length;
				const textEndPos = editor.offsetToPos(textEndOffset);
				
				const testText = editor.getRange( offsetPos, textEndPos );
				
				if (testText == suffix){
					return textEndPos;
				}
			}
		}
		
		return null;
	}

	private processSelection(
		checking: boolean,
		editor: Editor,
		selectionText: string,
		finalSelectionStart: CodeMirror.Position,
		finalSelectionEnd: CodeMirror.Position,
		mode:EncryptOrDecryptMode
	) : boolean {
		const selectionAnalysis = new FeatureInplaceTextAnalysis( selectionText );

		if (selectionAnalysis.isEmpty) {
			if (!checking){
				new Notice(`Nothing to ${mode == EncryptOrDecryptMode.Encrypt ? "Encrypt" : "Decrypt"}.`);
			}
			return false;
		}

		if ( mode == EncryptOrDecryptMode.Encrypt && !selectionAnalysis.canEncrypt ) {
			if (!checking){
				new Notice('Unable to Encrypt that.');
			}
			return false;
		}

		if ( mode == EncryptOrDecryptMode.Decrypt && !selectionAnalysis.canDecrypt ) {
			if (!checking){
				new Notice('Unable to Decrypt that.');
			}
			return false;
		}

		const activeFile = this.plugin.app.workspace.getActiveFile();
		if (activeFile == null){
			return false;
		}

		if (checking) {
			return true;
		}

		
		// Fetch password from user

		// determine default password and hint
		let defaultPassword = '';
		let defaultHint = selectionAnalysis.decryptable?.hint;
		if ( this.pluginSettings.rememberPassword ){
			const bestGuessPasswordAndHint = SessionPasswordService.getByPath( activeFile.path );

			defaultPassword = bestGuessPasswordAndHint.password;
			defaultHint = defaultHint ?? bestGuessPasswordAndHint.hint;
		}

		const confirmPassword = selectionAnalysis.canEncrypt && this.pluginSettings.confirmPassword;

		const pwModal = new PasswordModal(
			this.plugin.app,
			selectionAnalysis.canEncrypt,
			confirmPassword,
			/*defaultShowInReadingView*/ this.featureSettings.showMarkerWhenReadingDefault,
			defaultPassword,
			defaultHint
		);

		pwModal.onClose = async () => {
			if ( !pwModal.resultConfirmed ){
				return;
			}
			const pw = pwModal.resultPassword ?? ''
			const hint = pwModal.resultHint ?? '';

			if (selectionAnalysis.canEncrypt) {

				const encryptable = new Encryptable();
				encryptable.text = selectionText;
				encryptable.hint = hint;

				this.encryptSelection(
					editor,
					encryptable,
					pw,
					finalSelectionStart,
					finalSelectionEnd,
					pwModal.resultShowInReadingView ?? this.featureSettings.showMarkerWhenReadingDefault
				);

				// remember password
				SessionPasswordService.putByPath( { password:pw, hint: hint }, activeFile.path );

			} else if ( selectionAnalysis.decryptable ) {

				const decryptSuccess = await this.decryptSelection(
					editor,
					selectionAnalysis.decryptable,
					pw,
					finalSelectionStart,
					finalSelectionEnd,
				);

				// remember password?
				if ( decryptSuccess ) {
					SessionPasswordService.putByPath( { password:pw, hint: hint }, activeFile.path );
				}
				
			}
		}
		pwModal.open();

		return true;
	}

	private async encryptSelection(
		editor: Editor,
		encryptable: Encryptable,
		password: string,
		finalSelectionStart: CodeMirror.Position,
		finalSelectionEnd: CodeMirror.Position,
		showInReadingView: boolean
	) {
		//encrypt
		const crypto = CryptoHelperFactory.BuildDefault();
		const encodedText = this.encodeEncryption(
			await crypto.encryptToBase64(encryptable.text, password),
			encryptable.hint,
			showInReadingView
		);
		const wrapped = this.wrapSelectionEncryptedBlock(encodedText);
		editor.setSelection(finalSelectionStart, finalSelectionEnd);
		editor.replaceSelection(wrapped);
	}

	private async decryptSelection(
		editor: Editor,
		decryptable: Decryptable,
		password: string,
		selectionStart: CodeMirror.Position,
		selectionEnd: CodeMirror.Position
	) : Promise<boolean> {

		const crypto = CryptoHelperFactory.BuildFromDecryptableOrThrow(decryptable);
		const decryptedText = await crypto.decryptFromBase64(decryptable.base64CipherText, password);
		if (decryptedText === null) {
			new Notice('❌ Decryption failed!');
			return false;
		}
		return await this.openDecryptModalForInPlaceEditor(
			editor,
			decryptable,
			password,
			selectionStart,
			selectionEnd,
			decryptedText
		);
	}

	private encodeEncryption( encryptedText: string, hint: string, showInReadingView: boolean ): string {
		if (
			!_PREFIXES.some( (prefix) => encryptedText.includes(prefix) )
			&& !_SUFFIXES.some( (suffix) => encryptedText.includes(suffix) )
		) {
			const prefix = showInReadingView ? _PREFIX_ENCODE_DEFAULT_VISIBLE : _PREFIX_ENCODE_DEFAULT;
			const suffix = showInReadingView ? _SUFFIX_NO_COMMENT : _SUFFIX_WITH_COMMENT;

			if ( hint.length > 0 ){
				return prefix.concat(_HINT, hint, _HINT, encryptedText, suffix);
			}
			return prefix.concat(encryptedText, suffix);
		}
		return encryptedText;
	}
}

class Encryptable{
	text:string;
	hint:string;
}
