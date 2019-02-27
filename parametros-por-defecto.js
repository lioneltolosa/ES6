// PARAMETROS OPCIONALES O POR DEFECTO

//////////////////////////// Example 1 //////////////////////

function saludo( mensaje='Hola', tiempo= 1500) {

    setTimeout( () => {
        console.log(mensaje);

    }, tiempo)
}

function fnTemp() {
    console.log('Hola Lionel');
}

saludo();

//////////////////////////// Example 2 //////////////////////

function saludar2( fn = fnTemporal, persona = { nombre: 'Lionel'}) {
    console.log( typeof fn);

    if( typeof fn === 'undefined') {
        console.error('No es una función');
        return;
    }

    fn()

    console.log(persona);
}

function fnTemporal() {
    console.log('Hola Mundo FN');
}

var persona = {
    nombre: 'Lionel Tolosa'
}

saludar2( fnTemporal, persona );
