function braceletStand(input){
    let PocketMoney = Number(input[0]);
    let moneyPerDay= Number(input[1]);
    let allExpenses = Number(input[2]);
    let priceGift = Number(input[3]);

    let savedMoney = PocketMoney * 5
    let earnedMoney = moneyPerDay * 5

    let allMoney = savedMoney + earnedMoney
    let moneyAfterExpenses = allMoney - allExpenses

    let diff = Math.abs(moneyAfterExpenses - priceGift)

    if (priceGift < moneyAfterExpenses){
        console.log(`Profit: ${moneyAfterExpenses.toFixed(2)} BGN, the gift has been purchased.`);
    } else {
        console.log(`Insufficient money: ${diff.toFixed(2)} BGN.`)
    }


}
braceletStand(["15.20",
"200.00",
"7.30",
"1500.12"])


