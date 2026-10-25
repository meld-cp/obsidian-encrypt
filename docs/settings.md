---
title: Settings
layout: default
nav_order: 4
---

# Settings 

To customize the plugin, follow these steps: 

 1. Open **Settings** by clicking the **Settings** icon ![settings](assets/set_ico.png) in the toolbar. 
 2. Select **Meld Encrypt** from the list on the left. 
   
The following tables list the available settings and their descriptions:

## Password Settings

| Setting | Description |
|--|--|
| Confirm password | Confirm password when encrypting (recommended). |
| Remember password | Remember the last used passwords when encrypting or decrypting. Passwords are remembered until they timeout or Obsidian is closed. |
| Remember password by | Remember password by category: Vault, Folder, File, External File, or Obsidian Keychain. |
| Remember password timeout | Remember the password for a specified number of minutes or until Obsidian is closed. This setting is hidden in External file and Keychain modes. |
| External file paths | In External file mode, enter one path per line, relative to the vault root (including `../`), or an absolute path on desktop. |

### Encryption dialogs

Explicit encryption always opens a password dialog, including new encrypted notes, conversions, and inline encryption. The selected provider prefills the masked password; you can override it for this operation, confirm it when **Confirm password** is enabled, and add an optional hint. Cancelling leaves content unchanged. Saving an already unlocked encrypted note does not prompt again.

### Using Obsidian Keychain

1. Enable **Remember password?** and select **Obsidian Keychain** under **Remember passwords by:**.
2. Use **Keychain secret** to select an existing secret or create one using Obsidian's native control. One selected secret serves both whole-note and inline encryption.
3. Manage secret values in **Obsidian Settings → Keychain**. To use another ID, select or create another secret in Meld Encrypt's settings.

Only the secret ID is saved in plugin settings. Secrets are local to the device and vault; configure the secret on each device. Other plugins can access secrets through Obsidian's shared secret storage. Clearing the session password cache does not remove the secret or prevent subsequent retrieval.

The selected secret supplies the default password for encryption and decryption. Changing it does not update existing encrypted content. Changing a note or block’s password does not update the secret. Content encrypted with an older password still requires that password.

Missing, empty, unavailable, or incorrect secrets fall back to manual password entry during decryption. Manual entry never updates the stored secret. Keep access to old passwords for existing content and backups.

### Using an External Password File

1. Create a plain-text file containing your password. Prefer storing it outside your vault and outside any sync or backup set containing your encrypted notes.
2. Enable **Remember password?** and select **External file** under **Remember passwords by:**.
3. Under **External file paths**, enter one path per line, relative to the vault root. For example, `../secrets/password.txt` refers to a file in a `secrets` folder beside your vault.
4. Click the checkmark button (**Check paths**) to check whether each path can be read and returns nonempty contents. This does not check whether the password decrypts a note.

Parent-directory (`../`) paths are passed to the file adapter on every platform. Desktop also accepts absolute filesystem paths. Mobile operating systems may deny access outside the vault; inaccessible paths are skipped in configured order. Password contents are used exactly as stored, including whitespace.

Make sure the password file is accessible on each device. Run **Check paths**
on each device to confirm it can be read.

When a password is needed, the plugin tries the paths in order and uses the
first readable, nonempty file. It does not try later files if that password
fails to decrypt a note. The entire file contents become the password,
including spaces and trailing newlines. If you intend to use an existing
password, make sure the file contains exactly that password.

The password file contains plaintext. Anyone who can read it has access to
the password.

## In-place Encryption

| Setting | Description |
|--|--|
| Expand selection to whole line | Partial selections will get expanded to the whole line.|
| Search limit for markers | How far to look for markers when encrypting or decrypting. |
| By default, show encrypted marker when reading | When encrypting inline text, determines whether a visible marker is shown in Reading View by default.|

