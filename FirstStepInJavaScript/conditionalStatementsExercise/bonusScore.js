function bonusScore(input){
    let number = Number(input[0]);
    let bonusCount = 0;

    if (number <= 100){
        bonusCount = 5;
    } else if (number <= 1000){
        bonusCount = number * 0.20;
    } else{
        bonusCount = number * 0.10;
    }

    if (number % 2 === 0){
        bonusCount = bonusCount + 1;
    } else if (number % 10 === 5){
        bonusCount = bonusCount + 2;
    }
    console.log(bonusCount);
    console.log(bonusCount + number);
}
bonusScore(["175"])