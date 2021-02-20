import { App, Modal } from 'obsidian';

export default class PasswordModal extends Modal {
	password: string = null;

	constructor(app: App) {
		super(app);
	}

	onOpen() {
		let { contentEl } = this;

		const pwInputEl = contentEl.createDiv().createEl('input');
		pwInputEl.type = 'password';
		pwInputEl.placeholder = '🔑 Enter your password';
		pwInputEl.style.width = '100%';
		pwInputEl.focus();

		pwInputEl.addEventListener('keyup', (ev) => {
			if (ev.code === 'Enter' && pwInputEl.value.length > 0) {
				ev.preventDefault();
				this.password = pwInputEl.value;
				this.close();
			}
		});

	}

}