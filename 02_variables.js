/**
 * vaiables, espacios de memoria para almacenar valores
 *  --- var, let, const
 */

//variables con var... funcionan de manera global

var nombre = "nombre";
console.log(nombre);

var edad = 27;
console.log(edad);

var persona = {
    nombre: 'Brayan',
    apellido: 'Parra',
    edad: 22,
    direccion: {
        ciudad: 'Bogota',
        barrios: 'Chapinero'
    },
    cuentas: [
        'davivienda', 'bancolombia'
    ]
}

console.log(persona);

var ciudad;
console.log(ciudad);
ciudad = 'Bogota';
ciudad = 'Pereira';
ciudad = 24;
console.log(ciudad)

//variables let... solo funciona en un bloque de codigo donde este definido
{
let apodo = 'Yitan';
var yitan = true;
console.log(apodo, yitan);
}

console.log(yitan);

//variables con const... variables que no cambian con el hilo de ejecucion
const PI = 3.1416; // siempre tiene que estar inicializada 
console.log(PI);
//PI = 3;
//console.log(PI);

//truco solo sirve con este tipo de comillas `` 
var nombre = 'Brayan';
var saludo = `Hola soy ${nombre}`;
console.log(saludo);