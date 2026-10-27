import { MarkdownView, Notice, TFile, ViewStateResult, resolveSubpath } from "obsidian";
import { FileData, FileDataHelper, JsonFileEncoding } from "../../services/FileDataHelper.ts";
import { PasswordAndHint, SessionPasswordService } from "../../services/SessionPasswordService.ts";
import PluginPasswordModal from "../../PluginPasswordModal.ts";
import { ENCRYPTED_FILE_EXTENSIONS } from "../../services/Constants.ts";
import { getDecryptedMarkdownMetadata } from "../../services/DecryptedMarkdownMetadata.ts";

export class EncryptedMarkdownView extends MarkdownView {

	static VIEW_TYPE = 'meld-encrypted-view';

	passwordAndHint : PasswordAndHint | null = null;
	encryptedData : FileData | null = null;
	private pendingEncryptedData: FileData | null = null;
	private viewDataRequest = 0;
	private isChangingPassword = false;
	private isUnlocking = false;
	private pendingNavigation: Record<string, unknown> | null = null;
	cachedUnencryptedData : string = '';
	dataWasChangedSinceLastSave = false;
	
	isSavingEnabled = false;
	isLoadingFileInProgress = false;
	isSavingInProgress = false;
	saveInProgress : Promise<void> | null = null;
	
	override allowNoFile = false;

	origFile:TFile | null; // used resync password cache when renaming the file

	private _linksWired = false;
	
	override getViewType(): string {
		return EncryptedMarkdownView.VIEW_TYPE;
	}

	override canAcceptExtension(extension: string): boolean {
		return ENCRYPTED_FILE_EXTENSIONS.includes( extension );
	}

	protected override async onOpen(): Promise<void> {
		await super.onOpen();

		// add view actions
		this.addAction(
			'key-round',
			'Change password',
			() => this.changePassword(),
		)

		this.addAction(
			'lock',
			'Lock & Close',
			() => { this.lockAndClose(); },
		)
	}

	override setEphemeralState(state: unknown): void {
		if (!state || typeof state !== 'object' || !('subpath' in state)
			|| typeof state.subpath !== 'string' || !state.subpath || state.subpath.startsWith('#^')) {
			super.setEphemeralState(state);
			return;
		}
		if (this.isUnlocking) {
			this.pendingNavigation = { ...state };
			return;
		}
		if (!this.isSavingEnabled) {
			super.setEphemeralState(state);
			return;
		}
		const target = resolveSubpath(getDecryptedMarkdownMetadata(this.getUnencryptedViewData()), state.subpath);
		// MarkdownView normally resolves subpaths from MetadataCache. Encrypted files
		// have no plaintext cache, so supply the same locations from the unlocked view.
		super.setEphemeralState(target ? {
			...state, subpath: undefined, line: target.start.line,
			startLoc: target.start, endLoc: target.end ?? null,
		} : state);
	}

	override async onLoadFile(file: TFile): Promise<void> {
		this.isUnlocking = true;
		this.pendingNavigation = null;
		// Invalidate decrypts started for the previously loaded file.
		const request = ++this.viewDataRequest;
		const isCurrentRequest = () => request === this.viewDataRequest;
		//console.debug('onLoadFile', {file});
		this.setViewBusy( true );
		this.isSavingEnabled = false;
		try{

			this.setUnencryptedViewData('', true);

			if (!this.app.workspace.layoutReady ){
				this.leaf.detach();
				return;
			};

			const fileContents = await this.app.vault.read( file );
			if (!isCurrentRequest()) return;
			const encryptedData = JsonFileEncoding.decode( fileContents );

			const cachedPasswordAndHint = await SessionPasswordService.getByFile( file );
			if (!isCurrentRequest()) return;
			let passwordAndHint: PasswordAndHint | null = { ...cachedPasswordAndHint, hint: encryptedData.hint };

			// try to decrypt the file content
			let decryptedText: string|null = null;

			if ( passwordAndHint.password.length > 0 ) {
				decryptedText = await FileDataHelper.decrypt( encryptedData, passwordAndHint.password );
				if (!isCurrentRequest()) return;
			}
			while( decryptedText == null ){
				// prompt for password
				passwordAndHint = await new PluginPasswordModal(
					this.app,
					`Decrypt "${file.basename}"`,
					false,
					false,
					{ password: '', hint: encryptedData.hint }
				).open2Async();
				if (!isCurrentRequest()) return;

				if ( passwordAndHint == null ) {
					// user cancelled
					this.leaf.detach();
					return;
				}

				decryptedText = await FileDataHelper.decrypt( encryptedData, passwordAndHint.password );
				if (!isCurrentRequest()) return;
				if ( decryptedText == null ) {
					new Notice('Decryption failed');
				}
			}

			if (passwordAndHint == null) return;
			if (!isCurrentRequest()) return;
			this.encryptedData = encryptedData;
			this.passwordAndHint = passwordAndHint;
			SessionPasswordService.putByFile( passwordAndHint, file );

			this.setUnencryptedViewData( decryptedText, true );
			
			this.isLoadingFileInProgress = true;
			try{
				this.origFile = file;
				await super.onLoadFile(file);
			}finally{
				if (isCurrentRequest()) {
					this.isLoadingFileInProgress = false;
					this.isSavingEnabled = true; // allow saving after the file is loaded with a password
				}
			}

			this.wireInternalLinks();

		}finally{
			//console.debug('onLoadFile done');
			if (isCurrentRequest()) {
				this.isUnlocking = false;
				const navigation = this.pendingNavigation;
				this.pendingNavigation = null;
				this.setViewBusy(false);
				if (navigation && this.isSavingEnabled) this.setEphemeralState(navigation);
			}
		}

	}

