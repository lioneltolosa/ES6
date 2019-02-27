 // EXAMPLE IN ES5

// function agregar_alumnos() {
//     console.log(arguments);

//     for( var i = 1; i < arguments.length; i++) {
//         arguments[0].push( arguments[i] );
//     }
//     return arguments[0];
// }

// var alumnos_arr = ['Fernando'];

// var alumnos_arr2 = agregar_alumnos ( alumnos_arr, 'Maria', 'Lionel', 'Tolosa', 'Mateo');

// console.log(alumnos_arr2);


 // EXAMPLE IN ES6 :)

 function agregar_alumnos( arr_alumnos, ...alumnos) {    // arr_alumnos es el parametro obligatorio y seguido de cualquier cantidad de alumnos
    console.log(arguments);

    for( let i = 0; i < alumnos.length; i++) {
        arr_alumnos.push( alumnos[i] );
    }
    return arr_alumnos;
}

let alumnos_arr = ['Monsalve'];

let alumnos_arr2 = agregar_alumnos ( alumnos_arr, 'Enrique', 'Gael', 'Felipe', 'Mateo');

console.log(alumnos_arr2);


// RESTRICCIONES DEL PARÁMETRO REST

// 1º Solo puede existir un parametro rest en la funcion.
// 2º El parametro rest debe de ir siempre como ultimo parametro.

// function agregar_alumnos( ...nombres, apellidos) {}  ERROR

// function agregar_alumnos( ...nombres, ...apellidos, ) {} ERROR