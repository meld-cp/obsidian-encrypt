import { normalizePath, moment, Notice, TFolder, Setting } from "obsidian";
import { EncryptedFileContentView, VIEW_TYPE_ENCRYPTED_FILE_CONTENT } from "./EncryptedFileContentView";
import { IMeldEncryptPluginFeature } from "../IMeldEncryptPluginFeature";
import MeldEncrypt from "../../main";
import { IMeldEncryptPluginSettings } from "../../settings/MeldEncryptPluginSettings";
import { IFeatureWholeNoteEncryptSettings } from "./IFeatureWholeNoteEncryptSettings";
import { UiHelper } from "../../services/UiHelper";

export default class FeatureWholeNoteEncrypt implements IMeldEncryptPluginFeature {

	plugin:MeldEncrypt;
	settings: IFeatureWholeNoteEncryptSettings;

	private ribbonIconCreateNewNote?: HTMLElement;

	async onload( plugin: MeldEncrypt, settings:IMeldEncryptPluginSettings ) {
		this.plugin = plugin;
		this.settings = settings.featureWholeNoteEncrypt;
		this.updateUiForSettings();
		
		this.plugin.registerView(
			VIEW_TYPE_ENCRYPTED_FILE_CONTENT,
			(leaf) => new EncryptedFileContentView(leaf)
		);
			
		this.plugin.registerExtensions(['encrypted'], VIEW_TYPE_ENCRYPTED_FILE_CONTENT);
			
		this.plugin.addCommand({
			id: 'meld-encrypt-create-new-note',
			name: 'Create new encrypted note',
			icon: 'lock',
			checkCallback: (checking) => this.processCreateNewEncryptedNoteCommand(checking)
		});
		
	}

	onunload() {
		this.plugin.app.workspace.detachLeavesOfType(VIEW_TYPE_ENCRYPTED_FILE_CONTENT);
	}

	private processCreateNewEncryptedNoteCommand(checking: boolean): boolean{
		//console.debug('processCreateNewEncryptedNoteCommand', {checking});
		try{
			if (checking || UiHelper.isSettingsModalOpen()){
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
			//console.debug('processCreateNewEncryptedNoteCommand', {newFilepath});
			
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

	buildSettingsUi(
		containerEl: HTMLElement,
		saveSettingCallback : () => Promise<void>
	): void {

		new Setting(containerEl)
			.setHeading()
			.setName('Whole Note Encryption Settings')
		;

		new Setting(containerEl)
			.setName('Add ribbon icon to create note')
			.setDesc('Adds a ribbon icon to the left bar to create an encrypted note.')
			.addToggle( toggle =>{

				toggle
					.setValue(this.settings.addRibbonIconToCreateNote)
				
					.onChange( async value => {
						this.settings.addRibbonIconToCreateNote = value;
						await saveSettingCallback();
						this.updateUiForSettings();
					})
				;
			})
		;
	}

	public updateUiForSettings(){
		if (this.settings.addRibbonIconToCreateNote){
			// turn on ribbon icon
			if (this.ribbonIconCreateNewNote == null){
				this.ribbonIconCreateNewNote = this.plugin.addRibbonIcon( 'lock', 'Create new encrypted note', (ev)=>{
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
