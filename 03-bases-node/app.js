//requireds
const { crearArchivo } = require('./multiplicar/multiplicar');

let base = 'sjldfkjdskf';

crearArchivo(base)
    .then(respuesta => console.log(`Archivo creado ${respuesta}`))
    .catch(err => console.log(err));