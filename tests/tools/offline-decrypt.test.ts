import { describe, it, expect, vi } from 'vitest';
import { readFileSync } from 'node:fs';
import { createContext, runInContext } from 'node:vm';
import { CryptoHelperFactory } from '../../src/services/CryptoHelperFactory.ts';
import { FileDataHelper, JsonFileEncoding } from '../../src/services/FileDataHelper.ts';
import { CryptoHelper2304 } from '../../src/services/CryptoHelper2304.ts';
import { CryptoHelper } from '../../src/services/CryptoHelper.ts';
import { CryptoHelperObsolete } from '../../src/services/CryptoHelperObsolete.ts';

function offlineTool(): { decrypt(content: string, password: string): Promise<string | null> } {
	const context = createContext({ window: {}, crypto, TextEncoder, TextDecoder, Uint8Array, atob, btoa, console: { info() {}, debug() {}, error() {} } });
	runInContext(readFileSync(new URL('../../tools/offline-decrypt.js', import.meta.url), 'utf8'), context);
	return context.window.$;
}

describe('rebuilt offline decrypt tool', () => {
	it('should decrypt v3 raw, marked inline and whole-note representations', async () => {
		const tool = offlineTool();
		const password = 'offline-password';
		const raw = await CryptoHelperFactory.BuildDefault().encryptToBase64('🔐 offline secret', password);
		const whole = JsonFileEncoding.encode(await FileDataHelper.encrypt(password, 'hint', '🔐 offline secret'));
		for (const content of [raw, `%%🔐γ 💡hint💡${raw} 🔐%%`, `🔐γ ${raw} 🔐`, whole]) {
			expect(await tool.decrypt(content, password)).toBe('🔐 offline secret');
		}
		expect(await tool.decrypt(whole, 'wrong password')).toBeNull();
	});

	it('should reject malformed marked/whole-note v3 without deriving keys', async () => {
		const tool = offlineTool();
		const derive = vi.spyOn(crypto.subtle, 'deriveKey');
		try {
			expect(await tool.decrypt('🔐γ !!!! 🔐', 'password')).toBeNull();
			expect(await tool.decrypt('{"version":"3.0","hint":"","encodedData":""}', 'password')).toBeNull();
			expect(derive).not.toHaveBeenCalled();
		} finally { derive.mockRestore(); }
	});

	it.each([
		['2.0', new CryptoHelper2304(16, 16, 210000), 'β'],
		['1.0', new CryptoHelper(), 'α'],
	] as const)('should retain released whole-note and inline %s decryption', async (version, helper, marker) => {
		const tool = offlineTool();
		const payload = await helper.encryptToBase64('legacy text', 'password');
		expect(await tool.decrypt(JSON.stringify({ version, hint: '', encodedData: payload }), 'password')).toBe('legacy text');
		expect(await tool.decrypt(`🔐${marker} ${payload} 🔐`, 'password')).toBe('legacy text');
		expect(await tool.decrypt(payload, 'password')).toBe('legacy text');
	});

	it('should retain obsolete inline decryption', async () => {
		const tool = offlineTool();
		const payload = await new CryptoHelperObsolete().encryptToBase64('obsolete', 'password');
		expect(await tool.decrypt(`🔐 ${payload} 🔐`, 'password')).toBe('obsolete');
	});
});
