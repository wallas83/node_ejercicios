
import { crearArchivo } from './helpers/multiplicar.mjs';
import { argv } from './config/yargs.mjs';
// const base = 4;
// esto noe slo mejor para ingresar datos en consola
// const [ , , arg3 = base=5] = process.argv
// const [, base = 5] =arg3.split('=');




console.log(argv);
crearArchivo(argv.b, argv.l, argv.hasta)
    .then(nombreArchivo => console.log(nombreArchivo, 'creadinho'))
    .catch(err => console.log(err));
