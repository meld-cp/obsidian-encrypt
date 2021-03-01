# Obsidian Encrypt Plugin

<a href="https://www.buymeacoffee.com/cleon"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=cleon&button_colour=40DCA5&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00"></a>

Hide secrets in your [Obsidian.md](https://obsidian.md/) notes.

This plugin allows you to encrypt portions of your notes allowing you to store sensitive details along with other information.

Under the hood it uses the Advanced Encryption Standard (AES) in GCM mode.

> WARNING: Your passwords are never stored anywhere, if you forget your password you can't decrypt your text.

## Usage

### How to encrypt text

1. Select the text lines to encrypt  
<img alt="Select the text lines to encrypt" src="https://raw.githubusercontent.com/meld-cp/obsidian-encrypt/main/docs/assets/eg_e_text.png" /> 
Partial, selection is ok, it will be expanded to include the whole line.

1. Run the Encrypt/Decrypt command from the palette (or bind a keyboard shortcut to it)  
<img alt="Run the Encrypt/Decrypt command" src="https://raw.githubusercontent.com/meld-cp/obsidian-encrypt/main/docs/assets/eg_ed_cp.png" /> 

1. Enter a password to use  
<img alt="Enter a password to use" src="https://raw.githubusercontent.com/meld-cp/obsidian-encrypt/main/docs/assets/eg_ed_pw.png" /> 

1. Your selected lines are now encrypted  
<img alt="Your selected lines are now encrypted" src="https://raw.githubusercontent.com/meld-cp/obsidian-encrypt/main/docs/assets/eg_e_r.png" /> 

<!-- TODO: add gif -->

### How to reveal your encrypted text
1. Place your cursor on the encrypted line  
<img alt="Place your cursor on the encrypted line" src="https://raw.githubusercontent.com/meld-cp/obsidian-encrypt/main/docs/assets/eg_d_text.png" /> 

1. Run the Encrypt/Decrypt command from the palette  
<img alt="Run the Encrypt/Decrypt command" src="https://raw.githubusercontent.com/meld-cp/obsidian-encrypt/main/docs/assets/eg_ed_cp.png" /> 

1. Enter the correct password  
<img alt="Enter the correct password" src="https://raw.githubusercontent.com/meld-cp/obsidian-encrypt/main/docs/assets/eg_ed_pw.png" /> 

1. Your decrypted text is revealed  
<img alt="Your decrypted text is revealed" src="https://raw.githubusercontent.com/meld-cp/obsidian-encrypt/main/docs/assets/eg_d_r.png" /> 

<!-- TODO: add gif -->

## Installation

You can install the plugin via the Community Plugins tab within Obsidian by searching for "Encrypt"


## Find this plugin useful?

Thank you for your support 🙏

<a href="https://www.buymeacoffee.com/cleon"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=cleon&button_colour=40DCA5&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00"></a>


## More info
- [Crypto details](https://github.com/meld-cp/obsidian-encrypt/blob/main/docs/assets/docs/crypto-details.md)
