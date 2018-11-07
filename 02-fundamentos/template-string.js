let nombre = 'DeadPool';
let real = 'Danny';

console.log(nombre + ' ' + real);
console.log(`${nombre} ${real}`);

function getNombre() {
    return `${nombre} ${real}`;
}

console.log(`${getNombre()}`);