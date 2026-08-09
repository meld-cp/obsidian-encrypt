import {
	_SUFFIXES,
	_PREFIXES,
} from "../features/feature-inplace-encrypt/FeatureInplaceConstants.ts";

export interface Heading {
	level: number;
	text: string;
	line: number;
}

export class EncryptedHeadingParser {

	public static parse(text: string): Heading[] {
		const normalized = text.replace(/\r\n/g, "\n");
		const lines = normalized.split("\n");
		const headings: Heading[] = [];
		let inFencedCodeBlock = false;

		for (let i = 0; i < lines.length; i++) {
			const line = lines[i];

			if (this.isFencedCodeFence(line)) {
				inFencedCodeBlock = !inFencedCodeBlock;
				continue;
			}
			if (inFencedCodeBlock) continue;
			if (this.isInplaceEncryptedLine(line)) continue;

			const heading = this.parseHeadingLine(line);
			if (heading !== null) {
				headings.push({ ...heading, line: i });
			}
		}

		return headings;
	}

	private static isFencedCodeFence(line: string): boolean {
		const trimmed = line.trimStart();
		return trimmed.startsWith("```") || trimmed.startsWith("~~~");
	}

	private static isInplaceEncryptedLine(line: string): boolean {
		const hasPrefix = _PREFIXES.some((p) => line.startsWith(p));
		const hasSuffix = _SUFFIXES.some((s) => line.endsWith(s));
		return hasPrefix && hasSuffix;
	}

	private static parseHeadingLine(line: string): { level: number; text: string } | null {
		const match = /^(#{1,6})\s+(.+?)\s*#*\s*$/.exec(line);
		if (match === null) return null;
		return {
			level: match[1].length,
			text: match[2].trim(),
		};
	}
}