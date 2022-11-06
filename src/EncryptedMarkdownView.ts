import { on } from 'events';
import { App, ButtonComponent, EditableFileView, Editor, EventRef, Events, FileManager, FileView, MarkdownEditView, MarkdownPreviewView, MarkdownSourceView, MarkdownView, MarkdownViewModeType, Menu, MenuItem, Modal, Notice, Plugin, PluginSettingTab, Setting, TextComponent, TextFileView, TFile, Vault, View, ViewStateResult, WorkspaceSplit } from 'obsidian';
import { ItemView, WorkspaceLeaf } from "obsidian";
import { CryptoHelperV2 } from './CryptoHelper';
import { EncryptedFileView } from './EncryptedFileView';


export const VIEW_TYPE_ENCRYPTED_MARKDOWN = "meld-encrypted-markdown-view";
export class EncryptedMarkdownView extends MarkdownView {
	
	encryptionPassword:string;
	encryptedContents: string;

	constructor(leaf: WorkspaceLeaf, password:string) {
		super(leaf);
		console.debug('EncryptedMarkdownView.constructor', {leaf, password});
		this.encryptionPassword = password;
		//this.previewMode.containerEl.hide();
	}

	override addAction(icon: string, title: string, callback: (evt: MouseEvent) => any, size?: number): HTMLElement {
		console.debug('EncryptedMarkdownView.addAction', {icon, title, size});
		return createDiv();
	}
	
	override onPaneMenu(menu: Menu, source: 'more-options' | 'tab-header' | string): void{
		console.debug('EncryptedMarkdownView.onPaneMenu', {menu, source});
		//super.onPaneMenu(menu, source);
		menu.addItem( (item) => {
			item.setTitle('test');
		} );
	}

	onEditorSetValue(content:string){
		console.debug('EncryptedMarkdownView.onEditorSetValue', {content});
		
	}
	// DISABLE ACTIONS
	// override addAction(icon: string, title: string, callback: (evt: MouseEvent) => any, size?: number): HTMLElement {
		// 	console.debug('EncryptedMarkdownView.addAction', {icon,title, size});
		// 	return super.addAction(icon, title, (ev)=>{},size);
		// }
		
	onload(): void {
		console.debug('EncryptedMarkdownView.onload', {'this':this});
		
			//this.originalEditorSetValue = this.editor.setValue;
			//this.editor.on
		//const actions = Array.from(this.containerEl.querySelectorAll('.view-action'));

		//actions.find( a=> a.)
		//console.debug(actions );
	}
	
	override async onClose(): Promise<void> {
		console.debug('EncryptedMarkdownView.onClose', {'this':this});
		super.onClose();
	}

	unload(): void {
		console.debug('EncryptedMarkdownView.unload', {'this':this});

		// Close any views of this file
		//this.app.workspace.getActiveViewOfType(VIEW_TYPE_ENCRYPTED_CONTENT)

		//this.leaf.open( new EncryptedFileView());
						//await contentLeaf.openFile(file);
		//const contentLeaf = this.app.workspace.getLeaf( true );
		//contentLeaf.open( new EncryptedFileView(contentLeaf));
		//contentLeaf.openFile(this.leaf.file);
		//this.leaf.view.unload();
		// this.app.workspace.getLeavesOfType(VIEW_TYPE_ENCRYPTED_CONTENT).forEach( l=>{
		// 	new Notice('Closing encryption view');
		//  	console.debug('EncryptedMarkdownView.unload', {l});
		// 	l.detach();
		// });
		//this.app.workspace..detachLeavesOfType(VIEW_TYPE_ENCRYPTED_CONTENT);
		//this.leaf.
	}

	// important
	canAcceptExtension(extension: string): boolean {
		console.debug('EncryptedMarkdownView.canAcceptExtension', {extension});
		return extension == 'encrypted';
	}

	// important
	getViewType() {
		return VIEW_TYPE_ENCRYPTED_MARKDOWN;
	}

	

	override setViewData(data: string, clear: boolean): void {
		console.debug('EncryptedMarkdownView.setViewData', {
			data,
			clear,
			'pass':this.encryptionPassword,
			'mode':this.getMode(),
			'mode-data':this.currentMode.get(),
			'preview-mode-data':this.previewMode.get()
		});
		
		if (data === null || data.length === 0){
			super.setViewData('', clear);
			return;
		}
		/*
		const markdownWrapperParent = elementRef.value
				? elementRef.value.closest(".markdown-source-view") ||
				  elementRef.value.closest(".markdown-reading-view")
				: null;
		*/
		
		this.encryptedContents = data;
		const encryptedBytes = Buffer.from(data, 'base64');
		const crypto = new CryptoHelperV2();

		crypto
			.decryptFromBytes(encryptedBytes, this.encryptionPassword)
			.then( contents =>{
				if (contents!==null){
					super.setViewData(contents, clear)
					this.data = contents;
				}else{
					new Notice('Decryption failed');
					this.leaf.detach();
				}
			})
		;
	}


	getViewData(): string {

		//const readingView = this.contentEl.closest(".markdown-reading-view");

		/*
		const markdownWrapperParent = elementRef.value
				? elementRef.value.closest(".markdown-source-view") ||
				  elementRef.value.closest(".markdown-reading-view")
				: null;
		*/

		console.debug('EncryptedMarkdownView.getViewData', {
			'this':this,
			'encryptedContents':this.encryptedContents,
			//readingView,
			'mode':this.getMode(),
			'mode-data':this.currentMode.get(),
			'preview-mode-data':this.previewMode.get()
		});
		return this.encryptedContents;
	}

	async encryptContent( content: string ) : Promise<string>{
		const crypto = new CryptoHelperV2();
		const encryptedBytes = await crypto.encryptToBytes(content, this.encryptionPassword);
		return Buffer.from(encryptedBytes).toString('base64');
	}

	override async save(clear?: boolean): Promise<void> {
		console.debug('EncryptedMarkdownView.save', {
			'data':this.data,
			'mode':this.getMode(),
			'mode-data':this.currentMode.get(),
			'preview-mode-data':this.previewMode.get()
		});
		const editorContent = this.currentMode.get();
		this.encryptedContents = await this.encryptContent( editorContent );
		await super.save(clear);
	}

	
}

