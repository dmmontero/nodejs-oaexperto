/*
let nombre = 'Wolverine';

if (true) {
    let nombre = 'Magneto';
}

nombre = 'Wolverine1';
nombre = 'Wolverine2';
nombre = 'Wolverine3';
nombre = 'Wolverine4';
console.log(nombre);


let index = 'Hola'; //..Ambito 1

//Ambito 2
for (let index = 0; index <= 5; index++) {
    console.log(`i: ${index}`);
}
console.log(index);
*/
var a = 5;
var b = 10;

if (true) {
    let a = 4; // El alcance es dentro del bloque if
    b = 1; // El alcance es global

    console.log(a); // 4
    console.log(b); // 1
}

console.log(a); // 5
console.log(b); // 1

let x = async function () {}