function toyShop(input){
    let priceExcursion = Number(input[0]);
    let countPuzzle = Number(input[1]);
    let countDoll = Number(input[2]);
    let countBear = Number(input[3]);
    let countMinion = Number(input[4]);
    let countTruck = Number(input[5]);

    let totalPrise = countPuzzle * 2.60 + countDoll * 3 + countBear * 4.10 + countMinion * 8.2 + countTruck * 2
    let totalCountToys = countPuzzle + countDoll + countBear + countMinion + countTruck

    if (totalCountToys >= 50){
        totalPrise = totalPrise * 0.75
    }

    totalPrise = totalPrise * 0.90

    if (totalPrise >= priceExcursion){
        let moneyLeft = totalPrise - priceExcursion
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else{
        let moneyNeeded = priceExcursion - totalPrise
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
    }
}
toyShop(["320",
"8",
"2",
"5",
"5",
"1"])

