---
title: Getting Started
layout: default
nav_order: 2
---

# Getting Started

Meld Encrypt requires **Obsidian 1.13.0 or later** and supports desktop and mobile.
If needed, [install Obsidian](https://obsidian.md/download) first and open a vault.

## Install Meld Encrypt

1. Open **Settings → Community plugins** in your vault. On mobile, open Settings from Obsidian's sidebar.
2. Turn on community plugins if prompted, then choose **Browse**.
3. Search for **Meld Encrypt**, select it, and choose **Install**.
4. Choose **Enable**. Password confirmation and password remembering are configured under **Settings → Meld Encrypt**.

## Choose what to encrypt

| Mode | Use it for | What stays readable in the vault |
|--|--|--|
| [Whole encrypted notes](whole-encrypted-notes.md) | Protecting an entire note's text | The filename and optional password hint; the note text is encrypted in a `.mdenc` file. |
| [In-place encryption](in-place-encryption.md) | Protecting selected text inside a Markdown note | The rest of the note; selected text is replaced with an encrypted block. |

Keep your password somewhere safe: there is no password reset that can recover encrypted content. Password hints are not encrypted; do not put secrets in them.

Open the command palette with **Ctrl+P** on Windows/Linux or **Cmd+P** on macOS. On mobile, use Obsidian's **Open command palette** action.

## Try a whole encrypted note

1. Run **Meld Encrypt: Create new encrypted note**.
2. Enter and confirm a password, optionally add a hint, and choose **Confirm**.
3. Write your note. Its saved contents remain encrypted while you view or edit it.
4. Run **Meld Encrypt: Lock and close all open encrypted notes** when finished.
5. Open the encrypted file to read or edit it again. Enter its password if prompted; a remembered password may unlock it automatically.

For an existing Markdown note, right-click it in the file explorer and choose **Encrypt note**, or run **Meld Encrypt: Convert to or from an encrypted note**. Using that command on an encrypted note converts it to plaintext.

## Try selected-text encryption

1. Open a Markdown note in the editor and select some text.
2. Run **Meld Encrypt: Encrypt selection**, enter and confirm a password, then choose **Confirm**. If **Expand selection to whole line?** is enabled in settings, partial selections include the whole line.
3. Place the cursor inside the encrypted block and run **Meld Encrypt: Decrypt**. Enter its password if prompted.
4. Edit the revealed text and choose **Save** to re-encrypt your changes.

In Reading View, click a visible 🔐 marker to reveal text in a read-only popup with **Copy**. Use the editor to edit encrypted text.

**Decrypt note**, **Decrypt in-place**, and recovery exports produce plaintext that may be synced or backed up. Revealing text in a dialog or editing an unlocked encrypted note keeps the saved content encrypted unless you choose a plaintext conversion.

## Next steps

- Read the [whole-note](whole-encrypted-notes.md) and [in-place](in-place-encryption.md) guides for more actions.
- Choose how passwords are remembered in [Settings](settings.md).
- See [Troubleshooting and Recovery](troubleshooting-and-recovery.md) for password problems or decryption without Obsidian.
