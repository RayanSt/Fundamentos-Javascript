

var dia = 'Martes'
dia = dia.toLowerCase();

if(dia === 'lunes'){
    console.log('Monday');
} else if (dia === 'martes'){
    console.log('Tuesday');
}else if (dia === 'miercoles'){
    console.log('Wednesday');
} else if (dia === 'jueves'){
    console.log('Thursday');
}else if (dia === 'viernes'){
    console.log('Friday');
}else if(dia ==='sabado'){
    console.log('Saturday');
}else if(dia === 'domingo'){
    console.log('Sunday');
} else {
    console.log('Entrada invalida');
}

switch (dia) {
    case 'lunes':
        console.log('Monday');
        break;
    case 'martes':
        console.log('Tuesday');
        break;
    case 'miercoles':
        console.log('Wednesday');
        break;
    case 'jueves':
        console.log('Thurday');
        break;
    case 'viernes':
        console.log('Saturday');
        break;
    case 'sabado':
        console.log('Sunday');
        break;
    case 'domingo':
        console.log('Monday');
        break;
    default:
        console.log('Entrada invalida')
        break;
}

// punto 2
var compra = 10;
if (compra < 0) {
    console.log('monto invalido');
} else if (compra <= 10) {
    compra = compra + 3;
    console.log(`valor compra: ${compra}`);
}else if (10 < compra && compra <= 20){
    compra = compra + 5;
    console.log(`valor compra: ${compra}`);
}else if (20 < compra && compra <= 50){
    compra = compra + 7;
    console.log(`valor compra: ${compra}`);
}


compra = 10;
switch (true) {
    case (compra <= 10):
        compra = compra + 3;
        console.log(`valor compra: ${compra}`);
        break;
    case (10 < compra && compra <= 20):
        compra = compra + 5;
        console.log(`valor compra: ${compra}`);
        break;
    case (20 < compra && compra <= 50):
        compra = compra + 7;
        console.log(`valor compra: ${compra}`);
        break;
    case (compra > 50):
        console.log('envio gratis');
        console.log(`valor compra: ${compra}`);
        break;
    case (compra < 0):
        console.log('monto de compra invalido');
        break;
}
