---
title: Troubleshooting and Recovery
layout: default
nav_order: 4.5
---

# Troubleshooting and Recovery

Before converting or recovering notes, keep a backup of the encrypted originals. Recovery requires the correct password; neither the plugin nor the standalone tools can reset it.

## Why am I asked for a password again?

Explicit encryption always opens a password dialog, even when a remembered password or provider prefills it. Saving an already unlocked encrypted note does not prompt again.

For decryption, check **Settings → Meld Encrypt → Remember password?**, the selected scope, and the timeout. Session passwords are lost when Obsidian closes or the cache is cleared. Folder and File modes can require a different password when you open another path. See [password scopes and timeout behavior](settings.md#choosing-a-password-scope).

## A password does not decrypt my content

- Enter the password originally used for that note or inline block, including any spaces. A remembered password may belong to different content.
- Changing a Keychain secret or external password file does not re-encrypt existing content. Try the previous password manually; old backups may still require it.
- If the password is correct, check that the encrypted file or block is complete and unchanged. Compare with a backup before editing ciphertext or markers.

A decryption failure can mean an incorrect password or damaged/unsupported encrypted input. Keep the original; do not convert or overwrite it while investigating.

## My external password file is unavailable

Use **Check paths** beside **External file paths** on each device. A checkmark means the file is readable and nonempty, not that its contents decrypt your note.

Paths are relative to the vault root, including `../`; desktop also accepts absolute paths. Mobile permissions may prevent access outside the vault. The plugin skips unreadable or empty files and uses the first readable, nonempty one. It does not try later files after that password fails decryption.

The entire file is the password, including trailing newlines. Check for accidental whitespace. If no usable file is available, enter the password manually. Prefer keeping this plaintext password file outside the vault and any sync or backup set containing encrypted notes. See [external password file setup](settings.md#using-an-external-password-file).

## My Keychain password is unavailable or incorrect

Enable **Remember password?**, choose **Obsidian keychain**, and select the intended **Keychain secret**. Manage its value under **Obsidian Settings → Keychain** on each device; the plugin saves only the secret ID.

Missing, empty, unavailable, or incorrect secrets fall back to manual entry during decryption. Manual entry does not update the secret. Clearing the session cache does not remove the secret or prevent it from being read again. See [Keychain setup](settings.md#using-obsidian-keychain).

## An inline marker is missing or Decrypt cannot find my block

In Reading View, only blocks saved with marker visibility enabled show a clickable 🔐 marker. Turning on the default visibility setting does not change existing blocks. Switch to the editor, place the cursor inside the encrypted block, and run **Meld Encrypt: Decrypt**.

For a very large block, select the complete encrypted block, including its opening and closing markers, before running **Decrypt**, or increase **Search limit for markers** in settings. The default search distance is 10000 text offsets in each direction around the cursor. If markers were deleted or the ciphertext was truncated, restore the complete block from a backup.

The Reading View popup is read-only. To edit encrypted text and save it encrypted, use the editor's **Decrypt** dialog and choose **Save**. **Decrypt in-place** instead writes plaintext into the note.

## Recovery without Obsidian

### Offline browser decryptor

1. Download **decrypt.html** and **offline-decrypt.js** from the same [Meld Encrypt release](https://github.com/meld-cp/obsidian-encrypt/releases). Save both files in the same folder with those exact names.
2. Open `decrypt.html` in a modern browser. Both files work locally without Obsidian or a network connection.
3. For a whole encrypted note, open a copy of the `.mdenc` file in a text editor and paste its entire contents into **Encrypted Text**. For inline text, paste one complete encrypted block, including its markers.
4. Enter the correct **Password** and choose **Decrypt**.
5. Copy the result from **Decrypted Text** into a new file if you want to keep it. The tool displays the result; it does not rewrite the source note.

The tool supports released legacy formats as well as the current encryption format. A failure can mean an incorrect password or incomplete/unsupported input. Use the CLI below for recovery of multiple files or a Markdown note containing multiple encrypted blocks.

### Command-line recovery

The standalone `mdenc.mjs` tool can list encrypted content, check passwords, and recover whole notes and inline blocks without Obsidian. Follow the [Node CLI installation and recovery guide](https://github.com/meld-cp/obsidian-encrypt/blob/main/tools/Running-mdenc-with-Node.md).

Run checks and a dry run first, then recover into a separate directory outside the source vault. The guide includes the exact commands and explains how partial failures are reported.

**Recovered output is plaintext.** Saved files, clipboard contents, and files created with **Decrypt note** or **Decrypt in-place** may be synced or backed up. Keep encrypted originals and handle recovered copies accordingly.

## Still need help?

[Open an issue](https://github.com/meld-cp/obsidian-encrypt/issues) with your Obsidian and Meld Encrypt versions, desktop/mobile platform, encryption mode, exact error, and steps to reproduce. Use a disposable example; do not post real passwords, sensitive plaintext, or private encrypted notes.
