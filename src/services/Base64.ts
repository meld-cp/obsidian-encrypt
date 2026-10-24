export function bytesToBase64(bytes: Uint8Array): string {
	let binary = '';
	for (let offset = 0; offset < bytes.length; offset += 8192) {
		binary += String.fromCharCode(...bytes.subarray(offset, offset + 8192));
	}
	return btoa(binary);
}

// Preserve atob's legacy tolerance; format-specific validation belongs to readers.
export function base64ToBytes(value: string): Uint8Array {
	return Uint8Array.from(atob(value), character => character.charCodeAt(0));
}
