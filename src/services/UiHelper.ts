import { Setting, TextComponent } from "obsidian";
interface IBuildPasswordSettingParams {
    container: HTMLElement;
	name: string;
	desc?: string;
	autoFocus?: boolean;
	placeholder?: string;
	initialValue?:string;
	onChangeCallback?: (value:string) => any;
	onEnterCallback?: (value:string) => any;
}

export class UiHelper{

	/**
		Check if the Settings modal is open
	*/
	public static isSettingsModalOpen() : boolean{
		return document.querySelector('.mod-settings') !== null;
	}

	public static buildPasswordSetting(
		{
			container,
			name,
			desc = '',
			autoFocus = false,
			placeholder = '',
			initialValue = '',
			onChangeCallback,
			onEnterCallback,
		}: IBuildPasswordSettingParams
	) : Setting {
		const sControl = new Setting(container)
			.setName(name)
			.setDesc(desc)
			.addButton( cb=>{
				cb
					.setIcon( 'reading-glasses' )
					.onClick( evt =>{
						// toggle view password
						const inputCtrl = sControl.components.find( (bc, idx, obj)=>bc instanceof TextComponent );
						if (inputCtrl instanceof TextComponent){
							inputCtrl.inputEl.type = inputCtrl.inputEl.type == 'password' ? 'text' : 'password';
						}
					})
				;
			})
			.addText( tc => {
				tc.setPlaceholder(placeholder);
				tc.setValue(initialValue);
				tc.inputEl.type = 'password';
				if (onChangeCallback!=null){
					tc.onChange( onChangeCallback );
				}
				if (onEnterCallback!=null){
					tc.inputEl.onkeydown = (ev)=> {
						if ( ev.key === 'Enter' ) {
							ev.preventDefault();
							onEnterCallback( tc.getValue() );
						}
					}
				}
				if (autoFocus){
					setTimeout(() => tc.inputEl.focus(), 0);
				}
			} )
		;

		return sControl;
	}

	public static buildFolderSetting(
		{
			container,
			name,
			desc = '',
			autoFocus = false,
			initialValue = '',
			onChangeCallback,
			onEnterCallback,
		}: IBuildPasswordSettingParams
	) : Setting {
		const sControl = new Setting(container)
			.setName(name)
			.setDesc(desc)
			.addText( tc => {
				tc.setValue(initialValue);
				tc.inputEl.type = 'text';
				if (onChangeCallback!=null){
					tc.onChange( onChangeCallback );
				}
				if (onEnterCallback!=null){
					tc.inputEl.onkeydown = (ev)=> {
						if ( ev.key === 'Enter' ) {
							ev.preventDefault();
							onEnterCallback( tc.getValue() );
						}
					}
				}
				if (autoFocus){
					setTimeout(() => tc.inputEl.focus(), 0);
				}
			} )
		;

		return sControl;
	}



}
