import { App, Modal } from 'obsidian';

export default class PasswordModal extends Modal {
	password: string = null;
	defaultPassword: string = null;
	confirmPassword: boolean;

	constructor(app: App, confirmPassword: boolean, defaultPassword: string = null) {
		super(app);
		this.defaultPassword = defaultPassword;
		this.confirmPassword = confirmPassword;
	}

	onOpen() {
		let { contentEl } = this;

		contentEl.empty();

		const pwInputEl = contentEl.createDiv()
			.createSpan({ text: '🔑 ' })
			.createEl('input', { type: 'password', value: this.defaultPassword ?? '' })
			;

		pwInputEl.placeholder = 'Enter your password';
		pwInputEl.style.width = '93%';
		pwInputEl.focus();

		const confirmPwContainerEl = contentEl.createDiv();

		const pwConfirmInputEl = confirmPwContainerEl
			.createSpan({ text: '🔑 ' })
			.createEl('input', { type: 'password', value: this.defaultPassword ?? '' })
			;

		pwConfirmInputEl.placeholder = 'Confirm your password';
		pwConfirmInputEl.style.width = '93%';

		pwConfirmInputEl.addEventListener('keypress', (ev) => {
			if (ev.code === 'Enter' && pwConfirmInputEl.value.length > 0) {
				ev.preventDefault();

				if (pwInputEl.value == pwConfirmInputEl.value){
					this.password = pwConfirmInputEl.value;
					this.close();
				}else{
					// passwords don't match
					messageEl.setText('Passwords don\'t match');
					messageEl.show();
				}

			}
		});
		
		confirmPwContainerEl.style.marginTop = '1em';

		if (!this.confirmPassword) {
			confirmPwContainerEl.hide();
		}

		const messageEl = contentEl.createDiv();
		messageEl.style.marginTop = '1em';
		messageEl.hide();

		pwInputEl.addEventListener('keypress', (ev) => {
			if (ev.code === 'Enter' && pwInputEl.value.length > 0) {
				ev.preventDefault();
				if (this.confirmPassword) {
					// confim password
					pwConfirmInputEl.focus();
				} else {
					this.password = pwInputEl.value;
					this.close();
				}
			}
		});

	}

}