function workingHours(input){
    let hours = Number(input[0]);
    let day = input[1];

    if (hours >= 10 && hours <= 18){
        if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday" || day === "Saturday"){
            console.log("open");
        } else {
            console.log("closed");
        }
    }else{
        console.log("closed");
    }
}
workingHours(["19",
"Friday"])
