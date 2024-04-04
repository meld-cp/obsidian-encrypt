import { TFile, normalizePath } from "obsidian";

export class Utils{


	public static getFilePathWithNewExtension( file: TFile, newExtension : string ) : string {
		return normalizePath( file.parent?.path + '/'  + file.basename + '.' + newExtension );
	}

	public static getFilePathExcludingExtension( file: TFile ) : string {
		return normalizePath( file.parent?.path + '/'  + file.basename );
	}


}