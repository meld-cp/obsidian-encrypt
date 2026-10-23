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

## 3. Open a command line in your vault

The tool scans the current directory and its subdirectories. Open Command
Prompt or Terminal and change into the vault you want to process, rather
than the folder containing the script. Replace the example vault path below
with your own.

### Windows (Command Prompt)

``` text
cd /d "C:\Users\YourName\Documents\My Vault"
```

### macOS/Linux

``` text
cd "$HOME/Documents/My Vault"
```

Keep the script in the location chosen in step 2. Run it using its full path
as shown below; you do not need to copy it into your vault.

## 4. Verify Node.js

``` text
node --version
```

You should see a version number.

## 5. View the help

### Windows

``` text
node "C:\Tools\mdenc\mdenc.mjs" --help
```

### macOS/Linux

``` text
node "$HOME/Tools/mdenc/mdenc.mjs" --help
```

These examples use the script locations from step 2. Adjust the script path
if you saved it elsewhere.

## 6. Run a command

For example, list encrypted artifacts in your vault:

### Windows

``` text
node "C:\Tools\mdenc\mdenc.mjs" list
```

### macOS/Linux

``` text
node "$HOME/Tools/mdenc/mdenc.mjs" list
```

For other commands, append the command and options shown in the built-in
help to the same script path. For example, use `test --help` or
`decrypt --help` to see the options for those commands.

## Troubleshooting

-   **`node` is not recognized** -- Restart your terminal, or reinstall
    Node.js.
-   **Cannot find `mdenc.mjs`** -- Check that the full script path in your
    command matches where you saved the file.
-   **Permission denied (macOS/Linux)** -- Run the script with
    `node` followed by its full path, as shown above, rather than executing
    it directly.
