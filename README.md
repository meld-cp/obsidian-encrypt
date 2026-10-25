# [Meld Encrypt](https://github.com/meld-cp/obsidian-encrypt) Plugin for Obsidian

**Create Encrypted Notes Within Your [Obsidian.md](https://obsidian.md/) Vault**

[Meld Encrypt](https://github.com/meld-cp/obsidian-encrypt) is a community plugin that lets you encrypt and decrypt your notes in [Obsidian](https://obsidian.md/). You can choose to encrypt an [entire note](https://meld-cp.github.io/obsidian-encrypt/whole-encrypted-notes.html) or just [selected text within a note](https://meld-cp.github.io/obsidian-encrypt/in-place-encryption.html).

While you view or edit an encrypted note, the plugin keeps its saved contents encrypted. Choosing **Decrypt note** or **Decrypt in-place**, or exporting through the CLI, writes plaintext that may be synced or backed up.

---

> [!WARNING]
> ⚠️ Use at Your Own Risk ⚠️
> - Passwords are normally remembered only in memory for the current session. **External file** mode reads a password from a file you provide. Without the correct password, encrypted content cannot be recovered.
> - The encryption methods used have not been independently audited. Unauthorized access may be possible if someone gains access to your files.
> - Bugs may be introduced at any time. You are solely responsible for maintaining backups of your notes.

---

## Installation

Requires Obsidian **1.13.0 or later**. Meld Encrypt supports desktop and mobile.

1. Open your vault in Obsidian and go to **Settings → Community plugins**.
2. Turn on community plugins if prompted, then click **Browse**.
3. Search for **Meld Encrypt**, select it, and click **Install**.
4. Click **Enable**. Configure password confirmation and password remembering under **Settings → Meld Encrypt**.

## Basic usage

Open the command palette with **Ctrl+P** on Windows/Linux or **Cmd+P** on macOS, or use Obsidian's **Open command palette** action on mobile. Search for the Meld Encrypt commands below.

### Encrypt an entire note

1. Run **Meld Encrypt: Create new encrypted note**.
2. Enter and confirm a password, optionally add a hint, and click **Encrypt**.
3. Write your note. Its saved contents are encrypted in a `.mdenc` file.
4. Run **Meld Encrypt: Lock and close all open encrypted notes** when finished.
5. To read or edit it later, open the encrypted file and enter its password when prompted.

To encrypt an existing Markdown note, right-click it in the file explorer and select **Encrypt note**, or open it and run **Meld Encrypt: Convert to or from an encrypted note**. Using that command on an encrypted note converts it back to plaintext.

### Encrypt selected text

1. Open a Markdown note in the editor and select the text to encrypt. If **Expand selection to whole line?** is enabled under **Settings → Meld Encrypt**, partial selections expand to include the whole line.
2. Run **Meld Encrypt: Encrypt selection**, enter and confirm a password, and click **Encrypt**.
3. To reveal the text, place the cursor inside the encrypted block and run **Meld Encrypt: Decrypt**. Enter the password when prompted.
4. Edit the revealed text and click **Save** to re-encrypt your changes. **Decrypt in-place** replaces the encrypted block with plaintext in the note.

See the guides for [whole encrypted notes](https://meld-cp.github.io/obsidian-encrypt/whole-encrypted-notes.html), [selected-text encryption](https://meld-cp.github.io/obsidian-encrypt/in-place-encryption.html), and [settings](https://meld-cp.github.io/obsidian-encrypt/settings.html) for more details.

## Ongoing Maintenance and Development

If you find this plugin useful please support the ongoing maintenance and development by:
* [Staring ⭐ this repo](https://github.com/meld-cp/obsidian-encrypt)
* [Buying me a coffee ☕](https://www.buymeacoffee.com/cleon)
* [Sponsoring ❤️ me](https://github.com/sponsors/meld-cp).

Thank you for your support 😊

<a href="https://www.buymeacoffee.com/cleon" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 50px !important;" ></a>


## Latest Changes

Information about the latest release can be found on the [release notes](https://meld-cp.github.io/obsidian-encrypt/release-notes.html) page.

Report any bugs or features requests [here](https://github.com/meld-cp/obsidian-encrypt/issues).


## Documentation

See the [documentation homepage](https://meld-cp.github.io/obsidian-encrypt/), [Getting Started](https://meld-cp.github.io/obsidian-encrypt/getting-started.html), and [Troubleshooting and Recovery](https://meld-cp.github.io/obsidian-encrypt/troubleshooting-and-recovery.html), including standalone decryption without Obsidian.

