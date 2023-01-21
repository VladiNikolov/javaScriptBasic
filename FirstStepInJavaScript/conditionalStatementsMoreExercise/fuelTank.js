function fuelTank(input){
    let typeFuel = input[0];
    let litersFuel = input[1];

    if (litersFuel >= 25){
        if (typeFuel === "Gas" || typeFuel === "Diesel" || typeFuel === "Gasoline") {
            console.log(`You have enough ${typeFuel.toLowerCase()}.`);
        }else{
            console.log(`Invalid fuel!`);
        }
    } else if (litersFuel < 25){
        if (typeFuel === "Gas" || typeFuel === "Diesel" || typeFuel === "Gasoline") {
            console.log(`Fill your tank with ${typeFuel.toLowerCase()}!`);
        } else{
            console.log(`Invalid fuel!`);
        }
    } 

}
fuelTank(["Diesel", "20"])