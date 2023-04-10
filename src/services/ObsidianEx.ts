export class ObsidianEx {


	// // eslint-disable-next-line @typescript-eslint/no-explicit-any
	// public static get appConfig(): any {
	// 	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	// 	app.vault.getConfig('readableLineLength')
	// 	return (app.vault as any)?.config;
	// }

	public static get showInlineTitle(): boolean {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		return (app.vault as any).getConfig('showInlineTitle') ?? true;
	}

	public static get readableLineLength(): boolean {
		//return ( ObsidianEx.appConfig.readableLineLength as boolean ) ??  true;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		return (app.vault as any).getConfig('readableLineLength') ?? true;
	}

}