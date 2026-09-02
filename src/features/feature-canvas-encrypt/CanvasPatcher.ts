import { Notice, TFile, type App } from 'obsidian';
import type { PasswordAndHint } from '../../services/SessionPasswordService.ts';
import {
	decodeEncryptedCanvasWrapper, decryptCanvasData, encryptCanvasData,
	isEncryptedCanvasWrapper, verifyEncryptedCanvas, type EncryptedCanvasWrapper,
} from './CanvasEncryptionWrapper.ts';
import { assertCanvasData, isNativeCanvasView, type CanvasData, type NativeCanvasView } from './CanvasTypes.ts';
import {
	embedPendingImages, hydrateEncryptedNotes, imageFileToMarkdown, isImagePath, markUnencryptedFileNodes,
	isUnencryptedFileNodeData,
} from './CanvasEmbeddedContent.ts';

type CanvasMethod = (...args: never[]) => unknown;
type CanvasPrototype = Record<string, CanvasMethod>;
type PasswordResolver = (file: TFile, hint: string, forcePrompt: boolean) => Promise<PasswordAndHint | null>;

interface ViewState {
	passwordAndHint: PasswordAndHint | null;
	wrapperText: string;
	savingEnabled: boolean;
	saveQueue: Promise<void>;
	loadGeneration: number;
	loadInProgress: boolean;
	pendingImagePaths: Set<string>;
	allowUnencryptedImageUntil: number;
}

export class CanvasPatcher {
	private prototype: CanvasPrototype | null = null;
	private vaultWriteGuardInstalled = false;
	private restorers: Array<() => void> = [];
	private protectedPaths = new Set<string>();
	private states = new WeakMap<NativeCanvasView, ViewState>();
	private openViewsByPath = new Map<string, NativeCanvasView>();
	private acceptingLoads = true;

	constructor(private app: App, private resolvePassword: PasswordResolver) {}

	installWriteGuard(): void {
		if (this.vaultWriteGuardInstalled) return;
		this.patchVaultWrites();
		this.vaultWriteGuardInstalled = true;
	}

	isInstalled(): boolean { return this.prototype !== null; }
	hasProtectedFiles(): boolean { return this.protectedPaths.size > 0; }
	hasViewState(view: NativeCanvasView): boolean { return this.states.has(view); }
	stopAcceptingLoads(): void { this.acceptingLoads = false; }

	tryInstall(view: unknown): boolean {
		if (!isNativeCanvasView(view)) return false;
		if (this.prototype !== null) return true;
		this.prototype = Object.getPrototypeOf(view) as CanvasPrototype;
		this.patchCanvasPrototype();
		this.installWriteGuard();
		console.info('Meld encrypted Canvas hooks installed', {
			methods: ['getViewData', 'setViewData', 'save'],
		});
		return true;
	}

	markProtected(file: TFile): void { this.protectedPaths.add(file.path); }
	unmarkProtected(file: TFile): void { this.protectedPaths.delete(file.path); }
	isProtected(file: TFile | null): boolean { return file !== null && this.protectedPaths.has(file.path); }

	registerUnlocked(view: NativeCanvasView, wrapperText: string, passwordAndHint: PasswordAndHint): void {
		this.states.set(view, {
			passwordAndHint, wrapperText, savingEnabled: true,
			saveQueue: Promise.resolve(), loadGeneration: 0, loadInProgress: false,
			pendingImagePaths: new Set(), allowUnencryptedImageUntil: 0,
		});
		if (view.file !== null) this.markProtected(view.file);
	}

	trackCreatedImage(view: NativeCanvasView, file: TFile): void {
		const state = this.states.get(view);
		if (state?.savingEnabled && isImagePath(file.path)
			&& Date.now() > state.allowUnencryptedImageUntil) state.pendingImagePaths.add(file.path);
	}

