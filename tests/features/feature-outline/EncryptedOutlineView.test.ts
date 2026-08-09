import { beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('obsidian', () => {
	interface MockEl {
		empty: () => void;
		addEventListener: (event: string, cb: () => void) => void;
		createEl: (tag: string, opts?: unknown) => MockEl;
		createDiv: (opts?: unknown) => MockEl;
	}
	function makeMockEl(): MockEl {
		return {
			empty: vi.fn(),
			addEventListener: vi.fn(),
			createEl: vi.fn(() => makeMockEl()),
			createDiv: vi.fn(() => makeMockEl()),
		};
	}
	class MockItemView {
		public contentEl = makeMockEl();
		public leaf: { detach: () => void };
		public app: unknown;
		constructor(leaf?: { detach: () => void; app?: unknown }) {
			this.leaf = leaf ?? { detach: vi.fn() };
			this.app = leaf?.app ?? {};
		}
		getViewType(): string { return "mock-itemview"; }
		getDisplayText(): string { return "Mock view"; }
		getIcon(): string { return "mock-icon"; }
		async onOpen(): Promise<void> { /* noop */ }
		async onClose(): Promise<void> { /* noop */ }
	}
	class MockWorkspaceLeaf { /* mock */ }
	return {
		ItemView: MockItemView,
		WorkspaceLeaf: MockWorkspaceLeaf,
		Notice: vi.fn(),
	};
});

import { EncryptedOutlineView, VIEW_TYPE_ENCRYPTED_OUTLINE } from "../../../src/features/feature-outline/EncryptedOutlineView.ts";
import { Heading } from "../../../src/services/EncryptedHeadingParser.ts";

const HEADINGS: Heading[] = [
	{ level: 1, text: "Title", line: 0 },
	{ level: 2, text: "Section A", line: 1 },
	{ level: 1, text: "Second Title", line: 5 },
];

const leafStub = { detach: vi.fn(), app: {} } as const;

describe("EncryptedOutlineView", () => {
	let view: EncryptedOutlineView;

	beforeEach(() => {
		view = new EncryptedOutlineView(leafStub as unknown as ConstructorParameters<typeof EncryptedOutlineView>[0]);
	});

	describe("view type registration", () => {
		it("exposes the documented view type constant", () => {
			expect(VIEW_TYPE_ENCRYPTED_OUTLINE).toBe("meld-encrypt-outline");
		});

		it("returns the view type from getViewType()", () => {
			expect(view.getViewType()).toBe("meld-encrypt-outline");
		});

		it("returns a non-empty display text", () => {
			expect(view.getDisplayText().length).toBeGreaterThan(0);
		});

		it("returns a distinct icon (list-tree) for visual separation from the core Outline plugin", () => {
			expect(view.getIcon()).toBe("list-tree");
		});
	});

	describe("state management", () => {
		it("starts without a source", () => {
			expect(view.getSource()).toBeNull();
		});

		it("clear() preserves no source and is safe to call when source is null", () => {
			view.clear();
			expect(view.getSource()).toBeNull();
		});
	});

	describe("headings", () => {
		it("setHeadings() does not throw when no rootEl is set (race-condition guard)", async () => {
			await view.onOpen();
			view.setHeadings(HEADINGS);
		});

		it("clear() does not throw when no rootEl is set", async () => {
			await view.onOpen();
			view.clear();
		});

		it("setSource(null) followed by setHeadings() does not throw", async () => {
			await view.onOpen();
			view.setSource(null);
			view.setHeadings(HEADINGS);
		});
	});

	describe("onClose cleanup", () => {
		it("clears source, headings, and rootEl", async () => {
			await view.onOpen();
			view.setSource({
				getDecryptedText: () => "# Title",
				jumpToHeading: () => { /* noop */ },
			});
			view.setHeadings(HEADINGS);
			await view.onClose();
			expect(view.getSource()).toBeNull();
		});
	});
});