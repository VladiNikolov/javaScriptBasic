function poolDay(input){
    let numberOfPeople = Number(input[0]);
    let priceForEntrance = Number(input[1]);
    let pricePerOneSunLounger = Number(input[2]);
    let pricePerOneUmbrella = Number(input[3]);

    let allMoneyToEntrance = numberOfPeople * priceForEntrance
    let peopleSunLonger = Math.ceil(numberOfPeople * 0.75)
    let peopleUmbrela = Math.ceil(numberOfPeople / 2)

    let neededMoneyForSunlonger = peopleSunLonger * pricePerOneSunLounger
    let neededMoneyForUmbrella = peopleUmbrela * pricePerOneUmbrella
    let allMoney = neededMoneyForSunlonger + neededMoneyForUmbrella + allMoneyToEntrance

    console.log(`${allMoney.toFixed(2)} lv.` );

}
poolDay(["21", "5.50", "4.40", "6.20"])
