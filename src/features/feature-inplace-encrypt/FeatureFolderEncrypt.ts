import { Editor, Notice, MarkdownPostProcessorContext, MarkdownRenderer, TFolder, Setting, Vault } from "obsidian";
import DecryptModal from "./DecryptModal";
import { IMeldEncryptPluginFeature } from "../IMeldEncryptPluginFeature";
import MeldEncrypt from "../../main";
import { IMeldEncryptPluginSettings } from "../../settings/MeldEncryptPluginSettings";
import { IFeatureInplaceEncryptSettings } from "./IFeatureInplaceEncryptSettings";
import PasswordModal from "./PasswordModal";
import FolderModal from "./FolderModal";
import { UiHelper } from "../../services/UiHelper";
import { SessionPasswordService } from "src/services/SessionPasswordService";
import { CryptoHelperFactory } from "src/services/CryptoHelperFactory";
import { Decryptable } from "./Decryptable";
import { InplaceTextHelper, SelectionAnalysis } from "./FeatureInplaceEncrypt";



const _PREFIX_B = '%%🔐β ';
const _PREFIX_B_VISIBLE = '🔐β ';

const _PREFIX_A = '%%🔐α ';
const _PREFIX_A_VISIBLE = '🔐α ';
const _PREFIX_OBSOLETE = '%%🔐 ';

const _PREFIX_ENCODE_DEFAULT = _PREFIX_B;
const _PREFIX_ENCODE_DEFAULT_VISIBLE = _PREFIX_B_VISIBLE;

// Should be listed by evaluation priority
const _PREFIXES = [
	_PREFIX_B,
	_PREFIX_B_VISIBLE,
	_PREFIX_A,
	_PREFIX_A_VISIBLE,
	_PREFIX_OBSOLETE,
];

const _SUFFIX_WITH_COMMENT = ' 🔐%%';
const _SUFFIX_NO_COMMENT = ' 🔐';

// Should be listed by evaluation priority
const _SUFFIXES = [
	_SUFFIX_WITH_COMMENT,
	_SUFFIX_NO_COMMENT
]

const _HINT = '💡';

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

export default class FeatureFolderEncrypt implements IMeldEncryptPluginFeature{
	plugin:MeldEncrypt;
	pluginSettings: IMeldEncryptPluginSettings;
	featureSettings:IFeatureInplaceEncryptSettings;

	async onload(plugin:MeldEncrypt, settings:IMeldEncryptPluginSettings) {
		this.plugin = plugin;
		this.pluginSettings = settings;

		this.plugin.registerMarkdownPostProcessor(
			(el,ctx) => this.processEncryptedCodeBlockProcessor(el, ctx)
		);

    plugin.addCommand({
      id: 'meld-encrypt-folder-in-place',
      name: 'Encrypt Folder In-place',
      icon: 'lock',
      editorCheckCallback: (checking, editor, view) => this.processEncryptDecryptFolderCommand( checking, editor, true, true )
    });

    plugin.addCommand({
      id: 'meld-decrypt-folder-in-place',
      name: 'Decrypt Folder In-place',
      icon: 'lock',
      editorCheckCallback: (checking, editor, view) => this.processEncryptDecryptFolderCommand( checking, editor, true, false )
    });
	}

	onunload(){

	}

	public buildSettingsUi(
		containerEl: HTMLElement,
		saveSettingCallback : () => Promise<void>
	): void {
		new Setting(containerEl)
			.setHeading()
			.setName('In-place Folder Encryption Settings')
		;

	}

