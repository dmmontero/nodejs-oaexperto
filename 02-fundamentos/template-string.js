let nombre = 'DeadPool';
let real = 'Wade Winston';

console.log(nombre + ' ' + real);
console.log(`${nombre} ${real}`);

function getNombre() {
    return `${nombre} ${real}`;
}

console.log(`${getNombre()}`);

function getNombre2(_nombre) {
    return `${_nombre}`;
}

console.log(`${getNombre2(real)}`);