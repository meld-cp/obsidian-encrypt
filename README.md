# Obsidian Encrypt Plugin

**Create encrypted notes within your [Obsidian.md](https://obsidian.md/) vault.**

Encrypted notes are never decrypted to disk giving you peace-of-mind that the decrypted contents haven't been sync'd or backed up to external systems.


> ⚠️ WARNING - Use at your own risk ⚠️
> - Your passwords are never stored anywhere, if you forget your passwords you can't decrypt your notes.
> - No known audits have been undertaken for the soundness of encryption methods being used.  Unwanted decryption by a 3rd party may be possible if they have access to your files.
> - Bugs could be introduced to the software at anytime, you are responsible for having backups of your notes.

## ⚜️ Installation

You can install the plugin via the Community Plugins tab within Obsidian by searching for "Meld Encrypt"


## ⚜️ Latest Changes

<a href="https://www.buymeacoffee.com/cleon"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=cleon&button_colour=FFDD00&font_colour=000000&outline_colour=000000&coffee_colour=ffffff"></a>

Please visit the [Change Log](https://github.com/meld-cp/obsidian-encrypt/blob/main/CHANGELOG.md) for a listing of changes.

Report any bugs or feature requests [here](https://github.com/meld-cp/obsidian-encrypt/issues).


## ⚜️ Usage

<!--
https://raw.githubusercontent.com/meld-cp/obsidian-encrypt/main/

<img alt="Run the Encrypt/Decrypt command" src="https://raw.githubusercontent.com/meld-cp/obsidian-encrypt/main/docs/assets/eg_ed_cp.png" /> 
-->

### Whole encrypted notes (`.mdenc` files)
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

## ⚜️ Settings

| | |
|--|--|
| Confirm password | Confirm password when encrypting (recommended) |
| Remember password | Remember the last used password for this session. |
| Remember Password Timeout | The number of minutes to remember the last used password. |
| Remember Password Using | Remember passwords by using `File Name` or `Parent Folder` matching |

### Whole note encryption
| | |
|--|--|
| Default view for new tabs | The default view that a new encrypted note tab gets opened in |

### In-place encryption
| | |
|--|--|
| Expand selection to whole line | Partial selections will get expanded to the whole line |
| By default, show encrypted marker when reading | When encrypting inline text, should the default be to have a visible marker in Reading view |
