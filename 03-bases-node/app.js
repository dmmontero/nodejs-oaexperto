// requireds
const { //deconstruction
    crearArchivo,
    listarTabla
} = require('./multiplicar/multiplicar');

const colors = require('colors/safe')
const argv = require('./config/yargs').argv;

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado nombre:', colors.rainbow(archivo)))
            .catch(err => console.log(err));
        break
    default:
        console.log('Comando no reconocido');
        break;
}
/*
console.log(process.argv);

// lstTable(4);

const {
    crearArchivo,
    listarTabla
} = require('./multiplicar/multiplicar');


*/


// let argv = process.argv;
// let param = argv[2];
// let base = param.split("=")[1];
// crearArchivo(base)
//     .then(archivo => console.log(`Archivo ${archivo} creado`))
//     .catch(err => console.log(err));