function speedInfo(input){
    let number = Number(input[0]);
    let result = ""

    if (number <= 10){
        result = "slow";
    } else if (number <= 50){
        result = "average";
    } else if (number <= 150){
        result = "fast";
    } else if (number <= 1000){
        result = "ultra fast"
    } else{
        result = "extremely fast"
    }
    console.log(result)

}
speedInfo(["160"])