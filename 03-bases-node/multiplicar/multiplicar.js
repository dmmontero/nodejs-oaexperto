const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {

    console.log('========================='.green);
    console.log(`Tabla de base colors. ${base}`.rainbow);
    console.log('========================='.green);

    for (let i = 1; i <= limite; i++)
        console.log(`${base} * ${i} = ${base*i}`.rainbow);
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        for (let i = 1; i <= limite; i++)
            data += `${base} * ${i} = ${base*i}\n`;

        fs.writeFile(`tablas/tabla-${base}-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-${limite}.txt`);
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}