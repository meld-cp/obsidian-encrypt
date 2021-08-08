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

		const inputPwContainerEl = contentEl.createDiv();
		inputPwContainerEl.createSpan({ text: '🔑 ' });
		
		const pwInputEl = inputPwContainerEl.createEl('input', { type: 'password', value: this.defaultPassword ?? '' });
		pwInputEl.placeholder = 'Enter your password';
		pwInputEl.style.width = '70%';
		pwInputEl.focus();

		const inputInputNextBtnEl = inputPwContainerEl.createEl('button', { text: '→' });
		inputInputNextBtnEl.style.display = 'inline';
		inputInputNextBtnEl.style.marginLeft = "1em";
		inputInputNextBtnEl.style.width = "4em";
		inputInputNextBtnEl.addEventListener('click', (ev) => {
			inputPasswordHandler();
		});


		const confirmPwContainerEl = contentEl.createDiv();
		confirmPwContainerEl.style.marginTop = '1em';
		confirmPwContainerEl.createSpan({ text: '🔑 ' });
		
		const pwConfirmInputEl = confirmPwContainerEl.createEl('input', { type: 'password', value: this.defaultPassword ?? '' });
		pwConfirmInputEl.placeholder = 'Confirm your password';
		pwConfirmInputEl.style.width = '70%';

		const confirmInputNextBtnEl = confirmPwContainerEl.createEl('button', { text: '→' });
		confirmInputNextBtnEl.style.display = 'inline';
		confirmInputNextBtnEl.style.marginLeft = "1em";
		confirmInputNextBtnEl.style.width = "4em";
		confirmInputNextBtnEl.addEventListener('click', (ev) => {
			confirmPasswordHandler();
		});
		
		const inputPasswordHandler = () =>{
			if (this.confirmPassword) {
				// confim password
				pwConfirmInputEl.focus();
			} else {
				this.password = pwInputEl.value;
				this.close();
			}
		}

		const confirmPasswordHandler = () => {
			if (pwInputEl.value == pwConfirmInputEl.value){
				this.password = pwConfirmInputEl.value;
				this.close();
			}else{
				// passwords don't match
				messageEl.setText('Passwords don\'t match');
				messageEl.show();
			}
		}


		pwConfirmInputEl.addEventListener('keypress', (ev) => {
			if (
				( ev.code === 'Enter' || ev.code === 'NumpadEnter' )
				&& pwConfirmInputEl.value.length > 0
			) {
				ev.preventDefault();
				confirmPasswordHandler();
			}
		});
		

		if (!this.confirmPassword) {
			confirmPwContainerEl.hide();
		}

		const messageEl = contentEl.createDiv();
		messageEl.style.marginTop = '1em';
		messageEl.hide();

		pwInputEl.addEventListener('keypress', (ev) => {
			if (
				( ev.code === 'Enter' || ev.code === 'NumpadEnter' )
				&& pwInputEl.value.length > 0
			) {
				ev.preventDefault();
				inputPasswordHandler();
			}
		});

		// const btnContainerEl = contentEl.createDiv('');
		// btnContainerEl.style.marginTop = '1em';

		// const okBtnEl = btnContainerEl.createEl('button', { text: 'OK' });
		// okBtnEl.addEventListener('click', () => {
		// 	this.password = pwInputEl.value;
		// 	this.close();
		// });

		// const cancelBtnEl = btnContainerEl.createEl('button', { text: 'Cancel' });
		// cancelBtnEl.addEventListener('click', () => {
		// 	this.close();
		// });


	}

}