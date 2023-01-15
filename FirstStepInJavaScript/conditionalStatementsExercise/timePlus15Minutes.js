function timePlus15Minutes(input){
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let totalMinutes = (hours * 60) + minutes + 15;

    let allHours = Math.floor(totalMinutes / 60)
    let allMinutes = totalMinutes % 60

    if (allHours === 24){
        allHours = 0;
    }

    
    if (allMinutes < 10){
        console.log(`${allHours}:0${allMinutes}`);
    } else{
        console.log(`${allHours}:${allMinutes}`);
    }

}
timePlus15Minutes(["0", "01"])

