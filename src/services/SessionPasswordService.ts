import { TFile } from "obsidian";
import { MemoryCache } from "./MemoryCache";
import { Utils } from "./Utils";

export interface IPasswordAndHint{
	password: string;
	hint: string;
}

export class SessionPasswordService{

	private static isActive = true;

	public static blankPasswordAndHint : IPasswordAndHint = { password:'', hint:'' };

	private static cache = new MemoryCache<IPasswordAndHint>();
	
	private static baseMinutesToExpire = 0;
	private static expiryTime : number | null = null;

	public static LevelFilename = 'filename';
	public static LevelParentPath = 'parentPath';
	public static LevelVault = 'vault';
	private static allLevels = [
		SessionPasswordService.LevelFilename,
		SessionPasswordService.LevelParentPath,
		SessionPasswordService.LevelVault,
	];
	private static level = SessionPasswordService.LevelVault;

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

	public static getByFileOrNull( file:TFile  ) : IPasswordAndHint | null {
		if (!SessionPasswordService.isActive){
			return null;
		}
		this.clearIfExpired();
		SessionPasswordService.updateExpiryTime();

		const key = SessionPasswordService.getFileCacheKey( file );
		
		return this.cache.getOrNull( key );
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
		//console.debug('getPathCacheKey', {path});

		const parentPath = path.split('/').slice(0,-1).join('/');

		switch (SessionPasswordService.level) {
			case SessionPasswordService.LevelVault: {
				//console.debug('getPathCacheKey: $vault');
				return '$vault';
			}

			case SessionPasswordService.LevelParentPath: {
				//console.debug('getPathCacheKey: ', parentPath);
				return parentPath;
			}
		
			default:
				//console.debug('getPathCacheKey: ', path);
				return path;
		}
	}

	private static getFileCacheKey( file : TFile ) : string {
		//console.debug('getFileCacheKey', {file});
		switch (SessionPasswordService.level) {
			case SessionPasswordService.LevelVault: {
				//console.debug('getFileCacheKey: $vault');
				return '$vault';
			}
			case SessionPasswordService.LevelParentPath: {
				//console.debug('getFileCacheKey:', file.parent.path);
				return file.parent!.path;
			}
			default:
				const fileExExt = Utils.getFilePathExcludingExtension( file );
				//console.debug('getFileCacheKey:', fileExExt);
				return fileExExt;
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

	public static clear(): number {
		const count = this.cache.getKeys().length;
		this.cache.clear();
		return count;
	}

}

