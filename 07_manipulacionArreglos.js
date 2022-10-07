//ForEach
var vocales = ['a','e','i','o','u'];

console.log(vocales.length);

for (let index = 0; index < vocales.length; index++) {
    const element = vocales[index];
    console.log(element);
}

//---> El ForEach recibe por parametro una funcion, en este caso podemos usar una funcion flecha
// lo que hara sera inserta cada valor del arreglo en el parametro que le pasemos --> elemento -->
vocales = ['a','e','i','o','u'];
vocales.forEach((elemento) => {
    //haria como elemento = vocales[i];
    console.log(elemento)
});


// tratamientos push -- shift -- pop
vocales = ['a','e','i','o','u'];
vocales.push('f'); //agregar elementos al final del arreglo
console.log(vocales);
console.log(vocales.shift()); //remueve el primer elemento y lo retorna por si se quiere usar
console.log(vocales);
console.log(vocales.pop()); // retorna el ultimo elemento y lo elimina
console.log(vocales);


// manipulacion inmmutable con map --> donde no se modifica el original sino que nos regresa uno nuevo
// se le pasa como argumento de la funcion una variable sobre la cual se inyectaran los datos del arreglo
var estudiantes = ['Andres','Esther','Ivan','Olga','Brayan'];
var asistencia = estudiantes.map((nombre) => {
    return {
        nombre: nombre,
        asistencia: false
    }
})

console.log(estudiantes);
console.log(asistencia);


var productos = [
    {
        nombre: 'camisetas',
        precio: 20
    },
    {
        nombre: 'pantalones',
        precio: 50
    },
    {
        nombre: 'zapatos',
        precio: 70
    }
]

// var productosImpuesto = productos.map((prod) => {
//     prod.impuesto = .3;
//     return 
// })

var productosImpuesto = productos.map((prod) => {
    return {
        // este operador permite expandir el objeto y agregarlo en el otro, algo asi como desfragmentar
        ...prod,
        impuesto: .3
    }
})
console.log(productos);
console.log(productosImpuesto);




var productos = [
    {
        nombre: 'camisetas',
        precio: 20
    },
    {
        nombre: 'pantalones',
        precio: 50
    },
    {
        nombre: 'zapatos',
        precio: 70
    }
]
var precios = productos.map((prod) => prod.precio);
console.log(productos);
console.log(precios);


//ahora usamos filter que no modifica el arreglo original

var estudiantes = [
    {
        nombre: 'Andrea',
        edad: 20,
        asistencia: true
    },
    {
        nombre: 'Tomas',
        edad: 19,
        asistencia: false
    },
    {
        nombre: 'Ronald',
        edad: 21,
        asistencia: false
    }
]

var filtrado = estudiantes.filter((estudiante) => estudiante.edad >= 20 && estudiante.asistencia === true);
console.log(estudiantes);
console.log(filtrado);


//reduce
// reduce todo un arreglo a un solo valor
var calificaciones = [3,4,5,2,6,3,9,5];
var suma = calificaciones.reduce((acumulador, calificacion) => acumulador + calificacion, 0);
console.log(calificaciones);
console.log(suma);

//otro ejemplo mas pro.. el redice recibe una funcion con dos propuedades un acumulador y un parametro para guardar cada valor de la iteracion
// por otro lado ademas de la funcion tambien reduce una variable para inicializar al acumulador
var edades = [18,20,20,19,18,21,20,19,18,20];
var resultado = edades.reduce((acumulador, edad)=>{
    if (!acumulador[edad]) {
        acumulador[edad] = 1;
    }else{
        acumulador[edad]++;
    }
    return acumulador;
}, {});
console.log(edades);
console.log(resultado);

var ventas = [
    {nombre: 'camiseta', precio: 15, totalvendido: 10},
    {nombre: 'zapatillas', precio: 150, totalvendido: 8},
    {nombre: 'pantalon', precio: 20, totalvendido: 30},
]
var resultado = ventas.reduce((acumulador, venta)=>{
    let ventatotal = venta.precio * venta.totalvendido;
    acumulador[venta.nombre] = ventatotal;
    return acumulador;
}, {})
console.log(ventas);
console.log(resultado);