	allowNextCreatedImageUnencrypted(view: NativeCanvasView): void {
		const state = this.states.get(view);
		if (state?.savingEnabled) state.allowUnencryptedImageUntil = Date.now() + 5_000;
	}

	async handleImagePaste(view: NativeCanvasView, event: ClipboardEvent): Promise<boolean> {
		const state = this.states.get(view);
		const createTextNode = view.canvas.createTextNode;
		if (!state?.savingEnabled || state.passwordAndHint === null || typeof createTextNode !== 'function') return false;
		const image = Array.from(event.clipboardData?.files ?? []).find(file => file.type.startsWith('image/'));
		if (image === undefined) return false;
		const text = await imageFileToMarkdown(image);
		const pos = typeof view.canvas.posFromEvt === 'function'
			? view.canvas.posFromEvt(event as unknown as MouseEvent) : { x: 0, y: 0 };
		createTextNode.call(view.canvas, { pos, size: { width: 400, height: 300 }, text });
		view.canvas.requestSave();
		return true;
	}

	async assertDiskUnchanged(view: NativeCanvasView): Promise<void> {
		if (view.file === null) throw new Error('Canvas file is unavailable');
		const state = this.states.get(view);
		if (state === undefined || state.wrapperText.length === 0) {
			throw new Error('Encrypted Canvas state is unavailable');
		}
		const currentDiskText = await this.app.vault.read(view.file);
		if (currentDiskText !== state.wrapperText) {
			throw new Error(`Encrypted Canvas changed externally: ${view.file.path}`);
		}
	}

	disable(view: NativeCanvasView): void {
		const state = this.states.get(view);
		if (state === undefined) return;
		state.savingEnabled = false;
		state.passwordAndHint = null;
		state.wrapperText = '';
	}

	rename(oldPath: string, newPath: string): void {
		if (this.protectedPaths.delete(oldPath)) this.protectedPaths.add(newPath);
		const view = this.openViewsByPath.get(oldPath);
		if (view !== undefined) {
			this.openViewsByPath.delete(oldPath);
			this.openViewsByPath.set(newPath, view);
		}
	}

	renameFolder(oldPath: string, newPath: string): void {
		const prefix = `${oldPath}/`;
		for (const path of [...this.protectedPaths]) {
			if (!path.startsWith(prefix)) continue;
			this.rename(path, `${newPath}/${path.slice(prefix.length)}`);
		}
	}

	uninstall(): void {
		for (const restore of this.restorers.reverse()) restore();
		this.restorers = [];
		this.prototype = null;
		this.vaultWriteGuardInstalled = false;
		this.protectedPaths.clear();
		this.openViewsByPath.clear();
	}

