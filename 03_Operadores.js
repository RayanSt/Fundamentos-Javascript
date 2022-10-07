/**
 * Operadores
 * 1. Asigancion y adicion
 */

//asignacion (=)
var x = 2;
var y = 3;
console.log(x, y);


//asignacion y adicion
x += y; // x = x + y 

console.log(x);

x -= y;
console.log(x);

y *= x;
console.log(y);

x /= y;
console.log(x);

//modulo
x=5;
y=52;
y %= x;
console.log(y);

//potencia
x=3;
y=5;
x**=y; // x^y
console.log(x);

/**
 * Operadores de comparacion
 */

//operador == igual

console.log(3 == 3); //compara si 3 es igual a 3
console.log(3 == '3'); //ojo que javascript puede interpretar un string como numero en ocasiones

//operador estrictamente igual ===
console.log(3 === 3); //compara si 3 es igual a 3
console.log(3 === '3'); //aca hace la comparacion donde sea estrictamente igual


//operador de desigualdad estricta (!==)
console.log(2 !== 2);

//operadores >, >=, <, <=
console.log(1 < 7);
console.log(1 <= 3);

//operadores aritmeticos
// + - * / ** %
console.log(2 + 4);
console.log(2 - 4);
console.log(2 * 4);
console.log(2 / 4);
console.log(2 ** 4);
console.log(2 % 4);

//operadores de incremento ++
var numero = 0;
console.log(++numero);
console.log(--numero);

//operadores logico AND OR XOR
console.log(true && false);
console.log(false || true);
//NOT
console.log(!true);

/** OPERADOR DE CADENA O CONCATENACION (+) */
// UNE CADENAS DE TEXTOS
var nombre = 'Brayan';
var apellido = 'Parra';
console.log(nombre+' '+apellido);

//Operador ternario (condicion ? val1 : val2)
console.log((3>2) ? '3 es mayor que 2' : '3 es menor que 2');

//operador de desestructuracion

var persona = {
    nombre: 'Brayan',
    apellido: 'Parra'
}

var {nombre} = persona;
console.log(nombre);
console.log(persona);

//ahora desestructuracion para arreglos
var list = [1,2,3,4,5];
var [a,b,c] = list;

console.log(c);

// Operador de miembro o acceso de propiedad

//notacion punto
var persona = {
    nombre: 'Brayan',
    apellido: 'Parra'
}
console.log(persona.nombre);
console.log(persona.apellido);

// notacion por corchetes
console.log(persona['nombre']);

// determinacion de tipo
console.log(typeof 26);