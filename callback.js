/* const getUserById = (id, callback) => {
    const user = {
        name: 'Lion',
        id
    }

    callback( null, user)
};

getUserById(1, (err, user) => {
    console.log('User', user);
}) */



const empleados = [
    {
        id: 1,
        nombre: 'Lionel'
    },
    {
        id: 2,
        nombre: 'Mateo'
    },
    {
        id: 3,
        nombre: 'Andrea'
    }
]

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
]

const getUserById = (id, callback) => {
    const getUserDB = empleados.find(empleado => empleado.id === id);

    if(!getUserDB) {
        console.log(`No existe el usuario con ese ${id}`);
    } else {
        callback(null, getUserDB)
    }
}

const getSalario = (empleado, callback) => {
    const getSalario = salarios.find( salario => salario.id === empleado.id)

    if(!getSalario) {
        console.log(`No se encontro un salario para el empleado ${empleado.nombre}`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: getSalario.salario,
            id: empleado.id
        })
    }
}

getUserById(3, (err, empleado) => {
    if(err) {return}

    getSalario(empleado, (err, resp) => {
        if(err) {return}

        console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);
    })
    //console.log(empleado);
})
