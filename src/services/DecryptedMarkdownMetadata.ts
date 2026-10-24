import { parser } from '@lezer/markdown';
import type { CachedMetadata, HeadingCache, Loc } from 'obsidian';

// Keep this metadata local to the unlocked view. Never publish it to MetadataCache.
export function getDecryptedMarkdownMetadata(text: string): CachedMetadata {
	const mask = (value: string) => value.replace(/[^\r\n]/g, ' ');
	// Mask rather than remove content so parser offsets still refer to the original text.
	let markdown = text.replace(/^(?:\uFEFF)?---\r?\n[\s\S]*?\r?\n(?:---|\.\.\.)(?=\r?\n|$)/, mask);
	const codeRanges: { from: number; to: number }[] = [];
	parser.parse(markdown).iterate({
		enter(node) {
			if (['FencedCode', 'CodeBlock', 'InlineCode'].includes(node.name)) {
				codeRanges.push({ from: node.from, to: node.to });
				return false;
			}
		},
	});
	// Obsidian comments are not part of CommonMark. Ignore delimiters inside code.
	const delimiters = [...markdown.matchAll(/%%/g)]
		.filter(match => !codeRanges.some(range => range.from <= match.index && match.index < range.to));
	for (let index = 0; index < delimiters.length; index += 2) {
		const from = delimiters[index].index;
		const to = delimiters[index + 1] ? delimiters[index + 1].index + 2 : markdown.length;
		markdown = markdown.slice(0, from) + mask(markdown.slice(from, to)) + markdown.slice(to);
	}

	const lineStarts = [0];
	for (let index = 0; index < text.length; index++) {
		if (text[index] === '\n') lineStarts.push(index + 1);
	}
	const location = (offset: number): Loc => {
		let low = 0;
		let high = lineStarts.length;
		while (low + 1 < high) {
			const middle = Math.floor((low + high) / 2);
			if (lineStarts[middle] <= offset) low = middle;
			else high = middle;
		}
		return { line: low, col: offset - lineStarts[low], offset };
	};
	const headings: HeadingCache[] = [];
	parser.parse(markdown).iterate({
		enter(node) {
			const heading = /^(?:ATX|Setext)Heading([1-6])$/.exec(node.name);
			if (!heading) return;
			// HeaderMark nodes delimit the content in both ATX and Setext headings.
			let from = node.from;
			let to = node.to;
			for (let child = node.node.firstChild; child; child = child.nextSibling) {
				if (child.name !== 'HeaderMark') continue;
				if (child.from === node.from) from = child.to;
				else to = child.from;
			}
			headings.push({
				heading: markdown.slice(from, to).trim(),
				level: Number(heading[1]),
				position: { start: location(node.from), end: location(node.to) },
			});
			return false;
		},
	});
	return { headings };
}