	private wireInternalLinks(): void {
		if (this._linksWired) return;
		this._linksWired = true;

		const getSourcePath = () => this.file?.path ?? "";

		// reading / rendered view: handle clicks on internal links
		const readingRoot =
		this.contentEl.querySelector<HTMLElement>(
			".markdown-reading-view, .markdown-preview-view, .markdown-rendered"
		) ?? this.contentEl;
		this.registerDomEvent(
		readingRoot,
		"click",
		(evt: MouseEvent) => {
			const el = (evt.target as HTMLElement | null)?.closest(
			"a.internal-link, .internal-link"
			) as HTMLElement | null;
			if (!el) return;
			const raw = (
			el.getAttribute("data-href") ||
			(el as HTMLAnchorElement).getAttribute("href") ||
			""
			).trim();
			if (!raw) return;
			evt.preventDefault();

			if (!raw.startsWith("#")) {
			this.app.workspace.openLinkText(raw, getSourcePath(), false);
			return;
			}

			const slug = decodeURIComponent(raw.slice(1));
			// try id or data-heading match quickly
			const target =
			readingRoot.querySelector<HTMLElement>(
				`[data-heading="${slug}"], #${CSS.escape(slug)}`
			) ||
			Array.from(
				readingRoot.querySelectorAll<HTMLElement>("h1,h2,h3,h4,h5,h6")
			).find((h) => {
				const text = (h.getAttribute("data-heading") || h.textContent || "")
				.trim()
				.toLowerCase();
				return text === slug.toLowerCase();
			}) ||
			null;
			if (target) {
			const scroller =
				readingRoot.closest<HTMLElement>(".workspace-leaf .view-content") ??
				readingRoot;
			const offset =
				(this.containerEl
				.querySelector<HTMLElement>(
					".view-header, .mod-top, .inline-title"
				)
				?.getBoundingClientRect().height ?? 0) + 8;
			target.scrollIntoView({
				behavior: "auto",
				block: "start",
				inline: "nearest",
			});
			requestAnimationFrame(() => {
				scroller.scrollTop = Math.max(scroller.scrollTop - offset, 0);
			});
			return;
			}

			// fallback to normal openLinkText (lets Obsidian try)
			this.app.workspace.openLinkText(raw, getSourcePath(), false);
		},
		{ capture: true }
		);

		// editor (source) — handle pointer events to resolve links under cursor
		const inThisView = (n: Node | null) => !!n && this.containerEl.contains(n);
		const isEditorEvent = (e: Event) =>
		!!(e.target as HTMLElement | null)?.closest(
			".markdown-source-view, .cm-editor, .cm-content"
		);
		const cm = (this as any).editor?.cm || null;
		const posFromEvent = (evt: MouseEvent) =>
		cm?.posAtCoords?.({ x: evt.clientX, y: evt.clientY }) ??
		cm?.view?.posAtCoords?.({ x: evt.clientX, y: evt.clientY }) ??
		null;

		const slugify = (s: string) =>
		s
			.normalize("NFKD")
			.replace(/[\u0300-\u036f]/g, "")
			.replace(/\[[^\]]*\]\([^\)]*\)/g, "")
			.replace(/[*_~]/g, "")
			.replace(/#+$/g, "")
			.trim()
			.toLowerCase()
			.replace(/[^\p{L}\p{N}\s-]+/gu, "")
			.replace(/\s+/g, " ");

		const findHeadingLineBySlug = (
		cmInstance: any,
		slug: string
		): number | null => {
		const doc = cmInstance?.state?.doc || cmInstance?.view?.state?.doc;
		if (!doc) return null;
		const key = slugify(slug.replace(/-/g, " "));
		for (let i = 1; i <= doc.lines; i++) {
			const ln = doc.line(i);
			const m = ln.text.match(/^\s{0,3}(#{1,6})\s+(.+?)\s*#*\s*$/);
			if (m && slugify(m[2]) === key) return i;
		}
		return null;
		};

		const revealEditorLine = (line1: number) => {
		const editor = (this as any).editor;
		if (!editor) return;
		const line = Math.max(0, line1 - 1);
		editor.setCursor({ line, ch: 0 });
		editor.scrollIntoView(
			{ from: { line, ch: 0 }, to: { line, ch: 0 } },
			true
		);
		};

		const handleEditorClick = (evt: MouseEvent) => {
		if (!inThisView(evt.target as Node)) return;
		if (!isEditorEvent(evt)) return;

		const linkEl = (evt.target as HTMLElement | null)?.closest(
			".cm-hmd-internal-link, a.internal-link, .internal-link"
		) as HTMLElement | null;
		if (!linkEl) return;

		const pos = posFromEvent(evt);
		if (pos == null) return;

		const doc = cm?.state?.doc || cm?.view?.state?.doc;
		if (!doc) return;
		const line = doc.lineAt(pos);
		// try to parse a link near the index: simple heuristics for wikilinks / md links / fallback #slug
		const parseAround = (text: string, idx: number): string | null => {
			const s = text.lastIndexOf("[[", idx),
			e = text.indexOf("]]", idx);
			if (s !== -1 && e !== -1 && e > s) {
			const inside = text
				.slice(s + 2, e)
				.split("|")[0]
				.trim();
			if (inside)
				return !inside.startsWith("#") &&
				!inside.includes("#") &&
				!inside.includes(".")
				? `#${inside}`
				: inside;
			}
			const mdRe = /\[[^\]]*?\]\(([^\)]+)\)/g;
			let m: RegExpExecArray | null;
			while ((m = mdRe.exec(text))) {
			const a = m.index,
				b = a + m[0].length;
			if (idx >= a && idx <= b) {
				const tgt = m[1].trim();
				return !tgt.startsWith("#") &&
				!tgt.includes("#") &&
				!tgt.includes(".")
				? `#${tgt}`
				: tgt;
			}
			}
			const m2 = text.match(/#([^\s#\]]+)/);
			return m2 ? `#${m2[1]}` : null;
		};

		const linktext = parseAround(line.text, pos - line.from);

		if (!linktext) return;
		evt.preventDefault();

		if (!linktext.startsWith("#")) {
			this.app.workspace.openLinkText(linktext, getSourcePath(), false);
			return;
		}

		const slug = decodeURIComponent(linktext.slice(1));
		const targetLine = findHeadingLineBySlug(cm, slug);
		if (targetLine != null) revealEditorLine(targetLine);
		else this.app.workspace.openLinkText(linktext, getSourcePath(), false);
		};

		this.registerDomEvent(document, "pointerdown", handleEditorClick, {
		capture: true,
		});
  	}

	private setViewBusy( busy: boolean ) {
		this.contentEl.classList.toggle('meld-encrypt-busy', busy);
	}

	public detachSafely(){
		this
			.save()
			.then( () => {
				this.isSavingEnabled = false;
				this.leaf.detach();
			})
			.catch( (reason:unknown) => {
				console.error('Failed to save the file before detaching the view', reason);
				new Notice('Failed to save the file before detaching the view');
			})
		;
	}

	override async onUnloadFile(file: TFile): Promise<void> {
		this.pendingNavigation = null;
		
		if ( this.passwordAndHint == null || this.encryptedData == null ) {
			return;
		}
		
		if (this.isSavingInProgress){
			console.debug( 'Saving is in progress, but forcing another save because the file is being unloaded' );
			// wait for the save to finish before saving again. If two saves
			// overlap, the first one to finish resets isSavingInProgress and
			// the other one writes the unencrypted view data to the file
			await this.saveInProgress;
			this.dataWasChangedSinceLastSave = true;
		}
		await super.onUnloadFile(file);
	}
	
	override async onRename(file: TFile): Promise<void> {
		//console.debug('onRename', { newfile: file, oldfile:this.file});
		if (this.origFile){
			SessionPasswordService.clearForFile( this.origFile );
		}

		if (this.passwordAndHint!=null){
			SessionPasswordService.putByFile( this.passwordAndHint, file );
		}
		await super.onRename(file);    
	}


	private getUnencryptedViewData(): string {
		return super.getViewData();
	}

	override getViewData(): string {
		// something is reading the data.. maybe to save it

		if (this.isSavingInProgress) {
			const data = this.pendingEncryptedData ?? this.encryptedData;
			if ( data == null ) {
				throw new Error('encryptedData is unexpectedly null');
			}
			// Expose the pending ciphertext to the writer without marking it as saved.
			return JsonFileEncoding.encode( data );
		}
		
		// not saving, so return the unencrypted view data
		return this.getUnencryptedViewData();
	}

	private setUnencryptedViewData(data: string, clear: boolean): void {
		//console.debug('setUnencryptedViewData', {data, clear});
		this.cachedUnencryptedData = data;
		super.setViewData(data, clear);
	}

	override setViewData(data: string, clear: boolean): void {
		// something is setting the view data, perhaps from reading from the
		// file... or some other plugin is adding some markdown

		//console.debug('setViewData', {data, clear});

		if ( this.file == null ) {
			console.debug( 'View data will not be set because file is null' )
			return;
		}

		if ( this.isLoadingFileInProgress ){
			return;
		}
		const request = ++this.viewDataRequest;
		const file = this.file;

		try{
			console.debug( 'View is being set with encoded FileData, trying to decode', {data} );
			if (this.passwordAndHint == null){
				console.error('passwordAndHint == null');
				return;
			}
			const newEncoded = JsonFileEncoding.decode(data);
			if (this.pendingEncryptedData != null
				&& JsonFileEncoding.encode(newEncoded) === JsonFileEncoding.encode(this.pendingEncryptedData)){
				// Ignore our own pending write: its new password is not committed yet,
				// and the editor may already contain newer edits.
				return;
			}
			
			FileDataHelper.decrypt( newEncoded, this.passwordAndHint.password ).then( decryptedText => {
				if (request !== this.viewDataRequest || this.file !== file) return;
				if ( decryptedText == null ){
					console.debug('View was being set with encoded data but the decryption failed, closing view');
					this.isSavingEnabled = false; // don't overwrite the data when we detach
					this.leaf.detach();
					return;
				}
				this.setUnencryptedViewData(decryptedText, clear);
			}).catch( (reason:unknown) => {
				if (request !== this.viewDataRequest || this.file !== file) return;
				console.error('Failed to decrypt the data that was set to the view', reason);
				new Notice('Failed to decrypt the data that was set to the view');
			});
		}catch{
			this.dataWasChangedSinceLastSave = true;
			this.setUnencryptedViewData(data, clear);
			return;
		}

	}

	override async setState(state: unknown, result: ViewStateResult): Promise<void> {
		const position = this.isSavingEnabled && typeof state === 'object' && state !== null
			&& 'mode' in state && (state.mode === 'source' || state.mode === 'preview') && state.mode !== this.getMode()
			? {
				...this.getEphemeralState(),
				// Reading view omits the inactive editor's selection from its state.
				cursor: { from: this.editor.getCursor('anchor'), to: this.editor.getCursor('head') },
			} : null;
		if ( typeof state === 'object' && state != null && 'mode' in state && state.mode == 'preview' ){
			await this.save(); // save before preview
		}
		this.isSavingEnabled = false;
		try{
			await super.setState(state, result);
			super.setViewData(this.cachedUnencryptedData, false);
			// Reinjecting plaintext reloads the document; restore the position through
			// MarkdownView so each mode can apply its own cursor and scroll handling.
			if (position) this.setEphemeralState(position);
		}finally{
			this.isSavingEnabled = true;
		}
		//console.debug('setState done');
	}

	override save(clear?: boolean): Promise<void> {
		console.debug('save', { clear });
		if ( this.isSavingInProgress ) {
			console.debug('Saving was prevented because another save is in progress, Obsidian will try again later if the content changed.');
			return Promise.resolve();
		}

		this.saveInProgress = this.encryptAndSave( clear );
		return this.saveInProgress;
	}

	private async encryptAndSave(clear?: boolean, newPasswordAndHint?: PasswordAndHint): Promise<void> {

		this.isSavingInProgress = true;
		this.setViewBusy( true );
		try{
			
			const file = this.file;
			if (file == null){
				console.debug('Saving was prevented beacuse there is no file loaded in the view yet');
				return;
			}

			if ( !ENCRYPTED_FILE_EXTENSIONS.includes( file.extension ) ){
				console.debug('Saving was prevented because the file is not an encrypted file');
				return;
			}

			if (!this.isSavingEnabled){
				if (this.passwordAndHint == null){
					console.debug('Saving was prevented because the file was not yet loaded with a password');
				}else{
					console.debug('Saving was prevented because it was explicitly disabled');
				}
				return;
			}

			if (this.passwordAndHint == null){
				console.debug('Saving was prevented beacuse there is no password set');
				return;
			}
			const passwordAndHint = newPasswordAndHint ?? this.passwordAndHint;
			
			const unencryptedDataToSave = this.getUnencryptedViewData();
			// If the file was opened from an older encryption format, rewrite it as v3 on the next save.
			const needsVersionUpgrade = this.encryptedData != null && this.encryptedData.version !== FileDataHelper.DEFAULT_VERSION;
			
			if (
				newPasswordAndHint == null
				&& !needsVersionUpgrade
				&& !this.dataWasChangedSinceLastSave
				&& this.cachedUnencryptedData.length == unencryptedDataToSave.length
				&& this.cachedUnencryptedData == unencryptedDataToSave
			){
				console.debug('Saving was prevented because the data was not changed');
				return;
			}

			// Keep the note dirty until both encryption and the disk write succeed.
			this.dataWasChangedSinceLastSave = true;

			// build up-to-date encrypted data
			const encryptedDataToSave = await FileDataHelper.encrypt(
				passwordAndHint.password,
				passwordAndHint.hint,
				unencryptedDataToSave
			);
			if (newPasswordAndHint && (
				this.file !== file || !this.isSavingEnabled || !ENCRYPTED_FILE_EXTENSIONS.includes(file.extension)
			)){
				throw new Error('The note is no longer available for changing its password');
			}
			this.pendingEncryptedData = encryptedDataToSave;

			// call the real save.. which will call getViewData... getViewData will
			// decide whether to return encrypted or unencrypted data (encrypted
			// in this case becase this.isSavingInProgress is true)
			await super.save(clear);

			this.encryptedData = encryptedDataToSave;
			this.cachedUnencryptedData = unencryptedDataToSave;
			if (newPasswordAndHint){
				// Commit before releasing the save lock so subsequent saves use the new key.
				this.passwordAndHint = newPasswordAndHint;
				SessionPasswordService.putByFile(newPasswordAndHint, file);
			}
			this.dataWasChangedSinceLastSave = this.getUnencryptedViewData() !== unencryptedDataToSave;

		} finally{
			this.pendingEncryptedData = null;
			this.isSavingInProgress = false;
			this.setViewBusy( false );
		}
		
	}

	lockAndClose() {
		this.detachSafely();
		if ( this.file != null ){
			SessionPasswordService.clearForFile( this.file );
		}
	}

	async changePassword(): Promise<void> {
		if (this.isChangingPassword) return;
		if (this.file == null){
			console.debug('Unable to change password beacuse there is no file loaded in the view yet');
			return;
		}

		const file = this.file;
		this.isChangingPassword = true;
		try{
			const pwm = new PluginPasswordModal(
				this.app,
				`Change password for "${file.basename}"`,
				true,
				true,
				await SessionPasswordService.getByFile( file ),
				SessionPasswordService.getLevel() === SessionPasswordService.LevelKeychain
					? SessionPasswordService.keychainPasswordChangeExplanation : undefined
			);
			const newPwh = await pwm.openAsync();

			while (this.isSavingInProgress) await this.saveInProgress;
			if (
				this.file !== file || !this.isSavingEnabled || this.passwordAndHint == null
				|| !ENCRYPTED_FILE_EXTENSIONS.includes(file.extension)
			){
				throw new Error('The note is no longer available for changing its password');
			}

			// Stage the new credentials for this write; commit them only when it succeeds.
			this.saveInProgress = this.encryptAndSave(undefined, newPwh);
			await this.saveInProgress;

			new Notice( 'Password changed' );
		} catch {
			new Notice( 'Password wasn\'t changed' );
		} finally {
			this.isChangingPassword = false;
		}
	}


}
