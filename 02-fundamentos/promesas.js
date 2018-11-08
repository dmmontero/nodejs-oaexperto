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
        let salarioDB = salarios.find(salario => salario.id === empleado.id);

        if (!salarioDB)
            reject(`No se encontró el salario para el usuario ${empleado.id}`);
        else
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario
            });
    });
}

getEmpleado(2).then(empleado => {
    getSalario(empleado).then(resp => {
        console.log(`El salario de ${resp.nombre} es de ${resp.salario}$`);
    }, err => console.log(err));
}, err => console.log(err));