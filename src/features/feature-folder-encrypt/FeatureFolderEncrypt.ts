import MeldEncrypt from "../../main.ts";
import { IMeldEncryptPluginSettings } from "../../settings/MeldEncryptPluginSettings.ts";
import { IMeldEncryptPluginFeature } from "../IMeldEncryptPluginFeature.ts";
import { Notice, TFile, TFolder, TextFileView } from "obsidian";
import PluginPasswordModal from "../../PluginPasswordModal.ts";
import { PasswordAndHint, SessionPasswordService } from "../../services/SessionPasswordService.ts";
import { FileDataHelper, JsonFileEncoding } from "../../services/FileDataHelper.ts";
import { Utils } from "../../services/Utils.ts";
import { ENCRYPTED_FILE_EXTENSIONS, ENCRYPTED_FILE_EXTENSION_DEFAULT } from "../../services/Constants.ts";
import { EncryptedMarkdownView } from "../feature-whole-note-encrypt/EncryptedMarkdownView.ts";

export default class FeatureFolderEncrypt implements IMeldEncryptPluginFeature {

	plugin: MeldEncrypt;

	async onload(plugin: MeldEncrypt, settings: IMeldEncryptPluginSettings) {
		this.plugin = plugin;

		// Commands
		this.plugin.addCommand({
			id: 'meld-encrypt-folder-encrypt',
			name: 'Encrypt all notes in current folder',
			icon: 'folder-lock',
			checkCallback: (checking) => {
				const file = this.plugin.app.workspace.getActiveFile();
				if (!file) return false;
				const folder = file.parent;
				if (!folder) return false;
				if (checking) return this.folderHasMdFiles(folder);
				this.processEncryptFolder(folder, false);
			},
		});

		this.plugin.addCommand({
			id: 'meld-encrypt-folder-decrypt',
			name: 'Decrypt all notes in current folder',
			icon: 'folder-open',
			checkCallback: (checking) => {
				const file = this.plugin.app.workspace.getActiveFile();
				if (!file) return false;
				const folder = file.parent;
				if (!folder) return false;
				if (checking) return this.folderHasEncryptedFiles(folder);
				this.processDecryptFolder(folder, false);
			},
		});

		// Context menu on folders
		this.plugin.registerEvent(
			this.plugin.app.workspace.on('file-menu', (menu, file) => {
				if (!(file instanceof TFolder)) return;

				const folder = file as TFolder;

				if (this.folderHasMdFiles(folder)) {
					menu.addItem((item) => {
						item
							.setTitle('Encrypt all notes in folder')
							.setIcon('folder-lock')
							.onClick(() => this.processEncryptFolder(folder, false));
					});
					menu.addItem((item) => {
						item
							.setTitle('Encrypt all notes in folder (recursive)')
							.setIcon('folder-lock')
							.onClick(() => this.processEncryptFolder(folder, true));
					});
				}

				if (this.folderHasEncryptedFiles(folder)) {
					menu.addItem((item) => {
						item
							.setTitle('Decrypt all notes in folder')
							.setIcon('folder-open')
							.onClick(() => this.processDecryptFolder(folder, false));
					});
					menu.addItem((item) => {
						item
							.setTitle('Decrypt all notes in folder (recursive)')
							.setIcon('folder-open')
							.onClick(() => this.processDecryptFolder(folder, true));
					});
				}
			})
		);
	}

	onunload(): void { }

	buildSettingsUi(containerEl: HTMLElement, saveSettingCallback: () => Promise<void>): void { }

	// --- helpers ---

	private getMdFiles(folder: TFolder, recursive: boolean): TFile[] {
		const results: TFile[] = [];
		for (const child of folder.children) {
			if (child instanceof TFile && child.extension === 'md') {
				results.push(child);
			}
			if (recursive && child instanceof TFolder) {
				results.push(...this.getMdFiles(child, true));
			}
		}
		return results;
	}

	private getEncryptedFiles(folder: TFolder, recursive: boolean): TFile[] {
		const results: TFile[] = [];
		for (const child of folder.children) {
			if (child instanceof TFile && ENCRYPTED_FILE_EXTENSIONS.contains(child.extension)) {
				results.push(child);
			}
			if (recursive && child instanceof TFolder) {
				results.push(...this.getEncryptedFiles(child, true));
			}
		}
		return results;
	}

	private folderHasMdFiles(folder: TFolder): boolean {
		return folder.children.some(c => c instanceof TFile && c.extension === 'md');
	}

