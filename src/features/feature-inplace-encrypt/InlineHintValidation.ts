import { ENCRYPTED_ICON, _HINT } from './FeatureInplaceConstants.ts';

export function getInlineHintError(hint: string = ''): string | null {
	if (hint.includes(_HINT) || hint.includes(ENCRYPTED_ICON)) {
		return `Password hints cannot contain ${_HINT} or ${ENCRYPTED_ICON}. Remove these markers to continue.`;
	}
	return null;
}
