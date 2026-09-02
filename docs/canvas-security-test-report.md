# Encrypted Canvas security test report

Date: 2026-08-30

## Automated results

The wrapper test suite passes eight tests:

- complete Canvas roundtrip, including unknown fields and Unicode;
- wrong-password rejection;
- damaged-wrapper rejection;
- authenticated-ciphertext corruption rejection;
- roundtrips in the 100 KB, 1 MB, 5 MB, and 10 MB size classes.

The 10 MB-class roundtrip completes below the deliberately generous 30-second
test ceiling. The suite uses Meld's unchanged `FileDataHelper` and default
crypto version rather than a test cipher.

The final filesystem watcher sampled an encrypted fixture 199 times at 100 ms
intervals while saving and closing Obsidian. Every sample was valid wrapper JSON
with empty public `nodes` and `edges`, and a full recursive scan of the security
test vault found no plaintext test marker.

## Implemented hardening

- The whole logical Canvas object is encrypted as one payload.
- Every conversion and password change performs encrypt → decrypt → compare
  before replacing the disk file.
- Protected saves are serialized through a promise queue.
- The on-disk wrapper is compared byte-for-byte before every save to stop stale
  Sync/NAS overwrites.
- `Vault.modify`, adapter `write`, `append`, and `writeBinary` fail closed for
  protected paths.
- Protected `CanvasView.getViewData()` always returns ciphertext, including to
  potential File Recovery callers. Plaintext is obtained only from the native
  Canvas object in plugin-controlled code.
- Plugin unload saves and closes protected views before removing patches.
- A second view of the same protected path is rejected.
- File and folder renames migrate protected state.
- Corrupt wrappers carrying the Meld Canvas format marker are marked protected
  so native empty-Canvas saves cannot overwrite them.
- Error logs contain paths, byte counts, and error types only, never Canvas data
  or error messages that might quote input.

## Obsidian runtime results

The tests ran in a disposable, isolated GUI profile first on the official
Obsidian 1.12.7 AppImage and again after its official 1.13.7 application update.
The following behavior was observed:

- opening a protected Canvas produced exactly one password dialog and restored
  all three nodes, one edge, unknown top-level data, and the secret test marker;
- `CanvasView.getViewData()` returned the encrypted wrapper while the native
  Canvas object held plaintext in RAM;
- 20 rapid `setData()`/`requestSave()` operations were serialized and the last
  generation persisted without a plaintext watcher sample;
- an externally changed wrapper was not loaded over the unlocked RAM state and
  the subsequent stale save was rejected; after explicitly restoring the
  expected disk version, a direct save succeeded;
- disabling the plugin immediately after `requestSave()` closed the protected
  leaf, left ciphertext on disk, and preserved the last generation after
  re-enabling and unlocking;
- a complete process close and restart preserved the final generation; the
  restart test also passed under Obsidian 1.13.7;
- the enabled File Recovery core plugin stored a forced snapshot returned by
  the protected serialization path as ciphertext. Its IndexedDB record did not
  contain either known plaintext test marker;
- recursive byte searches of the isolated profile and entire test vault found
  neither known plaintext marker.

The runtime tests exposed and led to fixes for initial layout discovery,
Obsidian's `onLoadFile` path, concurrent load prompts, external reloads, and the
fact that Obsidian does not await asynchronous plugin unload before a plugin can
be enabled again.

## Remaining limits

- Mobile Canvas internals have not been tested on an Android or iOS device.
- An operating-system crash, forced power loss, swap/hibernation, core dumps,
  and memory-forensics resistance are outside this plugin-level test.
- A third-party plugin that bypasses Obsidian's Vault/adapter objects and writes
  directly through Node/Electron filesystem APIs cannot be intercepted here.
- File Recovery was tested through its active 1.12.7/1.13.7 implementation and
  IndexedDB API, but future proprietary implementation changes require another
  compatibility test.

## Reproduction

```bash
export PATH="$PWD/.tools/node-v24.20.0-linux-x64/bin:$PATH"
npm run test:canvas
npm run build
npm run test:canvas-security-watch -- \
  SECURITY-TESTVAULT Security.canvas \
  MELD_CANVAS_TEST_SECRET_93c5421 60 200
```

The watcher should run while editing, autosaving, renaming, closing, reloading
the plugin, and exiting Obsidian.
