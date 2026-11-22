import { ENCRYPTED_ICON, _HINT } from './FeatureInplaceConstants.ts';
import { t } from '../../i18n/i18n.ts';

export function getInlineHintError(hint: string = ''): string | null {
	if (hint.includes(_HINT) || hint.includes(ENCRYPTED_ICON)) {
		return t('form.hintMarkerError', { hintMarker: _HINT, encryptedMarker: ENCRYPTED_ICON });
	}
	return null;
}
