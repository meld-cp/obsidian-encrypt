import type { TFile, WorkspaceLeaf } from 'obsidian';

export interface CanvasData {
	nodes: unknown[];
	edges: unknown[];
	[key: string]: unknown;
}

export function assertCanvasData(value: unknown): asserts value is CanvasData {
	if (typeof value !== 'object' || value === null) throw new Error('Canvas payload is not an object');
	const candidate = value as Partial<CanvasData>;
	if (!Array.isArray(candidate.nodes) || !Array.isArray(candidate.edges)) {
		throw new Error('Canvas payload must contain nodes and edges arrays');
	}
}

export interface NativeCanvas {
	getData(): CanvasData;
	setData(data: CanvasData): void;
	requestSave(): void;
	createTextNode?(options: {
		pos: { x: number; y: number };
		size: { width: number; height: number };
		text: string;
	}): unknown;
	posFromEvt?(event: MouseEvent): { x: number; y: number };
	nodes?: Map<string, {
		getData?(): Record<string, unknown>;
		nodeEl?: HTMLElement;
	}>;
}

export interface NativeCanvasView {
	leaf: WorkspaceLeaf;
	file: TFile | null;
	canvas: NativeCanvas;
	getViewType(): string;
	getViewData(): string;
	setViewData(data: string, clear: boolean): void;
	save(clear?: boolean): Promise<void>;
	onLoadFile?(file: TFile): Promise<void>;
	onUnloadFile?(file: TFile): Promise<void>;
	addAction?(icon: string, title: string, callback: () => unknown): HTMLElement;
}

export function isNativeCanvasView(value: unknown): value is NativeCanvasView {
	if (typeof value !== 'object' || value === null) return false;
	const candidate = value as Partial<NativeCanvasView>;
	return candidate.getViewType?.() === 'canvas'
		&& typeof candidate.getViewData === 'function'
		&& typeof candidate.setViewData === 'function'
		&& typeof candidate.save === 'function'
		&& typeof candidate.canvas?.getData === 'function'
		&& typeof candidate.canvas?.setData === 'function';
}
