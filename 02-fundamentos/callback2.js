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

getEmpleado(3, (err, empleado) => {
    if (err)
        return console.log(err);

    getSalario(empleado, (err, resp) => {
        if (err)
            return console.log(err);

        console.log(`El salario de ${resp.nombre} es de ${resp.salario}$`);
    })

});