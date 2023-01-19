function sleepyTomCat(input){
    let holidays = Number(input[0]);

    let playWhitCatWhenIsHolidays = holidays * 127;
    let playWhitoOherDays = (365 - holidays) * 63;
    let totalTime = playWhitCatWhenIsHolidays + playWhitoOherDays;

    let difference = Math.abs(totalTime - 30000);
    let hours = difference / 60;
    let minutes = difference % 60;
    if (totalTime > 30000){
        console.log(`Tom will run away`);
        console.log(`${Math.floor(hours)} hours and ${minutes} minutes more for play`);
    } else{
        console.log(`Tom sleeps well`);
        console.log(`${Math.floor(hours)} hours and ${minutes} minutes less for play`);
    }

}
sleepyTomCat(["113"])