function petShop(input){
    let dogFoodPackage = Number(input[0]);
    let catFoodPackage = Number(input[1]);

    priceDogFood = 2.5;
    priceCatFood = 4;

    totalDogPriceFood = dogFoodPackage * priceDogFood
    totalCatPriceFood = catFoodPackage * priceCatFood
    totalResult = totalDogPriceFood + totalCatPriceFood
    console.log(`${totalResult} lv.`);
}
petShop(["13",
"9"]
)

