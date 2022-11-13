import { App, Modal, Setting, TextComponent } from 'obsidian';
import { UiHelper } from 'src/services/UiHelper';

export default class PasswordModal extends Modal {
	
	// input
	private defaultPassword?: string = null;
	private defaultHint?: string = null;
	private confirmPassword: boolean;
	private isEncrypting: boolean;
	
	// output
	public resultConfirmed: boolean = false;
	public resultPassword?: string = null;
	public resultHint?: string = null;

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
		this.defaultHint = hint;
	}

	onOpen() {
		let { contentEl } = this;

		contentEl.empty();

		//this.contentEl.style.width = 'auto';
		this.invalidate();

		let password = this.defaultPassword ?? '';
		let confirmPass = '';
		let hint = this.defaultHint ?? '';

		new Setting(contentEl).setHeading().setName(
			this.isEncrypting ? 'Encrypting' : 'Decrypting'
		);

		/* Main password input*/

		const sPassword = UiHelper.buildPasswordSetting({
			container: contentEl,
			name: 'Password:',
			placeholder: this.isEncrypting ? '' : `Hint: ${this.defaultHint}`,
			initialValue: password,
			autoFocus: true,
			onChangeCallback: (value) => {
				password = value;
				this.invalidate();
			},
			onEnterCallback: (value) =>{
				password = value;
				this.invalidate();
				
				if (password.length > 0){
					if (sConfirmPassword.settingEl.isShown()){
						//tcConfirmPassword.inputEl.focus();
						const elInp = sConfirmPassword.components.find( (bc) => bc instanceof TextComponent );
						if ( elInp instanceof TextComponent ){
							elInp.inputEl.focus();
						}

					}else if (sHint.settingEl.isShown()){
						//tcHint.inputEl.focus();
						const elInp = sHint.components.find( (bc) => bc instanceof TextComponent );
						if ( elInp instanceof TextComponent ){
							elInp.inputEl.focus();
						}
					}else if( validate() ){
						this.close();
					};
				}
			}
		});

		/* End Main password input row */

		/* Confirm password input row */
		const sConfirmPassword = UiHelper.buildPasswordSetting({
			container : contentEl,
			name: 'Confirm Password:',
			onChangeCallback: (value) => {
				confirmPass = value;
				this.invalidate();
			},
			onEnterCallback: (value) =>{
				confirmPass = value;
				this.invalidate();
				if (confirmPass.length > 0){
					if ( validate() ){
						if ( sHint.settingEl.isShown() ){
							//tcHint.inputEl.focus();
							const elInp = sHint.components.find( (bc) => bc instanceof TextComponent );
							if ( elInp instanceof TextComponent ){
								elInp.inputEl.focus();
							}
						}
					}
				}
			}
		});

		if ( !this.confirmPassword ){
			sConfirmPassword.settingEl.hide();
		}
		
		/* End Confirm password input row */

		/* Hint input row */
		const sHint = new Setting(contentEl)
			.setName('Optional Password Hint')
			.addText( tc=>{
				//tcHint = tc;
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
			this.invalidate();

			sConfirmPassword.setDesc('');

			if ( this.confirmPassword ){
				if (password != confirmPass){
					// passwords don't match
					sConfirmPassword.setDesc('Passwords don\'t match');
					return false;
				}
			}

			this.resultConfirmed = true;
			this.resultPassword = password;
			this.resultHint = hint;

			return true;
		}

	}

	private invalidate(){
		this.resultConfirmed = false;
		this.resultPassword = null;
		this.resultHint = null;
	}

}