function sumSeconds(input){
    let firstTime = Number(input[0]);
    let secondTime = Number(input[1]);
    let thirdTime = Number(input[2]);

    let totalTime = firstTime + secondTime + thirdTime;

    let minutes = Math.floor(totalTime / 60);
    let second = totalTime % 60;

    if (second < 10){
        console.log(`${minutes}:0${second}`);
    } else{
        console.log(`${minutes}:${second}`);
    }
}
sumSeconds(["35",
"45",
"44"])
