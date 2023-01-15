function lunchBreak(input){
    let movieName = input[0];
    let durationEpisode = Number(input[1]);
    let durationBreak = Number(input[2]);

    let timeLunch = (1 / 8) * durationBreak
    let timeRest = (1 / 4) * durationBreak

    let remainingTime = durationBreak - timeLunch - timeRest

    if (remainingTime >= durationEpisode){
        let leftTime = remainingTime - durationEpisode
        console.log(`You have enough time to watch ${movieName} and left with ${Math.ceil(leftTime)} minutes free time.`);
    } else{
        let neededTime = durationEpisode - remainingTime
        console.log(`You don't have enough time to watch ${movieName}, you need ${Math.ceil(neededTime)} more minutes.`);
    }


}
lunchBreak(["Teen Wolf",
"48",
"60"])

