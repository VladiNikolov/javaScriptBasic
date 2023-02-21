function sumPrimeNonPrime(input){
    let index = 0;
    let command = input[index];
    index++;
    let sumPrime = 0;
    let sunNonPrime = 0;

    while (command !== "stop"){
        let currentNumber = Number(command);

        if (currentNumber < 0){
            console.log(`Number is negative.`);
            command = input[index];
            index++;
            continue;
        }
        
        let isPrime = true;
        for (let num = 2; num < currentNumber; num++){
            if (currentNumber % num === 0){
                isPrime = false;
                break;
            }

        }
        if (isPrime){
            sumPrime += currentNumber;
        } else{
            sunNonPrime += currentNumber;
        }

        command = input[index];
        index++;
    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sunNonPrime}`);
}
sumPrimeNonPrime(["30",
"83",
"33",
"-1",
"20",
"stop"])

