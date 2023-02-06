function tennisRanklist(input){
    let turnament = Number(input[0]);
    let startScore = Number(input[1]);
    let score = 0
    let wins = 0

    for (let i = 0; i < turnament; i++){
        let stageInTournament = input[i + 2];
        if (stageInTournament === "W"){
            score += 2000;
            wins++;
        } else if (stageInTournament === "F"){
            score += 1200;
        } else if (stageInTournament === "SF"){
            score += 720
        }
    }
    let finalScore = startScore + score
    let averagePoints = score / turnament
    let persentWinsTournaments = (wins / turnament) * 100
    console.log(`Final points: ${finalScore}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${(persentWinsTournaments).toFixed(2)}%`);

}
tennisRanklist(["7",
"1200",
"SF",
"F",
"W",
"F",
"W",
"SF",
"W"])

