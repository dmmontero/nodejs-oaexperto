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

let getEmpleado = async(id) => {
    let empleadoDB = empleados.find(emp => emp.id === id);

    if (!empleadoDB)
        throw new Error(`No existe el emplado con id ${id}`);

    return empleadoDB;
}

let getSalario = async(empleado) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB)
        throw new Error(`No se encontró el salario para el usuario ${empleado.id}`);

    return {
        nombre: empleado.nombre,
        salario: salarioDB.salario
    };
}

let getInformacion = async(id) => {
    let empleado = await getEmpleado(id);
    let salario = await getSalario(empleado);
    return `El salario de ${salario.nombre} es de ${salario.salario}$`;
}

getInformacion(2)
    .then(mensaje => console.log(mensaje))
    .catch((err) => console.log(err));


/*
//Promesas encadenadas
getEmpleado(1).then(empleado => {
    return getSalario(empleado);
    console.log(empleado);
}).then(salario => {
    console.log(`El salario de ${salario.nombre} es de ${salario.salario}$`);
}).catch(err => console.log(err));
*/