function fruitShop(input){
    let fruit = input[0];
    let day = input[1];
    let quantity = input[2];
    let sum = 0

    // if (fruit !== "banana" || fruit !== "apple" || fruit !== "orange" || fruit !== "grapefruit" || fruit !== "kiwi" || fruit !== "pineapple" || 
    // fruit !== "grapes" ||day !== "Monday" || day !== "Tuesday" || day !== "Wednesday" || day !== "Thursday" || day !== "Friday" || day !== "Saturday" || day !== "Sanday"){
    //     console.log("error");
    // }
    if (fruit === "banana"){
        if (day === "Saturday" || day === "Sunday"){
            console.log((quantity * 2.70).toFixed(2));
        }else if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
            console.log((quantity * 2.50).toFixed(2));
        } else {
            console.log("error");
        }
    } else if (fruit === "apple"){
        if (day === "Saturday" || day === "Sunday"){
            console.log((quantity * 1.25).toFixed(2));
        } else if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
            console.log((quantity * 1.20).toFixed(2));
        } else {
            console.log("error");
        }
    } else if (fruit === "orange"){
        if (day === "Saturday" || day === "Sunday"){
            console.log((quantity * 0.90).toFixed(2));
        } else if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
            console.log((quantity * 0.85).toFixed(2));
        } else {
            console.log("error");
        }
    } else if (fruit === "grapefruit"){
        if (day === "Saturday" || day === "Sunday"){
            console.log((quantity * 1.60).toFixed(2));
        } else if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
            console.log((quantity * 1.45).toFixed(2));
        } else {
            console.log("error");
        }
    } else if (fruit === "kiwi"){
        if (day === "Saturday" || day === "Sunday"){
            console.log((quantity * 3.00).toFixed(2));
        } else if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
            console.log((quantity * 2.70).toFixed(2));
        } else {
            console.log("error");
        }
    } else if (fruit === "pineapple"){
        if (day === "Saturday" || day == "Sunday"){
            console.log((quantity * 5.60).toFixed(2));
        } else if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
            console.log((quantity * 5.50).toFixed(2));
        } else {
            console.log("error");
        }
    } else if (fruit === "grapes"){
        if (day === "Saturday" || day == "Sunday"){
            console.log((quantity * 4.20).toFixed(2));
        } else if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
            console.log((quantity * 3.85).toFixed(2));
        } else {
            console.log("error")
        }
    } else {
        console.log("error");
    }
    // console.log(sum.toFixed(2));
}
fruitShop(["apple",
"Tuesday",
"2"])


