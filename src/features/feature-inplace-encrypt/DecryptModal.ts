import { App, Modal, Notice, Setting, TextAreaComponent } from 'obsidian';

export default class DecryptModal extends Modal {
	text: string;
	decryptInPlace = false;
	save = false;
	
	canDecryptInPlace = true;

	constructor(
		app: App,
		title: string,
		text = ''
	) {
		super(app);
		this.titleEl.setText(title);
		this.text = text;
	}

	onOpen() {
		const { contentEl } = this;

		contentEl.empty();
		contentEl.classList.add('meld-encrypt-decrypt-modal');

		let cTextArea : TextAreaComponent;
		const sText = new Setting(contentEl)
			.addTextArea( cb=>{
				cTextArea = cb;
				cb.setValue(this.text);
				cb.inputEl.setSelectionRange(0,0)
				cb.inputEl.rows = 10;
			})
		;
		sText.settingEl.querySelector('.setting-item-info')?.remove();

		const sActions = new Setting(contentEl);

		sActions
			.addButton(cb => {
				cb
					.setButtonText('Save')
					.onClick( evt =>{
						this.save = true;
						this.text = cTextArea.getValue();
						this.close();
					});
			});

		sActions
			.addButton( cb =>{
				cb
					.setButtonText('Copy')
					.onClick( evt =>{
						navigator.clipboard.writeText( cTextArea.getValue() );
						new Notice('Copied!');
					})
				;
			})
		;
		if (this.canDecryptInPlace){
			sActions.addButton( cb =>{
				cb.setWarning()
				.setButtonText('Decrypt in-place')
				.onClick( evt =>{
					this.decryptInPlace = true;
					this.text = cTextArea.getValue();
					this.close();
				});
			});
		}

	}

}