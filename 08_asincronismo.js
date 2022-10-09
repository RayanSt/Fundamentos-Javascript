// Javascript funciona en un unico flujo de ejecucion --> es por ello que 
// hace uso de procesos asincrono para ejecutor otros procesos en paraleto

console.log('1');
console.log('2');
console.log('3');
console.log('4');
console.log('5');
setTimeout(() => {
    console.log('6');
}, 2000);
console.log('7');