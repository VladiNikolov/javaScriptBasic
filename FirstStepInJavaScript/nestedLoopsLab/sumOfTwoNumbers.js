function sumOfTwoNumbers(input){
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNumber = Number(input[2]);
    let count = 0
    let isFound = false

    for (let x = start; x <= end; x++){
        for (let y = start; y <= end; y++){
            count++;
            if (x + y === magicNumber){
                isFound = true;
                console.log(`Combination N:${count} (${x} + ${y} = ${magicNumber})`);
                break;
            }
        }
        if (isFound){
            break;
        }
    }
    if (!isFound){
        console.log(`${count} combinations - neither equals ${magicNumber}`);  
    }
    
}
sumOfTwoNumbers(["23",
"24",
"20"])
