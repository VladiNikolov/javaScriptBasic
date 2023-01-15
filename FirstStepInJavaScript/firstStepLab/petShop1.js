function petShop(input){
    countPackDogFood = (input[0]);
    countPackCatFood = (input[1]);
    totalPrice = (countPackDogFood * 2.5) + (countPackCatFood * 4);
    console.log(`${totalPrice} lv.`);
}
petShop(["5 ",
"4 "])
