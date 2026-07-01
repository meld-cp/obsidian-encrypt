# Running `mdenc.mjs`

This guide explains how to run the `mdenc.mjs` tool using Node.js, even
if you have never used the command line before.

## 1. Install Node.js

`mdenc.mjs` requires **Node.js**.

1.  Go to https://nodejs.org/
2.  Download the **LTS (Long Term Support)** version for your operating
    system.
3.  Run the installer and accept the default options.
4.  When the installation finishes, restart any Command Prompt or
    Terminal windows you already had open.

## 2. Download the script

Download `mdenc.mjs` from the repository, or clone the repository using
Git.

Place the file somewhere easy to find, for example:

-   **Windows:** `C:\Tools\mdenc\`
-   **macOS/Linux:** `~/Tools/mdenc/`

## 3. Open a command line

### Windows

1.  Open **Command Prompt** or **PowerShell**.
2.  Change to the folder containing the script:

``` text
cd C:\Tools\mdenc
```

### macOS or Linux

1.  Open **Terminal**.
2.  Change to the folder containing the script:

``` text
cd ~/Tools/mdenc
```

## 4. Check that Node.js is installed

Run:

``` text
node --version
```

If Node.js is installed correctly, you'll see a version number such as:

``` text
v24.x.x
```

## 5. Run the script

Run:

``` text
node mdenc.mjs
```

Running the script **without any parameters** displays the built-in help
and usage instructions, including all available commands and options.

## 6. Run with parameters

Once you've read the built-in help, run the command again with the
parameters you need. For example:

``` text
node mdenc.mjs <options>
```

Replace `<options>` with the command shown in the built-in help.

## Troubleshooting

### `'node' is not recognized`

Node.js is either not installed or your command line needs to be
restarted after installation.

### `Cannot find module` or `Cannot find file`

Make sure you're in the same folder as `mdenc.mjs`, or provide the full
path to the file.

### Permission denied (macOS/Linux)

Ensure you have permission to read the file and that you are running it
with:

``` text
node mdenc.mjs
```

instead of trying to execute the file directly.

## Need more help?

Run:

``` text
node mdenc.mjs
```

The script's built-in help is the most up-to-date reference for
supported commands and options.
