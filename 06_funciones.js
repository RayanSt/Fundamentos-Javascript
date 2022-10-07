/**
 * funciones
*/

//declarativa
function nombreFuncion(){
    //cuerpo
}

function saludar (parametro, nombre){
    if(parametro === 1){
        return `Hola ${nombre}`;
    }else{
    console.log('Adios');
    }
}

console.log(saludar(1,'Brayan'));


//funciones de expresion

var suma = function(a,b){
    return a+b;
}
console.log(suma(2,4));


//arrow function
var restar = (a,b) => {
    return a-b;
}
console.log(restar(4,2));


var multiplicar = (a,b) => {
    return a*b;
}
