const argv = require("yargs").options({
    direccion: {
        alias: 'd',
        desc: 'Dirección ciudad para obtener el clima',
        demand: true
    }
}).argv;

console.log(argv.direccion);