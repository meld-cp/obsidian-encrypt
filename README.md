# Obsidian Encrypt Plugin

<a href="https://www.buymeacoffee.com/cleon"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=cleon&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff"></a>

Hide secrets in your [Obsidian.md](https://obsidian.md/) notes.

This plugin allows you to encrypt portions of text so you can store sensitive details within and alongside your notes.

Under the hood it uses the Advanced Encryption Standard (AES) in GCM mode.

> WARNING: Use at your own risk.
> - Your passwords are never stored anywhere, if you forget your password you can't decrypt your text.
> - There haven't been any audits for the soundness of encryption methods being used.  Unwanted decryption by a 3rd party may still be possible if they have access to your files.

## Usage

<!-- https://raw.githubusercontent.com/meld-cp/obsidian-encrypt/main/ -->

### How to encrypt text

1. Select the text lines to encrypt  
<img alt="Select the text lines to encrypt" src="https://raw.githubusercontent.com/meld-cp/obsidian-encrypt/main/docs/assets/eg_e_text.png" />  
	
> Note: Partial selection is ok, it will be expanded to include the whole line.

2. Run the Encrypt/Decrypt command from the palette (or bind a keyboard shortcut to it)  
<img alt="Run the Encrypt/Decrypt command" src="https://raw.githubusercontent.com/meld-cp/obsidian-encrypt/main/docs/assets/eg_ed_cp.png" /> 

3. Enter and confirm a password to use  
<img alt="Enter a password to use" src="https://raw.githubusercontent.com/meld-cp/obsidian-encrypt/main/docs/assets/eg_e_pw.png" /> 

4. Your selected lines are now encrypted  
<img alt="Your selected lines are now encrypted" src="https://raw.githubusercontent.com/meld-cp/obsidian-encrypt/main/docs/assets/eg_e_r.png" /> 


### How to reveal your encrypted text
1. Place your cursor on the encrypted line  
<img alt="Place your cursor on the encrypted line" src="https://raw.githubusercontent.com/meld-cp/obsidian-encrypt/main/docs/assets/eg_d_text.png" /> 

2. Run the Encrypt/Decrypt command from the palette  
<img alt="Run the Encrypt/Decrypt command" src="https://raw.githubusercontent.com/meld-cp/obsidian-encrypt/main/docs/assets/eg_ed_cp.png" /> 

> Note: If you choose 'Encrypt/Decrypt In-place' your text will be decrypted directly into the editor without showing the dialog in step 4 below.

3. Enter the correct password  
<img alt="Enter the correct password" src="https://raw.githubusercontent.com/meld-cp/obsidian-encrypt/main/docs/assets/eg_d_pw.png" /> 
	
> Note: Your previously used password is filled in by default (You can change this in the plugin settings).

4. Your decrypted text is revealed  
<img alt="Your decrypted text is revealed" src="https://raw.githubusercontent.com/meld-cp/obsidian-encrypt/main/docs/assets/eg_d_r.png" /> 
	
> Note: Click 'Decrypt In-place' to replace the encrypted text in the editor.

## Settings
<img alt="Your decrypted text is revealed" src="https://raw.githubusercontent.com/meld-cp/obsidian-encrypt/main/docs/assets/eg_settings.png" /> 

## Installation

You can install the plugin via the Community Plugins tab within Obsidian by searching for "Encrypt"


## Do you find this plugin useful?

<a href="https://www.buymeacoffee.com/cleon"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=cleon&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff"></a>

Thank you for your support 🙏
