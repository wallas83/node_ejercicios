import fs from 'fs';
import colors from 'colors';



export const crearArchivo = (base = 1, l= false, hasta =10) => {
    return new Promise((resolve, reject) => {
        try {
            console.clear();
          

            let salida= '';
            let consola = '';
            for (let index = 1; index <= hasta; index++) {

                consola += `${colors.yellow(base)} ${colors.red('x') } ${index}  = ${base * index}\n`;
                salida += `${base} x ${index}  = ${base * index}\n`;
            }
            if(l){
                console.log("===============".green);
                console.log('tabla de base '.blue, colors.blue(base));
                console.log('================='.green);
                console.log(consola);
                // return
            }
          

            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

            resolve(`tabla-${base}.txt`);
        } catch (error) {
            reject(error)
        }


    })


}

// para comonJS
// module.exports = {
//    crearArchivo
// }
// El import con commonJS se hace diferente se hace con require