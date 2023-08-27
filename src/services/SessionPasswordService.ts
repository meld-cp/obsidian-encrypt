import { TFile } from "obsidian";
import { MemoryCache } from "./MemoryCache";
import { Utils } from "./Utils";

export interface IPasswordAndHint{
	password: string;
	hint: string;
}

export class SessionPasswordService{

	private static isActive = true;

	private static blankPasswordAndHint : IPasswordAndHint = { password:'', hint:'' };

	private static cache = new MemoryCache<IPasswordAndHint>();
	
	private static baseMinutesToExpire = 0;
	private static expiryTime : number | null = null;

	public static LevelFilename = 'filename';
	public static LevelParentPath = 'parentPath';
	private static allLevels = [
		SessionPasswordService.LevelFilename,
		SessionPasswordService.LevelParentPath
	];
	private static level = SessionPasswordService.LevelFilename;

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
		if ( SessionPasswordService.allLevels.contains(level) ){
			SessionPasswordService.level = level;
		}
		SessionPasswordService.level = SessionPasswordService.LevelFilename;
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

	public static putByFile( pw: IPasswordAndHint, file:TFile ): void {
		if (!SessionPasswordService.isActive){
			return;
		}

		const key = SessionPasswordService.getFileCacheKey( file );
		this.cache.put( key, pw );


		SessionPasswordService.updateExpiryTime();
	}

	public static getByFile( file:TFile  ) : IPasswordAndHint {
		if (!SessionPasswordService.isActive){
			return SessionPasswordService.blankPasswordAndHint;
		}
		this.clearIfExpired();
		SessionPasswordService.updateExpiryTime();

		const key = SessionPasswordService.getFileCacheKey( file );
		return this.cache.get( key, SessionPasswordService.blankPasswordAndHint );
	}

	public static putByPath( pw: IPasswordAndHint, path:string ): void {
		if (!SessionPasswordService.isActive){
			return;
		}

		const key = SessionPasswordService.getPathCacheKey( path );

		this.cache.put( key, pw );

		SessionPasswordService.updateExpiryTime();
	}

	public static getByPath( path: string ) : IPasswordAndHint {
		if (!SessionPasswordService.isActive){
			return SessionPasswordService.blankPasswordAndHint;
		}
		this.clearIfExpired();
		SessionPasswordService.updateExpiryTime();

		const key = SessionPasswordService.getPathCacheKey( path );
		return this.cache.get( key, SessionPasswordService.blankPasswordAndHint );
	}

	private static getPathCacheKey( path : string ) : string {
		const parentPath = path.split('/').slice(0,-1).join('/');
		//console.debug({path,parentPath, filepath: app.workspace.getActiveFile()});

		switch (SessionPasswordService.level) {
			case SessionPasswordService.LevelParentPath: {
				return parentPath;
			}
		
			default:
				return path;
		}
	}

	private static getFileCacheKey( file : TFile ) : string {
		switch (SessionPasswordService.level) {
			case SessionPasswordService.LevelParentPath: {
				return file.parent.path;
			}
			default:
				return Utils.getFilePathExcludingExtension( file );
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

	public static clearForPath( path: string ) : void {
		const key = SessionPasswordService.getPathCacheKey( path );
		this.cache.removeKey( key );
	}

	public static clear(): void{
		this.cache.clear();
	}

}

