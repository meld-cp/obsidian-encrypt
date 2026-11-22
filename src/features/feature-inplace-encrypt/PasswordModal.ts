import { App, Modal, Setting } from 'obsidian';
import { SessionPasswordService } from '../../services/SessionPasswordService.ts';
import { PasswordForm } from '../../services/PasswordForm.ts';
import { getInlineHintError } from './InlineHintValidation.ts';
import { t } from '../../i18n/i18n.ts';

export default class PasswordModal extends Modal {
	public resultConfirmed = false;
	public resultPassword?: string | null = null;
	public resultHint: string;
	public resultShowInReadingView?: boolean | null = null;
	public resultTextToEncrypt?: string | null = null;

	constructor(
		app: App,
		private isEncrypting: boolean,
		private confirmPassword: boolean,
		public showInReadingView: boolean,
		private defaultPassword: string | null = null,
		private defaultHint: string | null = null,
		public showTextToEncrypt = false,
	) {
		super(app);
	}

	onOpen() {
		this.modalEl.classList.add('meld-encrypt-password-dialog');
		const { contentEl } = this;
		contentEl.empty();
		contentEl.classList.add('meld-encrypt-password-modal');
		this.invalidate();

		let showInReadingView = this.showInReadingView;
		let textToEncrypt = '';
		this.setTitle(this.isEncrypting ? t('modal.encryptText.title') : t('modal.decryptText.title'));
		if (this.isEncrypting && SessionPasswordService.getLevel() === SessionPasswordService.LevelKeychain) {
			new Setting(contentEl).setDesc(t('keychain.passwordChangeExplanation'));
		}

		const form = new PasswordForm({
			container: contentEl,
			isEncrypting: this.isEncrypting,
			confirmPassword: this.confirmPassword,
			initialValue: { password: this.defaultPassword ?? '', hint: this.defaultHint ?? '' },
			focus: 'password',
			validateHint: getInlineHintError,
			onChange: () => this.invalidate(),
			onSubmit: ({ password, hint }) => {
				this.resultPassword = password;
				this.resultHint = hint;
				this.resultShowInReadingView = showInReadingView;
				this.resultTextToEncrypt = textToEncrypt;
				this.resultConfirmed = true;
				this.close();
			},
		});

		const visibilitySetting = new Setting(contentEl)
			.setName(t('form.showMarkerInReadingView'))
			.addToggle(toggle => {
				toggle.setValue(showInReadingView).onChange(value => {
					showInReadingView = value;
					this.invalidate();
				});
			});
		if (!this.isEncrypting) visibilitySetting.settingEl.hide();

		const textSetting = new Setting(contentEl)
			.setName(t('form.textToEncrypt'))
			.addTextArea(input => {
				input.setValue('').onChange(value => {
					textToEncrypt = value;
					this.invalidate();
				});
				input.inputEl.rows = 5;
			});
		if (!this.showTextToEncrypt) textSetting.settingEl.hide();

		form.addConfirmButton();
	}

	private invalidate() {
		this.resultConfirmed = false;
		this.resultPassword = null;
		this.resultHint = '';
		this.resultShowInReadingView = null;
		this.resultTextToEncrypt = '';
	}
}
