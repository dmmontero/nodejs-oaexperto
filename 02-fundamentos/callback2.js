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


let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(emp => emp.id === id);

    if (!empleadoDB)
        callback(`No existe el emplado con id ${id}`);
    else
        callback(null, empleadoDB)
}

let getSalario2 = (empleado, callback) => {

    let salarioBD = salarios.find(sal => sal.id === empleado.id);

    if (!salarioBD) {
        callback(`No se encontró un salario para el empleado ${empleado.nombre}`);
    } else {
        callback(null, {
            id: empleado.id,
            nombre: empleado.nombre,
            salario: salarioBD.salario
        });
    }

}


getEmpleado(2, (err, empleado) => {
    if (err)
        return console.log(err);

    getSalario2(empleado, (err, resp) => {
        if (err)
            return console.log(err);

        console.log(`El salario de ${resp.nombre} es de $${resp.salario}`);
    })

});

/*
let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB)
        callback(`No se encontró el salario para el usuario ${empleado.id}`);
    else
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario
        });
}
*/