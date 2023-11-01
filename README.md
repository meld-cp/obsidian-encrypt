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

<a href="https://www.buymeacoffee.com/cleon"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=cleon&button_colour=FFDD00&font_colour=000000&outline_colour=000000&coffee_colour=ffffff"></a>

> Please report any bugs or feature requests [here](https://github.com/meld-cp/obsidian-encrypt/issues).

### 2.3.4
- add missing ability to indent when editing encrypted whole-notes ([#108](https://github.com/meld-cp/obsidian-encrypt/issues/108))
- fix incorrect rendering of markdown for in-place encrypted notes in reading view ([#132](https://github.com/meld-cp/obsidian-encrypt/issues/132))


### 2.3.3
- fix broken consecutive in-place markers in reading view ([#102](https://github.com/meld-cp/obsidian-encrypt/issues/102))
- fix bottom text is hidden when editing encrypted whole-notes ([#124](https://github.com/meld-cp/obsidian-encrypt/issues/124))


### 2.3.2
- add key-bindable command to toggle reading view for encrypted notes ([#116](https://github.com/meld-cp/obsidian-encrypt/issues/116))
- change to using `.mdenc` file extensions for encrypted notes ([#117](https://github.com/meld-cp/obsidian-encrypt/issues/117))


**(See more at the bottom of this page)**

---

## ⚜️ Usage

<!--
https://raw.githubusercontent.com/meld-cp/obsidian-encrypt/main/

<img alt="Run the Encrypt/Decrypt command" src="https://raw.githubusercontent.com/meld-cp/obsidian-encrypt/main/docs/assets/eg_ed_cp.png" /> 
-->

### Whole encrypted notes (.encrypted files)
#### To create a new encrypted note
1. Select 'Create encrypted note' from the command palette (or click the ribbon icon).
2. Enter and confirm a password and optional hint to use.
3. Edit your encrypted note (it's contents will be encrypted and saved to disk).

#### To edit/view an encrypted note
1. Open the note as usual from the navigation tree.
2. Enter the password for the note.

#### To change an encrypted note's password and hint
1. Open the note as usual from the navigation tree.
2. Enter the password for the note.
3. Click the 'Change Password' icon from the tab title bar or tab context menu.
4. Enter the new password and hint.

#### To encrypt/decrypt an existing note
- Right-click the file and choose 'Encrypt note' or 'Decrypt note'.

OR

- Select the ribbon icon named 'Convert to or from an Encrypted note' to toggle the active file between encrypted and not.

OR

- Select 'Convert to or from an Encrypted note' from the command palette (or even better, bind a hot key)

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

### Common Settings
| | |
|--|--|
| Confirm password | Confirm password when encrypting (recommended) |
| Remember password | Remember the last used password for this session. |
| Remember Password Timeout | The number of minutes to remember the last used password. |
| Remember Password Using | Remember passwords by using `File Name` or `Parent Folder` matching |

### Whole note encryption Settings
| | |
|--|--|
| Default view for new tabs | The default view that a new encrypted note tab gets opened in |

### In-place encryption Settings
| | |
|--|--|
| Expand selection to whole line | Partial selections will get expanded to the whole line |
| By default, show encrypted marker when reading | When encrypting inline text, should the default be to have a visible marker in Reading view |

---

## ⚜️ Do you find this plugin useful?

Support further development of the plugin by...  
<a href="https://www.buymeacoffee.com/cleon"><img src="https://img.buymeacoffee.com/button-api/?text=Buying me a coffee&emoji=&slug=cleon&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff"></a>

Thank you for your support 😊

---

## ⚜️ Previous changes

### 2.3.1
- fix encrypt/decrypt of notes don't update links ([#118](https://github.com/meld-cp/obsidian-encrypt/issues/118))

### 2.3.0
- add encrypt/decrypt of `.md` or `.encrypted` notes [#68](https://github.com/meld-cp/obsidian-encrypt/issues/68) (via file context menu, ribbon icon or command palette, helps with [#91](https://github.com/meld-cp/obsidian-encrypt/issues/91), [#103](https://github.com/meld-cp/obsidian-encrypt/issues/103), [#108](https://github.com/meld-cp/obsidian-encrypt/issues/108), [#114](https://github.com/meld-cp/obsidian-encrypt/issues/114))
- fix double blank line [#107](https://github.com/meld-cp/obsidian-encrypt/issues/107)
- fix offline decrypt tool [#111](https://github.com/meld-cp/obsidian-encrypt/issues/111) (found in `/tools/decrypt.html`)
- ribbon icon changes
- code refactor and clean up

### 2.2.0
- stronger encryption (thanks @brycx)
- fix [#92](https://github.com/meld-cp/obsidian-encrypt/issues/92) - Enable selection text in Reading view
- fix [#93](https://github.com/meld-cp/obsidian-encrypt/issues/93) - Encrypting text in-place in a table breaks

### 2.1.3
- follow 'readable line length' and 'show inline title' settings in encrypted notes
- update layout and styling
- enable spell check when editing

### 2.1.2
- add inline encrypted text marker (clickable) in reading view

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
- fix large files can't be encrypted ([#41](https://github.com/meld-cp/obsidian-encrypt/issues/41))
- add 'Change Password' and 'Lock' actions to note tab context menu ([#49](https://github.com/meld-cp/obsidian-encrypt/issues/49))

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
