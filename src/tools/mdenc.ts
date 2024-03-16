//import * from "yargs";

//const yargs = require('yargs')
//const hideBin = require('yargs/helpers')
//const argv = yargs(process.argv).argv

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers'
import * as fs from 'fs';
import * as path from 'path';
//import { CryptoHelperFactory } from 'src/services/CryptoHelperFactory';
import * as Constants from 'src/services/Constants';
import * as InPlaceConstants from 'src/features/feature-inplace-encrypt/FeatureInplaceConstants';

const optPasswordList  = {
    demandOption: true,
    alias: 'pw',
    describe: 'passwords to use',
    type: 'array',
}

 yargs(hideBin(process.argv))
    .command( 'list', 'list all encrypted artifacts within the current directory', () => {}, cmdListHandler )
    .command(['test', 'check'], 'check that all notes can be decrypted with the given password list', {
        //passwords: optPasswordList
    } )
    .command('decrypt', 'decrypt notes given a password list', {
        //passwords: optPasswordList
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
 
async function* walk( dir : string ) : AsyncIterableIterator<string> {
    for await (const d of await fs.promises.opendir(dir)) {
        const entry = path.join(dir, d.name);
        if (d.isDirectory()) yield* walk(entry);
        else if (d.isFile()) yield entry;
    }
}


async function cmdListHandler(args: any) {
    //console.log( "list", args );
    // for each *.md or *.mdenc file in the current directory, parse it and list any encrypted files

    const cwd = process.cwd();

    for await (const p of walk( cwd )) {

        const relativePath = '.' + path.sep + path.relative(cwd, p);

        const ext = path.extname(p).toLowerCase().slice(1);

        if ( ext == 'md' ){
            // look for inplace encrypted content
            fs.readFile( p, (err, data) =>{
                if (err) {
                    console.error(err);
                }else {
                    //TODO: parse the file and look for encrypted content
                    const text = data.toString();
                    if (
                        text.includes( InPlaceConstants._PREFIX_A_VISIBLE )
                        || text.includes( InPlaceConstants._PREFIX_B_VISIBLE ) 
                    ){
                        console.log( 'In Place Encryption', relativePath );
                    }
                }
            } );
        } else if (  Constants.ENCRYPTED_FILE_EXTENSIONS.includes( ext ) ){
            console.log( 'Whole note encryption', relativePath );
        }
    }
    
    // const files = glob.sync('**/*.{md,mdenc}', {
    //     cwd: process.cwd(),
    // });

    // const cryptoHelper = CryptoHelperFactory.getHelper();
    // const filesWithEncryptedContent = files.reduce((result, file) => {
    //     const filePath = path.join(process.cwd(), file);
    //     const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });
    //     const encryptedContent = cryptoHelper.findEncryptedContent(fileContent);
    //     if (encryptedContent) {
    //         result.push({
    //             file,
    //             encryptedContent,
    //         });
    //     }
    //     return result;
    // }, [] as { file: string; encryptedContent: EncryptedContent; }[]);

    // if (filesWithEncryptedContent.length > 0) {
    //     console.table(filesWithEncryptedContent);
    // } else {
    //     console.log('No encrypted files found.');
    // }

}
