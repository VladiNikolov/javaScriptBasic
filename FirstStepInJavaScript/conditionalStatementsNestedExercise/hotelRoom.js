function hotelRoom(input){
    let month = input[0];
    let numberSleeps = Number(input[1]);
    let allPriceStudio = 0;
    let allPriceApartment = 0;

    if (month === "May" || month === "October"){
        allPriceStudio = numberSleeps * 50
        allPriceApartment = numberSleeps * 65
        if (numberSleeps > 7 && numberSleeps <= 14){
            allPriceStudio = (numberSleeps * 50) * 0.95
        } else if (numberSleeps > 14){
            allPriceStudio = (numberSleeps * 50) * 0.70
            allPriceApartment = (numberSleeps * 65) * 0.90
        }
    } else if (month === "June" || month === "September"){
        allPriceStudio = numberSleeps * 75.20
        allPriceApartment = numberSleeps * 68.70
        if (numberSleeps > 14){
            allPriceStudio = (numberSleeps * 75.20) * 0.80
            allPriceApartment = (numberSleeps * 68.70) * 0.90
        }
    } else if (month === "July" || month === "August"){
        allPriceStudio = numberSleeps * 76
        allPriceApartment = numberSleeps * 77
        if (numberSleeps > 14){
            allPriceApartment = (numberSleeps * 77) * 0.90 
        }
    }
    console.log(`Apartment: ${allPriceApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${allPriceStudio.toFixed(2)} lv.`);
}
hotelRoom(["August",
"20"])

