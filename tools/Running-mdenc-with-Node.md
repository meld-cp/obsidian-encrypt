# Running `mdenc.mjs`

This guide explains how to run the `mdenc.mjs` tool using Node.js, even
if you have never used the command line before.

## Script

Download the latest version of the script from:

https://github.com/meld-cp/obsidian-encrypt/blob/main/tools/mdenc.mjs

If you are viewing the file in GitHub, click **Download raw file** (or
**Raw**) and save it as `mdenc.mjs`.

## 1. Install Node.js

`mdenc.mjs` requires **Node.js**.

1.  Go to https://nodejs.org/
2.  Download the **LTS (Long Term Support)** version.
3.  Run the installer using the default options.
4.  Restart any Command Prompt or Terminal windows after installation.

## 2. Save the script

Place `mdenc.mjs` somewhere easy to find, for example:

-   **Windows:** `C:\Tools\mdenc\`
-   **macOS/Linux:** `~/Tools/mdenc/`

## 3. Open a command line

### Windows

``` text
cd C:\Tools\mdenc
```

### macOS/Linux

``` text
cd ~/Tools/mdenc
```

## 4. Verify Node.js

``` text
node --version
```

You should see a version number.

## 5. Run the script

``` text
node mdenc.mjs
```

Running the script **without any parameters** displays the built-in help
and usage instructions.

## 6. Run with parameters

``` text
node mdenc.mjs <options>
```

Replace `<options>` with the command shown in the built-in help.

## Troubleshooting

-   **`node` is not recognized** -- Restart your terminal, or reinstall
    Node.js.
-   **Cannot find `mdenc.mjs`** -- Make sure you changed into the folder
    containing the script.
-   **Permission denied (macOS/Linux)** -- Run the script with
    `node mdenc.mjs` rather than executing it directly.
