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

const getUserById = async (id) => {

    const getUserDB = empleados.find(empleado => empleado.id === id);

    if (!getUserDB) {
        throw new Error(`No existe el usuario con ese ${id}`)
    } else {
        return getUserDB;
    }
}

const getSalario = async (empleado) => {

    const getSalario = salarios.find( salario => salario.id === empleado.id)

    if(!getSalario) {
        throw new Error(`No se encontro un salario para el empleado ${empleado.nombre}`)
    } else {
        return {
            nombre: empleado.nombre,
            salario: getSalario.salario,
            id: empleado.id
        }
    }
}

const getInfo = async (id) => {

    const empleado = await getUserById(id)

    const resp = await getSalario(empleado)

    return `EL empleado ${empleado.nombre} tiene un salario de ${resp.salario}`

}

getInfo(3)
    .then((res) => {
        console.log('Resp', res);
    })
    .catch((err) => {
        console.log(err);
    })