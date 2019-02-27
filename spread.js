// EL OPERADOR SPREAD

// EL OPERADOR SPREAD PERMITE ESPECIFICAR UN ARRELO QUE SERA
// SEPARADO Y CADA ITEM ENVIADO SERA UN ARGUMENTO INDEPENDIENTE A LA FUNCION

var num1 = 10;
var num2 = 30;

var max = Math.max(num1, num2)

console.log(max);


///////// OTHER EXAMPLE ////////

var numeros = [1, 5, 15, 60, 133, 543];

var max = Math.max.apply( Math, numeros)

console.log(max);

///////// EM6 ////////

var numeros = [1, 5, 15, 60, 133, 543];

var max = Math.max( ...numeros)

console.log(max);



// EN JAVASCRIP TODOS LOS OBJETOS SON PASADOS POR REFERENCIA

let persona1 = {
    nombre: 'Lionel',
    edad: 31
}

let persona2 = { ...persona1};

persona2.nombre = 'Mateo';
persona2.edad = 1;

console.log(persona1);
console.log(persona2);



// Añadir propiedades a objetos a partir de otros objetos


let persona3 = {
    nombre: 'Lionel',
    edad: 31
}

let persona4 = {
    nombre: 'Mateo',
    edad: 1,
    direccion: 'Apo',
    conduce: true,
    vehiculo:true,
    vegetariano: false
}

persona3 = {
    ...persona4,
    ...persona3
}


console.log(persona3);
console.log(persona4);








///////// Diferencias entre el operador REST Y EL OPERADOR SPREAD

// REST = Junta los elementos en un arreglo.
// SPREAD = Esparce los elementos como si fueran enviados de forma separada.


function saludarRest( saludo, ...nombres){
    for ( i in nombres ) {
        console.log(`${saludo} ${nombres[i]}`);
    }
}

function saludarSpread( saludo, ...nombres){
    console.log(`${saludo} ${nombres}.`);
}

saludarRest ( 'Hola', 'fernando', 'maria', 'susana');

let personas = ['Mateo', 'Andres', 'Tolosa'];
saludarSpread('Que tal', personas);



let a = ['c', 'd' ]
let b = ['a', 'b', ...a, 'e', 'f' ]

console.log(b);