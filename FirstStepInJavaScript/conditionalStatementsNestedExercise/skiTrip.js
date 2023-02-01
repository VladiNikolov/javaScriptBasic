function skiTrip(input){
    let days = Number(input[0]);
    let typeOfRoom = input[1];
    let rating = input[2];
    let night = days - 1
    let result = 0;

    if (typeOfRoom === "room for one person"){
        result = night * 18
    } else if (typeOfRoom === "apartment"){
        if (days < 10){
            result = (night * 25) * 0.70
        } else if (days <= 15){
            result = (night * 25) * 0.65
        } else if (days > 15){
            result = (night * 25) * 0.50
        }
    } else if (typeOfRoom === "president apartment"){
        if (days < 10){
            result = (night * 35) * 0.90
        } else if (days <= 15){
            result = (night * 35) * 0.85
        } else if (days > 15){
            result = (night * 35) * 0.80
        }
    }
    if (rating === "positive"){
        result = result + (result * 0.25)
        console.log(result.toFixed(2));
    } else if (rating === "negative"){
        result = result - (result * 0.10)
        console.log(result.toFixed(2));
    }
}
skiTrip(["30",
"president apartment",
"negative"])
