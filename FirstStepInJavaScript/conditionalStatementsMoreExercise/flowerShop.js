function flowerShop(input){
    let countMagnolias = Number(input[0]);
    let countHyacinths = Number(input[1]);
    let countRoses = Number(input[2]);
    let countCacti = Number(input[3]);
    let giftPrice = Number(input[4]);

    let totalPriceMagnolias = countMagnolias * 3.25
    let totalPriceHyacinths = countHyacinths * 4
    let totalPriceRoses = countRoses * 3.50
    let totalPriceCacti = countCacti * 8
    let totalPrice = (totalPriceMagnolias + totalPriceHyacinths + totalPriceRoses + totalPriceCacti) * 0.95

    if (totalPrice >= giftPrice){
        let leftMoney = totalPrice - giftPrice
        console.log(`She is left with ${Math.floor(leftMoney)} leva.`);
    } else{
        let neededMoney = giftPrice - totalPrice
        console.log(`She will have to borrow ${Math.ceil(neededMoney)} leva.`);
    }

}
flowerShop(["15", "7", "5", "10", "100"])