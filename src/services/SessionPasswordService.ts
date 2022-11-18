import { TFile } from "obsidian";
import { MemoryCache } from "./MemoryCache";

interface IPasswordAndHint{
	password: string;
	hint: string;
}

export class SessionPasswordService{

	private static isActive = true;

	private static blankPasswordAndHint : IPasswordAndHint = {password:'', hint:'' };

	private static cache = new MemoryCache<IPasswordAndHint>();
	
	private static baseMinutesToExpire = 0;
	private static expiryTime : number | null = null;

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

	public static updateExpiryTime() : void {
		if (
			SessionPasswordService.baseMinutesToExpire == 0
			|| SessionPasswordService.baseMinutesToExpire == null
		){
			SessionPasswordService.expiryTime = null;
		} else {
			SessionPasswordService.expiryTime = Date.now() + SessionPasswordService.baseMinutesToExpire * 1000 * 60;
		}
		console.debug('SessionPasswordService.updateExpiryTime', {expiryTime:SessionPasswordService.expiryTime});
	}
	
	public static put( pw: IPasswordAndHint, file : TFile ): void {
		console.debug('SessionPasswordService.put', {pw, file})
		console.debug( file.parent.path );

		this.cache.put(file.path, pw);
		this.cache.put(file.parent.path, pw)
		this.cache.put(file.basename, pw);

		SessionPasswordService.updateExpiryTime();
	}

	public static getExact( file : TFile ): IPasswordAndHint {
		this.clearIfExpired();
		SessionPasswordService.updateExpiryTime();
		return this.cache.get(file.path, SessionPasswordService.blankPasswordAndHint);
	}

	public static getBestGuess( file : TFile ): IPasswordAndHint {
		this.clearIfExpired();
		//console.debug('SessionPasswordService.getBestGuess', {file})
		SessionPasswordService.updateExpiryTime();
		
		const buestGuess = this.cache.getFirst(
			[
				file.path,
				file.parent.path,
				file.basename
			],
			SessionPasswordService.blankPasswordAndHint
		);
		console.debug('SessionPasswordService.getBestGuess', {file, buestGuess})

		return buestGuess;
		
		
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


	public static clear(): void{
		this.cache.clear();
	}

}

