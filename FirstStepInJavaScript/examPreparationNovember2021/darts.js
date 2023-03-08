function darts(input){
    let index = 0;
    let playerName = input[index];
    index++;

    let field = input[index];
    index++;

    let points = Number(input[index]);
    index++;

    let startingPoints = 301;
    let successfulHits = 0;
    let notSuccessfulHits = 0;
    let isRetire = false;

    while (startingPoints > 0){

        if (field === "Retire"){
            isRetire = true;
            break;
        }

        if (field === "Single"){
            if (points > startingPoints){
                notSuccessfulHits++;
            } else {
                startingPoints = startingPoints - points;
                successfulHits++;
            }
        } else if (field === "Double"){
            if (points * 2 > startingPoints){
                notSuccessfulHits++;
            } else {
                startingPoints = startingPoints - (points * 2);
                successfulHits++;
            }
        } else if (field === "Triple"){
            if (points * 3 > startingPoints){
                notSuccessfulHits++;
            } else {
                startingPoints = startingPoints - (points * 3);
                successfulHits++;
            }
        }

        field = input[index];
        index++;

        points = Number(input[index]);
        index++;
    }
    if (isRetire){
        console.log(`${playerName} retired after ${notSuccessfulHits} unsuccessful shots.`);
    } else {
        console.log(`${playerName} won the leg with ${successfulHits} shots.`);
    }
   
}
// darts(["Michael van Gerwen", "Triple", "20", "Triple", "19", "Double", "10", "Single", "3", "Single", "1", "Triple", "20", "Triple", "20", "Double", "20"])
// darts(["Stephen Bunting", "Triple", "20", "Triple", "20", "Triple", "20", "Triple", "20", "Triple", "20", "Triple", "20", "Double", "7", "Single", "12", "Double", "1", "Single", "1"])
darts(["Rob Cross", "Triple", "20", "Triple", "20", "Triple", "20", "Triple", "20", "Double", "20", "Triple", "20", "Double", "5", "Triple", "10", "Double", "6", "Retire"])
