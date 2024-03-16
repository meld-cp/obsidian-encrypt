import * as yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import * as fs from 'fs';
import * as path from 'path';
import { CryptoHelperFactory } from 'src/services/CryptoHelperFactory';
import { JsonFileEncoding } from "src/services/FileDataHelper";
import * as Constants from 'src/services/Constants';
import * as InPlaceConstants from 'src/features/feature-inplace-encrypt/FeatureInplaceConstants';
import { FeatureInplaceTextAnalysis } from 'src/features/feature-inplace-encrypt/featureInplaceTextAnalysis';

interface Listing {
    featureType: 'InPlace' | 'WholeNote';
    fullPath: string;
    relativePath: string;
    extension: string;
    content: string | undefined;
}

interface TestResult{
    listing: Listing;
    success: boolean;
    message: string;
}

class ListCommandHandler {
    

    async argHandler( format : string ) {

        console.log( 'argHandler', { format } );

        const cwd = process.cwd();

        if (format == 'csv') {
            this.outputCsvHeader();
        }
        
        const listings: Listing[] = [];

        for await (const listing of Utils.listings(cwd, false)) {
            if (format == 'csv') {
                this.outputCsvRow( listing );
                continue;
            }
            
            if (format == 'json' || format == 'table') {
                listings.push( listing );
                continue;
            }
            
            break;
        }

        if (format == 'csv') {
            return;
        }

        if (format == 'json'){
            console.log( JSON.stringify( listings, null, 2 ) );
            return;
        }

        console.table( listings as Listing[] );
    }
    
    outputCsvHeader() {
        console.log( 'feature,fullPath,relativePath,extension,' );
    }

    outputCsvRow( l: Listing ) {
        console.log( `"${l.featureType}","${l.fullPath}","${l.relativePath}","${l.extension}"` );
    }
    

}

class TestCommandHandler {

    async argHandler( passwords:string[], onlyListFails:boolean ) {

        const cwd = process.cwd();

        for await (const listing of Utils.listings(cwd, true)) {

            if (listing.featureType == 'InPlace'){
                
                for await (const result of this.testForInPlaceDecryption( listing, passwords )) {
                    this.outputResult( result, onlyListFails );
                }

            } else if (listing.featureType == 'WholeNote'){
                
                const result = await this.testForWholeNoteDecryption( listing, passwords );
                this.outputResult( result, onlyListFails );

            }
        }

    }

    outputResult(result: TestResult, onlyListFails:boolean) {
        if (onlyListFails && result.success) {
            return;
        }
        console.log( `${result.success ? 'PASSED' : 'FAILED'} => ${result.listing.relativePath} => ${result.message} => ${result.listing.featureType}` );
    }

    outputResults(results: TestResult[], onlyListFails:boolean) {
        for (const result of results) {
            this.outputResult( result, onlyListFails );
        }
    }

    async * testForInPlaceDecryption( listing: Listing, passwords:string[] ) : AsyncIterableIterator<TestResult> {

        if ( listing.content == null ) {
            yield {
                listing,
                success: false,
                message: 'no content'
            };
            return;
        }

        const lines = listing.content!.split( '\n' );
        
        for (let lineIdx = 0; lineIdx < lines.length; lineIdx++) {
            const line = lines[lineIdx];
            const lineNo = lineIdx + 1;
            const reInplaceMatcher = /🔐(.*?)🔐/g;
            const matches = Array.from( line.matchAll( reInplaceMatcher ) );
            for (const match of matches) {

                const matchLoc = `line ${lineNo}, pos ${match.index!+1}`;

                const encryptedText = `🔐${match[1]}🔐`;

                const txtAnalysis = new FeatureInplaceTextAnalysis( encryptedText );
                if (!txtAnalysis.canDecrypt || txtAnalysis.decryptable == null ){
                    yield {
                        listing,
                        success: false,
                        message: `${matchLoc}, cannot decrypt`
                    };

                    continue;
                }

                const ch = CryptoHelperFactory.BuildFromDecryptableOrNull( txtAnalysis.decryptable );
                if ( ch == null ){
                    yield {
                        listing,
                        success: false,
                        message: `${matchLoc}, unknown format`
                    };
                    continue;
                }

                let wasDecrypted = false;
                for (let pwIdx = 0; pwIdx < passwords.length; pwIdx++) {
                    const pw = passwords[pwIdx];
                    const pwNo = pwIdx + 1;
                    const decryptedText = await ch.decryptFromBase64(txtAnalysis.decryptable.base64CipherText, pw);
                    if ( decryptedText != null ){
                        wasDecrypted = true;
                        yield {
                            listing,
                            success: true,
                            message: `${matchLoc}, password #${pwNo}`
                        };
                        break;
                    }
                }

                if (wasDecrypted){
                    break;
                }

            }
            
        }

    }