	private async processEncryptedCodeBlockProcessor(el: HTMLElement, ctx: MarkdownPostProcessorContext){

		const si = ctx.getSectionInfo(el);
		if (si == null){
			return;
		}

		// isolate code block lines
		const text = InplaceTextHelper.extractTextLines( si.text, si.lineStart, si.lineEnd );

		
		const markerStart = InplaceTextHelper.findFirstMarker( _PREFIXES, text );
		if (
			markerStart == null
			|| !(
				markerStart.marker == _PREFIX_A_VISIBLE
				|| markerStart.marker == _PREFIX_B_VISIBLE
			)
		){
			//console.debug( 'not visible or null', markerStart );
			return;
		}
		
		const markerEnd = InplaceTextHelper.findFirstMarker( _SUFFIXES, text, markerStart.position + markerStart.marker.length);
		if ( markerEnd == null ){
			return;
		}
		
		const encryptedText = InplaceTextHelper.removeMarkers( text, markerStart, markerEnd );
		
		const selectionAnalysis = new SelectionAnalysis( encryptedText );
		
		if ( !selectionAnalysis.canDecrypt ){
			return;
		}
		
		const textBeforeIndicator = InplaceTextHelper.extractTextBeforeMarker( text, markerStart );
		const textAfterIndicator = InplaceTextHelper.extractTextAfterMarker( text, markerEnd );

		const newMd = textBeforeIndicator
			+ '<span class="meld-encrypt-inline-reading-marker">🔐</span>'
			+ textAfterIndicator
		;

		el.empty();
		await MarkdownRenderer.renderMarkdown( newMd, el, ctx.sourcePath, this.plugin );
		
		//console.debug( {el} );
		const elIndicator = el.querySelector('.meld-encrypt-inline-reading-marker') as HTMLSpanElement;
		elIndicator?.onClickEvent( async () =>
			await this.handleReadingIndicatorClick(
				ctx.sourcePath,
				selectionAnalysis.decryptable
			)
		);

	}

	private async handleReadingIndicatorClick( path: string, decryptable?:Decryptable ){
		// indicator click handler
		if (decryptable == null){
			new Notice('❌ Decryption failed!');
			return;
		}

		if ( await this.showDecryptedTextIfPasswordKnown( path, decryptable ) ){
			return;
		}

		const pw = await this.fetchPasswordFromUser( decryptable.hint );

		if ( pw == null ){
			return;
		}

		// decrypt
		if ( await this.showDecryptedResultForPassword( decryptable, pw ) ){
			SessionPasswordService.putByPath(
				{
					password: pw,
					hint: decryptable.hint
				},
				path
			);
		}else{
			new Notice('❌ Decryption failed!');
		}

	}
	
	private async showDecryptedResultForPassword( decryptable: Decryptable, pw:string ): Promise<boolean> {
		const crypto =  CryptoHelperFactory.BuildFromDecryptable( decryptable );

		const decryptedText = await crypto.decryptFromBase64( decryptable.base64CipherText, pw );

		// show result
		if (decryptedText === null) {
			return false;
		}
		
		return new Promise<boolean>( (resolve) => {
			const decryptModal = new DecryptModal(this.plugin.app, '🔓', decryptedText );
			decryptModal.canDecryptInPlace = false;
			decryptModal.onClose = () =>{
				resolve(true);
			}
			decryptModal.open();
		} )
			
			
	}

	private async fetchPasswordFromUser( hint:string ): Promise<string|null|undefined> {
		// fetch password
		return new Promise<string|null|undefined>( (resolve) => {
			const pwModal = new PasswordModal(
				this.plugin.app,
				/*isEncrypting*/ false,
				/*confirmPassword*/ false,
				/*defaultShowInReadingView*/ this.featureSettings.showMarkerWhenReadingDefault,
				'',
				hint
			);

			pwModal.onClose = () =>{
				resolve( pwModal.resultPassword );
			}

			pwModal.open();


		} );
	}

	private async showDecryptedTextIfPasswordKnown( filePath: string, decryptable: Decryptable ) : Promise<boolean> {
		const bestGuessPasswordAndHint = SessionPasswordService.getByPath( filePath );
		if ( bestGuessPasswordAndHint.password == null ){
			return false;
		}

		return await this.showDecryptedResultForPassword(
			decryptable,
			bestGuessPasswordAndHint.password
		);
	}

