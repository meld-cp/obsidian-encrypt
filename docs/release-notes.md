---
title: Release Notes
layout: default
nav_order: 5
---

# Release Notes

If you find this plugin useful please support the ongoing maintenance and development of it by [staring ⭐ this repo](https://github.com/meld-cp/obsidian-encrypt) and [buying me a coffee ☕](https://www.buymeacoffee.com/cleon) or consider [sponsoring ❤️ me](https://github.com/sponsors/meld-cp).

Thank you for your support 😊

<a href="https://www.buymeacoffee.com/cleon" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 50px !important;" ></a>

Please report any bugs or features requests [here](https://github.com/meld-cp/obsidian-encrypt/issues).

The full change log can be found on the [releases](https://github.com/meld-cp/obsidian-encrypt/releases) page.

## v2.4.5

### Improvements
* Fixed status icon showing on normal views
* Updated libs

### New Features
* Added command palette option to Lock encrypted notes (and forget PW) [#110](https://github.com/meld-cp/obsidian-encrypt/issues/110)

### Bug Fixes
* Fixed slash commands not working if expand selection to whole line option is enabled [#212](https://github.com/meld-cp/obsidian-encrypt/issues/212)


## v2.4.4

### Improvements
* Added guards to check we aren't encrypting selections containing already encrypted text in inplace notes

### Bug Fixes
* Fixed Can't decrypt inplace notes [#206](https://github.com/meld-cp/obsidian-encrypt/issues/206)


## v2.5.3

### Improvements
* Updated libs.

### Bug Fixes
* Fixed an issue where toolbar icons were duplicated: [#207](https://github.com/meld-cp/obsidian-encrypt/issues/207).


## v2.5.2

### Bug Fixes
* Fixed an issue where the note view would move offscreen when editing whole notes on Android: [#205](https://github.com/meld-cp/obsidian-encrypt/issues/205).


## v2.4.1

### Improvements
* Added new settings to adjust scan range per user requirements.

### Bug Fixes
* Fixed the tab order: [#173](https://github.com/meld-cp/obsidian-encrypt/issues?q=is%3Aissue%20173).
* Fixed an issue where switching view modes could result in content loss (feat-whole-note): [#187](https://github.com/meld-cp/obsidian-encrypt/issues/187).
* Fixed an issue where decryption did not work for large text notes. (feat-in-place): [#188](https://github.com/meld-cp/obsidian-encrypt/issues/188). 
* Fixed and issue with missing view actions (feat-whole-note): [#192](https://github.com/meld-cp/obsidian-encrypt/issues/192).


## v2.4.0

### Improvements
* Rewrote the encrypted note editor to be based on the Obsidian note editor. Fixed the following issues: [#142](https://github.com/meld-cp/obsidian-encrypt/issues/142), [#145](https://github.com/meld-cp/obsidian-encrypt/issues/145), [#148](https://github.com/meld-cp/obsidian-encrypt/issues/148), [#152](https://github.com/meld-cp/obsidian-encrypt/issues/152), [#153](https://github.com/meld-cp/obsidian-encrypt/issues/153), [#154](https://github.com/meld-cp/obsidian-encrypt/issues/154), [#159](https://github.com/meld-cp/obsidian-encrypt/issues/159).
* Built a standalone CLI script (mdenc) to work with encrypted notes independently to Obsidian. See [#105](https://github.com/meld-cp/obsidian-encrypt/issues/105).
* The icon has been changed for consistency.
  
### New Features
* Added an **External File** option to store passwords in external files. See [#162](https://github.com/meld-cp/obsidian-encrypt/issues/162).
* Added In place editing by @naturecodevoid. See [#166](https://github.com/meld-cp/obsidian-encrypt/issues/166).
  
### Bug Fixes
* Fixed the issue no. [#183](https://github.com/meld-cp/obsidian-encrypt/issues/183).


## v2.3.7

### Improvements
* Clarified the **Remember By** description in settings: ([#146](https://github.com/meld-cp/obsidian-encrypt/issues/146), [#149](https://github.com/meld-cp/obsidian-encrypt/issues/149)).
  
### New Features
* Added a setting to remember session passwords by vault: ([#146](https://github.com/meld-cp/obsidian-encrypt/issues/146), [#149](https://github.com/meld-cp/obsidian-encrypt/issues/149)).
* Added a command to clear session password cache.
* Added a ribbon icon for **Encrypt/Decrypt** command: ([#157](https://github.com/meld-cp/obsidian-encrypt/issues/157)).

### Bug Fixes
* Fixed an issue with the missing lock indicator in reading view: ([#156](https://github.com/meld-cp/obsidian-encrypt/issues/156)).
* Some other bug fixes.


## v2.3.6

### New Features
* Added a **New Encrypted Note** option to the folder context menu: ([#106](https://github.com/meld-cp/obsidian-encrypt/issues/106)).
* You can now add encrypted text directly to the note: ([#143](https://github.com/meld-cp/obsidian-encrypt/issues/143)).

### Bug Fixes
* Fixed internal links not working in encrypted notes: ([#144](https://github.com/meld-cp/obsidian-encrypt/issues/144)).


## v2.3.5

### Bug Fixes
* Fixed a regression introduced in #132, which led to malfunctions of other plugins: ([#136](https://github.com/meld-cp/obsidian-encrypt/issues/136)).


## v2.3.4

### Improvements
* Improved indenting when editing encrypted whole-notes: ([#108](https://github.com/meld-cp/obsidian-encrypt/issues/108)).

### Bug Fixes
* Fixed incorrect rendering of markdown for in-place encrypted notes in reading view: ([#132](https://github.com/meld-cp/obsidian-encrypt/issues/132)).


## v2.3.3

### Bug Fixes 
* Fixed an issue where consecutive in-place markers did not render correctly in reading view: ([#102](https://github.com/meld-cp/obsidian-encrypt/issues/102)).
* Fixed an issue where bottom text is hidden when editing encrypted whole-notes: ([#124](https://github.com/meld-cp/obsidian-encrypt/issues/124)).


## v2.3.2

### Improvements
* Added a key-bindable command to toggle reading view for encrypted notes: ([#116](https://github.com/meld-cp/obsidian-encrypt/issues/116)).
* The `.mdenc` file extension is now used for encrypted notes: ([#117](https://github.com/meld-cp/obsidian-encrypt/issues/117)).


## v2.3.1

### Bug Fixes
* Fixed an issue where encrypting or decrypting notes did not update links: ([#118](https://github.com/meld-cp/obsidian-encrypt/issues/118))


## v2.3.0

### Improvements
* The ribbon icon has been changed. 
* Code refactoring and cleanup.

### New Features
* Added encryption and decryption features for `.md` and `.encrypted` notes: [#68](https://github.com/meld-cp/obsidian-encrypt/issues/68) (via file context menu, ribbon icon or command palette; helps with the following issues: [#91](https://github.com/meld-cp/obsidian-encrypt/issues/91), [#103](https://github.com/meld-cp/obsidian-encrypt/issues/103), [#108](https://github.com/meld-cp/obsidian-encrypt/issues/108), [#114](https://github.com/meld-cp/obsidian-encrypt/issues/114)).

### Bug Fixes
* Fixed an issue with the double blank line: [#107](https://github.com/meld-cp/obsidian-encrypt/issues/107).
* Fixed an issue with the offline decryptor tool: [#111](https://github.com/meld-cp/obsidian-encrypt/issues/111) (found in `/tools/decrypt.html`).


## v2.2.0

### Improvements
* Stronger encryption (thanks @brycx).

### New Features
* Added the ability to select text in reading view: [#92](https://github.com/meld-cp/obsidian-encrypt/issues/92).

### Bug Fixes
* Fixed an issue where in-place encrypted text within tables caused table removal in the reading view: [#93](https://github.com/meld-cp/obsidian-encrypt/issues/93).


## v2.1.3

### Improvements
* Follow **readable line length** and **show inline title** settings in encrypted notes.
* Updated layout and styling.

### New Features
* Added spell check support when editing notes.


## v2.1.2

## New Features
* Added a clickable inline encrypted text marker in reading view.


## v2.1.1

### Improvements
* Limited support for markdown in `.encrypted` notes.

### New Features
- Added a new setting to select the default view when opening `.encrypted` notes (Source or Reading).


## v2.1.0

### Improvements
* Changed the wording for the **Remember Password Timeout** setting in Settings.
* Code refactoring. 

### New Features
* Automatically decrypts notes if the password is remembered.
* Clears remembered passwords when re-locking a file.
* When changing a password, remembers it if **Remember Password** is active.
* Added a new setting to remember passwords by parent folder path.


## v2.0.5

### Bug Fixes
* Fixed an issue with creating encrypted notes on mobile devices.


## v2.0.4

### Bug Fixes
* Fixed an issue where a password was remembered even when the **Remember Password** setting was unchecked.


## v2.0.3

## New Features
* Added a password session cache for shared password management.
* Enabled password remembering for whole note encryption.
* Added a password peek button to reveal hidden passwords.


## v2.0.2

Due to popular demand, the encrypt in-place functionality is no longer scheduled for removal 🙄🥳.

### Improvements
- Code refactoring. 
- UI cleanup.
- Updated usage docs.


## v2.0.1

### New Features
* Added **Change Password** and **Lock** actions to the note tab context menu: ([#49](https://github.com/meld-cp/obsidian-encrypt/issues/49)).

### Bug Fixes
* Fixed an issue with the encryption of large files: ([#41](https://github.com/meld-cp/obsidian-encrypt/issues/41)).


## v2.0.0

To make encrypted notes more resilient, starting from v2.0.0, the plugin introduces a new .encrypted note.

The advantages of this new approach are:

* Your note contents are always encrypted on disk.
* Encrypted bytes are hidden away from the user making it difficult to accidentally corrupt the encryption and thus making the note un-decryptable.
* Encrypted notes are easily identifiable by their '.encrypted' file extension.
* Better workflow for editing encrypted notes.