import { TFile } from "obsidian";
import { MemoryCache } from "./MemoryCache";
import { Utils } from "./Utils";
import {readFileSync, existsSync} from 'fs';

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
	public static LevelExternalFile = 'externalFile';
	private static allLevels = [
		SessionPasswordService.LevelFilename,
		SessionPasswordService.LevelParentPath,
		SessionPasswordService.LevelVault,
		SessionPasswordService.LevelExternalFile
	];
	private static level = SessionPasswordService.LevelVault;

	private static externalFilePaths : string[] = [];

	public static setExternalFilePaths( filePaths: string[]) {
		SessionPasswordService.externalFilePaths = filePaths;
	}

	public static setActive( isActive: boolean ) {
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
		console.debug( 'SessionPasswordService.setLevel', { level, allLevels: this.allLevels } );
		if ( SessionPasswordService.level == level ){
			return;
		}
		if ( SessionPasswordService.allLevels.contains(level) ){
			SessionPasswordService.level = level;
			return;
		}
		SessionPasswordService.level = SessionPasswordService.LevelFilename;
		this.clear();
		console.debug( 'SessionPasswordService.level', { level: SessionPasswordService.level } );
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
		this.putByKey( key, pw );

		SessionPasswordService.updateExpiryTime();
	}

	public static getByFile( file:TFile  ) : IPasswordAndHint {
		if (!SessionPasswordService.isActive){
			return SessionPasswordService.blankPasswordAndHint;
		}
		this.clearIfExpired();
		SessionPasswordService.updateExpiryTime();

		const key = SessionPasswordService.getFileCacheKey( file );
		return this.getByKey( key, SessionPasswordService.blankPasswordAndHint );
	}

	public static putByPath( pw: IPasswordAndHint, path:string ): void {
		if (!SessionPasswordService.isActive){
			return;
		}

		const key = SessionPasswordService.getPathCacheKey( path );

		this.putByKey( key, pw );

		SessionPasswordService.updateExpiryTime();
	}

	public static getByPath( path: string ) : IPasswordAndHint {
		if (!SessionPasswordService.isActive){
			return SessionPasswordService.blankPasswordAndHint;
		}
		this.clearIfExpired();
		SessionPasswordService.updateExpiryTime();

		const key = SessionPasswordService.getPathCacheKey( path );
		return this.getByKey( key, SessionPasswordService.blankPasswordAndHint );
	}

	private static getPathCacheKey( path : string ) : string {
		
		if (
			SessionPasswordService.level ==  SessionPasswordService.LevelExternalFile
			|| SessionPasswordService.level == SessionPasswordService.LevelVault
		){
			return '$' + SessionPasswordService.level;
		}

		if (SessionPasswordService.level == SessionPasswordService.LevelParentPath){
			const parentPath = path.split('/').slice(0,-1).join('/');
			return parentPath;
		}

		return path;
	}

	private static getFileCacheKey( file : TFile ) : string {
		
		if (
			SessionPasswordService.level ==  SessionPasswordService.LevelExternalFile
			|| SessionPasswordService.level == SessionPasswordService.LevelVault
		){
			return '$' + SessionPasswordService.level;
		}

		if (SessionPasswordService.level == SessionPasswordService.LevelParentPath){
			return file.parent!.path;
		}

		const fileExExt = Utils.getFilePathExcludingExtension( file );
		return fileExExt;

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

	public static clear(): number {
		const count = this.cache.getKeys().length;
		this.cache.clear();
		return count;
	}

	private static putByKey( key: string, pw: IPasswordAndHint ) : void {
		if (SessionPasswordService.level == SessionPasswordService.LevelExternalFile){
			// not supported
			console.debug( 'SessionPasswordService.putByKey is not supported for level ExternalFile' );
			return;
		}
		this.cache.put( key, pw );
	}

	public static getByKey( key: string, defaultValue: IPasswordAndHint ): IPasswordAndHint {
		console.debug( 'SessionPasswordService.getByKey', {
			'level': SessionPasswordService.level,
			key,
			defaultValue,
			'externalFilePaths': this.externalFilePaths
		} );
		if ( SessionPasswordService.level == SessionPasswordService.LevelExternalFile ){
			// get from external file, return contents of first path that exists

			for (let i = 0; i < this.externalFilePaths.length; i++) {
				const filepath = this.externalFilePaths[i];
				console.debug( 'SessionPasswordService.getByKey, checking path:', { filepath } );
				try {
					if ( !existsSync( filepath ) ) {
						console.debug( 'SessionPasswordService.getByKey, path does not exist:', { filepath } );
						continue;
					}
					const data = readFileSync(filepath, 'utf8');
					console.debug( 'SessionPasswordService.getByKey', { data } );
					return {
						password: data,
						hint: '',
					}
				} catch (err) {
					console.error(err);
				}
			}
			console.debug( 'SessionPasswordService.getByKey returning defaultValue' )
			return defaultValue;
		}
		return this.cache.get( key, defaultValue );
	}
}

