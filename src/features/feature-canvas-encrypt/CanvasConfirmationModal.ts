import { App, Modal, Setting } from 'obsidian';

export class CanvasConfirmationModal extends Modal {
	private resolve: ((confirmed: boolean) => void) | null = null;
	private confirmed = false;

	constructor(app: App, private heading: string, private warning: string, private confirmText: string) {
		super(app);
	}

	onOpen(): void {
		this.contentEl.empty();
		new Setting(this.contentEl).setHeading().setName(this.heading);
		this.contentEl.createEl('p', { text: this.warning });
		new Setting(this.contentEl)
			.addButton(button => button.setButtonText('Cancel').onClick(() => this.close()))
			.addButton(button => button.setWarning().setButtonText(this.confirmText).onClick(() => {
				this.confirmed = true;
				this.close();
			}));
	}

	onClose(): void {
		this.contentEl.empty();
		this.resolve?.(this.confirmed);
		this.resolve = null;
	}

	openAsync(): Promise<boolean> {
		return new Promise(resolve => {
			this.resolve = resolve;
			this.open();
		});
	}
}
