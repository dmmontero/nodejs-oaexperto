//requireds
const argv = require("yargs")
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    }).command('crear', 'genera un archivo con la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;

const {
    crearArchivo,
    listarTabla
} = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(respuesta => console.log(`Archivo creado nombre: ${respuesta}`))
            .catch(err => console.log(err));
        break
    default:
        console.log('Comando no reconocido');
        break;
}

// console.log(argv.base);
// console.log('Limite', argv.limite);
// let argv = process.argv;
// let param = argv[2];
// let base = param.split("=")[1]; crear