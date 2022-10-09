/**
 * Ayuda a contralar funciones asincronas
 */

const getData = (error)=>{
    return new Promise((resolve, reject)=>{
        if(!error){
            setTimeout(() => {
                resolve({
                    nombre: 'Brayan',
                    apellido: 'Parra'
                })
                
            }, 3000);
        }else{
            reject("No pudimos obtener los datos")
        }
    })
}

const getData2 = (error)=>{
    return new Promise((resolve, reject)=>{
        if(!error){
            setTimeout(() => {
                resolve({
                    nombre: 'Stiven',
                    apellido: 'Pinilla'
                })
                
            }, 3000);
        }else{
            reject("No pudimos obtener los datos")
        }
    })
}

console.log('inicio');
getData(false)
    .then((data)=>{
        console.log(data)
        return getData2(true)
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error)
    })
console.log('fin')

//async -- await

const getData3 = (error)=>{
    return new Promise((resolve, reject)=>{
        if(!error){
            setTimeout(() => {
                resolve({
                    nombre: 'Stiven',
                    apellido: 'Pinilla'
                })
                
            }, 3000);
        }else{
            reject("No pudimos obtener los datos")
        }
    })
}

const getData4 = (error)=>{
    return new Promise((resolve, reject)=>{
        if(!error){
            setTimeout(() => {
                resolve({
                    nombre: 'Brayan',
                    apellido: 'Parra'
                })
                
            }, 3000);
        }else{
            reject("No pudimos obtener los datos")
        }
    })
}

const main = async ()  => {
    try{
    let resultado = await getData3(false);
    let resultado2 = await getData4(false);
    console.log(resultado)
    console.log(resultado2)
    }catch(error){
        console.log(error)
    }
}
main();