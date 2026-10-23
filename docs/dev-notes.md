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
3. Run `npm test` and resolve any failures before continuing.
4. Run `npm run build` to type-check the source and generate fresh production artifacts. Resolve any build errors before continuing.
5. Check that the following files were generated for the version in `package.json` (replace `<version>` with that version):
   * `dist/meld-encrypt-<version>.zip`
   * `dist/meld-encrypt-<version>/meld-encrypt/manifest.json`
   * `dist/meld-encrypt-<version>/meld-encrypt/main.js`
   * `dist/meld-encrypt-<version>/meld-encrypt/styles.css`
6. Create a new GitHub release using your new version number as the **Tag version**. Use the exact version number, and don't include a prefix `v`. See the following example: [obsidian-sample-plugin](https://github.com/obsidianmd/obsidian-sample-plugin/releases).
7. Upload the ZIP and the three individual plugin files from step 5 as binary attachments. Use the freshly built files for this version.
8. Publish the release.

## Adding Your Plugin to the Community Plugin List

To add your plugin to the community plugib list: 

1. Publish an initial version.
2. Make sure you have a `README.md` file in the root of your repository.
3. Make a pull request at [obsidian-releases](https://github.com/obsidianmd/obsidian-releases) to add your plugin.

## How to Use

1. Clone this repository.
2. Run `npm i` or `yarn` to install dependencies.
3. Run `npm run dev` to start the compiler in watch mode.

## Manually Installing the Plugin

Copy the files `main.js`, `styles.css`, and `manifest.json` to your vault at `VaultFolder/.obsidian/plugins/your-plugin-id/`, replacing `your-plugin-id` with the actual ID of your plugin.

If the `your-plugin-id` folder does not exist, create it before copying the files.

## API Documentation

For detailed API Documentation, see the [Obsidian API repository](https://github.com/obsidianmd/obsidian-api).
## Encryption format v3 (unreleased)

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

Rebuild the tracked decrypt tools after changing the format:

```bash
npm run build-tool-mdenc
npm run dev-tool-mdenc
npm run build-tool-decrypt
```
