function fuelTankPart2(input){
    let typeFuel = input[0];
    let quantity = Number(input[1]);
    let clubCard = input[2];

    let priceGas = 0.93;
    let priceGasoline = 2.22
    let priceDiesel = 2.33 
    result = 0

    if (clubCard === "Yes"){
        if (typeFuel === "Gas"){
            result += quantity * (priceGas - 0.08) 
        } else if (typeFuel === "Gasoline"){
            result += quantity * (priceGasoline - 0.18)
        } else if (typeFuel === "Diesel"){
            result += quantity * (priceDiesel - 0.12)
        }
    }else if (clubCard === "No"){
        if (typeFuel === "Gas"){
            result += quantity * priceGas
        }else if (typeFuel === "Gasoline"){
            result += quantity * priceGasoline
        } else if (typeFuel === "Diesel"){
            result += quantity * priceDiesel
        }
    }
    if (quantity >= 20 && quantity <= 25){
        result *= 0.92
    }else if (quantity > 25){
        result *= 0.90
    }
    console.log(`${result.toFixed(2)} lv.`);
}

fuelTankPart2(["Gasoline", "25", "No"])