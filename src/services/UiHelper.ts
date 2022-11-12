export class UiHelper{

	/**
		Check if the Settings modal is open
	*/
	public static isSettingsModalOpen() : boolean{
		return document.querySelector('.mod-settings') !== null;
	}


}