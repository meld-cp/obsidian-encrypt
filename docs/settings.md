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
| Remember password | Reuse session passwords or the selected external-file/Keychain provider. Enabled by default. |
| Remember password by | Remember password by category: Vault, Folder, File, External File, or Obsidian Keychain. |
| Remember password timeout | Session inactivity timeout in minutes (default **30**). **0** means until Obsidian closes. Hidden in External file and Keychain modes. |
| External file paths | In External file mode, enter one path per line, relative to the vault root (including `../`), or an absolute path on desktop. |

### Choosing a password scope

These settings reuse passwords; they do not change passwords on existing notes or require all notes to share one password.

| Mode | Example |
|--|--|
| Vault (default) | A password used for `Personal/Diary.mdenc` is offered for `Work/Plans.mdenc` too. The last remembered password is reused across the vault. |
| Folder | `Personal/Diary.mdenc` and `Personal/Budget.mdenc` share a remembered password. `Personal/Archive/Old.mdenc` has a separate folder entry; subfolders do not inherit it. |
| File | Each full file path has its own remembered password. Inline blocks in the same Markdown file share that file's entry; this is not a separate cache for each block. |
| External file | Read one shared password from the first readable, nonempty configured file. See the instructions below. |
| Obsidian Keychain | Read one shared password from the selected secret. Configure it on each device. |

In session modes, reading or remembering a password resets a shared timeout for the cache. After that interval without password-cache activity, the next lookup clears expired entries. This is not a separate timer for each note and does not lock an already open encrypted note. Use **Meld Encrypt: Lock and close all open encrypted notes** to close unlocked notes.

Turning off **Remember password?** clears the session cache and stops password reuse. External files and Keychain secrets are not deleted.

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
| Expand selection to whole line | Include the entire line when encrypting a partial selection. Off by default. |
| Search limit for markers | Maximum text distance to search backward for an opening marker and forward for a closing marker around the cursor. Default **10000** (text offsets, not lines). Increase for very large encrypted blocks if cursor-based detection fails, or select the complete block explicitly. Larger limits may make searches slower. |
| By default, show encrypted marker when reading | Default visibility of the clickable 🔐 marker for new inline encryption. On by default. Change it in the encryption dialog for an individual block; changing this setting does not update existing blocks. |

For password prompts, unreadable provider files, or missing inline markers, see [Troubleshooting and Recovery](troubleshooting-and-recovery.md).
