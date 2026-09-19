import { FileData, FileDataHelper } from '../../services/FileDataHelper.ts';
import { assertCanvasData, type CanvasData } from './CanvasTypes.ts';

const FORMAT = 'meld-encrypted-canvas';
const VERSION = 1;

export interface EncryptedCanvasWrapper {
	nodes: [];
	edges: [];
	meldEncryptedCanvas: {
		format: typeof FORMAT;
		version: typeof VERSION;
		payload: FileData;
	};
}

export function hasEncryptedCanvasMarker(text: string): boolean {
	try {
		const value: unknown = JSON.parse(text);
		if (typeof value !== 'object' || value === null) return false;
		const marker = (value as { meldEncryptedCanvas?: unknown }).meldEncryptedCanvas;
		return typeof marker === 'object' && marker !== null
			&& (marker as { format?: unknown }).format === FORMAT;
	} catch {
		return false;
	}
}

export function decodeEncryptedCanvasWrapper(text: string): EncryptedCanvasWrapper | null {
	let value: unknown;
	try {
		value = JSON.parse(text);
	} catch {
		return null;
	}
	if (typeof value !== 'object' || value === null) return null;
	const candidate = value as Partial<EncryptedCanvasWrapper>;
	const marker = candidate.meldEncryptedCanvas;
	if (!Array.isArray(candidate.nodes) || candidate.nodes.length !== 0
		|| !Array.isArray(candidate.edges) || candidate.edges.length !== 0
		|| marker?.format !== FORMAT || marker.version !== VERSION
		|| typeof marker.payload !== 'object' || marker.payload === null
		|| typeof marker.payload.version !== 'string'
		|| typeof marker.payload.hint !== 'string'
		|| typeof marker.payload.encodedData !== 'string') return null;
	return candidate as EncryptedCanvasWrapper;
}

export function isEncryptedCanvasWrapper(text: string): boolean {
	return decodeEncryptedCanvasWrapper(text) !== null;
}

export async function encryptCanvasData(data: CanvasData, password: string, hint: string): Promise<string> {
	assertCanvasData(data);
	const plaintext = JSON.stringify(data);
	const payload = await FileDataHelper.encrypt(password, hint, plaintext);
	const wrapper: EncryptedCanvasWrapper = {
		nodes: [],
		edges: [],
		meldEncryptedCanvas: { format: FORMAT, version: VERSION, payload },
	};
	return JSON.stringify(wrapper, null, 2);
}

export async function decryptCanvasData(wrapper: EncryptedCanvasWrapper, password: string): Promise<CanvasData | null> {
	const plaintext = await FileDataHelper.decrypt(wrapper.meldEncryptedCanvas.payload, password);
	if (plaintext === null) return null;
	const value: unknown = JSON.parse(plaintext);
	assertCanvasData(value);
	return value;
}

export async function verifyEncryptedCanvas(
	wrapperText: string,
	password: string,
	expectedData: CanvasData,
): Promise<boolean> {
	const wrapper = decodeEncryptedCanvasWrapper(wrapperText);
	if (wrapper === null) return false;
	const decrypted = await decryptCanvasData(wrapper, password);
	return decrypted !== null && JSON.stringify(decrypted) === JSON.stringify(expectedData);
}
