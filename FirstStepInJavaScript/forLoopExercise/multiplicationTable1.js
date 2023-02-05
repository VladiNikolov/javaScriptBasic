function multiplicationTable(input){
    let argument = Number(input[0]);
    
    for (let i = 1; i <= 10; i++){
        console.log(`${i} * ${argument} = ${i * argument}`);
    }
}
multiplicationTable(["5"])