import { MarkdownView, Notice, TFile, ViewStateResult } from "obsidian";
import { FileData, FileDataHelper, JsonFileEncoding } from "../../services/FileDataHelper.ts";
import { PasswordAndHint, SessionPasswordService } from "../../services/SessionPasswordService.ts";
import PluginPasswordModal from "../../PluginPasswordModal.ts";
import { ENCRYPTED_FILE_EXTENSIONS } from "../../services/Constants.ts";

export class EncryptedMarkdownView extends MarkdownView {

	static VIEW_TYPE = 'meld-encrypted-view';

	passwordAndHint : PasswordAndHint | null = null;
	encryptedData : FileData | null = null;
	cachedUnencryptedData : string = '';
	dataWasChangedSinceLastSave = false;
	
	isSavingEnabled = false;
	isLoadingFileInProgress = false;
	isSavingInProgress = false;
	
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
			() => this.lockAndClose(),
		)
	}

	override async onLoadFile(file: TFile): Promise<void> {
		//console.debug('onLoadFile', {file});
		this.setViewBusy( true );
		try{

			this.setUnencryptedViewData('', true);

			if (!this.app.workspace.layoutReady ){
				this.leaf.detach();
				return;
			};

			const fileContents = await this.app.vault.read( file );
			this.encryptedData = JsonFileEncoding.decode( fileContents );

			this.passwordAndHint = await SessionPasswordService.getByFile( file );
			this.passwordAndHint.hint = this.encryptedData.hint;

			// try to decrypt the file content
			let decryptedText: string|null = null;

			if ( this.passwordAndHint.password.length > 0 ) {
				decryptedText = await FileDataHelper.decrypt( this.encryptedData, this.passwordAndHint.password );
			}
			while( decryptedText == null ){
				// prompt for password
				this.passwordAndHint = await new PluginPasswordModal(
					this.app,
					`Decrypting "${file.basename}"`,
					false,
					false,
					{ password: '', hint: this.encryptedData.hint }
				).open2Async();

				if ( this.passwordAndHint == null ) {
					// user cancelled
					this.leaf.detach();
					return;
				}

				decryptedText = await FileDataHelper.decrypt( this.encryptedData, this.passwordAndHint.password );
				if ( decryptedText == null ) {
					new Notice('Decryption failed');
				}
			}

			if ( decryptedText == null ) {
				this.leaf.detach();
				return;
			}

			if ( this.passwordAndHint != null ) {
				SessionPasswordService.putByFile( this.passwordAndHint, file );
			}

			this.setUnencryptedViewData( decryptedText, false );
			
			
			this.isLoadingFileInProgress = true;
			try{
				this.origFile = file;
				await super.onLoadFile(file);
			}finally{
				this.isLoadingFileInProgress = false;
				this.isSavingEnabled = true; // allow saving after the file is loaded with a password
			}

			this.wireInternalLinks();

		}finally{
			//console.debug('onLoadFile done');
			this.setViewBusy( false );
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
		if ( busy ) {
			this.contentEl.style.cursor = 'wait';
		} else {
			this.contentEl.style.cursor = 'auto';
		}
	}

	public detachSafely(){
		this.save();
		this.isSavingEnabled = false;
		this.leaf.detach();
	}

	override async onUnloadFile(file: TFile): Promise<void> {
		
		if ( this.passwordAndHint == null || this.encryptedData == null ) {
			return;
		}
		
		if (this.isSavingInProgress){
			console.info( 'Saving is in progress, but forcing another save because the file is being unloaded' );
			this.isSavingInProgress = false;
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
			if ( this.encryptedData == null ) {
				throw new Error('encryptedData is unexpectedly null');
			}
			// return the encrypted data which should have just been updated in the save method
			return JsonFileEncoding.encode( this.encryptedData );
		}
		
		// not saving, so return the unencrypted view data
		return this.getUnencryptedViewData();
	}

	private setUnencryptedViewData(data: string, clear: boolean): void {
		//console.debug('setUnencryptedViewData', {data, clear});
		this.cachedUnencryptedData = data;
		super.setViewData(data, false);
	}

	override setViewData(data: string, clear: boolean): void {
		// something is setting the view data, perhaps from reading from the
		// file... or some other plugin is adding some markdown

		//console.debug('setViewData', {data, clear});

		if ( this.file == null ) {
			console.info( 'View data will not be set because file is null' )
			return;
		}

		if ( this.isLoadingFileInProgress ){
			return;
		}

		if ( !JsonFileEncoding.isEncoded(data) ){
			this.setUnencryptedViewData(data, clear);
			return;
		}

		console.info( 'View is being set with already encoded data, trying to decode', {data} );
		if (this.passwordAndHint == null){
			console.error('passwordAndHint == null');
			return;
		}
		const newEncoded = JsonFileEncoding.decode(data);
		
		FileDataHelper.decrypt( newEncoded, this.passwordAndHint.password ).then( decryptedText => {
			if ( decryptedText == null ){
				console.info('View was being set with already encoceded data but the decryption failed, closing view');
				this.isSavingEnabled = false; // don't overwrite the data when we detach
				this.leaf.detach();
				return;
			}
			this.setUnencryptedViewData(decryptedText, clear);
		});
		
	}

	override async setState(state: any, result: ViewStateResult): Promise<void> {
		//console.debug('setState', state, result, this.cachedUnencryptedData);
		if ( state.mode == 'preview' ){
			await this.save(); // save before preview
		}
		this.isSavingEnabled = false;
		try{
			await super.setState(state, result);
			super.setViewData(this.cachedUnencryptedData, false);
		}finally{
			this.isSavingEnabled = true;
		}
		//console.debug('setState done');
	}

	override async save(clear?: boolean | undefined): Promise<void> {
		console.debug('save', { clear });
		if ( this.isSavingInProgress ) {
			console.info('Saving was prevented because another save is in progress, Obsidian will try again later if the content changed.');
			return;
		}

		this.isSavingInProgress = true;
		this.setViewBusy( true );
		try{
			
			if (this.file == null){
				console.info('Saving was prevented beacuse there is no file loaded in the view yet');
				return;
			}

			if ( !ENCRYPTED_FILE_EXTENSIONS.includes( this.file.extension ) ){
				console.info('Saving was prevented because the file is not an encrypted file');
				return;
			}

			if (!this.isSavingEnabled){
				if (this.passwordAndHint == null){
					console.info('Saving was prevented because the file was not yet loaded with a password');
				}else{
					console.info('Saving was prevented because it was explicitly disabled');
				}
				return;
			}

			if (this.passwordAndHint == null){
				console.info('Saving was prevented beacuse there is no password set');
				return;
			}
			
			const unencryptedDataToSave = this.getUnencryptedViewData();
			
			if ( JsonFileEncoding.isEncoded( unencryptedDataToSave ) ){
				// data is already encrypted, protect it from being overwritten
				console.info('Saving was prevented beacuse the data was already encoded but it was expected to not be');
				return;
			}

			if (
				!this.dataWasChangedSinceLastSave
				&& this.cachedUnencryptedData.length == unencryptedDataToSave.length
				&& this.cachedUnencryptedData == unencryptedDataToSave
			){
				console.info('Saving was prevented because the data was not changed');
				return;
			}

			this.setUnencryptedViewData(unencryptedDataToSave, false);

			// build up-to-date encrypted data
			this.encryptedData = await FileDataHelper.encrypt(
				this.passwordAndHint.password,
				this.passwordAndHint.hint,
				unencryptedDataToSave
			);

			// call the real save.. which will call getViewData... getViewData will
			// decide whether to return encrypted or unencrypted data (encrypted
			// in this case becase this.isSavingInProgress is true)
			await super.save(clear);

			this.dataWasChangedSinceLastSave = false;

		} finally{
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
		if (this.file == null){
			console.info('Unable to change password beacuse there is no file loaded in the view yet');
			return;
		}

		// fetch password
		const pwm = new PluginPasswordModal(
			this.app,
			`Change password for "${this.file.basename}"`,
			true,
			true,
			await SessionPasswordService.getByFile( this.file )
		);
			
		try{
			const newPwh = await pwm.openAsync();

			this.passwordAndHint = newPwh;
		
			SessionPasswordService.putByFile( newPwh, this.file );

			this.dataWasChangedSinceLastSave = true;
			await this.save();

			new Notice( 'Password changed' );
		}catch(error){
			new Notice( 'Password wasn\'t changed' );
		}
	}


}
