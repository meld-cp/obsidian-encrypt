import { describe, expect, it } from 'vitest';
import { getDecryptedMarkdownMetadata } from '../../src/services/DecryptedMarkdownMetadata.ts';

describe('decrypted Markdown heading metadata', () => {
	it('retains heading order, levels, formatting, Unicode and original positions', () => {
		const text = '# Parent\r\n\r\n## **café 🔐** ##\r\n\r\nSetext\r\n======\r\n\r\n## Duplicate\r\n## Duplicate';
		const headings = getDecryptedMarkdownMetadata(text).headings!;
		expect(headings.map(({ heading, level }) => [heading, level])).toEqual([
			['Parent', 1], ['**café 🔐**', 2], ['Setext', 1], ['Duplicate', 2], ['Duplicate', 2],
		]);
		for (const heading of headings) {
			const { start, end } = heading.position;
			expect(text.slice(start.offset, end.offset)).toContain(heading.heading);
			expect(text.slice(0, start.offset).split('\n').length - 1).toBe(start.line);
		}
		expect(headings[1].position.start).toEqual({ line: 2, col: 0, offset: text.indexOf('## **') });
	});

	it('ignores frontmatter, comments, fenced and indented code, and HTML blocks', () => {
		const text = '---\n# yaml\n---\n%%\n# comment\n%%\n```md\n# fenced\n```\n\n    # indented\n\n<div>\n# html\n</div>\n\n# Visible\n';
		expect(getDecryptedMarkdownMetadata(text).headings?.map(h => h.heading)).toEqual(['Visible']);
	});

	it('does not treat comment delimiters inside code as comments', () => {
		const text = '```\n%%\n```\n\n`%%`\n\n# Visible\n%% hidden %%\n## Also visible';
		expect(getDecryptedMarkdownMetadata(text).headings?.map(h => h.heading)).toEqual(['Visible', 'Also visible']);
	});

	it('handles headings nested in lists and blockquotes', () => {
		const text = '> ## Quoted\n\n- ### Listed\n';
		expect(getDecryptedMarkdownMetadata(text).headings?.map(h => h.heading)).toEqual(['Quoted', 'Listed']);
	});

	it('ignores the rest of an unclosed comment', () => {
		expect(getDecryptedMarkdownMetadata('# Visible\n%%\n# Hidden').headings?.map(h => h.heading)).toEqual(['Visible']);
	});
});
