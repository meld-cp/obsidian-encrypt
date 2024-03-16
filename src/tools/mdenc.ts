import yargs, { Options } from 'yargs';
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
    

    async argHandler(args: any) {
        //console.log( "list", args );
        // for each *.md or *.mdenc file in the current directory, parse it and list any encrypted files

        const listing : Listing[] = [];

        const cwd = process.cwd();
    
        for await (const p of Utils.walk( cwd )) {
    
            const relativePath = '.' + path.sep + path.relative(cwd, p);
            const ext = path.extname(p).toLowerCase().slice(1);
    
            if ( !['md', ...Constants.ENCRYPTED_FILE_EXTENSIONS, Constants.ENCRYPTED_FILE_EXTENSION_DEFAULT].includes( ext ) ){
                continue;
            }

            const content = await fs.promises.readFile( p, 'utf8' );

            if (
                ext == 'md'
                && (
                    content.includes( InPlaceConstants._PREFIX_A_VISIBLE )
                    || content.includes( InPlaceConstants._PREFIX_B_VISIBLE )
                )
            ){
                listing.push( {
                    featureType: 'InPlace',
                    fullPath: p,
                    relativePath: relativePath,
                    extension: ext,
                    //content: content
                })
            } else {
                listing.push( {
                    featureType: 'WholeNote',
                    fullPath: p,
                    relativePath: relativePath,
                    extension: ext,
                    //content: content
                })
            }

        }
        
        console.table( listing );

        //console.log( listing.entries( (l) => { relativePath:l.relativePath, l.extension, l.featureType } ) );
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

const optPasswordList : Options  = {
    demandOption: true,
    alias: 'pw',
    describe: 'passwords to use',
    type: 'array',
}

const cmdListHandler = new ListCommandHandler();

yargs(hideBin(process.argv))
    
    .command( 'list', 'list all encrypted artifacts within the current directory', () => {}, cmdListHandler.argHandler )
    
    .command(['test', 'check'], 'check that all notes can be decrypted with the given password list', {
        passwords: optPasswordList
    } )
    
    .command('decrypt', 'decrypt notes given a password list and an output directory', {
        passwords: optPasswordList
    }, (argv: any) => { console.log( "decrypt", argv ) } )
    
    .demandCommand()
    .help()
    .wrap( null )
    .example([
        ['$0 list', 'Processes all *.md and *.mdenc files and list any encrypted artifacts within the current directory'],
        ['$0 test --passwords pw1 pw2', 'check that all notes can be decrypted with the given password list'],
      ])
    .parse()
;
 

