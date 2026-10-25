---
title: Encryption and Security
layout: default
nav_order: 4.25
---

# Encryption and Security

Meld Encrypt encrypts note text with a password. Whole encrypted notes and in-place encrypted blocks use the same current encryption method, with different storage formats.

## Current encryption method

New content uses **encryption format v3**, introduced in Meld Encrypt 3.0.0. Encryption runs through the Web Crypto API on your device.

| Component | Current format |
|--|--|
| Encryption | **AES-256-GCM**, with a 256-bit key |
| Authentication tag | **128 bits** (16 bytes) |
| Password-based key derivation | **PBKDF2-HMAC-SHA512** |
| Work factor for new encryption | **220,000 iterations** |
| Salt | **16 random bytes**, generated for each encryption |
| Initialization vector (IV) | **12 random bytes**, generated for each encryption |

PBKDF2 derives the encryption key from your password and the salt. Its repeated computation adds work to each password guess; it does not make a weak password unguessable. Fresh salts and IVs mean encrypting the same text with the same password produces different encrypted output.

AES-GCM authenticates the encrypted text. In v3, it also authenticates the format version and key-derivation/encryption parameters. Incorrect passwords or changes to this authenticated data cause decryption to fail. Password hints and inline marker visibility are public and are **not authenticated**.

The iteration count is stored with the encrypted content. Decryption uses that stored count rather than assuming the current default.

## What remains readable?

- **Whole encrypted notes:** the note text is encrypted inside a `.mdenc` file. Filenames, folder paths, optional password hints, and encryption parameters remain readable.
- **In-place encryption:** only the selected text is encrypted. The rest of the Markdown note, encrypted-block markers, optional hints, and surrounding context remain readable.
- **Attachments:** encrypting a note or selection does not encrypt linked images or other attachment files.

Hints are not a safe place for passwords or sensitive information. Encryption also does not hide the existence or approximate size of encrypted content.

## Passwords and plaintext

Session password remembering keeps passwords in memory until the cache is cleared, expires, or Obsidian closes. **External file** mode reads a plaintext password file; **Obsidian Keychain** mode retrieves the selected secret from Obsidian's shared secret storage. Other plugins can access that secret storage. See [Settings](settings.md) for provider behavior and device setup.

While you view or edit an unlocked encrypted note, its saved text remains encrypted. Decrypted text and passwords are available in the running application while in use; this plugin does not protect against someone or software with access to that running session.

**Decrypt note**, conversion of an encrypted note to Markdown, **Decrypt in-place**, and recovery exports produce plaintext. Copied text is also plaintext on the clipboard. These copies may be synced or backed up. Encrypting existing text does not erase plaintext copies from earlier backups or file history.

There is no password reset that recovers encrypted content. Keep access to passwords needed for existing notes and older backups. Changing a Keychain secret or external password file does not change passwords on previously encrypted content.

## Older encrypted content

The plugin still reads released whole-note v1/v2 files and older inline formats. The parameters above describe **v3**, not every legacy format.

Saving a legacy whole encrypted note upgrades it to the current format. An older inline block upgrades when you edit and save it through the editor's decryption dialog. Simply revealing text does not upgrade the stored block.

## Further details and recovery

The encryption implementation has **not been independently audited**. Keep backups of encrypted originals as well as access to their passwords.

- [Technical format specification](dev-notes.md#encryption-format-v3-released-in-300): exact whole-note JSON, inline byte layout, authenticated metadata, and validation rules.
- [Troubleshooting and Recovery](troubleshooting-and-recovery.md): password problems and standalone decryption without Obsidian.
