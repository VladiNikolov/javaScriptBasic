function fishingBoat(input){
    let budget = Number(input[0]);
    let season = input[1];
    let numbeOfFishermen = Number(input[2]);
    let sum = 0

    if (season === "Spring"){
        let price = 3000
        if (numbeOfFishermen <= 6){
            sum = price * 0.90
        } else if (numbeOfFishermen <= 11){
            sum = price * 0.85
        } else if (numbeOfFishermen > 12){
            sum = price * 0.75
        }
    } else if (season === "Summer" || season === "Autumn"){
        let price = 4200
        if (numbeOfFishermen <= 6){
            sum = price * 0.90
        } else if (numbeOfFishermen <= 11){
            sum = price * 0.85
        } else if (numbeOfFishermen > 12){
            sum = price * 0.75
        }
    } else if (season === "Winter"){
        let price = 2600
        if (numbeOfFishermen <= 6){
            sum = price * 0.90
        } else if (numbeOfFishermen <= 11){
            sum = price * 0.85
        } else if (numbeOfFishermen > 12){
            sum = price * 0.75
        }
    }
    if (numbeOfFishermen % 2 === 0 && season !== "Autumn"){
        sum  = sum * 0.95
    }
    difference = Math.abs(budget - sum)
    if (budget >= sum){
        let leftMoney = budget - sum
        console.log(`Yes! You have ${leftMoney.toFixed(2)} leva left.`);
    } else {
        let neededMoney = sum - budget
        console.log(`Not enough money! You need ${neededMoney.toFixed(2)} leva.`);
    }
}
fishingBoat(["3600",
"Autumn",
"6"])

