// const mensaje = '111';

//  if (true) {
//      const mensaje = '222';
//      console.log(mensaje);
//  }

//  console.log(mensaje);





//  // CONST

// const mensaje = '111';

//  if (true) {
//      const mensaje = '222222';
//      console.log(mensaje);
//  }

//  console.log(mensaje);

//  // Es buena practiva declararlas en mayusculas.
//  // Tienen q inicializarse en el momento que son definidas.




//  // Declaracion de variables en ciclos
// // Use Var
// for ( var i = 0; i<=10; i++) { 
//     // console.log( 11 );
// }

// console.log( i );

// ////
// // Use let
// for ( let i = 0; i<=10; i++) {
//     // console.log( i is not defined );
// }

// console.log( i );










// //////////////////////////////

// /////////////////////////////   Declaraciones de funciones de ciclos
// // Ejemplo 1

// var funciones = [];

// for ( var i = 0; i<10; i++) {
//     funciones.push( () => console.log(i));
// }

// funciones.forEach( (func) => {
//     func();
//     // console.log(10 veces 10);
// })

// // Ejemplo 2

// var funciones = [];

// for ( var i = 0; i<10; i++) {
//     funciones.push( 
//         (function(valor) {
//             return function() {
//                 console.log(valor);
//             }
//         })(i)
//     );
// }

// funciones.forEach( (func) => {
//     func();
//     // console.log(1,2,3,4,5,6,7,8,9,10);
// })

// // Ejemplo 3

// var funciones = [];

// for ( let i = 0; i<10; i++) {
//     funciones.push( () => console.log(i));
// }

// funciones.forEach( (func) => {
//     func();
//     // console.log(1,2,3,4,5,6,7,8,9,10);
// })


// let numero = 10;
 
// if( true ){ 
//     let numero = 20;
    
//     while(true){ 
//         let numero = 20; 
        
//         for(let numero = 1; numero < 10; numero ++){ 
//             numero = numero; 
//         } break; 
//    }
// }
 
// console.log(numero);


// var variable = "Hola Mundo";
// var variable = "Hola Mundo";
// var variable = "Hola Mundo";
// var variable = "Hola Mundodsdsd";
// var variable = "Hola Mundo1111111111111";
// console.log( variable );









///////////////////////////////////////////////

 // Segmento de caracteres -  startsWith - endsWith - includes

////////////////////////////////////////////////

// JAVASCRIPT

// var saludo = "Hola Mundo!";
// console.log( saludo.substr(0,1) === 'H');   // True

// EM6

// console.log( saludo.startsWith('H'));  // True
// console.log( saludo.startsWith('Hola'));  // True
// console.log( saludo.startsWith('Hola Mundo'));  // True


// console.log( saludo.endsWith('!'));  // True
// console.log( saludo.endsWith('M'));  // False
// console.log( saludo.endsWith('Mundo!'));  // True


// console.log( saludo.indexOf("x")); // Regresa un entero -1, es porque si no lo consigue regresa un -1
// console.log( saludo.includes("x")); // Regresa un Booleano false
  

// console.log( saludo.startsWith("Mu")); // false
// console.log( saludo.startsWith("Mu", 5)); // True


// console.log( saludo.includes("la"));

// var pets = ['cat', 'dog', 'bat'];

// console.log(pets.includes('cat'));
// // expected output: true

// console.log(pets.includes('cat'));
// // expected output: false



///////////////////////////////////////////////

 // REPETICIONES DE STRINGS - REPEAT

////////////////////////////////////////////////


// let texto = 'Hola';
// console.log(texto.repeat(4));
// console.log('0'.repeat(4));

const SPACES = 12;

let nombres = ['Lionel', 'Andrea', 'Mateo']
let telefonos = ['603444768', '603563695', '111111111']

for ( i in nombres) {
    // console.log(nombres, telefonos); // Muestra 3 veces es un objeto los nombres

    let dif = SPACES - nombres[i].length;

    // console.log(nombres[i] + ' '.repeat(dif) + '|' + telefonos[i]);
    // console.log(i);
    console.log( nombres.indexOf('Andrea') );
}


// for ( i of nombres ) {
//     console.log(i); // Muestra 3 veces es un objeto los nombres

//     // let dif = SPACES - nombres[i].length;

//     // console.log(nombres[i] + ' '.repeat(dif) + '|' + telefonos[i]);
//     // console.log(i);
// }







///////////////////////////////////////////////

 // TEMPLATES CON TAGS

////////////////////////////////////////////////

function etiqueta( literales, ...substituciones) {
    // return 'ebe'
    let resultado = "";

    // console.log( arguments);

    console.log( literales ); // texto
    console.log( substituciones ); // {}

    for ( let i = 0; i < substituciones.length; i++) {
        resultado += literales[i];
        resultado += substituciones[i];
    }
    return resultado;
}

let unidades = 5,
    costo = 10;

let mensaje = etiqueta`${unidades} lapices cuestan ${unidades * costo } euros`;

console.log(mensaje);



///////////////////////////////////////////////

 // USANDO VALORES "RAW" (CRUDOS) EN TEMPLATES LITERALES

////////////////////////////////////////////////

let mensaje1 = `Hola \nMundo\\`;

let mensaje2 = String.raw`Hola \nMundo\\`;

console.log(mensaje1); // Hola 
                       // Mundo\
                       
console.log(mensaje2); // Hola \nMundo\\
