function coins(input){
    let index = 0;
    let currentSum = Number(input[index]);
    index++;
    currentSum = currentSum * 100
    
    let coinsCounter = 0; 

    while (currentSum > 0){
        if (currentSum >= 200){
            currentSum -= 200;
            coinsCounter += 1;
        } else if (currentSum >= 100){
            currentSum -= 100;
            coinsCounter += 1;
        } else if (currentSum >= 50){
            currentSum -= 50;
            coinsCounter += 1;
        } else if (currentSum >= 20){
            currentSum -= 20;
            coinsCounter += 1;
        } else if (currentSum >= 10){
            currentSum -= 10;
            coinsCounter += 1;
        } else if (currentSum >= 5){
            currentSum -= 5;
            coinsCounter += 1;
        } else if (currentSum >= 2){
            currentSum -= 2;
            coinsCounter += 1;
        } else if (currentSum >= 1){
            currentSum -= 1;
            coinsCounter += 1;
        }
    if (currentSum == 0){
        console.log(coinsCounter);
    }
    
    }

}
coins(["2.73"])