	private patchCanvasPrototype(): void {
		const patcher = this;
		const originalGetViewData = this.prototype?.getViewData;
		if (typeof originalGetViewData !== 'function') throw new Error('Canvas getViewData is unavailable');

		this.patch('setViewData', original => function(this: NativeCanvasView, data: string, clear: boolean): void {
			const currentState = patcher.states.get(this);
			if (patcher.isProtected(this.file) && currentState?.savingEnabled) {
				if (data !== currentState.wrapperText) {
					new Notice(`Encrypted Canvas changed externally; reload blocked: ${this.file?.path ?? 'unknown file'}`, 0);
				}
				return;
			}
			const wrapper = decodeEncryptedCanvasWrapper(data);
			if (wrapper === null) {
				if (patcher.isProtected(this.file)) {
					new Notice(`Refused invalid encrypted Canvas data: ${this.file?.path ?? 'unknown file'}`);
					return;
				}
				original.call(this, data, clear);
				return;
			}
			const generation = patcher.prepareEncryptedLoad(this, data);
			if (generation === null) return;
			original.call(this, '{"nodes":[],"edges":[]}', true);
			void patcher.unlockAndLoad(
				this, wrapper, data, generation,
				canvasData => original.call(this, JSON.stringify(canvasData), clear),
			);
		});

		if (typeof this.prototype?.onLoadFile === 'function') {
			this.patch('onLoadFile', original => async function(this: NativeCanvasView, file: TFile): Promise<void> {
				const currentState = patcher.states.get(this);
				if (patcher.isProtected(file) && currentState?.savingEnabled) {
					const diskText = await patcher.app.vault.read(file);
					if (diskText !== currentState.wrapperText) {
						new Notice(`Encrypted Canvas changed externally; reload blocked: ${file.path}`, 0);
					}
					return;
				}
				await original.call(this, file);
				if (!patcher.isProtected(file) || patcher.states.has(this)) return;
				const wrapperText = await patcher.app.vault.read(file);
				const wrapper = decodeEncryptedCanvasWrapper(wrapperText);
				if (wrapper === null) {
					new Notice(`Encrypted Canvas wrapper is invalid: ${file.path}`);
					return;
				}
				const generation = patcher.prepareEncryptedLoad(this, wrapperText);
				if (generation === null) return;
				await patcher.unlockAndLoad(
					this, wrapper, wrapperText, generation,
					canvasData => this.canvas.setData(canvasData),
				);
			});
		}

		this.patch('getViewData', original => function(this: NativeCanvasView): string {
			if (!patcher.isProtected(this.file)) return original.call(this) as string;
			const state = patcher.states.get(this);
			if (state?.wrapperText && isEncryptedCanvasWrapper(state.wrapperText)) {
				return state.wrapperText;
			}
			throw new Error(`Encrypted Canvas serialization is unavailable: ${this.file?.path ?? 'unknown file'}`);
		});

		this.patch('save', original => async function(this: NativeCanvasView, clear?: boolean): Promise<void> {
			if (!patcher.isProtected(this.file)) {
				await original.call(this, clear);
				return;
			}
			const state = patcher.states.get(this);
			if (state === undefined || !state.savingEnabled || state.passwordAndHint === null) {
				console.info('Meld encrypted Canvas save blocked while locked', { path: this.file?.path });
				return;
			}
			const queuedSave = async (): Promise<void> => {
				await patcher.assertDiskUnchanged(this);
				const plaintext = originalGetViewData.call(this) as string;
				const data: unknown = JSON.parse(plaintext);
				assertCanvasData(data);
				const credentials = state.passwordAndHint;
				if (credentials === null) throw new Error('Canvas password is unavailable');
				const hydrated = await hydrateEncryptedNotes(patcher.app, data, credentials.password);
				if (hydrated.failedPaths.length > 0) new Notice('Some encrypted notes use a different password and remain locked');
				const embedded = await embedPendingImages(patcher.app, hydrated.data, state.pendingImagePaths);
				const marked = markUnencryptedFileNodes(embedded.data);
				if (marked.changed || hydrated.hydratedPaths.length > 0 || embedded.embeddedPaths.length > 0) {
					this.canvas.setData(marked.data);
					patcher.decorateUnencryptedNodes(this);
				}
				const encrypted = await encryptCanvasData(marked.data, credentials.password, credentials.hint);
				if (!await verifyEncryptedCanvas(encrypted, credentials.password, marked.data)) {
					throw new Error('Encrypted Canvas verification failed');
				}
				state.wrapperText = encrypted;
				await original.call(this, clear);
				if (this.file === null || await patcher.app.vault.read(this.file) !== encrypted) {
					throw new Error('Encrypted Canvas disk verification failed');
				}
				for (const path of embedded.embeddedPaths) {
					const file = patcher.app.vault.getAbstractFileByPath(path);
					if (file instanceof TFile) await patcher.app.vault.delete(file, true);
					state.pendingImagePaths.delete(path);
				}
			};
			state.saveQueue = state.saveQueue.then(queuedSave, queuedSave);
			try { await state.saveQueue; }
			catch (error) {
				console.error('Meld encrypted Canvas save failed', {
					path: this.file?.path,
					errorType: error instanceof Error ? error.name : typeof error,
				});
				new Notice(`Encrypted Canvas was not saved: ${this.file?.path ?? 'unknown file'}`);
				throw error;
			}
		});

		if (typeof this.prototype?.onUnloadFile === 'function') {
			this.patch('onUnloadFile', original => async function(this: NativeCanvasView, file: TFile): Promise<void> {
				try { await original.call(this, file); }
				finally {
					if (patcher.openViewsByPath.get(file.path) === this) patcher.openViewsByPath.delete(file.path);
					patcher.disable(this);
				}
			});
		}
	}

