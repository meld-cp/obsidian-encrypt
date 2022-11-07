# Obsidian Encrypt Plugin

**Create encrypted notes within your [Obsidian.md](https://obsidian.md/) vault.**

Encrypted notes are never decrypted to disk giving you peice-of-mind that the decrypted contents havn't been sync'd or backed up to external systems.


> ⚠️ WARNING - Use at your own risk ⚠️
> - Your passwords are never stored anywhere, if you forget your passwords you can't decrypt your notes.
> - No known audits have been undertaken for the soundness of encryption methods being used.  Unwanted decryption by a 3rd party may be possible if they have access to your files.
> - Bugs could be introduced to the software at anytime, you are responsible for having backups of your notes.

---

## Installation

You can install the plugin via the Community Plugins tab within Obsidian by searching for "Meld Encrypt"

---

## Latest Changes

<a href="https://www.buymeacoffee.com/cleon"><img src="https://img.buymeacoffee.com/button-api/?text=Shout me a coffee&emoji=&slug=cleon&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff"></a>

> Please report any bugs or feature requests [here](https://github.com/meld-cp/obsidian-encrypt/issues).

### v2.0.0

To make encrypted notes more resilient, starting from v2.0.0, the plugin has taken a new direction in how it works.  It no longer encrypts selections of text within your notes, instead, it opts in to creating an always encrypted note file.

The advantages of this new approach are:

- Your note contents are always encrypted on disk.
- Encrypted bytes are hidden away from the user making it difficult to accidentally corrupt the encryption and thus making the note un-decryptable.
- Encrypted notes are easily identifiable by their '.encrypted' file extension.
- Better workflow for editing encrypted notes.

> ⚠️ It is recommended that you change all previously inline encrypted text into the new encrypted note format.  The old functionality will be removed at a later date.


---

## Usage

<!--
https://raw.githubusercontent.com/meld-cp/obsidian-encrypt/main/

<img alt="Run the Encrypt/Decrypt command" src="https://raw.githubusercontent.com/meld-cp/obsidian-encrypt/main/docs/assets/eg_ed_cp.png" /> 
-->

### Create a new encrypted note
1. Select 'Create encrypted note' from the command palette
2. Enter and confirm a password and optional hint to use
3. Edit your encrypted note (it's contents will be encrypted and saved to disk)

### Edit/View an encrypted note
1. Open the note as usual from the navigation tree
2. Enter the password for the note

### Changing an encrypted notes password and hint
1. Open the note as usual from the navigation tree
2. Enter the password for the note
3. Click the 'Change Password' tool icon
4. Enter the new password and hint

---
## Settings

|Name| Description|
|--|--|
| ⚙️ Add ribbon icon to create note | Adds a ribbon icon to the left bar to create an encrypted note. |


---

## Do you find this plugin useful?

Support further development of the plugin by...
<a href="https://www.buymeacoffee.com/cleon"><img src="https://img.buymeacoffee.com/button-api/?text=Buying me a coffee&emoji=&slug=cleon&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff"></a>

Thank you for your support 👍

<!-- ---

## Change Log

... 
---
-->