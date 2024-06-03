import { DataAdapter, TFile } from "obsidian";
import { MemoryCache } from "./MemoryCache";
import { Utils } from "./Utils";

export interface IPasswordAndHint{
	password: string;
	hint: string;
}

export class SessionPasswordService{

	private static vaultFileAdapter: DataAdapter | null = null;

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

	static init( vaultFileAdapter: DataAdapter ) {
		SessionPasswordService.vaultFileAdapter = vaultFileAdapter;	
	}

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

	public static getLevel() : string {
		return SessionPasswordService.level;
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

	public static async getByFile( file:TFile  ) : Promise<IPasswordAndHint> {
		if (!SessionPasswordService.isActive){
			return SessionPasswordService.blankPasswordAndHint;
		}
		this.clearIfExpired();
		SessionPasswordService.updateExpiryTime();

		const key = SessionPasswordService.getFileCacheKey( file );
		return await this.getByKeyAsync( key, SessionPasswordService.blankPasswordAndHint );
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

	public static async getByPathAsync( path: string ) : Promise<IPasswordAndHint> {
		if (!SessionPasswordService.isActive){
			return SessionPasswordService.blankPasswordAndHint;
		}
		this.clearIfExpired();
		SessionPasswordService.updateExpiryTime();

		const key = SessionPasswordService.getPathCacheKey( path );
		return await this.getByKeyAsync( key, SessionPasswordService.blankPasswordAndHint );
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
			return;
		}
		this.cache.put( key, pw );
	}

	private static getByKey( key: string, defaultValue: IPasswordAndHint ): IPasswordAndHint {
		console.debug( 'SessionPasswordService.getByKey', { 'level': SessionPasswordService.level, key, defaultValue } );
		return this.cache.get( key, defaultValue );
	}

	public static async getByKeyAsync( key: string, defaultValue: IPasswordAndHint ): Promise<IPasswordAndHint> {
		if ( SessionPasswordService.level == SessionPasswordService.LevelExternalFile ){
			// get from external file, return contents of first path that exists
			
			for (let i = 0; i < this.externalFilePaths.length; i++) {
				const relFilePath = this.externalFilePaths[i];
				try {
					const contents = await this.fetchFileContents(relFilePath);
					return {
						password: contents,
						hint: '',
					}
				} catch (err) {
					console.error(err, {relFilePath});
				}
			}
			return defaultValue;
		}
		return this.cache.get( key, defaultValue );
	}

	private static async fetchFileContents( vaultRelativePath : string ) : Promise<string> {
		if (SessionPasswordService.vaultFileAdapter == null){
			throw new Error('SessionPasswordService.vaultFileAdapter == null');
		}
		const resUrl = SessionPasswordService.vaultFileAdapter.getResourcePath( vaultRelativePath );
		const res = await fetch ( resUrl  );
		return await res.text();
	}
}