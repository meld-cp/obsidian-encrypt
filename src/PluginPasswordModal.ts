import { App, Modal, Setting, TextComponent } from 'obsidian';
import { UiHelper } from './services/UiHelper.ts';
import { PasswordAndHint } from './services/SessionPasswordService.ts';

export default class PluginPasswordModal extends Modal {
	
	// input
	private title: string;
	private defaultPassword: PasswordAndHint | null;
	//private defaultHint?: string | null = null;
	private confirmPassword: boolean;
	private isEncrypting: boolean;

	// output
	public resultConfirmed = false;
	public resultPassword: PasswordAndHint;

	constructor(
		app: App,
		title: string,
		isEncrypting:boolean,
		confirmPassword: boolean,
		defaultPassword: PasswordAndHint | null,
	) {
		super(app);
		this.title = title;
		this.defaultPassword = defaultPassword;
		this.confirmPassword = confirmPassword;
		this.isEncrypting = isEncrypting;
	}

	onOpen() {
		const { contentEl } = this;

		contentEl.empty();

		this.invalidate();

		let password = this.defaultPassword?.password ?? '';
		let confirmPass = '';
		let hint = this.defaultPassword?.hint ?? '';

		new Setting(contentEl).setHeading().setName( this.title );

		/* Main password input*/

		UiHelper.buildPasswordSetting({
			container: contentEl,
			tabIndex: 0,
			name: 'Password:',
			placeholder: this.isEncrypting ? '' : `Hint: ${hint}`,
			initialValue: password,
			autoFocus: password == '',
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
					}
				}
			}
		});

		/* End Main password input row */

		/* Confirm password input row */
		const sConfirmPassword = UiHelper.buildPasswordSetting({
			container : contentEl,
			name: 'Confirm Password:',
			tabIndex: 1,
			autoFocus: password != '',
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
				tc.inputEl.tabIndex = 2;
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
					}
				});
			})
		;
		if (!this.isEncrypting){
			sHint.settingEl.hide();
		}

		/* END Hint text row */

		new Setting(contentEl).addButton( cb=>{
			cb.buttonEl.tabIndex = 99;
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
			this.resultPassword = { password, hint };

			return true;
		}

	}

	open2Async(): Promise<PasswordAndHint|null> {
		return new Promise<PasswordAndHint|null>( (resolve, reject) =>{

			this.onClose = () =>{
				if (this.resultConfirmed == true){
					resolve( this.resultPassword );
				}else{
					resolve( null );
				}
			}

			this.open();

		} );
	}

	openAsync(): Promise<PasswordAndHint> {
		return new Promise<PasswordAndHint>( (resolve, reject) =>{

			this.onClose = () =>{
				if (this.resultConfirmed == true){
					resolve( this.resultPassword );
				}else{
					reject();
				}
			}

			this.open();

		} );
	}

	private invalidate(){
		this.resultConfirmed = false;
		this.resultPassword = { password: '', hint: '' };
	}

}