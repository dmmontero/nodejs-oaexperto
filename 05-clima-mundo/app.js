const lugar = require('./lugar/lugar')
const clima = require('./clima/clima');
const yargs = require('yargs');
const colors = require('colors/safe');

const argv = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            desc: 'Dirección ciudad para obtener el clima',
            demand: true
        }
    }).argv;


let getInformacion = async direccion => {
    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temperatura = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.direccion} es de ${temperatura.data.main.temp}°C`;
    } catch (err) {
        throw new Error(`No se pudo determianr el clima de ${direccion}`)
    }
}


getInformacion(argv.direccion)
    .then(result => console.log(colors.bold.green(result)))
    .catch(err => console.log(err));

/*
lugar.getLugarLatLng(argv.direccion)
    .then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });



clima.getClima(1.910000, -76.360001)
    .then((result) => {
        console.log(colors.bgCyan(result.data.main));
    }).catch((err) => {
        console.log(err);
    });
    */