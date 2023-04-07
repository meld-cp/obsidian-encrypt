import { TFile } from "obsidian";
import { MemoryCache } from "./MemoryCache";

interface IPasswordAndHint{
	password: string;
	hint: string;
}

export class SessionPasswordService{

	private static isActive = true;

	private static blankPasswordAndHint : IPasswordAndHint = { password:'', hint:'' };

	private static cache = new MemoryCache<IPasswordAndHint>();
	
	private static baseMinutesToExpire = 0;
	private static expiryTime : number | null = null;

	public static LevelFullPath = 'fullPath';
	public static LevelParentPath = 'parentPath';
	private static level = SessionPasswordService.LevelFullPath;

	public static setActive( isActive: boolean) {
		SessionPasswordService.isActive = isActive;
		if (!SessionPasswordService.isActive){
			this.clear();
		}
	}

	/**
	 * 
	 * @param minutesToExpire set to 0 to never expire
	 */
	public static setAutoExpire( minutesToExpire:number | null ) : void{
		SessionPasswordService.baseMinutesToExpire = minutesToExpire ?? 0;
		SessionPasswordService.updateExpiryTime();
	}

	public static setLevel( level: string ) {
		if ( SessionPasswordService.level == level ){
			return;
		}
		SessionPasswordService.level = level;
		this.clear();
	}

	public static updateExpiryTime() : void {
		if (
			SessionPasswordService.baseMinutesToExpire == 0
			|| SessionPasswordService.baseMinutesToExpire == null
		){
			SessionPasswordService.expiryTime = null;
		} else {
			SessionPasswordService.expiryTime = Date.now() + SessionPasswordService.baseMinutesToExpire * 1000 * 60;
		}
	}
	
	public static put( pw: IPasswordAndHint, file : TFile ): void {
		if (!SessionPasswordService.isActive){
			return;
		}

		const key = SessionPasswordService.getFileCacheKey( file );

		this.cache.put( key, pw );

		SessionPasswordService.updateExpiryTime();
	}

	public static get( file : TFile ): IPasswordAndHint {
		if (!SessionPasswordService.isActive){
			return SessionPasswordService.blankPasswordAndHint;
		}
		
		this.clearIfExpired();
		SessionPasswordService.updateExpiryTime();

		const key = SessionPasswordService.getFileCacheKey( file );
		return this.cache.get( key, SessionPasswordService.blankPasswordAndHint );
	}

	private static getFileCacheKey( file : TFile ) : string {
		switch (SessionPasswordService.level) {
			case SessionPasswordService.LevelParentPath:
				return file.parent.path;
		
			default:
				return file.path;
		}
	}

	private static clearIfExpired() : void{
		if ( SessionPasswordService.expiryTime == null ){
			return;
		}
		if ( Date.now() < SessionPasswordService.expiryTime ){
			return;
		}
		this.clear();
	}

	public static clearForFile( file: TFile ) : void {
		const key = SessionPasswordService.getFileCacheKey( file );
		this.cache.removeKey( key );
	}

	public static clear(): void{
		this.cache.clear();
	}

}

