// function sumar(a, b) {
//     return a + b;
// }

let sumar = (a, b) => a + b;


let func = (a, b) => {
    return a + b
}

console.log(func(8, 9));
console.log(sumar(10, 20));


let saludar1 = () => 'Hola Mundo';
console.log(saludar1());

let saludar = nombre => `Hola ${nombre}`;
console.log(saludar('Jose Turuma'));


//This en funciones de flecha apunta a lo que valga this fuere de la funcion de flecha

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    }
}


console.log(deadpool.getNombre());