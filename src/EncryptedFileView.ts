import { App, ButtonComponent, Editor, EventRef, Events, FileManager, FileView, MarkdownEditView, MarkdownPreviewView, MarkdownView, MarkdownViewModeType, Menu, Modal, Notice, Plugin, PluginSettingTab, Setting, TextComponent, TFile, Vault, View, ViewStateResult, WorkspaceSplit } from 'obsidian';
import { ItemView, WorkspaceLeaf } from "obsidian";
import { CryptoHelperV2 } from './CryptoHelper';
import { EncryptedFileContentView } from './EncryptedFileContentView';
import { EncryptedMarkdownView, VIEW_TYPE_ENCRYPTED_MARKDOWN } from './EncryptedMarkdownView';

export const VIEW_TYPE_ENCRYPTED_FILE = "meld-encrypted-file-view";
export class EncryptedFileView extends FileView {
	getViewType(): string {
		return VIEW_TYPE_ENCRYPTED_FILE;
	}
	// getDisplayText(): string {
	// 	return super.getDisplayText();
	// }
	
	// override onload(): void {
	// 	console.debug('onload');
	// 	super.onload();
		
	// }

	override async onLoadFile(file: TFile): Promise<void> {
		console.debug('onLoadFile',{file, 'state':this.getState()});

		const {contentEl} = this;
		contentEl.empty();

		const container = contentEl.createDiv({
			'attr': {
				'style': 'max-width:400px;margin:0 auto;'
			}
		});

		let password = '';

		new Setting(container)
			.setDesc('This note is encrypted, please provide a password to open it:');

		new Setting(container)
			.setName("Password:")
			.addText((tc) =>{
				//tc.setPlaceholder('Password')
				tc.onChange((value) => {
					password = value;
				});
				tc.inputEl.onkeydown = (ev) =>{
					if (
						ev.code === 'Enter'
						|| ev.code === 'NumpadEnter'
					) {
						ev.preventDefault();
						//this.wasSubmitted = true;
						//this.close();
						//this.onSubmit(password);
					}
				}
				setImmediate(() => tc.inputEl.focus())
			})
		;

		new Setting(container)
			.addButton( bc => {
				bc
					.setCta()
					.setButtonText('Decrypt & Open')
					.onClick( async e=> {

						const contentLeaf = this.app.workspace.getLeaf( true );
						//await contentLeaf.open( new EncryptedMarkdownView(contentLeaf, password));
						await contentLeaf.open( new EncryptedFileContentView(contentLeaf, /*password*/));
						await contentLeaf.openFile(file);
						// await contentLeaf.setViewState({
						// 	type : VIEW_TYPE_ENCRYPTED_CONTENT,
						// 	active: true,
						// 	state:{
						// 		file,
						// 		password
						// 	}
						// })
						//console.debug({'view': contentLeaf.view});
						this.leaf.detach();
	
					})
				;
			})
		;
	}
}
