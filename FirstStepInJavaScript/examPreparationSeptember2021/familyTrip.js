function familyTrip(input){
    let budget = Number(input[0]);
    let numberOfNights = Number(input[1]);
    let pricePerNight = Number(input[2]);
    let percent = Number(input[3]);

    let allPrice = 0;
    let additionalCosts = (budget * percent) / 100

    if (numberOfNights > 7){
        allPrice += (pricePerNight * numberOfNights) * 0.95;
    } else {
        allPrice += (pricePerNight * numberOfNights);
    }

    let totalSum = allPrice + additionalCosts
    let difference = Math.abs(budget - totalSum)

    if (budget >= totalSum){
        console.log(`Ivanovi will be left with ${difference.toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${difference.toFixed(2)} leva needed.`);
    }
}
// familyTrip(["800.50", "8", "100", "2"])
familyTrip(["500", "7", "66", "15"])
