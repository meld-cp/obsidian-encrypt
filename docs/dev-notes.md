---
title: Development Notes
layout: default
nav_order: 5
---

# Development Notes

## Releasing New Versions

To release a new version:

1. Update `version` in `package.json`.
2. Run `npm run version` to update `manifest.json` & `versions.json`.
  	* `manifest.json`: holds the new version number and the minimum Obsidian version required for your latest release.
	* `versions.json`: holds the history of version numbers and their minimum Obsidian version, so older versions of Obsidian can download an older version of your plugin that's compatible.
3. Create new GitHub release using your new version number as the **Tag version**. Use the exact version number, and don't include a prefix `v`. See the following example: [obsidian-sample-plugin](https://github.com/obsidianmd/obsidian-sample-plugin/releases).
4. Upload the files `meld-encrypt-<ver>.zip`, `manifest.json`, `main.js`, and `styles.css` as binary attachments.
5. Publish the release.

## Adding Your Plugin to the Community Plugin List

To add your plugin to the community plugib list: 

1. Publish an initial version.
2. Make sure you have a `README.md` file in the root of your repository.
3. Make a pull request at [obsidian-releases](https://github.com/obsidianmd/obsidian-releases) to add your plugin.

## How to Use

1. Clone this repository.
2. Run `npm i` or `yarn` to install dependencies.
3. Run `npm run dev` to start the compiler in watch mode.

## Manually Installing the Plugin

Copy the files `main.js`, `styles.css`, and `manifest.json` to your vault at `VaultFolder/.obsidian/plugins/your-plugin-id/`, replacing `your-plugin-id` with the actual ID of your plugin.

If the `your-plugin-id` folder does not exist, create it before copying the files.

## API Documentation

For detailed API Documentation, see the [Obsidian API repository](https://github.com/obsidianmd/obsidian-api).