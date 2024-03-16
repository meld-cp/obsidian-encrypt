import * as yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import * as fs from 'fs';
import * as path from 'path';
//import { CryptoHelperFactory } from 'src/services/CryptoHelperFactory';
import * as Constants from 'src/services/Constants';
import * as InPlaceConstants from 'src/features/feature-inplace-encrypt/FeatureInplaceConstants';

interface Listing {
    featureType: 'InPlace' | 'WholeNote';
    fullPath: string;
    relativePath: string;
    extension: string;
    //content: string;
}

class ListCommandHandler {
    

    async argHandler( format : string ) {

        console.log( 'argHandler', { format } );

        const cwd = process.cwd();
    
        const listings = await this.fetchListings( cwd );

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
        
        console.table( listings );

    }

    async fetchListings( dir : string ) : Promise<Listing[]> {
        
        //console.log( 'fetchListings', dir );
        const listing : Listing[] = [];

        for await (const p of Utils.walk( dir )) {
    
            const relativePath = '.' + path.sep + path.relative(dir, p);
            const ext = path.extname(p).toLowerCase().slice(1);

    
            if ( !['md', ...Constants.ENCRYPTED_FILE_EXTENSIONS].includes( ext ) ){
                continue;
            }

            
            if ( ext == 'md' ){
                const content = await fs.promises.readFile( p, 'utf8' );
                if (
                    content.includes( InPlaceConstants._PREFIX_A_VISIBLE )
                    || content.includes( InPlaceConstants._PREFIX_B_VISIBLE )
                ){
                    listing.push( {
                        featureType: 'InPlace',
                        fullPath: p,
                        relativePath: relativePath,
                        extension: ext,
                        //content: content
                    } )
                }
                continue;
            }
            
            listing.push( {
                featureType: 'WholeNote',
                fullPath: p,
                relativePath: relativePath,
                extension: ext,
                //content: content
            } )

        }

        return listing;
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
    demandOption: true,
}

const cmdListHandler = new ListCommandHandler();

yargs.default(hideBin(process.argv))
    .usage( 'Usage: $0 [command] [options]' )
    .command( 'list', 'list all encrypted artifacts within the current directory', (yargs) => yargs.option( {
        format: optListingFormat
    } ), (argv) => cmdListHandler.argHandler(argv.format as string ) )
    
    .command(['test', 'check'], 'check that all notes can be decrypted with the given password list', (yargs) => yargs.option(  {
        passwords: optPasswordList
    } ) )
    
    .command('decrypt', 'decrypt notes given a password list and an output directory',  (yargs) => yargs.option(  {
        passwords: optPasswordList,
        outdir: {
            alias: 'o',
            describe: 'output directory',
            type: 'string',
            demandOption: true
        }
    } ) )
    
    .demandCommand()
    .help()
    .wrap( null )
    .example([
        ['$0 list', 'Processes all *.md and *.mdenc files and list any encrypted artifacts within the current directory'],
        ['$0 test --passwords pw1 pw2', 'check that all notes can be decrypted with the given password list'],
        ['$0 decrypt --passwords pw1 pw2 --outdir out', 'decrypt notes given a password list and an output directory'],
      ])
    .parse()
;
 

