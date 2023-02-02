function cleverLily(input){
    let age = Number(input[0]);
    let priceWashMashine = Number(input[1]);
    let priceToys = Number(input[2]);
    let moneyBirthday = 0
    let sumBirthday = 0
    let countToys = 0


    for (let i = 1; i <= age; i++){
        if (i % 2 === 0){
            moneyBirthday += 10
            sumBirthday += moneyBirthday - 1
        }else {
            countToys += 1
        }
    }
    let allPriceToys = countToys * priceToys
    let totalSavedMoney = allPriceToys + sumBirthday
    let difference = Math.abs(totalSavedMoney - priceWashMashine)

    if (totalSavedMoney >= priceWashMashine){
        console.log(`Yes! ${difference.toFixed(2)}`);
    } else {
        console.log(`No! ${difference.toFixed(2)}`);
    }
}
cleverLily(["21",
"1570.98",
"3"])

