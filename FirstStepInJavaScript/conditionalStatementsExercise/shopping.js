function shopping(input){
    let budget = Number(input[0]);
    let countVideoCard = Number(input[1]);
    let countProcesors = Number(input[2]);
    let countRamMemory = Number(input[3]);

    let totalMoneyVideoCard = countVideoCard * 250
    let priceOneProcesor = totalMoneyVideoCard * 0.35
    let totalMoneyProcesor = priceOneProcesor * countProcesors
    let priceOneRamMemory = totalMoneyVideoCard * 0.1
    let totalMoneyRamMemory = priceOneRamMemory * countRamMemory
    
    let totalPrice = totalMoneyVideoCard + totalMoneyProcesor + totalMoneyRamMemory

    if (countVideoCard > countProcesors){
        totalPrice = totalPrice * 0.85
    }

    if (budget >= totalPrice){
        let leftMoney = budget - totalPrice
        console.log(`You have ${leftMoney.toFixed(2)} leva left!`);
    } else{
        let neededMoney = Math.abs(budget - totalPrice)
        console.log(`Not enough money! You need ${neededMoney.toFixed(2)} leva more!`);
    }

}
shopping(["920.45",
"3",
"1",
"1"])

