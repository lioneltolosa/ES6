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

const getUserById = (id) => {

    const promise = new Promise((resolve, reject) => {

        const getUserDB = empleados.find(empleado => empleado.id === id);

        if (!getUserDB) {
            reject(`No existe el usuario con ese ${id}`)
        } else {
            resolve(getUserDB)
        }
    });

    return promise;
}

const getSalario = (empleado) => {
    const promise = new Promise( (resolve, reject) => {

        const getSalario = salarios.find( salario => salario.id === empleado.id)

        if(!getSalario) {
            reject(`No se encontro un salario para el empleado ${empleado.nombre}`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: getSalario.salario,
                id: empleado.id
            })
        }
    });

    return promise;
}

getUserById(2)
    .then((empleado) => {
        return getSalario(empleado)
    })
    .then((resp) => {
        console.log('resp', resp);
    })
    .catch((err) => {
        console.log('Catch Err', err);
    })