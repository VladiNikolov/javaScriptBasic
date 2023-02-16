function coins1(input){
    let index = 0;
    let currentSum = Number(input[index]);
    index++;
    currentSum = currentSum * 100
    
    let coinsCounter = 0;

    coinsCounter += Math.trunc(currentSum / 200);
    currentSum %= 200
    coinsCounter += Math.trunc(currentSum / 100);
    currentSum %= 100
    coinsCounter += Math.trunc(currentSum / 50);
    currentSum %= 50
    coinsCounter += Math.trunc(currentSum / 20);
    currentSum %= 20
    coinsCounter += Math.trunc(currentSum / 10);
    currentSum %= 10
    coinsCounter += Math.trunc(currentSum / 5);
    currentSum %= 5
    coinsCounter += Math.trunc(currentSum / 2);
    currentSum %= 2
    coinsCounter += Math.trunc(currentSum / 1);
    currentSum %= 1

    console.log(coinsCounter);
}
coins1(["2.73"])