function movieDay(input){
    let timeToPicture = Number(input[0]);
    let numberOfScenes = Number(input[1]);
    let timePerScenes = Number(input[2]);

    let preparation = timeToPicture * 0.15;
    let timeToAllScenes = numberOfScenes * timePerScenes;

    let allNeededTime = preparation + timeToAllScenes; 
    let diffrerence = Math.abs(timeToPicture - allNeededTime)

    if (allNeededTime < timeToPicture){
        console.log(`You managed to finish the movie on time! You have ${Math.round(diffrerence)} minutes left!`);
    } else {
        console.log(`Time is up! To complete the movie you need ${Math.round(diffrerence)} minutes.`);
    }
}
movieDay(["60", "15", "3"])