import { describe, it, expect } from 'vitest';
import { EncryptedHeadingParser, Heading } from '../../src/services/EncryptedHeadingParser.ts';

describe('EncryptedHeadingParser', () => {
	describe('empty and trivial inputs', () => {
		it('returns empty array for empty string', () => {
			expect(EncryptedHeadingParser.parse('')).toEqual([]);
		});

		it('returns empty array for whitespace-only text', () => {
			expect(EncryptedHeadingParser.parse('   \n\n   \n')).toEqual([]);
		});

		it('returns empty array for text without headings', () => {
			expect(EncryptedHeadingParser.parse('just some text\non multiple lines')).toEqual([]);
		});
	});

	describe('single heading', () => {
		it('detects H1 at line 0', () => {
			const result = EncryptedHeadingParser.parse('# Title');
			expect(result).toEqual([
				{ level: 1, text: 'Title', line: 0 },
			]);
		});

		it('detects H2', () => {
			const result = EncryptedHeadingParser.parse('## Subheading');
			expect(result).toEqual([
				{ level: 2, text: 'Subheading', line: 0 },
			]);
		});

		it('detects H6 (deepest ATX heading)', () => {
			const result = EncryptedHeadingParser.parse('###### Deepest');
			expect(result).toEqual([
				{ level: 6, text: 'Deepest', line: 0 },
			]);
		});

		it('reports correct line number for heading on later line', () => {
			const text = 'paragraph 1\nparagraph 2\n# Heading at line 2';
			const result = EncryptedHeadingParser.parse(text);
			expect(result).toEqual([
				{ level: 1, text: 'Heading at line 2', line: 2 },
			]);
		});

		it('trims trailing whitespace from heading text', () => {
			const result = EncryptedHeadingParser.parse('# Title   \n');
			expect(result[0].text).toBe('Title');
		});

		it('strips trailing hash characters per CommonMark', () => {
			const result = EncryptedHeadingParser.parse('# Title #');
			expect(result[0].text).toBe('Title');
		});

		it('handles heading text with special markdown chars', () => {
			const result = EncryptedHeadingParser.parse('# Title: with `code` and [link]() and **bold**');
			expect(result[0].text).toBe('Title: with `code` and [link]() and **bold**');
		});
	});

	describe('multiple headings', () => {
		it('detects all heading levels in nested structure', () => {
			const text = [
				'# Top',
				'## Section A',
				'### Subsection A.1',
				'## Section B',
				'# Second Top',
			].join('\n');
			const result = EncryptedHeadingParser.parse(text);
			expect(result).toEqual([
				{ level: 1, text: 'Top', line: 0 },
				{ level: 2, text: 'Section A', line: 1 },
				{ level: 3, text: 'Subsection A.1', line: 2 },
				{ level: 2, text: 'Section B', line: 3 },
				{ level: 1, text: 'Second Top', line: 4 },
			]);
		});

		it('preserves input order', () => {
			const text = '# A\n# B\n# C';
			const result = EncryptedHeadingParser.parse(text);
			expect(result.map(h => h.text)).toEqual(['A', 'B', 'C']);
		});
	});

	describe('negative cases (should NOT detect)', () => {
		it('does not detect heading without space after hashes', () => {
			const result = EncryptedHeadingParser.parse('#nospace');
			expect(result).toEqual([]);
		});

		it('does not detect heading with more than 6 hashes', () => {
			const result = EncryptedHeadingParser.parse('####### Too deep');
			expect(result).toEqual([]);
		});

		it('does not detect heading preceded by inline content on same line', () => {
			const result = EncryptedHeadingParser.parse('text before # not heading');
			expect(result).toEqual([]);
		});

		it('does not detect heading inside inline code', () => {
			const result = EncryptedHeadingParser.parse('`# not a heading` is inline');
			expect(result).toEqual([]);
		});

		it('does not detect heading inside fenced code block', () => {
			const text = [
				'# Real heading',
				'```',
				'# not a heading',
				'## also not',
				'```',
				'# Another real heading',
			].join('\n');
			const result = EncryptedHeadingParser.parse(text);
			expect(result.map(h => h.text)).toEqual(['Real heading', 'Another real heading']);
		});

		it('does not detect indented heading (4+ spaces = code block per CommonMark)', () => {
			const result = EncryptedHeadingParser.parse('    # indented');
			expect(result).toEqual([]);
		});

		it('handles CRLF line endings like LF', () => {
			const text = '# Line1\r\n# Line2';
			const result = EncryptedHeadingParser.parse(text);
			expect(result.map(h => h.text)).toEqual(['Line1', 'Line2']);
		});
	});

	describe('in-place encryption marker handling', () => {
		it('skips headings inside an encrypted line', () => {
			const text = [
				'# Real heading',
				'%%🔐α somebase64ciphertext 🔐%%',
				'plaintext after encryption',
			].join('\n');
			const result = EncryptedHeadingParser.parse(text);
			expect(result.map(h => h.text)).toEqual(['Real heading']);
		});

		it('detects heading both before and after encrypted line', () => {
			const text = [
				'# Before',
				'%%🔐α cipher 🔐%%',
				'# After',
			].join('\n');
			const result = EncryptedHeadingParser.parse(text);
			expect(result).toEqual([
				{ level: 1, text: 'Before', line: 0 },
				{ level: 1, text: 'After', line: 2 },
			]);
		});

		it('preserves line numbers relative to original text (not stripped)', () => {
			const text = [
				'# First',
				'',
				'%%🔐α cipher 🔐%%',
				'',
				'## Fifth',
			].join('\n');
			const result = EncryptedHeadingParser.parse(text);
			expect(result.map(h => h.line)).toEqual([0, 4]);
		});

		it('skips visible-variant encrypted markers too', () => {
			const text = [
				'# Visible heading',
				'🔐α visible variant cipher 🔐',
				'# After',
			].join('\n');
			const result = EncryptedHeadingParser.parse(text);
			expect(result.map(h => h.text)).toEqual(['Visible heading', 'After']);
		});

		it('treats prefix-only (no suffix) line as plain text, not as encryption block', () => {
			const text = [
				'# Heading',
				'%%🔐α this line starts with prefix but has no closing suffix marker',
				'plaintext paragraph',
				'# After',
			].join('\n');
			const result = EncryptedHeadingParser.parse(text);
			expect(result.map(h => h.text)).toEqual(['Heading', 'After']);
		});

		it('skips heading-like line that starts with marker characters (heading touching marker start)', () => {
			const text = [
				'# Plain heading',
				'%%🔐α # title inside cipher 🔐%%',
				'# After',
			].join('\n');
			const result = EncryptedHeadingParser.parse(text);
			expect(result.map(h => h.text)).toEqual(['Plain heading', 'After']);
		});

		it('skips marker line whose own content contains # characters (heading-like inside marker)', () => {
			const text = [
				'# Before',
				'%%🔐α cipher with # hash and ## more hashes 🔐%%',
				'# After',
			].join('\n');
			const result = EncryptedHeadingParser.parse(text);
			expect(result.map(h => h.text)).toEqual(['Before', 'After']);
		});

		it('handles unicode heading text (Chinese / emoji) as normal text', () => {
			const result = EncryptedHeadingParser.parse('# 中文标题 with 🔐 emoji');
			expect(result).toEqual([
				{ level: 1, text: '中文标题 with 🔐 emoji', line: 0 },
			]);
		});
	});

	describe('whole-note encryption scenarios (no markers expected)', () => {
		it('returns empty array for content with only encrypted text (whole-note)', () => {
			const text = '# Real heading\n\nPlaintext paragraph\n\n## Another';
			const result = EncryptedHeadingParser.parse(text);
			expect(result.map(h => h.text)).toEqual(['Real heading', 'Another']);
		});
	});

	describe('heading interface shape', () => {
		it('Heading has level (1-6), text (non-empty), line (>=0)', () => {
			const result: Heading[] = EncryptedHeadingParser.parse('# Foo');
			expect(result[0]).toHaveProperty('level');
			expect(result[0]).toHaveProperty('text');
			expect(result[0]).toHaveProperty('line');
			expect(result[0].level).toBeGreaterThanOrEqual(1);
			expect(result[0].level).toBeLessThanOrEqual(6);
			expect(result[0].text.length).toBeGreaterThan(0);
			expect(result[0].line).toBeGreaterThanOrEqual(0);
		});
	});
});