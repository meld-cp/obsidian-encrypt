import { ItemView, WorkspaceLeaf } from "obsidian";
import { EncryptedHeadingParser, Heading } from "../../services/EncryptedHeadingParser.ts";
import { OutlineSource } from "../../services/OutlineSource.ts";
import { VIEW_TYPE_ENCRYPTED_OUTLINE } from "../../services/Constants.ts";

export { VIEW_TYPE_ENCRYPTED_OUTLINE };

export class EncryptedOutlineView extends ItemView {

	private headings: Heading[] = [];
	private source: OutlineSource | null = null;
	private rootEl: HTMLElement | null = null;

	constructor(leaf: WorkspaceLeaf) {
		super(leaf);
	}

	getViewType(): string {
		return VIEW_TYPE_ENCRYPTED_OUTLINE;
	}

	getDisplayText(): string {
		return "Outline (encrypted)";
	}

	getIcon(): string {
		return "list-tree";
	}

	async onOpen(): Promise<void> {
		const container = this.contentEl.createDiv({ cls: "meld-encrypt-outline-container" });
		this.rootEl = container;
		// Render whatever state we already have (headings may have been parsed
		// before onOpen completed, when syncActiveSource raced with setViewState).
		if (this.headings.length > 0) {
			this.render();
		} else {
			this.renderEmpty();
		}
	}

	async onClose(): Promise<void> {
		this.source = null;
		this.headings = [];
		this.rootEl = null;
	}

	public getSource(): OutlineSource | null {
		return this.source;
	}

	public setSource(source: OutlineSource | null): void {
		this.source = source;
		if (source == null) {
			this.clear();
		} else {
			this.refresh();
		}
	}

	public setHeadings(headings: Heading[]): void {
		this.headings = headings;
		this.render();
	}

	public clear(): void {
		this.headings = [];
		this.renderEmpty();
	}

	private refresh(): void {
		if (this.source == null) {
			this.renderEmpty();
			return;
		}
		const text = this.source.getDecryptedText();
		const headings = EncryptedHeadingParser.parse(text);
		this.setHeadings(headings);
	}

	private render(): void {
		if (this.rootEl == null) return;
		this.rootEl.empty();
		if (this.headings.length === 0) {
			this.renderEmpty();
			return;
		}
		const list = this.rootEl.createEl("ul", { cls: "meld-encrypt-outline-list" });
		for (const h of this.headings) {
			const item = list.createEl("li", {
				cls: `meld-encrypt-outline-item meld-encrypt-outline-level-${h.level}`,
			});
			const link = item.createEl("a", {
				text: h.text,
				cls: "meld-encrypt-outline-link",
				href: "#",
			});
			link.addEventListener("click", (event) => this.onHeadingClick(h, event));
		}
	}

	private renderEmpty(): void {
		if (this.rootEl == null) return;
		this.rootEl.empty();
		this.rootEl.createEl("p", {
			text: "No headings",
			cls: "meld-encrypt-outline-empty",
		});
	}

	private onHeadingClick(h: Heading, event: MouseEvent): void {
		event.preventDefault();
		if (this.source != null) {
			this.source.jumpToHeading(h);
		}
	}
}