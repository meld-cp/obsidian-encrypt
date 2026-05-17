import { App } from "obsidian";

declare global {
	var app: App;
}

export class ObsidianEx {

	public static get showInlineTitle(): boolean {
		return (app.vault as any).getConfig('showInlineTitle') ?? true;
	}

	public static get readableLineLength(): boolean {
		return (app.vault as any).getConfig('readableLineLength') ?? true;
	}

}
