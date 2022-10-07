// primer punto
for (let index = 2; index <13; index++) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${index} * ${i} = ${index*i}`)
    }
    console.log('------------------------')
}

var index = 2;
var i = 1;
do{
    while (i<=10) {
        console.log(`${index} * ${i} = ${index*i}`);
        i++;
    }
    index++;
    i=0;
    console.log('--------------');
}while (index < 13) 