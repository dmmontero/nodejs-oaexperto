const descripcion = {
    demandOption: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};
const completado = {
    alias: 'c',
    default: true,
    des: 'Marca como completada o pendiente la tarea'
};

const completada = {
    alias: 'c',
    desc: 'Filtra las tareas de acuerdo a su estado'
};

const argv = require("yargs")
    .command('listar', 'Lista todas las tareas', {
        completada
    })
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}