	private prepareEncryptedLoad(view: NativeCanvasView, wrapperText: string): number | null {
		if (!this.acceptingLoads) return null;
		if (view.file === null) return null;
		const currentState = this.states.get(view);
		if (currentState?.loadInProgress) return null;
		this.markProtected(view.file);
		const existingView = this.openViewsByPath.get(view.file.path);
		if (existingView !== undefined && existingView !== view) {
			new Notice(`Encrypted Canvas is already open: ${view.file.path}`);
			view.leaf.detach();
			return null;
		}
		this.openViewsByPath.set(view.file.path, view);
		const state: ViewState = currentState ?? {
			passwordAndHint: null, wrapperText, savingEnabled: false,
			saveQueue: Promise.resolve(), loadGeneration: 0, loadInProgress: false,
			pendingImagePaths: new Set(), allowUnencryptedImageUntil: 0,
		};
		state.wrapperText = wrapperText;
		state.savingEnabled = false;
		state.loadInProgress = true;
		state.loadGeneration += 1;
		this.states.set(view, state);
		return state.loadGeneration;
	}

	private async unlockAndLoad(
		view: NativeCanvasView, wrapper: EncryptedCanvasWrapper, wrapperText: string,
		generation: number, applyData: (data: CanvasData) => void,
	): Promise<void> {
		if (!this.acceptingLoads) return;
		if (view.file === null) return;
		let credentials = await this.resolvePassword(view.file, wrapper.meldEncryptedCanvas.payload.hint, false);
		if (!this.acceptingLoads) return;
		let data = credentials === null ? null : await decryptCanvasData(wrapper, credentials.password);
		while (credentials !== null && data === null) {
			new Notice('Decryption failed');
			credentials = await this.resolvePassword(view.file, wrapper.meldEncryptedCanvas.payload.hint, true);
			data = credentials === null ? null : await decryptCanvasData(wrapper, credentials.password);
			if (!this.acceptingLoads) return;
		}
		if (credentials === null) {
			const state = this.states.get(view);
			if (state?.loadGeneration === generation) state.loadInProgress = false;
			this.disable(view);
			view.leaf.detach();
			return;
		}
		const state = this.states.get(view);
		if (data === null || state === undefined || state.loadGeneration !== generation) {
			if (state?.loadGeneration === generation) state.loadInProgress = false;
			new Notice(`Unable to decrypt Canvas: ${view.file.path}`);
			this.disable(view);
			view.leaf.detach();
			return;
		}
		const marked = markUnencryptedFileNodes(data);
		const hydrated = await hydrateEncryptedNotes(this.app, marked.data, credentials.password);
		if (hydrated.failedPaths.length > 0) new Notice('Some encrypted notes use a different password and remain locked');
		state.passwordAndHint = credentials;
		state.wrapperText = wrapperText;
		state.savingEnabled = true;
		state.loadInProgress = false;
		applyData(hydrated.data);
		this.decorateUnencryptedNodes(view);
		console.info('Meld encrypted Canvas loaded', { path: view.file.path });
	}

