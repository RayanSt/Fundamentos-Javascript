//tipado en javascript
/** aunque es javascript no tiene tipado de variables fuerte
 * es posible definir el dato que debe tener
 */

const numero = 0;
//Number

console.log(12);
console.log(12.5);

//textos -- string
console.log("Mensaje corto");
console.log('Mensaje corto')
console.log(`Mensaje corto`)

//booleans -- logicos
console.log(true);
console.log(false);

//indefinido
console.log(undefined);

//null
console.log(null);

/** tipos de datos estructurales
 * 1. Objetos - object
 * 2. Array - lista
 */

const person = {
    nombre: "Brayan",
    Nacimiento: '99-12-03',
    edad: null,
    dir: {
        numero: 1,
        calle: 15
    }
}

JSON.stringify(console.log(person), 2, null);

//Array

const lista = ['Mexico', 'Colombia', 'Peru', true, null];
console.log(lista);
lista.push('Brazil');
console.log(lista);