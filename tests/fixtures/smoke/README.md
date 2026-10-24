# Smoke-test fixtures

These are fictional, public test notes and passwords. Never put real secrets here.

`legacy-whole.mdenc` is a released v2 whole-note envelope. `legacy-inline.md`
contains the same v2 ciphertext in beta inline markers. Both decrypt to
`legacyText` using `legacyPassword` in `expectations.json`. They were generated
independently of the current plugin using PBKDF2-HMAC-SHA512 (210,000 iterations)
and AES-256-GCM, with a 16-byte IV followed by a 16-byte salt and ciphertext/tag.
Keep these fixed so smoke checks test compatibility with existing content,
rather than generating legacy fixtures using the implementation being tested.

The harness copies these files into a fresh disposable vault for each run.
`tests/test-vault` remains for manual testing and is never read or changed by
the automated harness.
