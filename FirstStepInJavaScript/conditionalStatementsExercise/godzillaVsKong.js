function godzillaVsKong(input){
    let budget = Number(input[0]);
    let numberStatist = Number(input[1]);
    let priceClothing = Number(input[2]);

    let priceDecor = budget * 0.1;

    if (numberStatist > 150){
        priceClothing = priceClothing * 0.9;
    }

    let totalPrice = (numberStatist * priceClothing) + priceDecor;

    if (totalPrice > budget){
        let neededMoney = totalPrice - budget
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${neededMoney.toFixed(2)} leva more.`);
    } else{
        let leftMoney = budget - totalPrice
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${leftMoney.toFixed(2)} leva left.`);
    }

}
godzillaVsKong(["15437.62",
"186",
"57.99"])

