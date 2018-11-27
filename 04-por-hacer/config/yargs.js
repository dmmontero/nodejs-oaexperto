const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require("yargs")
    .command('crear', 'Crear un elemento por hacer', {
        descripcion: {
            demandOption: true,
            alias: 'd'
        }
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion: {
            demandOption: true,
            alias: 'd',
            desc: 'Descripción de la tarea por hacer'
        },
        completado: {
            alias: 'c',
            default: true,
            description: 'Marca como completada o pendiente la tarea'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}