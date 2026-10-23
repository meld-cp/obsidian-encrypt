import { FeatureInplaceTextAnalysis } from '../features/feature-inplace-encrypt/featureInplaceTextAnalysis.ts';
import { CryptoHelperFactory } from '../services/CryptoHelperFactory.ts';
import { FileDataHelper, JsonFileEncoding } from '../services/FileDataHelper.ts';
import { decodeInlineV3 } from '../services/CryptoHelperV3.ts';

export class OfflineDecrypt {
	public async decrypt(content: string, password: string): Promise<string | null> {
		const analysis = new FeatureInplaceTextAnalysis(content);
		if (analysis.hasEncryptedPrefix) {
			if (!analysis.decryptable) return null;
			const helper = CryptoHelperFactory.BuildFromDecryptableOrNull(analysis.decryptable);
			return helper ? await helper.decryptFromBase64(analysis.decryptable.base64CipherText, password) : null;
		}

		if (content.trimStart().startsWith('{')) {
			try {
				const data = JsonFileEncoding.decode(content);
				if (!CryptoHelperFactory.BuildFromFileDataOrNull(data)) return null;
				return await FileDataHelper.decrypt(data, password);
			} catch {
				return null;
			}
		}

		// Raw payloads have no marker. Recognize a valid v3 envelope before trying
		// released legacy formats; never guess earlier experimental v3 layouts.
		try {
			const envelope = decodeInlineV3(content);
			return await CryptoHelperFactory.BuildDefault().decryptEnvelope(envelope, password);
		} catch {
			for (const version of [2, 1, 0]) {
				const helper = CryptoHelperFactory.BuildFromDecryptableOrNull({ version, base64CipherText: content, hint: '', showInReadingView: false });
				const result = await helper?.decryptFromBase64(content, password);
				if (result != null) return result;
			}
			return null;
		}
	}
}

declare global {
	interface Window { $: OfflineDecrypt; }
}

window.$ = new OfflineDecrypt();
