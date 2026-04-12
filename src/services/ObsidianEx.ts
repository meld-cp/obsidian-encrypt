import { App } from "obsidian";

declare global {
	// eslint-disable-next-line no-var, vars-on-top
	var app: App;
}

export class ObsidianEx {

	public static get showInlineTitle(): boolean {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		return (app.vault as any).getConfig('showInlineTitle') ?? true;
	}

	public static get readableLineLength(): boolean {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		return (app.vault as any).getConfig('readableLineLength') ?? true;
	}

}
