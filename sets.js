let items = new Set([1,2,3,4,5,6,7,7,7,7,7,7,7]);

/* items.add( 1 )
items.add( 2 )
items.add( 3 )
items.add( 4 )
items.add( 5 )
items.add( '1' ) */
/* console.log('has para buscar un elemento', items.has(1));

console.log('has para eliminar un elemento', items.delete(3));

console.log('Size', items.size);

console.log(items); */

let persons = new Set(['Lionel', 'Mateo', 'Andrea'])

persons.forEach( (value, key, originalArray) => {
    console.log('value', value);
    console.log('key', key);
    console.log('originalArray', originalArray);
})


// Convertir un set en Array

let numeros = [1,2,3,4,5,4,5];

let setNumeros = new Set( numeros );

console.log(setNumeros);

/* let arrayNumeros = [...setNumeros]; */
let arrayNumeros = elimarDuplicados(setNumeros)

console.log(arrayNumeros);

function elimarDuplicados( items ) {
   /*  let set = new Set( items )
    return [...set] */

    return [... new Set(items)]
}

