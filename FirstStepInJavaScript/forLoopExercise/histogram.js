function histogram(input){
    let number = Number(input[0]);
    let countP1 = 0
    let countP2 = 0
    let countP3 = 0
    let countP4 = 0
    let countP5 = 0

    for (let i = 1; i <= number; i++){
        let currentNumber = Number(input[i])
        if (currentNumber < 200){
            countP1 += 1
        } else if (currentNumber <= 399){
            countP2 += 1
        } else if (currentNumber <= 599){
            countP3 += 1
        } else if (currentNumber <= 799){
            countP4 += 1
        } else if (currentNumber >= 800){
            countP5 += 1
        }
    }
    let allNumbersCount = countP1 + countP2 + countP3 + countP4 + countP5
    console.log(`${((countP1 / allNumbersCount) * 100).toFixed(2)}%`);
    console.log(`${((countP2 / allNumbersCount) * 100).toFixed(2)}%`);
    console.log(`${((countP3 / allNumbersCount) * 100).toFixed(2)}%`);
    console.log(`${((countP4 / allNumbersCount) * 100).toFixed(2)}%`);
    console.log(`${((countP5 / allNumbersCount) * 100).toFixed(2)}%`);
}
histogram(["7",
"800",
"801",
"250",
"199",
"399",
"599",
"799"])


