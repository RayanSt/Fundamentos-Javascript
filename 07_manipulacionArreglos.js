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



var estudiantes = [
    { nombre: 'Andrea', edad: 20, matriculado: true },
    { nombre: 'Tomas', edad: 19, matriculado: false },
    { nombre: 'Ronald', edad: 21, matriculado: false},
    { nombre: 'Maria', edad: 20, matriculado: false},
    { nombre: 'Rosa', edad: 21, matriculado: false}
];

var resultado = estudiantes
    .map((estudiante) => estudiante.matriculado)
    .reduce((acumulador, result)=>{
        if(result){
            acumulador.matriculado+=1;
        }else{
            acumulador.noMatriculado+=1;
        }return acumulador;
    }, { matriculado: 0, noMatriculado: 0})

console.log(resultado);


// SOME --- EVERY
//SOME --> Si al menos uno de los elementos del arreglo cumple con la condicion, retorna true
//EVERY --> Solo si todos cumplen con la condicion retorna true

var numeros = [1,2,3,4,2,3,6,5,7,8,5,9];
var resultado = numeros.some((numero)=> numero%2 === 0);
console.log(resultado);
resultado = numeros.every((numero)=> numero%2);
console.log(resultado);

var estudiantes = [
    { nombre: 'Andrea', edad: 20, matriculado: true },
    { nombre: 'Tomas', edad: 19, matriculado: false },
    { nombre: 'Ronald', edad: 21, matriculado: false},
    { nombre: 'Maria', edad: 20, matriculado: false},
    { nombre: 'Rosa', edad: 21, matriculado: false}
];

var resultado = estudiantes.some((estudiante) => estudiante.matriculado && estudiante.edad > 19);
console.log(resultado);
var resultado = estudiantes.every((estudiante) => estudiante.matriculado && estudiante.edad > 19);
console.log(resultado);

//find -- findIndex
//FIND REGRESA EL REGISTRO COMPLETO SI SE CUMPLE LA CONDICION
//FINDINDEX REGRESA LA POSICION DEL PRIMER ELEMENTO DONDE SE CUMPLA LA CONDICION

var clientes = [
    { id: 1, nombre: 'Andrea'},
    { id: 2, nombre: 'Tomas'},
    { id: 3, nombre: 'Ronald'},
    { id: 4, nombre: 'Maria'},
    { id: 5, nombre: 'Rosa'}
];
var result = clientes.find((cliente) => cliente.id === 2);
var posicion = clientes.findIndex((cliente) => cliente.id ===2);
console.log(result);
console.log(posicion);

//INCLUDES --> REGRESA VERDADER SI SE CIMPLE LA CONDICION
var mascotas = ['perro', 'gato', 'loro'];
var result = mascotas.includes('perro');
console.log(result);

//usando filter e include

var buscador = (parametro) => {
    let clientes = [
        { id: 1, nombre: 'Andrea'},
        { id: 2, nombre: 'Tomas'},
        { id: 3, nombre: 'Ronald'},
        { id: 4, nombre: 'Maria'},
        { id: 5, nombre: 'Rosa'}
    ];

    return clientes.filter((cliente) => cliente.nombre.toLocaleLowerCase().includes(parametro.toLocaleLowerCase()))
}

console.log(buscador('r'))

// JOIN --> Juntar todos los elementos del arreglo basicamente, permite unirlos

var array1 = [1,3,5,7,11];
var array2 = [2,4,6,8]
var result = array1.join("-");
console.log(result);

var clientes = [
    { id: 1, nombre: 'Andrea'},
    { id: 2, nombre: 'Tomas'},
    { id: 3, nombre: 'Ronald'},
    { id: 4, nombre: 'Maria'},
    { id: 5, nombre: 'Rosa'}
];

// console.log(clientes.join())
var csv = (array, separador= ",") =>{
    let cabeceras = Object.keys(array[0]).join(separador);
    let data = array.map((elemento)=>Object.values(elemento).join(separador))
    // usando Object,values, este me retorn un arreglo con los valores del objeto
    //eso valores le usamos el join para juntarlos de tal forma que objetiene un arreglo de arreglos
    //en data mas o menos de la siguiete forma [['1','Andrea'],['2','Tomas'],['3','Ronal'], ...] --> despues con el join
    // data quedaria ['1,Andrea','2,Tomas','3,Ronal', ...]
    console.log(cabeceras);
    data.forEach((element) => console.log(element));
};
csv(clientes);

//concat -- sort -- splice -- slice
//el concat une dos arreglos, e imagino que lo mismo con los strings
var array1 = [1,2,3,4,5];
var array2 = [6,7,8,9];
var union = array1.concat(array2);
// lo que hace el spread operator es expandir lo que tiene el objeto o arreglo
var unionSpreadOperator = [...array1,...array2];
console.log(union);
console.log(array1);
console.log(array2);
console.log(unionSpreadOperator);

//sort --> para ordernar los arreglos
var array = [9,3,7,5,0,3,1,3,4,6,7]
console.log(array.sort());
//el sort ordena en base al codigo ascii
var arreglo = [1,1000,21,30,4]
console.log(arreglo.sort())
console.log(`orden ascendente ${arreglo.sort((a,b)=> a-b)}`)
console.log(`orden descendente ${arreglo.sort((a,b)=> b-a)}`)

//splice nos permite modificar elementos del arreglo, cortando el arreglo desde una una posicion
//splice modifica el arreglo
var nombres = ['Brayan', 'Stiven','Gloria', 'Jose', 'Giovanni'];
console.log(nombres)
console.log(nombres.splice(2,2,'nn'));
console.log(nombres)


//slice --> igual que splice, pero no modifica el arreglo original, nos entrega una copia
var nombres = ['Brayan', 'Stiven','Gloria', 'Jose', 'Giovanni'];
console.log(nombres)
// posicion inicual, final --> de donde a donde quiere cortar el arreglo
console.log(nombres.slice(0,3)); // no incluye la ultima posicion
console.log(nombres)