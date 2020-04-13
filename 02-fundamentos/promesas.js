let empleados = [{
        id: 1,
        nombre: 'Hugo'
    },
    {
        id: 2,
        nombre: 'Paco'
    },
    {
        id: 3,
        nombre: 'Luis'
    },
]

let salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 3000
    },
]

let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(emp => emp.id === id);

        if (!empleadoDB)
            reject(`No existe el emplado con id ${id}`);
        else
            resolve(empleadoDB)
    });
}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioBD = salarios.find(sal => sal.id === empleado.id);

        if (!salarioBD) {
            reject(`No se encontró un salario para el empleado ${empleado.nombre}`);
        } else {
            resolve({
                id: empleado.id,
                nombre: empleado.nombre,
                salario: salarioBD.salario
            });
        }
    });
}

/*
getEmpleado(1).then(empleado => {
    getSalario(empleado).then(resp => {
        console.log(`El salario de ${resp.nombre} es de ${resp.salario}$`);
    }, err => console.log(err));
}, err => console.log(err));
*/

// Promesas encadenadas
getEmpleado(3).then(empleado => {
    return getSalario(empleado);
}).then(salario => {
    console.log(`El salario de ${salario.nombre} es de ${salario.salario}$`);
}).catch(err => console.log(err));

//Promesas encadenadas
// getEmpleado(1).then(empleado => {
//     return getSalario(empleado);
// }).then(salario => {
//     console.log(`El salario de ${salario.nombre} es de ${salario.salario}$`);
// }).catch(err => console.log(err));