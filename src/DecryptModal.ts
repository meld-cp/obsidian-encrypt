import { App, Modal } from 'obsidian';

export default class DecryptModal extends Modal {
	text: string;
	decryptInPlace: boolean = false;

	constructor(app: App, title: string, text: string = '') {
		super(app);
		this.text = text;
		this.titleEl.innerText = title;
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