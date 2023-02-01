function journey(input){
    let budget = Number(input[0]);
    let season = input[1];
    let sum = 0
    let destination = ""
    let restIn = ""

    if (budget <= 100){
        destination = "Bulgaria"
        if (season === "summer"){
            restIn = "Camp"
            sum = budget * 0.70
        } else {
            restIn = "Hotel"
            sum = budget * 0.30
        }
    } else if (budget <= 1000){
        destination = "Balkans"
        if (season === "summer"){
            restIn = "Camp"
            sum = budget * 0.60
        } else {
            restIn = "Hotel"
            sum = budget * 0.20
        }
    } else if (budget > 1000){
        destination = "Europe"
        restIn = "Hotel"
        sum = budget * 0.10
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${restIn} - ${(budget - sum).toFixed(2)}`);

}
journey(["1500", "summer"])