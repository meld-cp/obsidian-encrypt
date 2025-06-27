# Change Log

Do you find this plugin useful?  You can support further development by...  
<a href="https://www.buymeacoffee.com/cleon" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>


Thank you for your support 😊

Report any bugs or feature requests [here](https://github.com/meld-cp/obsidian-encrypt/issues).

## v2.5.3
- Fixed too many view actions being created, [#207](https://github.com/meld-cp/obsidian-encrypt/issues/207)
- Updated libs


## v2.5.2
- Fixed view moves offscreen when editing whole notes on android, [#205](https://github.com/meld-cp/obsidian-encrypt/issues/205)


## v2.4.1
- Fix tab order, [#173](https://github.com/meld-cp/obsidian-encrypt/issues?q=is%3Aissue%20173)
- Fix switching view modes may lose content (feat-whole-note), [#187](https://github.com/meld-cp/obsidian-encrypt/issues/187)
- Fix decrypt not working for large text (feat-in-place), [#188](https://github.com/meld-cp/obsidian-encrypt/issues/188), added new settings to adjust scan range per user requirements.
- Fix missing view actions (feat-whole-note), [#192](https://github.com/meld-cp/obsidian-encrypt/issues/192)


## v2.4.0
- Rewrite the encrypted note editor to be based off the Obsidian note editor. Fixes [#142](https://github.com/meld-cp/obsidian-encrypt/issues/142), [#145](https://github.com/meld-cp/obsidian-encrypt/issues/145), [#148](https://github.com/meld-cp/obsidian-encrypt/issues/148), [#152](https://github.com/meld-cp/obsidian-encrypt/issues/152), [#153](https://github.com/meld-cp/obsidian-encrypt/issues/153), [#154](https://github.com/meld-cp/obsidian-encrypt/issues/154), [#159](https://github.com/meld-cp/obsidian-encrypt/issues/159)
- Build a standalone CLI script (mdenc) to work with encrypted notes independently to Obsidian. See [#105](https://github.com/meld-cp/obsidian-encrypt/issues/105).
- Icon changes for consistency
- Add 'External File' option to store passwords in external files. See [#162](https://github.com/meld-cp/obsidian-encrypt/issues/162)
- Add In place editing by @naturecodevoid See [#166](https://github.com/meld-cp/obsidian-encrypt/issues/166).
- Fix for [#183](https://github.com/meld-cp/obsidian-encrypt/issues/183)


## v2.3.7
- Add a setting to remember session passwords by vault ([#146](https://github.com/meld-cp/obsidian-encrypt/issues/146), [#149](https://github.com/meld-cp/obsidian-encrypt/issues/149))
- Add a command to clear session password cache
- Clarify 'Remember By' description in settings ([#146](https://github.com/meld-cp/obsidian-encrypt/issues/146), [#149](https://github.com/meld-cp/obsidian-encrypt/issues/149))
- Add ribbon icon for 'Encrypt/Decrypt' command ([#157](https://github.com/meld-cp/obsidian-encrypt/issues/157))
- Fix missing lock indicator in reading view ([#156](https://github.com/meld-cp/obsidian-encrypt/issues/156))
- Bug fixes

## v2.3.6
- Fix internal links not working in an encrypted note ([#144](https://github.com/meld-cp/obsidian-encrypt/issues/144))
- Add 'New encrypted note' option to folder context menu ([#106](https://github.com/meld-cp/obsidian-encrypt/issues/106))
- Add encrypted text directly to the note ([#143](https://github.com/meld-cp/obsidian-encrypt/issues/143))


## v2.3.5
- #132 broke some other plugins, this fixes that fix 🤞 ([#136](https://github.com/meld-cp/obsidian-encrypt/issues/136))


## v2.3.4
- improve indenting when editing encrypted whole-notes ([#108](https://github.com/meld-cp/obsidian-encrypt/issues/108))
- fix incorrect rendering of markdown for in-place encrypted notes in reading view ([#132](https://github.com/meld-cp/obsidian-encrypt/issues/132))


## v2.3.3
- fix broken consecutive in-place markers in reading view ([#102](https://github.com/meld-cp/obsidian-encrypt/issues/102))
- fix bottom text is hidden when editing encrypted whole-notes ([#124](https://github.com/meld-cp/obsidian-encrypt/issues/124))


## v2.3.2
- add key-bindable command to toggle reading view for encrypted notes ([#116](https://github.com/meld-cp/obsidian-encrypt/issues/116))
- change to using `.mdenc` file extensions for encrypted notes ([#117](https://github.com/meld-cp/obsidian-encrypt/issues/117))

## v2.3.1
- fix encrypt/decrypt of notes don't update links ([#118](https://github.com/meld-cp/obsidian-encrypt/issues/118))

## v2.3.0
- add encrypt/decrypt of `.md` or `.encrypted` notes [#68](https://github.com/meld-cp/obsidian-encrypt/issues/68) (via file context menu, ribbon icon or command palette, helps with [#91](https://github.com/meld-cp/obsidian-encrypt/issues/91), [#103](https://github.com/meld-cp/obsidian-encrypt/issues/103), [#108](https://github.com/meld-cp/obsidian-encrypt/issues/108), [#114](https://github.com/meld-cp/obsidian-encrypt/issues/114))
- fix double blank line [#107](https://github.com/meld-cp/obsidian-encrypt/issues/107)
- fix offline decrypt tool [#111](https://github.com/meld-cp/obsidian-encrypt/issues/111) (found in `/tools/decrypt.html`)
- ribbon icon changes
- code refactor and clean up

## v2.2.0
- stronger encryption (thanks @brycx)
- fix [#92](https://github.com/meld-cp/obsidian-encrypt/issues/92) - Enable selection text in Reading view
- fix [#93](https://github.com/meld-cp/obsidian-encrypt/issues/93) - Encrypting text in-place in a table breaks

## v2.1.3
- follow 'readable line length' and 'show inline title' settings in encrypted notes
- update layout and styling
- enable spell check when editing

## v2.1.2
- add inline encrypted text marker (clickable) in reading view

## v2.1.1
- Limited support for markdown in `.encrypted` notes
- New setting to select the default view when opening `.encrypted` notes (Source or Reading)

## v2.1.0
- Auto decrypt note if password remembered
- Clear remembered password when re-locking file
- When changing password, remember it if 'remember passwords' is active
- Change wording for 'Remember Password Timeout' in settings
- Add new setting to remember password by parent folder path
- Code refactors

## v2.0.5
- fix creating encrypted note on mobile

## v2.0.4
- fix password remembered even when 'remember password' setting is unchecked

## v2.0.3
- add common password session cache
- also remember passwords for whole note encryption
- add password peek button

## v2.0.2

Due to popular demand, the encrypt in-place functionality is no longer scheduled for removal 🙄🥳.

**Changes**
- Code refactors
- UI clean up
- Update usage docs

## v2.0.1
Bug fixes
- fix large files can't be encrypted ([#41](https://github.com/meld-cp/obsidian-encrypt/issues/41))
- add 'Change Password' and 'Lock' actions to note tab context menu ([#49](https://github.com/meld-cp/obsidian-encrypt/issues/49))

## v2.0.0

To make encrypted notes more resilient, starting from v2.0.0, the plugin introduces a new .encrypted note.

The advantages of this new approach are:

- Your note contents are always encrypted on disk.
- Encrypted bytes are hidden away from the user making it difficult to accidentally corrupt the encryption and thus making the note un-decryptable.
- Encrypted notes are easily identifiable by their '.encrypted' file extension.
- Better workflow for editing encrypted notes.

