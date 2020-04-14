const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const color = require('colors/safe');

let comando = argv._[0];


switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let tareas = porHacer.listar(argv.completada);
        if (tareas.length > 0) {
            console.log(color.america('==========================='));
            for (let t of tareas) {
                console.log(color.underline.yellow(t.descripcion));
                console.log(color.green(`Completada: ${t.completado}\n`));
            }
            console.log(color.america('==========================='));
        } else {
            console.log(color.red('No se encontraron tareas'));
        }
        break;
    case 'actualizar':
        let actualizar = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizar);
        break;
    case 'borrar':
        porHacer.borrar(argv.descripcion).then((result) => {
            console.log(color.green('Elimnado'));
        }).catch((err) => {
            console.log(color.red(err.message));
        });

        break;
    default:
        console.log('Comando no reconocido');
        break;
}