  private processEncryptDecryptFolderCommand(
    checking: boolean,
    editor: Editor,
    inPlace: boolean,
    isEncrypting: boolean,
  ): boolean {
    if ( checking || UiHelper.isSettingsModalOpen() ){
      // Settings is open, ensures this command can show up in other
      // plugins which list commands e.g. customizable-sidebar
      return true;
    }
    const fModal = new FolderModal(
      this.plugin.app,
      isEncrypting,
    );

    fModal.onClose = async () => {
      const folder = fModal.resultFolder;
      // Find the target TFolder
      let targetTFolder = null;
      const vaultRoot = this.plugin.app.vault.getRoot();
      Vault.recurseChildren(vaultRoot, (f) => {
        if (f.path === folder) targetTFolder = f;
      });
      if (targetTFolder === null) {
        new Notice('❌ The specified folder was not found')
        return;
      }

      // Fetch password from user
      let defaultPassword = '';
      let defaultHint = '';
      if ( this.pluginSettings.rememberPassword ){
        const bestGuessPasswordAndHint = SessionPasswordService.getByPath( folder );
        defaultPassword = bestGuessPasswordAndHint.password;
        defaultHint = defaultHint ?? bestGuessPasswordAndHint.hint;
      }
      const confirmPassword = isEncrypting && this.pluginSettings.confirmPassword;

      const pwModal = new PasswordModal(
        this.plugin.app,
        isEncrypting,
        confirmPassword,
        true,
        defaultPassword,
        defaultHint
      );

      pwModal.onClose = async () => {
        if ( !pwModal.resultConfirmed ){
          return;
        }
        const pw = pwModal.resultPassword ?? '';
        const hint = pwModal.resultHint ?? '';


        // Process all files in all the subfolders of the target TFolder
        Vault.recurseChildren(targetTFolder, (tf) => {
          if (tf instanceof TFolder) return;
          return __awaiter(this, void 0, void 0, function* () {
            const content = yield this.plugin.app.vault.read(tf);
            const selectionAnalysis = new SelectionAnalysis(content);
            if (isEncrypting && selectionAnalysis.canEncrypt) {
              const crypto = CryptoHelperFactory.BuildDefault();
              const encodedText = this.encodeEncryption(
                yield crypto.encryptToBase64(content, pw),
                hint,
                /*showInReadingView*/true
              );
              SessionPasswordService.putByPath( { password:pw, hint:hint }, folder );
              yield this.plugin.app.vault.modify(tf, encodedText);
            } else if (!isEncrypting && selectionAnalysis.canDecrypt) {
              const crypto = CryptoHelperFactory.BuildFromDecryptable(selectionAnalysis.decryptable);
              const decryptedText = yield crypto.decryptFromBase64(selectionAnalysis.decryptable?.base64CipherText, pw);
              if (decryptedText === null) {
                new Notice('❌ Decryption failed!'); // TODO: do not error out for each file ?
                return false;
              } else {
                SessionPasswordService.putByPath( { password:pw, hint:hint }, folder );
                yield this.plugin.app.vault.modify(tf, decryptedText);
              }
            }
          });
        });
      }

      pwModal.open();

      return true;

    }
    
    fModal.open();

    return true;

  }

  private encodeEncryption( encryptedText: string, hint: string , showInReadingView: boolean ): string {
		if (
			!_PREFIXES.some( (prefix) => encryptedText.contains(prefix) )
			&& !_SUFFIXES.some( (suffix) => encryptedText.contains(suffix) )
		) {
			const prefix = showInReadingView ? _PREFIX_ENCODE_DEFAULT_VISIBLE : _PREFIX_ENCODE_DEFAULT;
			const suffix = showInReadingView ? _SUFFIX_NO_COMMENT : _SUFFIX_WITH_COMMENT;

			if ( hint.length > 0 ){
				return prefix.concat(_HINT, hint, _HINT, encryptedText, suffix);
			}
			return prefix.concat(encryptedText, suffix);
		}
		return encryptedText;
	}
}
