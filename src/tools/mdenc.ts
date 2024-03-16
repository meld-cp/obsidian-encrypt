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
    
        const listings = await Utils.fetchListings( cwd, false );

        this.outputListings( listings, format );


    }

    outputListings(listings: Listing[], format: string) {

        if (format == 'csv') {
            console.log( 'feature,fullPath,relativePath,extension,' );
            for (const l of listings) {
                console.log( `"${l.featureType}","${l.fullPath}","${l.relativePath}","${l.extension}"` );
            }
            return;
        }
        
        if (format == 'json'){
            console.log( JSON.stringify( listings, null, 2 ) );
            return;
        }
        
        console.table( listings as Listing[] );

    }

    

}

class TestCommandHandler {

    async argHandler( passwords:string[] ) {
        console.log( 'argHandler', {passwords} );

        const cwd = process.cwd();

        const listings = await Utils.fetchListings( cwd, true );

        const results : TestResult[] = [];

        for (const listing of listings) {
            if (listing.featureType == 'InPlace'){
               results.push( ... await this.testForInPlaceDecryption( listing, passwords ) );
            } else if (listing.featureType == 'WholeNote'){
                results.push( await this.testForWholeNoteDecryption( listing, passwords ) );
            }
        }

        this.outputResults( results );
    }

    outputResults(results: TestResult[]) {
        for (const result of results) {
            console.log( `${result.success ? 'PASSED' : 'FAILED'} => ${result.listing.relativePath} => ${result.message} => ${result.listing.featureType}` );
        }
    }

    async testForInPlaceDecryption( listing: Listing, passwords:string[] ) : Promise<TestResult[]> {
        //console.log( 'testFile', {listing, passwords} );

        const results : TestResult[] = [];

        if ( listing.content == null || listing.content.length == 0 ) {
            results.push({
                listing,
                success: false,
                message: 'no content'
            });
            return results;
        }

        const lines = listing.content!.split( '\n' );
        
        for (let lineIdx = 0; lineIdx < lines.length; lineIdx++) {
            const line = lines[lineIdx];
            const lineNo = lineIdx + 1;
            const reInplaceMatcher = /🔐(.*?)🔐/g;
            const matches = Array.from( line.matchAll( reInplaceMatcher ) );
            for (const match of matches) {
                const encryptedText = `🔐${match[1]}🔐`;

                const txtAnalysis = new FeatureInplaceTextAnalysis( encryptedText );
                if (!txtAnalysis.canDecrypt || txtAnalysis.decryptable == null ){
                    results.push({
                        listing,
                        success: false,
                        message: `line ${lineNo}, pos ${match.index!+1}`
                    });
                    continue;
                }

                const ch = CryptoHelperFactory.BuildFromDecryptableOrNull( txtAnalysis.decryptable );
                if ( ch == null ){
                    results.push({
                        listing,
                        success: false,
                        message: `line ${lineNo}, pos ${match.index!+1}, unknown format`
                    });
                    continue;
                }

                for (let pwIdx = 0; pwIdx < passwords.length; pwIdx++) {
                    const pw = passwords[pwIdx];
                    const pwNo = pwIdx + 1;
                    const decoded = await ch.decryptFromBase64(txtAnalysis.decryptable.base64CipherText, pw);
                    if ( decoded != null ){
                        results.push({
                            listing,
                            success: true,
                            message: `line ${lineNo}, pos ${match.index!+1}, password #${pwNo}`
                        });
                        continue;
                    }
                }

            }
            
        }

        return results;
    }

    async testForWholeNoteDecryption( listing: Listing, passwords:string[] ) : Promise<TestResult> {
        //console.log( 'testFile', {listing, passwords} );

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
            if (d.isDirectory()) yield* Utils.walk(entry);
            else if (d.isFile()) yield entry;
        }
    }

    static async fetchListings( dir : string, includeContent: boolean ) : Promise<Listing[]> {
        
        const listing : Listing[] = [];

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
                    listing.push( {
                        featureType: 'InPlace',
                        fullPath: p,
                        relativePath: relativePath,
                        extension: ext,
                        content: includeContent ? content : undefined
                    } )
                }
                continue;
            }
            
            // must be whole note encrypted
            listing.push( {
                featureType: 'WholeNote',
                fullPath: p,
                relativePath: relativePath,
                extension: ext,
                content: content
            } )

        }

        return listing;
    }
}

const optPasswordList : yargs.Options  = {
    demandOption: true,
    alias: 'pw',
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
        passwords: optPasswordList
    } ), (argv) => new TestCommandHandler().argHandler( argv.passwords as string[] ) )
    
    .command('decrypt', 'decrypt notes given a password list and an output directory',  (yargs) => yargs.option(  {
        passwords: optPasswordList,
        outdir: {
            alias: 'o',
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
        ['$0 decrypt --pw pw1 pw2 --outdir \\path\\to\\output\\', 'decrypt notes given a password list and an output directory'],
      ])
    .parse()
;
 

