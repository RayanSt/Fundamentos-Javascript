var contador = 0;
while (contador <5) {
    console.log(`llamada n°: ${contador +1}`)
    contador++;
}
contador = 6;
do {
    console.log(`llamada n°: ${contador +1}`)
    contador++;
} while (contador < 5);

array = ['pollo','carne', 'huevos'];
for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
    
}

// for in
var persona = {
    nombre: 'Brayan',
    apellido: 'apellido',
    locacion: {
        lon: 37.77,
        lat: 44.45
    }
}
for (const key in persona) {
    if (Object.hasOwnProperty.call(persona, key)) {
        console.log(persona[key]);
        
    }
}

//for of ---> solo para objetos iterables

array = ['pollo','carne', 'huevos'];
array = 'Brayan'
for (const iterator of array) {
    console.log(iterator);
}