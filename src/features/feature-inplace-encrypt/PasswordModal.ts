import { App, Modal, Platform } from 'obsidian';

export default class PasswordModal extends Modal {
	password: string = null;
	hint: string = null;
	defaultPassword: string = null;
	confirmPassword: boolean;
	isEncrypting: boolean;

	constructor(app: App, isEncrypting:boolean, confirmPassword: boolean, defaultPassword: string = null, hint:string ) {
		super(app);
		this.defaultPassword = defaultPassword;
		this.confirmPassword = confirmPassword;
		this.isEncrypting = isEncrypting;
		this.hint = hint;
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
		const confirmPwShown = this.confirmPassword;
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
		
		if (!confirmPwShown) {
			confirmPwContainerEl.hide();
		}
		/* End Confirm password input row */

		/* Hint input row */
		const hintInputShown = this.isEncrypting;
		const inputHintContainerEl = contentEl.createDiv( { cls:'meld-e-row' } );
		inputHintContainerEl.createSpan({ cls:'meld-e-icon', text: '💡' });
		const hintInputEl = inputHintContainerEl.createEl('input', { type: 'text', value: this.hint });
		hintInputEl.placeholder = 'Enter an optional password hint';
		if (Platform.isMobile){
			// Add 'Next' button for mobile
			const hintInputNextBtnEl = inputHintContainerEl.createEl('button', {
				text: '→',
				cls:'meld-e-button-next'
			});
			hintInputNextBtnEl.addEventListener('click', (ev) => {
				hintPasswordHandler();
			});
		}
		if (!hintInputShown){
			inputHintContainerEl.hide();
		}
		/* End Hint input row */

		/* Hint text row */
		const spanHintContainerEl = contentEl.createDiv( { cls:'meld-e-row' } );
		spanHintContainerEl.createSpan({ cls:'meld-e-icon', text: '💡' });
		spanHintContainerEl.createSpan( {cls: 'meld-e-hint', text:`Hint: '${this.hint}'`});

		if (hintInputShown || (this.hint ?? '').length==0){
			spanHintContainerEl.hide();
		}

		/* END Hint text row */

		const confirmPwButtonEl = contentEl.createEl( 'button', {
			text:'Confirm',
			cls:'meld-e-button-confirm'
		});
		confirmPwButtonEl.addEventListener( 'click', (ev) =>{
			if (validate()){
				this.close();
			}else{
				pwInputEl.focus();
			}
		})

		const validate = () : boolean => {
			if (confirmPwShown){
				if (pwInputEl.value != pwConfirmInputEl.value){
					// passwords don't match
					messageEl.setText('Passwords don\'t match');
					messageEl.show();
					return false;
				}
			}

			this.password = pwInputEl.value;
			
			this.hint = hintInputEl.value;

			return true;
		}

		const inputPasswordHandler = () =>{
			if (confirmPwShown){
				pwConfirmInputEl.focus();
				return;
			}

			if (hintInputShown){
				hintInputEl.focus();
				return;
			}

			if ( validate() ){
				this.close();
			}
		}

		const confirmPasswordHandler = () => {
			if ( validate() ){
				if (hintInputShown){
					hintInputEl.focus();
				}else{
					this.close();
				}
			}
		}

		const hintPasswordHandler = () => {
			if (validate()){
				this.close();
			}else{
				pwInputEl.focus();
			}
		}
		
		hintInputEl.addEventListener('keypress', (ev) => {
			if (
				( ev.code === 'Enter' || ev.code === 'NumpadEnter' )
				&& pwInputEl.value.length > 0
			) {
				ev.preventDefault();
				hintPasswordHandler();
			}
		});

		pwConfirmInputEl.addEventListener('keypress', (ev) => {
			if (
				( ev.code === 'Enter' || ev.code === 'NumpadEnter' )
				&& pwConfirmInputEl.value.length > 0
			) {
				ev.preventDefault();
				confirmPasswordHandler();
			}
		});


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