/**
 * Control de flujo
 */

//if
// if(condicion){

// }

var llueve = true;
if(llueve){
    console.log('Esta lloviendo');
}
var administrador = 'administrador';
if (administrador === "administrador") {
    console.log('Efectivamente es un admin');
}
const MAYOR = 18;
var edadNino = 17;
if (edadNino >= MAYOR) {
    console.log('Puede ingresar');
}else{
    console.log('No puede ingresa')
}

var semaforo = 'rojo';
if (semaforo === 'verde') {
    console.log('puede andar');
} else if(semaforo === 'amarillo') {
    console.log('reduzca su velocidad');
} else if (semaforo === 'rojo'){
    console.log('apague motor');
}else{
    console.log('color invalido')
}

//switch
var clave = 2;
switch (clave) {
    case 0:
        console.log('Hola');
        break;
    case 1:
        console.log('Adios');
        break;
    case 2:
        console.log('nos vemos luego');
        break;
}
