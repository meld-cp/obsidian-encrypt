
export const _PREFIX_B = '%%🔐β ';
export const _PREFIX_B_VISIBLE = '🔐β ';

export const _PREFIX_A = '%%🔐α ';
export const _PREFIX_A_VISIBLE = '🔐α ';
export const _PREFIX_OBSOLETE = '%%🔐 ';

export const _PREFIX_ENCODE_DEFAULT = _PREFIX_B;
export const _PREFIX_ENCODE_DEFAULT_VISIBLE = _PREFIX_B_VISIBLE;

// Should be listed by evaluation priority
export const _PREFIXES = [
	_PREFIX_B,
	_PREFIX_B_VISIBLE,
	_PREFIX_A,
	_PREFIX_A_VISIBLE,
	_PREFIX_OBSOLETE,
];

export const _SUFFIX_WITH_COMMENT = ' 🔐%%';
export const _SUFFIX_NO_COMMENT = ' 🔐';

// Should be listed by evaluation priority
export const _SUFFIXES = [
	_SUFFIX_WITH_COMMENT,
	_SUFFIX_NO_COMMENT
]

export const _HINT = '💡';