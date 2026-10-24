---
title: Development Notes
layout: default
nav_exclude: true
---

# Development Notes

## Releasing New Versions

To release a new version:

1. Update `version` in `package.json`.
2. Run `npm run version` to update `manifest.json` & `versions.json`.
  	* `manifest.json`: holds the new version number and the minimum Obsidian version required for your latest release.
	* `versions.json`: holds the history of version numbers and their minimum Obsidian version, so older versions of Obsidian can download an older version of your plugin that's compatible.
3. Run `npm run release:check` as described under [Validation](#validation). Resolve any failures before continuing.
4. Review the generated `dist/release-check/report.json` and `SHA256SUMS`. A passed local check produces freshly verified production assets; it does not replace the desktop and mobile checks below.
5. Test the packaged plugin on desktop and mobile, including the minimum supported Obsidian version. Check that the following files were generated for the version in `package.json` (replace `<version>` with that version):
   * `dist/meld-encrypt-<version>.zip`
   * `dist/meld-encrypt-<version>/meld-encrypt/manifest.json`
   * `dist/meld-encrypt-<version>/meld-encrypt/main.js`
   * `dist/meld-encrypt-<version>/meld-encrypt/styles.css`
6. Finalize the release notes, commit all release changes, and merge `next` into `main`. Push `main`, then create and push an annotated tag matching the version at that commit.
7. Create a new GitHub release using your new version number as the **Tag version**. Use the exact version number, and don't include a prefix `v`. See the following example: [obsidian-sample-plugin](https://github.com/obsidianmd/obsidian-sample-plugin/releases).
8. Upload the ZIP and the three individual plugin files from step 5 as binary attachments. Use the freshly built files for this version.
9. Verify the attached assets and publish the release as the latest stable version. Confirm that Obsidian detects and installs the update.

The production build requires the `zip` command. Verify archives with `unzip -t`; a successful bundle alone does not prove packaging succeeded.

## Adding Your Plugin to the Community Plugin List

To add your plugin to the community plugin list:

1. Publish an initial version.
2. Make sure you have a `README.md` file in the root of your repository.
3. Submit through the [Obsidian Community directory](https://community.obsidian.md), following [Obsidian’s release guide](https://docs.obsidian.md/Plugins/Releasing/Submit%20your%20plugin). Only the initial release needs submission.

## How to Use

1. Clone this repository.
2. Run `npm i` or `yarn` to install dependencies.
3. Run `npm run dev` to start the compiler in watch mode.

## Validation

Install dependencies with `npm ci`, then run:

```bash
npm run release:check
```

The command checks matching versions in the package, lockfile, manifest, and
compatibility map; verifies Git, `zip`, `unzip`, and installed dependencies;
rebuilds recovery bundles in memory; runs type checking, the full test suite,
and lint once each; and builds and verifies the release assets. ZIP integrity,
exact contents, and byte equality with the standalone files are checked.
The current version's production output directory and ZIP are replaced before
building; other versions' output is preserved.

Tracked files are never rewritten. If recovery bundles are stale, the check
stops before testing them and lists the affected files. Regenerate them with:

```bash
npm run build-tool-mdenc
npm run dev-tool-mdenc
npm run build-tool-decrypt
```

Review the changes to `tools/mdenc.mjs`, `tools/mdenc-debug.mjs`,
`tools/offline-decrypt.js`, and `tools/decrypt.html`, then rerun `release:check`.
CLI and offline-decryptor tests execute these tracked files, so they must match
fresh builds before tests run. The existing build commands still write their
outputs normally.

Every check run replaces `dist/release-check/report.json` with the version,
Git commit, working-tree state, stage results, timings, and any failure details.
A successful run also writes `dist/release-check/SHA256SUMS`, containing hashes
of the ZIP and three standalone release assets; paths are relative to the
repository root. Verify them with `sha256sum -c dist/release-check/SHA256SUMS`.
Failure returns a nonzero exit status, marks later stages skipped, and removes
old checksum output. Uncommitted changes are allowed and recorded in the report.

This is local automated validation. It does not launch Obsidian or perform
smoke tests, commit, push, tag, or publish. Desktop/mobile and update checks
remain separate release steps. Run `git diff --check` before committing.
For documentation-only changes, check the diff, referenced paths, and claims
against the implementation; rebuilding unchanged bundles is unnecessary.

## Shared Implementation Paths

* `src/services/PasswordForm.ts` owns password and confirmation fields, hint editing, validation, and Enter-key navigation for both password dialogs. Keep validation separate from submission: navigation must not confirm a result that can still be cancelled. Inline-only hint restrictions are supplied by the inline dialog; its marker-visibility and text controls remain in that dialog.
* `FeatureInplaceEncrypt.encryptSelection()` is the shared writer for new inline text and edited text saved from the decryption dialog. It validates hints, encrypts with the default format, formats markers, and replaces the selection. Re-saving preserves the existing password, hint, and marker visibility.
* `FeatureWholeNoteEncryptV2.addEncryptedNoteMenuItems()` defines the shared **Change password** and **Lock & close** actions. Keep eligibility checks in the editor and file menu handlers; the file menu requires the selected file to match the active encrypted view.
* `src/services/Base64.ts` provides chunked byte encoding and decoding with `atob`'s legacy tolerance. Keep v3's canonical Base64 validation in the `decodeBase64()` function in `CryptoHelperV3.ts`; do not apply those stricter rules to legacy readers. The v3 module retains its `encodeBase64` export.
* `src/tools/mdenc.ts` shares original-input block scanning and password attempts between checking and recovery. Build recovered output from source spans without rescanning or replacing text inside recovered plaintext. An inline note must decrypt completely before its output is written; checking continues to report later blocks after a failure.

## Manually Installing the Plugin

Copy the files `main.js`, `styles.css`, and `manifest.json` to your vault at `VaultFolder/.obsidian/plugins/your-plugin-id/`, replacing `your-plugin-id` with the actual ID of your plugin.

If the `your-plugin-id` folder does not exist, create it before copying the files.

## API Documentation

For detailed API Documentation, see the [Obsidian API repository](https://github.com/obsidianmd/obsidian-api).
## Encryption format v3 (released in 3.0.0)

New whole-note files and inline gamma (`γ`) blocks use one authenticated encryption
format with two representations. Whole-note JSON stores readable parameters:

```json
{
  "version": "3.0",
  "hint": "optional public hint",
  "kdf": {
    "name": "PBKDF2",
    "hash": "SHA-512",
    "iterations": 220000,
    "salt": "<16 random bytes, Base64>"
  },
  "cipher": {
    "name": "AES-GCM",
    "keyLength": 256,
    "iv": "<12 random bytes, Base64>",
    "tagLength": 128
  },
  "encodedData": "<ciphertext followed by the 16-byte authentication tag, Base64>"
}
```

Inline blocks preserve the existing `%%🔐γ … 🔐%%` or `🔐γ … 🔐` markers and
optional `💡hint💡`. Their payload is standard padded Base64 of these bytes:

| Offset | Length | Meaning |
| --- | --- | --- |
| 0 | 1 | Crypto suite identifier: `1` |
| 1 | 3 | PBKDF2 iteration count, unsigned big-endian |
| 4 | 16 | Salt |
| 20 | 12 | IV |
| 32 | Remaining, at least 16 | Ciphertext followed by authentication tag |

Suite `1` permanently means PBKDF2-HMAC-SHA512 and AES-256-GCM, with a 16-byte
salt, 12-byte IV and 16-byte tag. It cannot be reassigned when defaults change.
The gamma marker supplies the format version. The suite and iteration header
adds four bytes to the previous experimental v3 payload; it contains no JSON.
A zero-length plaintext still produces a 48-byte payload (64 Base64 characters).

For both representations, AES-GCM additional authenticated data (AAD) is the
UTF-8 encoding of compact `JSON.stringify({ version, kdf, cipher })`. Reconstruct
these objects in exactly this order:

- Root: `version`, `kdf`, `cipher`.
- KDF: `name`, `hash`, `iterations`, `salt`.
- Cipher: `name`, `keyLength`, `iv`, `tagLength`.

Values match the JSON example; salt and IV use canonical padded Base64. No
whitespace or trailing newline is included in AAD. Source JSON property order
is irrelevant because readers rebuild this header. Hints and marker visibility
are public and are not authenticated. Do not store passwords or derived keys.

Readers validate the complete envelope before deriving a key. Only suite `1`
and its corresponding JSON algorithm/length values are supported. Iterations
must be integers from 220,000 through 2,000,000; encryption defaults to 220,000,
but decryption uses the stored count. Invalid Base64, unknown metadata fields,
unsupported parameters, wrong lengths, truncated tags, and out-of-range counts
are rejected. Valid-looking metadata changes fail GCM authentication.

Whole-note v1/v2 and inline obsolete/alpha/beta formats retain their existing
readers. Saving a legacy whole note upgrades it; inline content upgrades when
edited and saved through its decryption modal. Earlier experimental v3 layouts
are not supported. Physically blank files retain the existing initialization
behavior, but serialized v3 envelopes always require authenticated ciphertext,
even for empty text.

After changing the format or its shared helpers, follow [Validation](#validation)
to rebuild the tracked decrypt tools and test their generated bundles.
