/* 
const getName = async () => {
    return 'Lionel Tolosa'
}

//console.log(getName());

getName()
    .then((resp) => {
        console.log('resp', resp);
    })
    .catch((err) => {
        console.log(err);
    }) */


const getName = async () => {
    return new Promise( (resolve, reject) => {

        setTimeout( () => {
            resolve('Lionel Tolosa Armas')
        }, 1300)
    })
}

const sayHi = async () => {
    const name = await getName()

    return `Hi ${name}`
}

/* getName()
    .then((resp) => {
        console.log('Resp', resp);
    }) */

sayHi()
    .then((resp) => {
        console.log('Resp', resp);
    })