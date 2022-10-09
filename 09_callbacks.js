/**
 * Callbacks: Son funciones que se pasan a otra como parametro, para que estas 
 * unas vez finallizadas sus tareas ejecuten la funcion que se mando como parametro
 */

// var suma = (a,b, cb) => {
//     cb(a+b);
// }

// var resultado = suma(1,2,(resultado)=>{
//     console.log(resultado);
// })


var suma = (a,b, cb) => {
    cb(a+b);
}

const imprimir = (data) => {
    console.log(data);
}

var resultado = suma(1,2,imprimir);

// ------------------------------
const getData = (cb) => {
    setTimeout(() => {
        cb({
            nombre: 'Giovanni',
            apellido: 'Mora'
        })
        
    }, 3000);
}
const impresion = (data) => console.log(data);
getData(impresion);