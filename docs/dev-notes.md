# Development notes

## Releasing new releases

- Update `version` in `package.json`
- Run `npm run version` to update `manifest.json` & `versions.json`
	- `manifest.json`: holds the new version number and the minimum Obsidian version required for your latest release.
	- `versions.json`: holds the history of version numbers and their minimum Obsidian version, so older versions of Obsidian can download an older version of your plugin that's compatible.
- Create new GitHub release using your new version number as the "Tag version". Use the exact version number, don't include a prefix `v`. See here for an example: https://github.com/obsidianmd/obsidian-sample-plugin/releases
- Upload the files `meld-encrypt-<ver>.zip`, `manifest.json`, `main.js`, `styles.css` as binary attachments.
- Publish the release.

## Adding your plugin to the community plugin list

- Publish an initial version.
- Make sure you have a `README.md` file in the root of your repo.
- Make a pull request at https://github.com/obsidianmd/obsidian-releases to add your plugin.

## How to use

- Clone this repo.
- `npm i` or `yarn` to install dependencies
- `npm run dev` to start compilation in watch mode.

## Manually installing the plugin

- Copy over `main.js`, `styles.css`, `manifest.json` to your vault `VaultFolder/.obsidian/plugins/your-plugin-id/`.

## API Documentation

See https://github.com/obsidianmd/obsidian-api