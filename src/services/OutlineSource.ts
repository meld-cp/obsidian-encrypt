import { Heading } from "./EncryptedHeadingParser.ts";

/**
 * Surface that an EncryptedOutlineView mirrors. Implemented by EncryptedMarkdownView
 * to avoid circular feature-to-feature imports. Decoupled so feature-outline
 * never imports feature-whole-note-encrypt and vice-versa.
 */
export interface OutlineSource {
	getDecryptedText(): string;
	jumpToHeading(heading: Heading): void;
}