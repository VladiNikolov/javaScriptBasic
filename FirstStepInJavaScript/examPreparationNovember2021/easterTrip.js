function easterTrip(input){
    let destination = input[0];
    let date = input[1];
    let sleeps = Number(input[2]);

    let pricePerTrip = 0;

    if (destination === "France"){
        if (date === "21-23"){
            pricePerTrip = sleeps * 30; 
        } else if (date === "24-27"){
            pricePerTrip = sleeps * 35;
        } else if (date === "28-31"){
            pricePerTrip = sleeps * 40;
        }
    } else if (destination === "Italy"){
        if (date === "21-23"){
            pricePerTrip = sleeps * 28;
        } else if (date === "24-27"){
            pricePerTrip = sleeps * 32;
        } else if (date === "28-31"){
            pricePerTrip = sleeps * 39;
        }
    } else if (destination === "Germany"){
        if (date === "21-23"){
            pricePerTrip = sleeps * 32;
        } else if (date === "24-27"){
            pricePerTrip = sleeps * 37;
        } else if (date === "28-31"){
            pricePerTrip = sleeps * 43;
        }
    }
    console.log(`Easter trip to ${destination} : ${pricePerTrip.toFixed(2)} leva.`);
}
easterTrip(["Germany", "24-27", "5"])