	decorateUnencryptedNodes(view: NativeCanvasView): void {
		queueMicrotask(() => {
			for (const node of view.canvas.nodes?.values() ?? []) {
				const element = node.nodeEl;
				if (element === undefined) continue;
				const data = node.getData?.();
				const unencrypted = data !== undefined
					&& (data.meldUnencrypted === true || isUnencryptedFileNodeData(data));
				element.classList.toggle('meld-canvas-unencrypted', unencrypted);
				const existingBadge = element.querySelector<HTMLElement>(':scope > .meld-canvas-unencrypted-badge');
				if (!unencrypted) {
					existingBadge?.remove();
					continue;
				}
				if (existingBadge === null) {
					const badge = document.createElement('div');
					badge.className = 'meld-canvas-unencrypted-badge';
					badge.textContent = 'UNENCRYPTED';
					badge.setAttribute('aria-label', 'This Canvas item is stored unencrypted');
					element.appendChild(badge);
				}
			}
		});
	}

	private patchVaultWrites(): void {
		const vault = this.app.vault as typeof this.app.vault & { modify: (file: TFile, data: string, options?: unknown) => Promise<void> };
		const originalModify = vault.modify;
		const patcher = this;
		const guardedVaultModify = async function(file: TFile, data: string, options?: unknown): Promise<void> {
			if (patcher.isProtected(file) && !isEncryptedCanvasWrapper(data)) {
				new Notice(`Blocked plaintext write to protected Canvas: ${file.path}`);
				throw new Error(`Meld blocked a non-encrypted Canvas write to ${file.path}`);
			}
			return originalModify.call(this, file, data, options as never);
		};
		vault.modify = guardedVaultModify;
		this.restorers.push(() => { if (vault.modify === guardedVaultModify) vault.modify = originalModify; });

		const adapter = this.app.vault.adapter as typeof this.app.vault.adapter & {
			write: (path: string, data: string, options?: unknown) => Promise<void>;
		};
		const originalAdapterWrite = adapter.write;
		const guardedAdapterWrite = async function(path: string, data: string, options?: unknown): Promise<void> {
			if (patcher.protectedPaths.has(path) && !isEncryptedCanvasWrapper(data)) {
				new Notice(`Blocked adapter plaintext write to protected Canvas: ${path}`);
				throw new Error(`Meld blocked a non-encrypted adapter write to ${path}`);
			}
			return originalAdapterWrite.call(this, path, data, options as never);
		};
		adapter.write = guardedAdapterWrite;
		this.restorers.push(() => { if (adapter.write === guardedAdapterWrite) adapter.write = originalAdapterWrite; });

		const originalAppend = adapter.append;
		const guardedAppend = async function(path: string, data: string, options?: unknown): Promise<void> {
			if (patcher.protectedPaths.has(path)) {
				throw new Error(`Meld blocked append to protected Canvas: ${path}`);
			}
			return originalAppend.call(this, path, data, options as never);
		};
		adapter.append = guardedAppend;
		this.restorers.push(() => { if (adapter.append === guardedAppend) adapter.append = originalAppend; });

		const originalWriteBinary = adapter.writeBinary;
		const guardedWriteBinary = async function(path: string, data: ArrayBuffer, options?: unknown): Promise<void> {
			if (patcher.protectedPaths.has(path)) {
				throw new Error(`Meld blocked binary write to protected Canvas: ${path}`);
			}
			return originalWriteBinary.call(this, path, data, options as never);
		};
		adapter.writeBinary = guardedWriteBinary;
		this.restorers.push(() => { if (adapter.writeBinary === guardedWriteBinary) adapter.writeBinary = originalWriteBinary; });
	}

	private patch(name: string, factory: (original: CanvasMethod) => CanvasMethod): void {
		if (this.prototype === null) return;
		const hadOwnMethod = Object.prototype.hasOwnProperty.call(this.prototype, name);
		const original = this.prototype[name];
		if (typeof original !== 'function') return;
		const replacement = factory(original);
		this.prototype[name] = replacement;
		this.restorers.push(() => {
			if (this.prototype === null) return;
			if (this.prototype[name] !== replacement) return;
			if (hadOwnMethod) this.prototype[name] = original;
			else delete this.prototype[name];
		});
	}
}
