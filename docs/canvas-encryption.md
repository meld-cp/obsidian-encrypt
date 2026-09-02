# Encrypted Canvas design

## Scope

Meld Encrypt can protect the complete logical contents of selected `.canvas`
files while retaining Obsidian's native Canvas editor. Decrypted Canvas data is
passed directly to the native view and remains in the Obsidian process; the
plugin does not create plaintext files or temporary plaintext copies.

This feature is marked experimental because Obsidian does not expose its Canvas
view/controller API publicly. Runtime feature detection fails closed when the
required internals are unavailable.

## Disk format

Protected files remain valid Canvas JSON with empty public arrays:

```json
{
  "nodes": [],
  "edges": [],
  "meldEncryptedCanvas": {
    "format": "meld-encrypted-canvas",
    "version": 1,
    "payload": {
      "version": "2.0",
      "hint": "...",
      "encodedData": "..."
    }
  }
}
```

The encrypted payload contains the entire original Canvas object, including
unknown top-level fields. Encryption uses Meld's existing `FileDataHelper` and
current crypto format; this feature does not introduce separate cryptography.

## Load and save boundaries

The plugin discovers the native Canvas prototype at runtime and intercepts its
`onLoadFile`, `setViewData`, `getViewData`, `save`, and unload lifecycle:

- encrypted input is decoded in RAM and applied through `canvas.setData()`;
- native `getViewData()` exposes only the encrypted wrapper for protected files;
- every protected save obtains native Canvas data in RAM, encrypts and verifies
  it, then lets the native save path write the wrapper;
- saves are serialized, and the disk wrapper must still match the exact bytes
  last loaded or written by that view;
- a second view for the same protected path is rejected;
- an external reload cannot replace an unlocked RAM state silently.

Normal, unprotected Canvas files pass through unchanged.

## Defense in depth

For known protected paths, wrappers around `Vault.modify` and the adapter's
`write`, `append`, and `writeBinary` methods reject non-encrypted writes. Corrupt
files with the Meld Canvas marker remain protected. File and folder rename
events migrate the protected-path state.

The write guards protect normal Obsidian persistence and cooperating plugins.
They cannot constrain a malicious plugin running in the same process that uses
Node/Electron filesystem APIs directly.

## User operations

Commands and file-menu actions support:

- encrypting an open or closed Canvas;
- changing its password;
- locking and closing one or all protected Canvases;
- permanently decrypting after an explicit plaintext-write confirmation.

Every encryption, password change, and conversion verifies the new ciphertext
by decrypting and comparing it before replacing the disk file. Passwords use
the existing `SessionPasswordService` and Meld password dialog.

## Embedded private content

When an image is pasted into an unlocked encrypted Canvas, Meld intercepts the
clipboard event before Obsidian creates a vault attachment. The image is stored
as an in-memory data URL inside a native text card; consequently its bytes are
part of the authenticated encrypted Canvas payload on disk.

If Obsidian or another plugin creates an attachment before the interception can
run, Meld tracks newly created image files while the encrypted Canvas is active.
A referenced image is embedded on the next save and the original attachment is
permanently deleted only after the encrypted wrapper has been decrypted for
verification, written, and read back byte-for-byte from disk. Pre-existing image
files are never deleted by this fallback.

File cards referring to `.mdenc` or `.encrypted` notes are decrypted with the
Canvas password and converted to native text cards in RAM. Notes encrypted with
a different password remain file cards and a notice is shown. The source note
itself remains encrypted and is not deleted or modified.

An encrypted Canvas may also contain deliberate plaintext references. Normal
vault file cards (including `.md` notes and existing images) remain external and
are stored neither in nor under the Canvas encryption. Meld records
`meldUnencrypted: true` on these cards and displays an `UNENCRYPTED` badge.
Pasting an image normally embeds it securely; holding `Alt` while pasting lets
Obsidian create a normal plaintext attachment instead. Such explicitly
unencrypted attachments are excluded from the encrypted-image deletion fallback.

## Security boundary

"RAM-only" means Meld and the native Canvas save path do not intentionally
write plaintext application files. JavaScript cannot guarantee memory
zeroization, and operating-system swap, hibernation, crash dumps, memory
forensics, or malicious same-process plugins are outside this guarantee.

Encrypted Canvas contents do not appear in normal disk-based Canvas indexing.
While a Canvas is unlocked, another plugin in the same Obsidian process can
read its native in-memory Canvas object.

## Compatibility and testing

The private members currently required are `CanvasView.canvas`,
`getViewData`, `setViewData`, `save`, `onLoadFile`, `onUnloadFile`, and
`Canvas.getData/setData/requestSave`. Compatibility was exercised in isolated
desktop instances of Obsidian 1.12.7 and 1.13.7. Mobile remains unverified.

See [the security test report](canvas-security-test-report.md) for automated and
runtime results and the remaining limits.
