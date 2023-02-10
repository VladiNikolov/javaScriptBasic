function sumOfNumbers1(input){
    let inputLine = input[0];
    let sum = 0

    for(let i = 0; i < inputLine.length; i++){
        let digit = Number(inputLine[i])
        sum += digit
    }
    console.log(`The sum of the digits is:${sum}`)
}
sumOfNumbers1(["1234"])