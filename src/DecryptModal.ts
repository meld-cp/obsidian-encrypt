import { App, Modal } from 'obsidian';

// DEPRECATED
export default class DecryptModal extends Modal {
	text: string;
	decryptInPlace: boolean = false;
	showCopyButton: boolean

	constructor(app: App, title: string, text: string = '', showCopyButton:boolean) {
		super(app);
		this.text = text;
		this.titleEl.innerText = title;
		this.showCopyButton = showCopyButton;
	}

	onOpen() {
		let { contentEl } = this;

		const textEl = contentEl.createDiv().createEl('textarea', { text: this.text });
		textEl.style.width = '100%';
		textEl.style.height = '100%';
		textEl.rows = 10;
		textEl.readOnly = true;
		//textEl.focus(); // Doesn't seem to work here...
		setTimeout(() => { textEl.focus() },100); //... but this does


		const btnContainerEl = contentEl.createDiv('');

		if (this.showCopyButton){
			const copyBtnEl = btnContainerEl.createEl('button', { text: 'Copy' });
			copyBtnEl.addEventListener('click', () => {
				navigator.clipboard.writeText(textEl.value);
			});
		}

		const decryptInPlaceBtnEl = btnContainerEl.createEl('button', { text: 'Decrypt in-place' });
		decryptInPlaceBtnEl.addEventListener('click', () => {
			this.decryptInPlace = true;
			this.close();
		});

		const cancelBtnEl = btnContainerEl.createEl('button', { text: 'Close' });
		cancelBtnEl.addEventListener('click', () => {
			this.close();
		});

	}

}