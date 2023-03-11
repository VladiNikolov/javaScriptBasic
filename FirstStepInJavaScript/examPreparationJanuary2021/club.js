function club(input){
    let index = 0;
    let profit = Number(input[index]);
    index++;

    let cocktailName = input[index];
    index++;

    let numberOfCocktails = Number(input[index]);
    index++;

    let sum = 0;
    let isEnought = false;
    

    while (cocktailName !== "Party!"){
        let priceCocktail = 0

         if (sum >= profit){
            isEnought = true;
            break;
        }

        priceCocktail = cocktailName.length;
        let cuurrentSum = 0;
        cuurrentSum = priceCocktail * numberOfCocktails
        let remainder = cuurrentSum % 10;

        if (remainder % 2 === 0){
            sum += priceCocktail * numberOfCocktails
        } else {
            sum += (priceCocktail * numberOfCocktails) * 0.75
        }


        cocktailName = input[index];
        index++;

        numberOfCocktails = Number(input[index]);
        index++;


    }
    if (isEnought){
        console.log(`Target acquired.`);
    } else {
        let difference = Math.abs(profit - sum)
        console.log(`We need ${difference.toFixed(2)} leva more.`);
    }
    console.log(`Club income - ${sum.toFixed(2)} leva.`);

}
club(["100",
"Sidecar",
"7",
"Mojito",
"5",
"White Russian",
"10"])


