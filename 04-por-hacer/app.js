const argv = require("./config/yargs").argv;
const porHacer = require('./por-hacer/por-hacer');
var colors = require('colors');


let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log("=================Tareas por hacer==========================".rainbow);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log("===========================================================".rainbow);
        }
        break;
    case 'actualizar':
        console.log('Actualiza una tarea por hacer');
        break;
    default:
        console.log('Comando no reconocido');
        break;
}