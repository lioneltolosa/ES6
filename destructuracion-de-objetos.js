/* 
let config = {
    name: 'Lionel',
    email: 'Lionel@gmail.com',
    facebook: 'liorock',
    google: 'rockon',
    premium: false
}

let { name, 
      email, 
      facebook, 
      google, 
      premium: dePago,
      sabor = 'latino'
    } = config;

console.log(name, email, facebook, google, dePago, sabor);
 */



/// Destructuracion de Objetos Anidados

let config = {
    name: 'Lionel',
    email: 'Lionel@gmail.com',
    cursor: {
        linea: 3,
        colummn: 23
    },
    ultimoArchivo: {
        file: 'Index',
        cursor: {
            linea: 12,
            colummn: 423
        }
    },
    other: {
        other1: {
            other2: {
                linea: 2222323232,
                colummn:333
            }
        }
    }
}
/* 
let { ultimoArchivo: {cursor: ultimoArchivo} } = config

console.log(ultimoArchivo); */

let {other: {other1: {other2: otronodoloco }}} = config

console.log(otronodoloco);