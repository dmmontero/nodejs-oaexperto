const fs = require('fs');

//Arreglo de tareas por hacer
let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer, null, 1);
    fs.writeFile('db/data.json', data, 'utf8', (err) => {
        if (err) throw new Error('No se pudo guardar', err);
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        let listadoPorHacer = [];
    }
}

const crear = (descripcion) => {
    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);
    guardarDB();

    return porHacer
}

const listar = (completada = null) => {
    cargarDB();
    if (completada !== null) {
        let filtrada = listadoPorHacer.filter(item => {
            return item.completado.toString() === completada;
        });
        return filtrada;
    } else {
        return listadoPorHacer;
    }
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true
    } else
        return false
}


const borrar = async(descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else
        throw new Error(`Tarea no encontrada`);

}

module.exports = {
    crear,
    listar,
    actualizar,
    borrar
}