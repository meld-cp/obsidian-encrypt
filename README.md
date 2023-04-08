# Obsidian Encrypt Plugin

**Create encrypted notes within your [Obsidian.md](https://obsidian.md/) vault.**

Encrypted notes are never decrypted to disk (unless you use the decrypt in-place feature) giving you piece-of-mind that the decrypted contents haven't been sync'd or backed up to external systems.



> ⚠️ WARNING - Use at your own risk ⚠️
> - Your passwords are never stored anywhere, if you forget your passwords you can't decrypt your notes.
> - No known audits have been undertaken for the soundness of encryption methods being used.  Unwanted decryption by a 3rd party may be possible if they have access to your files.
> - Bugs could be introduced to the software at anytime, you are responsible for having backups of your notes.

---

## ⚜️ Installation

You can install the plugin via the Community Plugins tab within Obsidian by searching for "Meld Encrypt"

---

## ⚜️ Latest Changes

<a href="https://www.buymeacoffee.com/cleon"><img src="https://img.buymeacoffee.com/button-api/?text=Shout me a coffee&emoji=&slug=cleon&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff"></a>

> Please report any bugs or feature requests [here](https://github.com/meld-cp/obsidian-encrypt/issues).

### 2.1.1
- Limited support for markdown in `.encrypted` notes
- New setting to select the default view when opening `.encrypted` notes (Source or Reading)

### v2.1.0
- Auto decrypt note if password remembered
- Clear remembered password when re-locking file
- When changing password, remember it if 'remember passwords' is active
- Change wording for 'Remember Password Timeout' in settings
- Add new setting to remember password by parent folder path
- Code refactors

### v2.0.5
- fix creating encrypted note on mobile

---

## ⚜️ Usage

<!--
https://raw.githubusercontent.com/meld-cp/obsidian-encrypt/main/

<img alt="Run the Encrypt/Decrypt command" src="https://raw.githubusercontent.com/meld-cp/obsidian-encrypt/main/docs/assets/eg_ed_cp.png" /> 
-->

### Standalone, always encrypted, notes (.encrypted files)
#### To create a new encrypted note
1. Select 'Create encrypted note' from the command palette.
2. Enter and confirm a password and optional hint to use.
3. Edit your encrypted note (it's contents will be encrypted and saved to disk).

#### To edit/view an encrypted note
1. Open the note as usual from the navigation tree.
2. Enter the password for the note.

#### To changing an encrypted notes password and hint
1. Open the note as usual from the navigation tree.
2. Enter the password for the note.
3. Click 'Change Password' from the tab title bar or tab context menu.
4. Enter the new password and hint.

### In-place Encryption

#### To encrypt selected text
1. Select some text to encrypt  

> Note: A partial selection will be expanded to include the whole line if the 'Expand selection to whole line' setting is enabled.

2. Run the Encrypt/Decrypt command from the palette (or bind a keyboard shortcut to it).  
<img alt="Run the Encrypt/Decrypt command" src="https://raw.githubusercontent.com/meld-cp/obsidian-encrypt/main/docs/assets/eg_ed_cp.png" /> 

3. Enter and confirm a password and optional hint.

4. Your selected text should now be encrypted.  
<img alt="Your selected lines are now encrypted" src="https://raw.githubusercontent.com/meld-cp/obsidian-encrypt/main/docs/assets/eg_e_r.png" /> 

#### How to reveal your encrypted text
1. Place your cursor anywhere on encrypted text.   
<img alt="Place your cursor on the encrypted line" src="https://raw.githubusercontent.com/meld-cp/obsidian-encrypt/main/docs/assets/eg_d_text.png" /> 

2. Run the Encrypt/Decrypt command from the palette.  
<img alt="Run the Encrypt/Decrypt command" src="https://raw.githubusercontent.com/meld-cp/obsidian-encrypt/main/docs/assets/eg_ed_cp.png" /> 

> Note: If you choose 'Encrypt/Decrypt In-place' your text will be decrypted directly into the editor without showing the dialog in step 4 below (any syncing or backup software could then pick this up).
3. Enter the correct password.  
	
> Note: Your previously used password is filled in by default (You can change this in the plugin settings).
4. Your decrypted text is revealed in a dialog window.  
<img alt="Your decrypted text is revealed" src="https://raw.githubusercontent.com/meld-cp/obsidian-encrypt/main/docs/assets/eg_d_r.png" /> 
	
> Note: Click 'Decrypt In-place' to replace the encrypted text in the editor.


---
## ⚜️ Settings

| Common Settings | |
|--|--|
| ⚙️ Confirm password | Confirm password when encrypting |
| ⚙️ Remember password | Remember the last used password for this session. |
| ⚙️ Remember Password Timeout | The number of minutes to remember the last used password. |
| ⚙️ Remember Password Using | Remember passwords by using File or Parent path |

|Whole note encryption Settings| |
|--|--|
| ⚙️ Add ribbon icon to create note | Adds a ribbon icon to the left bar to create an encrypted note. |
| ⚙️ Default view for new tabs | The default view that a new encrypted note tab gets opened in |

|In-place encryption Settings| |
|--|--|
| ⚙️ Expand selection to whole line | Partial selections will get expanded to the whole line |
| ⚙️ Copy button | Show a button to copy decrypted text. |

---

## ⚜️ Do you find this plugin useful?

Support further development of the plugin by...  
<a href="https://www.buymeacoffee.com/cleon"><img src="https://img.buymeacoffee.com/button-api/?text=Buying me a coffee&emoji=&slug=cleon&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff"></a>

Thank you for your support 😊

---

## ⚜️ Previous changes

### v2.0.4
- fix password remembered even when 'remember password' setting is unchecked

### v2.0.3
- add common password session cache
- also remember passwords for whole note encryption
- add password peek button

### v2.0.2

Due to popular demand, the encrypt in-place functionality is no longer scheduled for removal 🙄🥳.

**Changes**
- Code refactors
- UI clean up
- Update usage docs

### v2.0.1
Bug fixes
- fix large files can't be encrypted (#41)
- add 'Change Password' and 'Lock' actions to note tab context menu (#49)

### v2.0.0

To make encrypted notes more resilient, starting from v2.0.0, the plugin introduces a new .encrypted note.

The advantages of this new approach are:

- Your note contents are always encrypted on disk.
- Encrypted bytes are hidden away from the user making it difficult to accidentally corrupt the encryption and thus making the note un-decryptable.
- Encrypted notes are easily identifiable by their '.encrypted' file extension.
- Better workflow for editing encrypted notes.

> ⚠️ It is recommended that you change all previously inline encrypted text into the new encrypted note format.

... 
---
