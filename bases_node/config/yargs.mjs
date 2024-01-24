
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers'


export const argv = yargs(hideBin(process.argv))
    .options('b', {
        alias: 'base',
        demandOption: true,
        default: '/etc/passwd',
        describe: 'es la base de multiplicar',
        type: 'number'
    }
    ).option('l', {
        alias: 'listar',

        default: false,
        describe: 'lista la tabla de multiplicar',
        type: 'boolean'
    }).option('h', {
        alias: 'hasta',
        default: 10,
        describe: 'el limite de la tabla de multiplciar',
        type: 'number'
    }).check((argv) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser requerida'
        }
        return true;
    }).parse();