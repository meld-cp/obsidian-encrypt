import { TFile, type App } from 'obsidian';
import { ENCRYPTED_FILE_EXTENSIONS } from '../../services/Constants.ts';
import { FileDataHelper, JsonFileEncoding } from '../../services/FileDataHelper.ts';
import type { CanvasData } from './CanvasTypes.ts';

const IMAGE_EXTENSIONS = new Set([
	'avif', 'bmp', 'gif', 'jpeg', 'jpg', 'png', 'svg', 'webp',
]);

const MIME_TYPES: Record<string, string> = {
	avif: 'image/avif', bmp: 'image/bmp', gif: 'image/gif', jpeg: 'image/jpeg',
	jpg: 'image/jpeg', png: 'image/png', svg: 'image/svg+xml', webp: 'image/webp',
};

interface FileNode extends Record<string, unknown> {
	type: 'file';
	file: string;
}

export function markUnencryptedFileNodes(data: CanvasData): { data: CanvasData; changed: boolean } {
	let changed = false;
	const nodes = data.nodes.map(node => {
		if (!isFileNode(node)) return node;
		const extension = node.file.split('.').pop()?.toLowerCase() ?? '';
		if (ENCRYPTED_FILE_EXTENSIONS.includes(extension) || node.meldUnencrypted === true) return node;
		changed = true;
		return { ...node, meldUnencrypted: true };
	});
	return { data: changed ? { ...data, nodes } : data, changed };
}

export function isUnencryptedFileNodeData(data: Record<string, unknown>): boolean {
	if (data.type !== 'file' || typeof data.file !== 'string') return false;
	const extension = data.file.split('.').pop()?.toLowerCase() ?? '';
	return !ENCRYPTED_FILE_EXTENSIONS.includes(extension);
}

export function isImagePath(path: string): boolean {
	const extension = path.split('.').pop()?.toLowerCase() ?? '';
	return IMAGE_EXTENSIONS.has(extension);
}

export function arrayBufferToDataUrl(data: ArrayBuffer, mimeType: string): string {
	const bytes = new Uint8Array(data);
	let binary = '';
	const chunkSize = 0x8000;
	for (let offset = 0; offset < bytes.length; offset += chunkSize) {
		binary += String.fromCharCode(...bytes.subarray(offset, offset + chunkSize));
	}
	return `data:${mimeType};base64,${btoa(binary)}`;
}

export function imageFileToMarkdown(file: File): Promise<string> {
	return file.arrayBuffer().then(data => {
		const mime = file.type.startsWith('image/') ? file.type : 'image/png';
		return `![${escapeMarkdownLabel(file.name || 'Pasted image')}](${arrayBufferToDataUrl(data, mime)})`;
	});
}

export async function hydrateEncryptedNotes(
	app: App, data: CanvasData, password: string,
): Promise<{ data: CanvasData; failedPaths: string[]; hydratedPaths: string[] }> {
	const failedPaths: string[] = [];
	const hydratedPaths: string[] = [];
	const nodes = await Promise.all(data.nodes.map(async node => {
		if (!isFileNode(node)) return node;
		const extension = node.file.split('.').pop()?.toLowerCase() ?? '';
		if (!ENCRYPTED_FILE_EXTENSIONS.includes(extension)) return node;
		const file = app.vault.getAbstractFileByPath(node.file);
		if (!(file instanceof TFile)) return node;
		try {
			const encoded = JsonFileEncoding.decode(await app.vault.read(file));
			const text = await FileDataHelper.decrypt(encoded, password);
			if (text === null) {
				failedPaths.push(node.file);
				return node;
			}
			hydratedPaths.push(node.file);
			const { type: _type, file: sourcePath, subpath: _subpath, ...rest } = node;
			return {
				...rest,
				type: 'text',
				text,
				meldEncryptedSource: { kind: 'note', path: sourcePath },
			};
		} catch {
			failedPaths.push(node.file);
			return node;
		}
	}));
	return { data: { ...data, nodes }, failedPaths, hydratedPaths };
}

export async function embedPendingImages(
	app: App, data: CanvasData, pendingPaths: ReadonlySet<string>,
): Promise<{ data: CanvasData; embeddedPaths: string[] }> {
	const embeddedPaths: string[] = [];
	const nodes = await Promise.all(data.nodes.map(async node => {
		if (!isFileNode(node) || node.meldUnencrypted === true
			|| !pendingPaths.has(node.file) || !isImagePath(node.file)) return node;
		const file = app.vault.getAbstractFileByPath(node.file);
		if (!(file instanceof TFile)) return node;
		const extension = file.extension.toLowerCase();
		const markdown = `![${escapeMarkdownLabel(file.name)}](${arrayBufferToDataUrl(
			await app.vault.readBinary(file), MIME_TYPES[extension] ?? 'application/octet-stream',
		)})`;
		const { type: _type, file: sourcePath, subpath: _subpath, ...rest } = node;
		embeddedPaths.push(sourcePath);
		return {
			...rest,
			type: 'text',
			text: markdown,
			meldEncryptedSource: { kind: 'image', name: file.name },
		};
	}));
	return { data: { ...data, nodes }, embeddedPaths };
}

function isFileNode(node: unknown): node is FileNode {
	if (typeof node !== 'object' || node === null) return false;
	const candidate = node as { type?: unknown; file?: unknown };
	return candidate.type === 'file' && typeof candidate.file === 'string';
}

function escapeMarkdownLabel(value: string): string {
	return value.replace(/\r\n|\r|\n/g, ' ').replace(/[\\\]]/g, match => `\\${match}`);
}
