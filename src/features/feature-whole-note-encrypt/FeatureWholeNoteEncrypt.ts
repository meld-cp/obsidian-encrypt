import { normalizePath, Notice, TFolder, Setting, moment } from "obsidian";
import { EditViewEnum, EncryptedFileContentView, VIEW_TYPE_ENCRYPTED_FILE_CONTENT } from "./EncryptedFileContentView";
import { IMeldEncryptPluginFeature } from "../IMeldEncryptPluginFeature";
import MeldEncrypt from "../../main";
import { IMeldEncryptPluginSettings } from "../../settings/MeldEncryptPluginSettings";
import { IFeatureWholeNoteEncryptSettings } from "./IFeatureWholeNoteEncryptSettings";
import { ENCRYPTED_FILE_EXTENSION } from "src/services/Constants";

export default class FeatureWholeNoteEncrypt implements IMeldEncryptPluginFeature {

	plugin:MeldEncrypt;
	settings: IFeatureWholeNoteEncryptSettings;

	async onload( plugin: MeldEncrypt, settings:IMeldEncryptPluginSettings ) {
		this.plugin = plugin;
		this.settings = settings.featureWholeNoteEncrypt;
		
		this.plugin.addRibbonIcon( 'file-lock-2', 'New encrypted note', (ev)=>{
			this.processCreateNewEncryptedNoteCommand();
		});

		this.plugin.registerView(
			VIEW_TYPE_ENCRYPTED_FILE_CONTENT,
			(leaf) => new EncryptedFileContentView(leaf, this.settings )
		);
			
		this.plugin.registerExtensions([ENCRYPTED_FILE_EXTENSION], VIEW_TYPE_ENCRYPTED_FILE_CONTENT);
			
		this.plugin.addCommand({
			id: 'meld-encrypt-create-new-note',
			name: 'Create new encrypted note',
			icon: 'file-lock-2',
			callback: () => this.processCreateNewEncryptedNoteCommand(),
		});
		
	}

	onunload() {
		this.plugin.app.workspace.detachLeavesOfType(VIEW_TYPE_ENCRYPTED_FILE_CONTENT);
	}

	private processCreateNewEncryptedNoteCommand(): boolean{
		try{
			const newFilename = moment().format('[Untitled] YYYYMMDD hhmmss[.encrypted]');
			
			let newFileFolder : TFolder;
			const activeFile = this.plugin.app.workspace.getActiveFile();

			if (activeFile != null){
				newFileFolder = this.plugin.app.fileManager.getNewFileParent(activeFile.path);
			}else{
				newFileFolder = this.plugin.app.fileManager.getNewFileParent('');
			}

			const newFilepath = normalizePath( newFileFolder.path + "/" + newFilename );
			//console.debug('processCreateNewEncryptedNoteCommand', {newFilepath});
			
			this.plugin.app.vault.create(newFilepath,'').then( async f => {
				const leaf = this.plugin.app.workspace.getLeaf( true );
				await leaf.openFile( f );
			}).catch( reason =>{
				new Notice(reason, 10000);
			});

			return true;
			
		}catch(e){
			console.error(e);
			new Notice(e, 10000);
			return false;
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
			.setName('Default view for new tabs')
			.setDesc('The default view that a new encrypted note tab gets opened in')
			.addDropdown( cb =>{
				cb
					.addOption( `${EditViewEnum.source}`, 'Source view' )
					.addOption( `${EditViewEnum.reading}`, 'Reading view' )
					.setValue( `${this.settings.defaultView ?? EditViewEnum.source}` )
				
					.onChange( async value => {
						this.settings.defaultView = value;
						await saveSettingCallback();
					})
				;
			})
		;

	}

}