    async testForWholeNoteDecryption( listing: Listing, passwords:string[] ) : Promise<TestResult> {
        if( listing.content == null || listing.content.length == 0 ){
            return {
                listing,
                success: false,
                message: 'no content'
            };
        }

        const fileData = JsonFileEncoding.decode( listing.content || '' );

        const ch = CryptoHelperFactory.BuildFromFileDataOrNull( fileData );
        if ( ch == null ){
            return {
                listing,
                success: false,
                message: 'Unknown format'
            };
        }
        
        for (let i = 0; i < passwords.length; i++) {
            const pw = passwords[i];
            const decoded = await ch.decryptFromBase64(fileData.encodedData, pw)
            if ( decoded != null ){
                return {
                    listing,
                    success: true,
                    message: `password #${i+1}`
                };
            }
        }

        return {
            listing,
            success: false,
            message: 'unable to decrypt'
        };
    }
}

class DecryptCommandHandler{
    async argHandler( passwords:string[], outdir:string ) {
        console.log( 'argHandler', {passwords, outdir} );
    }
}

class Utils{
    static async * walk( dir : string ) : AsyncIterableIterator<string> {
        
        for await (const d of await fs.promises.opendir(dir)) {
            const entry = path.join(dir, d.name);
            if (d.isDirectory()) {
                yield* Utils.walk(entry);
            } else if (d.isFile()){
                yield entry;
            }
        }
    }

    static async * listings( dir : string, includeContent: boolean ) : AsyncIterableIterator<Listing> {
        
        for await (const p of Utils.walk( dir )) {
    
            const ext = path.extname(p).toLowerCase().slice(1);

            // exit early if not a relevant file
            if ( !['md', ...Constants.ENCRYPTED_FILE_EXTENSIONS].includes( ext ) ){
                continue;
            }
            
            const relativePath = '.' + path.sep + path.relative(dir, p);
            const content = ( includeContent || ext == 'md' ) ? await fs.promises.readFile( p, 'utf8' ) : undefined;
            
            // could have inplace encrypted notes
            if ( ext == 'md' ){
                
                if (
                    content!.includes( InPlaceConstants._PREFIX_A_VISIBLE )
                    || content!.includes( InPlaceConstants._PREFIX_B_VISIBLE )
                ){
                    yield {
                        featureType: 'InPlace',
                        fullPath: p,
                        relativePath: relativePath,
                        extension: ext,
                        content: includeContent ? content : undefined
                    }
                }
                continue;
            }
            
            // must be whole note encrypted
            yield {
                featureType: 'WholeNote',
                fullPath: p,
                relativePath: relativePath,
                extension: ext,
                content: content
            }

        }

    }

}

const optPasswordList : yargs.Options  = {
    demandOption: true,
    alias: ['p', 'pw'],
    describe: 'passwords to use',
    type: 'array',
}

const optListingFormat : yargs.Options = {
    alias: 'f',
    describe: 'format of the listing',
    type: 'string',
    choices: ['table', 'json', 'csv'],
    default: 'table',
}



yargs.default(hideBin(process.argv))
    .usage( 'Usage: $0 [command] [options]' )

    .command( 'list', 'list all encrypted artifacts within the current directory', (yargs) => yargs.option( {
        format: optListingFormat
    } ), (argv) => new ListCommandHandler().argHandler(argv.format as string ) )
    
    .command(['test', 'check'], 'check that all notes can be decrypted with the given password list', (yargs) => yargs.option(  {
        passwords: optPasswordList,
        fails: {
            alias: ['f', 'fail'],
            describe: 'only list fails',
            type: 'boolean',
            default: false
        }
    } ), (argv) => new TestCommandHandler().argHandler( argv.passwords as string[], argv.fails as boolean ) )
    
    .command('decrypt', 'decrypt notes to plain text given a password list and an output directory',  (yargs) => yargs.option(  {
        passwords: optPasswordList,
        outdir: {
            alias: ['o', 'out', 'to'],
            describe: 'output directory',
            type: 'string',
            demandOption: true
        }
    } ), (argv) => new DecryptCommandHandler().argHandler( argv.passwords as string[], argv.outdir as string ) ) 
    
    .demandCommand()
    .help()
    .wrap( null )
    .example([
        ['$0 list', 'Processes all *.md and *.mdenc files and list any encrypted artifacts within the current directory'],
        ['$0 test --passwords pw1 pw2', 'check that all notes can be decrypted with the given password list'],
        ['$0 decrypt --pw pw1 pw2 --outdir \\path\\to\\output\\', 'decrypt notes to an output directory'],
      ])
    .parse()
;
 

