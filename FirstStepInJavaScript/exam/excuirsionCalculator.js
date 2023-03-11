function excursionCalculator(input){
    let numberOfPeople = Number(input[0]);
    let season = input[1];

    let result = 0;

    if (season === "spring"){
        if (numberOfPeople <= 5){
            result = numberOfPeople * 50;
        } else {
            result = numberOfPeople * 48;
        } 
    }else if (season === "summer"){
        if (numberOfPeople <= 5){
            result = (numberOfPeople * 48.50) * 0.85;
        } else {
            result = (numberOfPeople * 45) * 0.85;
        }
    } else if (season === "autumn"){
        if (numberOfPeople <= 5){
            result = numberOfPeople * 60;
        } else {
            result = numberOfPeople * 49.50;
        }
    } else if (season === "winter"){
        if (numberOfPeople <= 5){
            result = (numberOfPeople * 86) * 1.08;
        }else{
            result = (numberOfPeople * 85) * 1.08;
        }
    }
    console.log(`${result.toFixed(2)} leva.`);
} 
excursionCalculator(["20",
"winter"])

