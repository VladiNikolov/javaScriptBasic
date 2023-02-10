function sumOfNumbers(input){
    let n = input[0];
    let result = 0
    for (i = 0; i < n.length; i++){
        result += Number(n[i]);
    }
    console.log(`The sum of the digits is:${result}`);
}
sumOfNumbers(["564891"])