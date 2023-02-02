function multiplicationTable(input){
    let argument = Number(input[0]);
    let result = 0
    
    for (let i = 1; i <= 10; i++){
        result = i * argument
        console.log(`${i} * ${argument} = ${result}`);
    }
}
multiplicationTable(["5"])