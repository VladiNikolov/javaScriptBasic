function touristShop(input){
    let index = 0;
    let budget = Number(input[index]);
    index++;

    let nameProduct = input[index];
    index++;

    let priceProduct = Number(input[index]);
    index++;

    let countProduct = 0;
    let allSum = 0;
    let isFinish = false;

    while (nameProduct !== "Stop"){
        countProduct++;

        if (countProduct % 3 === 0){
            priceProduct = priceProduct / 2
        }

        if (budget < priceProduct){
            isFinish = true;
            break;
        }

        budget -= priceProduct
        allSum += priceProduct

        nameProduct = input[index];
        index++;

        priceProduct = Number(input[index]);
        index++;
    }
    let difference = Math.abs(budget - priceProduct)
    if (isFinish){
        console.log(`You don't have enough money!`);
        console.log(`You need ${difference.toFixed(2)} leva!`);
    }else {
        console.log(`You bought ${countProduct} products for ${allSum.toFixed(2)} leva.`);
    }
}

touristShop(["153.20",
"Backpack",
"25.20",
"Shoes",
"54",
"Sunglasses",
"30",
"Stop"])



