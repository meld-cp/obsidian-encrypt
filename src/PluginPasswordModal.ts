import { App, Modal, Setting } from 'obsidian';
import { PasswordForm } from './services/PasswordForm.ts';
import type { PasswordAndHint } from './services/SessionPasswordService.ts';

export default class PluginPasswordModal extends Modal {
	public resultConfirmed = false;
	public resultPassword: PasswordAndHint;

	constructor(
		app: App,
		private title: string,
		private isEncrypting: boolean,
		private confirmPassword: boolean,
		private defaultPassword: PasswordAndHint | null,
	) {
		super(app);
	}

	onOpen() {
		this.modalEl.classList.add('meld-encrypt-password-dialog');
		const { contentEl } = this;
		contentEl.empty();
		this.invalidate();
		new Setting(contentEl).setHeading().setName(this.title);

		const initialValue = this.defaultPassword ?? { password: '', hint: '' };
		const form = new PasswordForm({
			container: contentEl,
			isEncrypting: this.isEncrypting,
			confirmPassword: this.confirmPassword,
			initialValue,
			focus: initialValue.password ? 'confirmation' : 'password',
			tabIndexes: { password: 0, confirmation: 1, hint: 2, submit: 99 },
			onChange: () => this.invalidate(),
			onSubmit: value => {
				this.resultPassword = value;
				this.resultConfirmed = true;
				this.close();
			},
		});
		form.addConfirmButton();
	}

	open2Async(): Promise<PasswordAndHint | null> {
		return new Promise(resolve => {
			this.onClose = () => resolve(this.resultConfirmed ? this.resultPassword : null);
			this.open();
		});
	}

	async openAsync(): Promise<PasswordAndHint> {
		const result = await this.open2Async();
		if (result === null) {
			// Preserve the existing cancellation contract for callers of openAsync().
			// eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors -- Preserve the public cancellation contract that rejects without a value.
			return Promise.reject();
		}
		return result;
	}

	private invalidate() {
		this.resultConfirmed = false;
		this.resultPassword = { password: '', hint: '' };
	}
}
