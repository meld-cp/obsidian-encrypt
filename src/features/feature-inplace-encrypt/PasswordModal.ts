import { App, Modal, Setting, TextComponent } from 'obsidian';

export default class PasswordModal extends Modal {
	
	// input
	private defaultPassword?: string = null;
	private confirmPassword: boolean;
	private isEncrypting: boolean;
	
	// output
	password?: string = null;
	hint?: string = null;

	constructor(
		app: App,
		isEncrypting:boolean,
		confirmPassword: boolean,
		defaultPassword: string = null,
		hint:string = null
	) {
		super(app);
		this.defaultPassword = defaultPassword;
		this.confirmPassword = confirmPassword;
		this.isEncrypting = isEncrypting;
		this.hint = hint;
	}

	onOpen() {
		let { contentEl } = this;

		contentEl.empty();

		//this.contentEl.style.width = 'auto';

		let password = this.defaultPassword ?? '';
		let confirmPass = '';
		let hint = this.hint ?? '';

		new Setting(contentEl).setHeading().setName(
			this.isEncrypting ? 'Encrypting' : 'Decrypting'
		);

		/* Main password input*/

		let tcPassword : TextComponent;
		new Setting(contentEl)
			.setName('Password')
			.addText( tc=>{
				tcPassword = tc;
				tc.inputEl.type = 'password';
				if ( this.isEncrypting ){
					tc.inputEl.placeholder = `Password`;
				}else if ( this.hint != null ){
					tc.inputEl.placeholder = `Hint: ${this.hint}`;
				}
				tc.setValue(password);
				tc.inputEl.focus();
				tc.inputEl.on('keypress', '*', (ev, target) => {
					if (
						ev.key == 'Enter'
						&& target instanceof HTMLInputElement
						&& target.value.length > 0
					) {
						ev.preventDefault();
						if (sConfirmPassword.settingEl.isShown()){
							tcConfirmPassword.inputEl.focus();
						}else if (sHint.settingEl.isShown()){
							tcHint.inputEl.focus();
						}else if( validate() ){
							this.close();
						};
					};
				});
				tc.onChange( v=> password = v );
			})
		;

		/* End Main password input row */

		/* Confirm password input row */
		let tcConfirmPassword : TextComponent;
		const sConfirmPassword = new Setting(contentEl)
			.setName('Confirm Password')
			.addText( tc=>{
				tcConfirmPassword = tc;
				tc.inputEl.type = 'password';
				if ( this.isEncrypting ){
					tc.inputEl.placeholder = `Confirm Password`;
				}
				tc.onChange( v=> confirmPass = v );
				tc.inputEl.on('keypress', '*', (ev, target) => {
					if (
						ev.key == 'Enter'
						&& target instanceof HTMLInputElement
						&& target.value.length > 0
					) {
						ev.preventDefault();
						if ( validate() ){
							if ( sHint.settingEl.isShown() ){
								tcHint.inputEl.focus();
							}
						}
					};
				});
			})
		;

		if ( !this.confirmPassword ){
			sConfirmPassword.settingEl.hide();
		}
		
		/* End Confirm password input row */

		/* Hint input row */
		let tcHint : TextComponent;
		const sHint = new Setting(contentEl)
			.setName('Optional Password Hint')
			.addText( tc=>{
				tcHint = tc;
				tc.inputEl.placeholder = `Password Hint`;
				tc.setValue(hint);
				tc.onChange( v=> hint = v );
				tc.inputEl.on('keypress', '*', (ev, target) => {
					if (
						ev.key == 'Enter'
						&& target instanceof HTMLInputElement
						&& target.value.length > 0
					) {
						ev.preventDefault();
						if ( validate() ){
							this.close();
						}
					};
				});
			})
		;
		if (!this.isEncrypting){
			sHint.settingEl.hide();
		}

		/* END Hint text row */

		new Setting(contentEl).addButton( cb=>{
			cb
				.setButtonText('Confirm')
				.onClick( evt =>{
					if (validate()){
						this.close();
					}
				})
			;
		});

		const validate = () : boolean => {
			sConfirmPassword.setDesc('');

			if (this.confirmPassword){
				if (password != confirmPass){
					// passwords don't match
					sConfirmPassword.setDesc('Passwords don\'t match');
					return false;
				}
			}

			this.password = password;
			
			this.hint = hint;

			return true;
		}

	}

}