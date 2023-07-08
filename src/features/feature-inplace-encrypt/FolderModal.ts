import { App, Modal, Setting } from 'obsidian';
import { UiHelper } from 'src/services/UiHelper';

export default class FolderModal extends Modal {
	
	// input
	private isEncrypting: boolean;

	// output
	public resultConfirmed = false;
	public resultFolder?: string | null = null;

	constructor(
		app: App,
		isEncrypting:boolean,
	) {
		super(app);
		this.isEncrypting = isEncrypting;
	}

	onOpen() {
		const { contentEl } = this;

		contentEl.empty();

		let folder = '';

		new Setting(contentEl).setHeading().setName(
			this.isEncrypting ? 'Encrypting' : 'Decrypting'
		);

		/* Main folder input*/

		UiHelper.buildFolderSetting({
			container: contentEl,
			name: 'Folder:',
			initialValue: folder,
			autoFocus: true,
			onChangeCallback: (value) => {
				folder = value;
			},
			onEnterCallback: (value) => {
				folder = value;
          this.resultConfirmed = true;
          this.resultFolder = folder;
          this.close();
			}
		});

		/* End folder input row */

		new Setting(contentEl).addButton( cb=>{
			cb
				.setButtonText('Confirm')
				.onClick( evt =>{
          this.resultConfirmed = true;
          this.resultFolder = folder;
          this.close();
				})
			;
		});
  }
}
