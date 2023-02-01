function onTimeForTheExam(input){
    let hourOfExamine = Number(input[0]);
    let minuteOfExamine = Number(input[1]);
    let hourOfArriving = Number(input[2]);
    let minuteOfArriving = Number(input[3]);

    let timeOfExamine = hourOfExamine * 60 + minuteOfExamine
    let timeOfArriving = hourOfArriving * 60 + minuteOfArriving

    if (timeOfExamine < timeOfArriving){
        console.log("Late");
    } else if (timeOfArriving >= timeOfExamine - 30 && timeOfArriving <= timeOfExamine){
        console.log("On time");
    } else {
        console.log("Early");
    }

    let difference = Math.abs(timeOfArriving - timeOfExamine)
    let hours = Math.trunc(difference / 60)
    let minutes = difference % 60

    if (timeOfArriving > timeOfExamine - 60 && timeOfArriving < timeOfExamine){
        console.log(`${minutes} minutes before the start`);
    } else if (timeOfArriving <= timeOfExamine - 60){
        if (minutes <= 9){
            console.log(`${hours}:0${minutes} hours before the start`)
        } else {
            console.log(`${hours}:${minutes} hours before the start`)
        }
        
    } else if (timeOfArriving > timeOfExamine && timeOfArriving < timeOfExamine + 60){
        console.log(`${minutes} minutes after the start`);
    } else if (timeOfArriving >= timeOfExamine + 60){
        if (minutes <= 9){
            console.log(`${hours}:0${minutes} hours after the start`);
        } else {
            console.log(`${hours}:${minutes} hours after the start`);
        }
        
    }
}
onTimeForTheExam(["16",
"00",
"15",
"00"])





