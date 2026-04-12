import { describe, it, expect } from 'vitest';
import { FeatureInplaceTextAnalysis } from './featureInplaceTextAnalysis.ts';
import {
	_PREFIX_A,
	_PREFIX_A_VISIBLE,
	_PREFIX_B,
	_PREFIX_B_VISIBLE,
	_PREFIX_OBSOLETE,
	_PREFIX_OBSOLETE_VISIBLE,
	_SUFFIX_WITH_COMMENT,
	_SUFFIX_NO_COMMENT,
	_HINT,
} from './FeatureInplaceConstants.ts';

describe('FeatureInplaceTextAnalysis', () => {
	describe('empty input', () => {
		it('should mark empty string as empty', () => {
			const analysis = new FeatureInplaceTextAnalysis('');

			expect(analysis.isEmpty).toBe(true);
			expect(analysis.canEncrypt).toBe(true);
			expect(analysis.canDecrypt).toBe(false);
			expect(analysis.hasEncryptedPrefix).toBe(false);
			expect(analysis.hasEncryptedSuffix).toBe(false);
			expect(analysis.containsEncryptedMarkers).toBe(false);
			expect(analysis.decryptable).toBeUndefined();
		});
	});

	describe('plain text (encryptable)', () => {
		it('should detect plain text as encryptable', () => {
			const analysis = new FeatureInplaceTextAnalysis('Hello, world!');

			expect(analysis.isEmpty).toBe(false);
			expect(analysis.canEncrypt).toBe(true);
			expect(analysis.canDecrypt).toBe(false);
			expect(analysis.hasEncryptedPrefix).toBe(false);
			expect(analysis.hasEncryptedSuffix).toBe(false);
			expect(analysis.containsEncryptedMarkers).toBe(false);
			expect(analysis.decryptable).toBeUndefined();
		});

		it('should detect text containing markers as not encryptable', () => {
			const analysis = new FeatureInplaceTextAnalysis(`Some text ${_PREFIX_B} inside`);

			expect(analysis.canEncrypt).toBe(false);
			expect(analysis.containsEncryptedMarkers).toBe(true);
		});
	});

	describe('version B encrypted content', () => {
		it('should detect version B with comment suffix', () => {
			const content = _PREFIX_B + 'c29tZS1jaXBoZXI=' + _SUFFIX_WITH_COMMENT;
			const analysis = new FeatureInplaceTextAnalysis(content);

			expect(analysis.hasEncryptedPrefix).toBe(true);
			expect(analysis.hasEncryptedSuffix).toBe(true);
			expect(analysis.canDecrypt).toBe(true);
			expect(analysis.canEncrypt).toBe(false);
			expect(analysis.prefix).toBe(_PREFIX_B);
			expect(analysis.suffix).toBe(_SUFFIX_WITH_COMMENT);
		});

		it('should detect version B visible (no comment) prefix', () => {
			const content = _PREFIX_B_VISIBLE + 'c29tZS1jaXBoZXI=' + _SUFFIX_NO_COMMENT;
			const analysis = new FeatureInplaceTextAnalysis(content);

			expect(analysis.hasEncryptedPrefix).toBe(true);
			expect(analysis.prefix).toBe(_PREFIX_B_VISIBLE);
			expect(analysis.suffix).toBe(_SUFFIX_NO_COMMENT);
			expect(analysis.canDecrypt).toBe(true);
		});

		it('should parse decryptable with version 2 for version B', () => {
			const content = _PREFIX_B + 'c29tZS1jaXBoZXI=' + _SUFFIX_WITH_COMMENT;
			const analysis = new FeatureInplaceTextAnalysis(content);

			expect(analysis.decryptable).toBeDefined();
			expect(analysis.decryptable!.version).toBe(2);
			expect(analysis.decryptable!.base64CipherText).toBe('c29tZS1jaXBoZXI=');
			expect(analysis.decryptable!.hint).toBeUndefined();
			expect(analysis.decryptable!.showInReadingView).toBe(false);
		});

		it('should parse decryptable with version 2 for version B visible', () => {
			const content = _PREFIX_B_VISIBLE + 'c29tZS1jaXBoZXI=' + _SUFFIX_NO_COMMENT;
			const analysis = new FeatureInplaceTextAnalysis(content);

			expect(analysis.decryptable).toBeDefined();
			expect(analysis.decryptable!.version).toBe(2);
			expect(analysis.decryptable!.base64CipherText).toBe('c29tZS1jaXBoZXI=');
			expect(analysis.decryptable!.showInReadingView).toBe(true);
		});

		it('should parse hint correctly', () => {
			const content = _PREFIX_B + _HINT + 'my hint' + _HINT + 'c29tZS1jaXBoZXI=' + _SUFFIX_WITH_COMMENT;
			const analysis = new FeatureInplaceTextAnalysis(content);

			expect(analysis.decryptable).toBeDefined();
			expect(analysis.decryptable!.hint).toBe('my hint');
			expect(analysis.decryptable!.base64CipherText).toBe('c29tZS1jaXBoZXI=');
			expect(analysis.decryptable!.version).toBe(2);
		});

		it('should return null for missing end hint marker', () => {
			const content = _PREFIX_B + _HINT + 'my hint' + 'c29tZS1jaXBoZXI=' + _SUFFIX_WITH_COMMENT;
			const analysis = new FeatureInplaceTextAnalysis(content);

			expect(analysis.canDecrypt).toBe(false);
			expect(analysis.decryptable).toBeUndefined();
		});
	});

	describe('version A encrypted content', () => {
		it('should detect version A with comment suffix', () => {
			const content = _PREFIX_A + 'c29tZS1jaXBoZXI=' + _SUFFIX_WITH_COMMENT;
			const analysis = new FeatureInplaceTextAnalysis(content);

			expect(analysis.hasEncryptedPrefix).toBe(true);
			expect(analysis.hasEncryptedSuffix).toBe(true);
			expect(analysis.canDecrypt).toBe(true);
			expect(analysis.prefix).toBe(_PREFIX_A);
		});

		it('should parse decryptable with version 1 for version A', () => {
			const content = _PREFIX_A + 'c29tZS1jaXBoZXI=' + _SUFFIX_WITH_COMMENT;
			const analysis = new FeatureInplaceTextAnalysis(content);

			expect(analysis.decryptable).toBeDefined();
			expect(analysis.decryptable!.version).toBe(1);
			expect(analysis.decryptable!.base64CipherText).toBe('c29tZS1jaXBoZXI=');
			expect(analysis.decryptable!.showInReadingView).toBe(false);
		});

		it('should parse decryptable with version 1 for version A visible', () => {
			const content = _PREFIX_A_VISIBLE + 'c29tZS1jaXBoZXI=' + _SUFFIX_NO_COMMENT;
			const analysis = new FeatureInplaceTextAnalysis(content);

			expect(analysis.decryptable).toBeDefined();
			expect(analysis.decryptable!.version).toBe(1);
			expect(analysis.decryptable!.showInReadingView).toBe(true);
		});

		it('should parse hint correctly for version A', () => {
			const content = _PREFIX_A_VISIBLE + _HINT + 'secret hint' + _HINT + 'YWJjMTIz' + _SUFFIX_NO_COMMENT;
			const analysis = new FeatureInplaceTextAnalysis(content);

			expect(analysis.decryptable).toBeDefined();
			expect(analysis.decryptable!.version).toBe(1);
			expect(analysis.decryptable!.hint).toBe('secret hint');
			expect(analysis.decryptable!.base64CipherText).toBe('YWJjMTIz');
			expect(analysis.decryptable!.showInReadingView).toBe(true);
		});
	});

	describe('obsolete encrypted content', () => {
		it('should detect obsolete with comment suffix', () => {
			const content = _PREFIX_OBSOLETE + 'c29tZS1jaXBoZXI=' + _SUFFIX_WITH_COMMENT;
			const analysis = new FeatureInplaceTextAnalysis(content);

			expect(analysis.hasEncryptedPrefix).toBe(true);
			expect(analysis.hasObsoleteEncryptedPrefix).toBe(true);
			expect(analysis.canDecrypt).toBe(true);
		});

		it('should parse decryptable with version 0 for obsolete', () => {
			const content = _PREFIX_OBSOLETE + 'c29tZS1jaXBoZXI=' + _SUFFIX_WITH_COMMENT;
			const analysis = new FeatureInplaceTextAnalysis(content);

			expect(analysis.decryptable).toBeDefined();
			expect(analysis.decryptable!.version).toBe(0);
			expect(analysis.decryptable!.base64CipherText).toBe('c29tZS1jaXBoZXI=');
			expect(analysis.decryptable!.showInReadingView).toBe(false);
		});

		it('should parse decryptable with version 0 for obsolete visible', () => {
			const content = _PREFIX_OBSOLETE_VISIBLE + 'c29tZS1jaXBoZXI=' + _SUFFIX_NO_COMMENT;
			const analysis = new FeatureInplaceTextAnalysis(content);

			expect(analysis.decryptable).toBeDefined();
			expect(analysis.decryptable!.version).toBe(0);
			expect(analysis.decryptable!.showInReadingView).toBe(true);
		});
	});

	describe('invalid formats', () => {
		it('should not decrypt content with prefix but no suffix', () => {
			const content = _PREFIX_B + 'c29tZS1jaXBoZXI=';
			const analysis = new FeatureInplaceTextAnalysis(content);

			expect(analysis.hasEncryptedPrefix).toBe(true);
			expect(analysis.hasEncryptedSuffix).toBe(false);
			expect(analysis.canDecrypt).toBe(false);
			expect(analysis.decryptable).toBeUndefined();
		});

		it('should not decrypt content with suffix but no prefix', () => {
			const content = 'c29tZS1jaXBoZXI=' + _SUFFIX_WITH_COMMENT;
			const analysis = new FeatureInplaceTextAnalysis(content);

			expect(analysis.hasEncryptedPrefix).toBe(false);
			expect(analysis.canDecrypt).toBe(false);
			expect(analysis.decryptable).toBeUndefined();
		});

		it('should not decrypt content that has markers inside the cipher text', () => {
			const content = _PREFIX_B + _PREFIX_A + 'c29tZS1jaXBoZXI=' + _SUFFIX_WITH_COMMENT + _SUFFIX_NO_COMMENT;
			const analysis = new FeatureInplaceTextAnalysis(content);

			expect(analysis.canDecrypt).toBe(false);
			expect(analysis.decryptable).toBeUndefined();
		});
	});

	describe('showInReadingView', () => {
		it('should be false for %%comment%% style prefixes', () => {
			const content = _PREFIX_B + 'c29tZS1jaXBoZXI=' + _SUFFIX_WITH_COMMENT;
			const analysis = new FeatureInplaceTextAnalysis(content);

			expect(analysis.decryptable!.showInReadingView).toBe(false);
		});

		it('should be true for non-comment prefixes', () => {
			const content = _PREFIX_B_VISIBLE + 'c29tZS1jaXBoZXI=' + _SUFFIX_NO_COMMENT;
			const analysis = new FeatureInplaceTextAnalysis(content);

			expect(analysis.decryptable!.showInReadingView).toBe(true);
		});
	});

	describe('prefix and suffix detection', () => {
		it('should detect correct prefix for each version', () => {
			const testCases = [
				{ prefix: _PREFIX_B, expected: _PREFIX_B },
				{ prefix: _PREFIX_B_VISIBLE, expected: _PREFIX_B_VISIBLE },
				{ prefix: _PREFIX_A, expected: _PREFIX_A },
				{ prefix: _PREFIX_A_VISIBLE, expected: _PREFIX_A_VISIBLE },
				{ prefix: _PREFIX_OBSOLETE, expected: _PREFIX_OBSOLETE },
				{ prefix: _PREFIX_OBSOLETE_VISIBLE, expected: _PREFIX_OBSOLETE_VISIBLE },
			];

			for (const tc of testCases) {
				const content = tc.prefix + 'dGVzdA==' + _SUFFIX_WITH_COMMENT;
				const analysis = new FeatureInplaceTextAnalysis(content);
				expect(analysis.prefix).toBe(tc.expected);
			}
		});

		it('should detect correct suffix for each type', () => {
			const testCases = [
				{ suffix: _SUFFIX_WITH_COMMENT, expected: _SUFFIX_WITH_COMMENT },
				{ suffix: _SUFFIX_NO_COMMENT, expected: _SUFFIX_NO_COMMENT },
			];

			for (const tc of testCases) {
				const content = _PREFIX_B + 'dGVzdA==' + tc.suffix;
				const analysis = new FeatureInplaceTextAnalysis(content);
				expect(analysis.suffix).toBe(tc.expected);
			}
		});
	});

	describe('edge cases', () => {
		it('should handle cipher text with empty hint', () => {
			const content = _PREFIX_B + _HINT + _HINT + 'c29tZS1jaXBoZXI=' + _SUFFIX_WITH_COMMENT;
			const analysis = new FeatureInplaceTextAnalysis(content);

			expect(analysis.decryptable).toBeDefined();
			expect(analysis.decryptable!.hint).toBe('');
			expect(analysis.decryptable!.base64CipherText).toBe('c29tZS1jaXBoZXI=');
		});

		it('should handle cipher text with no hint and special chars', () => {
			const content = _PREFIX_B_VISIBLE + 'YWJjKzEyMy80NTY=' + _SUFFIX_NO_COMMENT;
			const analysis = new FeatureInplaceTextAnalysis(content);

			expect(analysis.decryptable).toBeDefined();
			expect(analysis.decryptable!.base64CipherText).toBe('YWJjKzEyMy80NTY=');
			expect(analysis.decryptable!.hint).toBeUndefined();
		});
	});
});
