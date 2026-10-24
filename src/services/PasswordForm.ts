import { Setting, TextComponent } from 'obsidian';
import { UiHelper } from './UiHelper.ts';
import type { PasswordAndHint } from './SessionPasswordService.ts';

interface PasswordFormOptions {
	container: HTMLElement;
	isEncrypting: boolean;
	confirmPassword: boolean;
	initialValue: PasswordAndHint;
	focus: 'password' | 'confirmation';
	tabIndexes?: { password: number; confirmation: number; hint: number; submit: number };
	validateHint?: (hint: string) => string | null;
	onChange: () => void;
	onSubmit: (value: PasswordAndHint) => void;
}

export class PasswordForm {
	private password: string;
	private confirmation = '';
	private hint: string;
	private confirmationSetting: Setting;
	private hintSetting: Setting;

	constructor(private options: PasswordFormOptions) {
		this.password = options.initialValue.password;
		this.hint = options.initialValue.hint;
		const focusConfirmation = options.focus === 'confirmation' && options.confirmPassword;

		UiHelper.buildPasswordSetting({
			container: options.container,
			name: 'Password',
			placeholder: options.isEncrypting || !this.hint ? '' : `Hint: ${this.hint}`,
			initialValue: this.password,
			tabIndex: options.tabIndexes?.password,
			autoFocus: !focusConfirmation,
			onChangeCallback: value => {
				this.password = value;
				options.onChange();
			},
			onEnterCallback: value => {
				this.password = value;
				options.onChange();
				if (!value.length) return;
				if (options.confirmPassword) {
					this.focusInput(this.confirmationSetting);
				} else if (options.isEncrypting) {
					this.focusInput(this.hintSetting);
				} else {
					this.submit();
				}
			},
		});

		this.confirmationSetting = UiHelper.buildPasswordSetting({
			container: options.container,
			name: 'Confirm password',
			tabIndex: options.tabIndexes?.confirmation,
			autoFocus: focusConfirmation,
			onChangeCallback: value => {
				this.confirmation = value;
				options.onChange();
			},
			onEnterCallback: value => {
				this.confirmation = value;
				options.onChange();
				if (!value.length || !this.validate()) return;
				if (options.isEncrypting) {
					this.focusInput(this.hintSetting);
				} else {
					this.submit();
				}
			},
		});
		if (!options.confirmPassword) this.confirmationSetting.settingEl.hide();

		this.hintSetting = new Setting(options.container)
			.setName('Optional password hint')
			.setDesc(this.hintError() ?? '')
			.addText(input => {
				input.inputEl.placeholder = 'Password hint';
				if (options.tabIndexes) input.inputEl.tabIndex = options.tabIndexes.hint;
				input.setValue(this.hint);
				input.onChange(value => {
					this.hint = value;
					options.onChange();
					this.hintSetting.setDesc(this.hintError() ?? '');
				});
				input.inputEl.on('keypress', '*', (event, target) => {
					if (event.key === 'Enter' && target.instanceOf(HTMLInputElement) && target.value.length > 0) {
						event.preventDefault();
						this.submit();
					}
				});
			});
		if (!options.isEncrypting) this.hintSetting.settingEl.hide();
	}

	public addConfirmButton(): void {
		new Setting(this.options.container).addButton(button => {
			if (this.options.tabIndexes) button.buttonEl.tabIndex = this.options.tabIndexes.submit;
			button.setButtonText(this.options.isEncrypting ? 'Encrypt' : 'Decrypt').onClick(() => this.submit());
		});
	}

	private focusInput(setting: Setting): void {
		const input = setting.components.find(component => component instanceof TextComponent);
		if (input instanceof TextComponent) input.inputEl.focus();
	}

	private hintError(): string | null {
		return this.options.isEncrypting ? this.options.validateHint?.(this.hint) ?? null : null;
	}

	private validate(): boolean {
		this.options.onChange();
		this.confirmationSetting.setDesc('');
		const hintError = this.hintError();
		this.hintSetting.setDesc(hintError ?? '');
		if (hintError) return false;
		if (this.options.confirmPassword && this.password !== this.confirmation) {
			this.confirmationSetting.setDesc("Passwords don't match");
			return false;
		}
		return true;
	}

	private submit(): void {
		if (this.validate()) {
			this.options.onSubmit({ password: this.password, hint: this.hint });
		}
	}
}