	private folderHasEncryptedFiles(folder: TFolder): boolean {
		return folder.children.some(c => c instanceof TFile && ENCRYPTED_FILE_EXTENSIONS.contains(c.extension));
	}

	// --- encrypt folder ---

	private async processEncryptFolder(folder: TFolder, recursive: boolean) {
		const files = this.getMdFiles(folder, recursive);
		if (files.length === 0) {
			new Notice('No .md files found in this folder.');
			return;
		}

		try {
			// Ask for password once
			const pm = new PluginPasswordModal(
				this.plugin.app,
				`Encrypt ${files.length} note(s)`,
				true,
				true,
				{ password: '', hint: '' }
			);
			const password = await pm.openAsync();

			if (!pm.resultConfirmed) return;

			let successCount = 0;
			let errorCount = 0;

			new Notice(`🔐 Encrypting ${files.length} note(s)...`);

			for (const file of files) {
				try {
					await this.encryptSingleFile(file, password);
					successCount++;
				} catch (e) {
					console.error(`Failed to encrypt ${file.path}:`, e);
					errorCount++;
				}
			}

			if (errorCount === 0) {
				new Notice(`🔐 Encrypted ${successCount} note(s) successfully.`);
			} else {
				new Notice(`🔐 Encrypted ${successCount} note(s). ${errorCount} failed.`, 10000);
			}
		} catch (error) {
			if (error) {
				new Notice(String(error), 10000);
			}
		}
	}

	// --- decrypt folder ---

	private async processDecryptFolder(folder: TFolder, recursive: boolean) {
		const files = this.getEncryptedFiles(folder, recursive);
		if (files.length === 0) {
			new Notice('No encrypted files found in this folder.');
			return;
		}

		try {
			// Ask for password once
			const pm = new PluginPasswordModal(
				this.plugin.app,
				`Decrypt ${files.length} note(s)`,
				false,
				false,
				{ password: '', hint: '' }
			);
			const password = await pm.openAsync();

			if (!pm.resultConfirmed) return;

			let successCount = 0;
			let errorCount = 0;

			new Notice(`🔓 Decrypting ${files.length} note(s)...`);

			for (const file of files) {
				try {
					await this.decryptSingleFile(file, password.password);
					successCount++;
				} catch (e) {
					console.error(`Failed to decrypt ${file.path}:`, e);
					errorCount++;
				}
			}

			if (errorCount === 0) {
				new Notice(`🔓 Decrypted ${successCount} note(s) successfully.`);
			} else {
				new Notice(`🔓 Decrypted ${successCount} note(s). ${errorCount} failed.`, 10000);
			}
		} catch (error) {
			if (error) {
				new Notice(String(error), 10000);
			}
		}
	}

	// --- single file operations ---

	private async encryptSingleFile(file: TFile, passwordAndHint: PasswordAndHint) {
		// Close the file if open
		this.closeFileViews(file);

		// Read, encrypt, rename
		const content = await this.plugin.app.vault.read(file);
		const encryptedData = await FileDataHelper.encrypt(passwordAndHint.password, passwordAndHint.hint, content);
		const encryptedContent = JsonFileEncoding.encode(encryptedData);

		const newFilepath = Utils.getFilePathWithNewExtension(file, ENCRYPTED_FILE_EXTENSION_DEFAULT);
		await this.plugin.app.fileManager.renameFile(file, newFilepath);
		await this.plugin.app.vault.modify(file, encryptedContent);

		SessionPasswordService.putByFile(passwordAndHint, file);
	}

	private async decryptSingleFile(file: TFile, password: string) {
		// Close the file if open
		this.closeFileViews(file);

		// Read, decrypt, rename
		const encryptedFileContent = await this.plugin.app.vault.read(file);
		const encryptedData = JsonFileEncoding.decode(encryptedFileContent);
		const content = await FileDataHelper.decrypt(encryptedData, password);

		if (content == null) {
			throw new Error(`Decryption failed for ${file.path}`);
		}

		const newFilepath = Utils.getFilePathWithNewExtension(file, 'md');
		await this.plugin.app.fileManager.renameFile(file, newFilepath);
		await this.plugin.app.vault.modify(file, content);

		SessionPasswordService.putByFile({ password, hint: encryptedData.hint }, file);
	}

	private closeFileViews(file: TFile) {
		this.plugin.app.workspace.iterateAllLeaves(l => {
			if (l.view instanceof TextFileView && l.view.file == file) {
				if (l.view instanceof EncryptedMarkdownView) {
					l.view.detachSafely();
				} else {
					l.detach();
				}
			}
		});
	}
}
