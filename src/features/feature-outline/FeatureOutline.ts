import { Editor, Notice, WorkspaceLeaf } from "obsidian";
import { IMeldEncryptPluginFeature } from "../IMeldEncryptPluginFeature.ts";
import MeldEncrypt from "../../main.ts";
import { IMeldEncryptPluginSettings } from "../../settings/MeldEncryptPluginSettings.ts";
import { EncryptedMarkdownView } from "../feature-whole-note-encrypt/EncryptedMarkdownView.ts";
import { EncryptedOutlineView } from "./EncryptedOutlineView.ts";
import { VIEW_TYPE_ENCRYPTED_OUTLINE } from "../../services/Constants.ts";
import { EncryptedHeadingParser, Heading } from "../../services/EncryptedHeadingParser.ts";

export default class FeatureOutline implements IMeldEncryptPluginFeature {

	private plugin: MeldEncrypt;
	private refreshTimers = new Map<EncryptedMarkdownView, number>();

	async onload(plugin: MeldEncrypt, settings: IMeldEncryptPluginSettings): Promise<void> {
		this.plugin = plugin;

		this.plugin.registerView(
			VIEW_TYPE_ENCRYPTED_OUTLINE,
			(leaf) => new EncryptedOutlineView(leaf),
		);

		this.plugin.addCommand({
			id: "show-encrypted-note-outline",
			name: "Show encrypted note outline",
			icon: "list-tree",
			callback: () => { this.activateOutlinePane(); },
		});

		this.plugin.registerEvent(
			this.plugin.app.workspace.on("active-leaf-change", () => {
				this.handleActiveLeafChange();
			}),
		);

		this.plugin.registerEvent(
			this.plugin.app.workspace.on("editor-change", (editor: Editor) => {
				const view = this.findViewByEditor(editor);
				if (view != null) {
					this.scheduleRefresh(view);
				}
			}),
		);

		this.handleActiveLeafChange();
	}

	// eslint-disable-next-line obsidianmd/detach-leaves
	onunload(): void {
		for (const timer of this.refreshTimers.values()) {
			window.clearTimeout(timer);
		}
		this.refreshTimers.clear();
		this.plugin.app.workspace.detachLeavesOfType(VIEW_TYPE_ENCRYPTED_OUTLINE);
	}

	buildSettingsUi(containerEl: HTMLElement, saveSettingCallback: () => Promise<void>): void {
	}

	private activateOutlinePane(): void {
		const leaf: WorkspaceLeaf | null = this.plugin.app.workspace.getRightLeaf(false);
		if (leaf == null) {
			new Notice("No sidebar slot available for the encrypted outline pane");
			return;
		}
		void leaf.setViewState({ type: VIEW_TYPE_ENCRYPTED_OUTLINE, active: true });
		this.handleActiveLeafChange();
	}

	private handleActiveLeafChange(): void {
		const active = this.plugin.app.workspace.getActiveViewOfType(EncryptedMarkdownView);
		if (active == null) return;

		const existingOutlineLeaves = this.plugin.app.workspace.getLeavesOfType(VIEW_TYPE_ENCRYPTED_OUTLINE);
		console.debug("[meld-encrypt] handleActiveLeafChange", {
			activeFile: active.file?.path ?? null,
			existingOutlineLeafCount: existingOutlineLeaves.length,
		});
		if (existingOutlineLeaves.length > 0) {
			this.syncActiveSource();
			return;
		}

		const rightLeaf: WorkspaceLeaf | null = this.plugin.app.workspace.getRightLeaf(false);
		if (rightLeaf == null) return;
		const currentType: string = rightLeaf.view?.getViewType() ?? "empty";

		let targetLeaf: WorkspaceLeaf;
		if (currentType === "empty") {
			targetLeaf = rightLeaf;
		} else {
			const newTabLeaf = this.plugin.app.workspace.getRightLeaf(true);
			if (newTabLeaf == null) return;
			targetLeaf = newTabLeaf;
		}

		void targetLeaf.setViewState({ type: VIEW_TYPE_ENCRYPTED_OUTLINE });
		this.syncActiveSource();
	}

	private findViewByEditor(editor: Editor): EncryptedMarkdownView | null {
		const leaves = this.plugin.app.workspace.getLeavesOfType(EncryptedMarkdownView.VIEW_TYPE);
		for (const leaf of leaves) {
			const view = leaf.view;
			if (view instanceof EncryptedMarkdownView && view.editor === editor) {
				return view;
			}
		}
		return null;
	}

	private scheduleRefresh(view: EncryptedMarkdownView): void {
		const existing = this.refreshTimers.get(view);
		if (existing != null) {
			window.clearTimeout(existing);
		}
		const timer = window.setTimeout(() => {
			this.refreshOutlineForView(view);
			this.refreshTimers.delete(view);
		}, 150);
		this.refreshTimers.set(view, timer);
	}

	private refreshOutlineForView(view: EncryptedMarkdownView): void {
		const text = view.getViewData();
		const headings: Heading[] = EncryptedHeadingParser.parse(text);
		const outlineLeaves = this.plugin.app.workspace.getLeavesOfType(VIEW_TYPE_ENCRYPTED_OUTLINE);
		for (const leaf of outlineLeaves) {
			const outlineView = leaf.view;
			if (outlineView instanceof EncryptedOutlineView && outlineView.getSource() === view) {
				outlineView.setHeadings(headings);
			}
		}
	}

	private syncActiveSource(): void {
		const active = this.plugin.app.workspace.getActiveViewOfType(EncryptedMarkdownView);
		const outlineLeaves = this.plugin.app.workspace.getLeavesOfType(VIEW_TYPE_ENCRYPTED_OUTLINE);
		for (const leaf of outlineLeaves) {
			const outlineView = leaf.view;
			if (outlineView instanceof EncryptedOutlineView) {
				outlineView.setSource(active);
			}
		}
	}
}