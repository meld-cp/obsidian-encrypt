import { normalizePath, moment, Notice, TFolder } from "obsidian";
import { EncryptedFileContentView, VIEW_TYPE_ENCRYPTED_FILE_CONTENT } from "./EncryptedFileContentView";
import { IMeldEncryptPluginFeature } from "../IMeldEncryptPluginFeature";
import MeldEncrypt from "../../main";
import { MeldEncryptPluginSettings } from "../../settings/MeldEncryptPluginSettings";

export default class FeatureWholeNoteEncrypt implements IMeldEncryptPluginFeature {
	plugin:MeldEncrypt;
	settings: MeldEncryptPluginSettings;

	private ribbonIconCreateNewNote?: HTMLElement;

	async onload(plugin: MeldEncrypt, settings:MeldEncryptPluginSettings) {
		this.plugin = plugin;
	
		this.applySettings(settings);
		
		this.plugin.registerView(
			VIEW_TYPE_ENCRYPTED_FILE_CONTENT,
			(leaf) => new EncryptedFileContentView(leaf)
		);
			
		this.plugin.registerExtensions(['encrypted'], VIEW_TYPE_ENCRYPTED_FILE_CONTENT);
			
		this.plugin.addCommand({
			id: 'meld-encrypt-create-new-note',
			name: 'Create new encrypted note',
			checkCallback: (checking) => this.processCreateNewEncryptedNoteCommand(checking)
		});
		
	}

	onunload() {
		this.plugin.app.workspace.detachLeavesOfType(VIEW_TYPE_ENCRYPTED_FILE_CONTENT);
	}

	private processCreateNewEncryptedNoteCommand(checking: boolean): boolean{
		console.debug('processCreateNewEncryptedNoteCommand', {checking});
		try{
			if (checking){
				return true;
			}
			
			let newFilename = moment().format('[Untitled] YYYYMMDD hhmmss[.encrypted]'); 
			
			let newFileFolder : TFolder;
			const activeFile = this.plugin.app.workspace.getActiveFile();

			if (activeFile != null){
				newFileFolder = this.plugin.app.fileManager.getNewFileParent(activeFile.path);
			}else{
				newFileFolder = this.plugin.app.fileManager.getNewFileParent('');
			}

			const newFilepath = normalizePath( newFileFolder.path + "/" + newFilename );
			console.debug('processCreateNewEncryptedNoteCommand', {newFilepath});
			
			this.plugin.app.vault.create(newFilepath,'').then( f=>{
				const leaf = this.plugin.app.workspace.getLeaf( false );
				leaf.openFile( f );
			}).catch( reason =>{
				new Notice(reason, 10000);
			});

			return true;
		}catch(e){
			console.error(e);
			new Notice(e, 10000);
		}
	}

	public applySettings( settings: MeldEncryptPluginSettings ){
		this.settings = settings;
		if (this.settings.addRibbonIconToCreateNote){
			// turn on ribbon icon
			if (this.ribbonIconCreateNewNote == null){
				this.ribbonIconCreateNewNote = this.plugin.addRibbonIcon('lock', 'Create new encrypted note', (ev)=>{
					this.processCreateNewEncryptedNoteCommand(false);
				});
			}
		}else{
			// turn off ribbon icon
			if (this.ribbonIconCreateNewNote != null){
				this.ribbonIconCreateNewNote.remove();
				this.ribbonIconCreateNewNote = null;
			}
		}
	}
}
