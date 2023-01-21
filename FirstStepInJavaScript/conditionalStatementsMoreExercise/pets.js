function pets(input){
    let days = Number(input[0]);
    let food = Number(input[1]);
    let foodPerDayForDog = Number(input[2]);
    let foodPerDayForCat = Number(input[3]);
    let foodPerDayForTurtleGrams = Number(input[4]);

    let foodPerDayForTurtle = foodPerDayForTurtleGrams / 1000;
    
    let neededfoodDog = foodPerDayForDog * days;
    let neededFoodCat = foodPerDayForCat * days;
    let neededfoodTurtle = foodPerDayForTurtle * days;
    let totalNeededFood = neededfoodDog + neededFoodCat + neededfoodTurtle;

    let difference = Math.abs(food - totalNeededFood)
    if (food >= totalNeededFood){
        console.log(`${Math.floor(difference)} kilos of food left.`);
    } else{
        console.log(`${Math.ceil(difference)} more kilos of food are needed.`);
    }

}
pets(["2", "10", "1", "1", "1200"])