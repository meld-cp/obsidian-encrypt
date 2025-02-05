import { Setting, TextComponent } from "obsidian";
interface IBuildPasswordSettingParams {
    container: HTMLElement;
	name: string;
	desc?: string;
	autoFocus?: boolean;
	placeholder?: string;
	initialValue?:string;
	tabIndex?:number|undefined;
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
			tabIndex,
			onChangeCallback,
			onEnterCallback,
		}: IBuildPasswordSettingParams
	) : Setting {
		const sControl = new Setting(container)
			.setName(name)
			.setDesc(desc)
			.addButton( cb=>{
				cb.buttonEl.tabIndex = -1;
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
				tc.inputEl.tabIndex = tabIndex ?? tc.inputEl.tabIndex;
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


}