import { App, Modal, Platform } from 'obsidian';

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

		contentEl.addClass( 'meld-e-password' );
		if (Platform.isMobile){
			contentEl.addClass( 'meld-e-platform-mobile' );
		}else if (Platform.isDesktop){
			contentEl.addClass( 'meld-e-platform-desktop' );
		}

		/* Main password input row */
		const inputPwContainerEl = contentEl.createDiv( { cls:'meld-e-row' } );
		inputPwContainerEl.createSpan({ cls:'meld-e-icon', text: '🔑' });
		
		const pwInputEl = inputPwContainerEl.createEl('input', { type: 'password', value: this.defaultPassword ?? '' });

		pwInputEl.placeholder = 'Enter your password';
		pwInputEl.focus();

		if (Platform.isMobile){
			// Add 'Next' button for mobile
			const inputInputNextBtnEl = inputPwContainerEl.createEl('button', {
				text: '→',
				cls:'meld-e-button-next'
			});
			inputInputNextBtnEl.addEventListener('click', (ev) => {
				inputPasswordHandler();
			});
		}

		/* End Main password input row */

		/* Confirm password input row */

		const confirmPwContainerEl = contentEl.createDiv( { cls:'meld-e-row' } );
		confirmPwContainerEl.createSpan( { cls:'meld-e-icon', text: '🔑' } );
		
		const pwConfirmInputEl = confirmPwContainerEl.createEl( 'input', {
			type: 'password',
			value: this.defaultPassword ?? ''
		});
		pwConfirmInputEl.placeholder = 'Confirm your password';

		const messageEl = contentEl.createDiv({ cls:'meld-e-message' });
		messageEl.hide();
		
		
		if (Platform.isMobile){
			// Add 'Next' button for mobile
			const confirmInputNextBtnEl = confirmPwContainerEl.createEl('button', {
				text: '→',
				cls:'meld-e-button-next'
			});
			confirmInputNextBtnEl.addEventListener('click', (ev) => {
				confirmPasswordHandler();
			});
		}
		/* End Confirm password input row */

		const confirmPwButtonEl = contentEl.createEl( 'button', {
			text:'Confirm',
			cls:'meld-e-button-confirm'
		});
		confirmPwButtonEl.addEventListener( 'click', (ev) =>{
			if (this.confirmPassword){
				if ( pwInputEl.value == pwConfirmInputEl.value ){
					this.password = pwConfirmInputEl.value;
					this.close();
				}else{
					// passwords don't match
					messageEl.setText('Passwords don\'t match');
					messageEl.show();
				}
			}else{
				this.password = pwInputEl.value;
				this.close();
			}
		})


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

		pwInputEl.addEventListener('keypress', (ev) => {
			if (
				( ev.code === 'Enter' || ev.code === 'NumpadEnter' )
				&& pwInputEl.value.length > 0
			) {
				ev.preventDefault();
				inputPasswordHandler();
			}
		});

	}

}