function easterCompetition(input){
    let index = 0;
    let numberOfCozunaks = Number(input[index]);
    index++;

    let allSum = 0;
    let nameWinner = '';

    for (let i = 0; i < numberOfCozunaks; i++){
        let nameBaker = input[index];
        index++;

        let score = Number(input[index]);
        index++

        let currentSum = 0;

        while (score !== "Stop"){
            score = Number(score)
            currentSum += score;
           
            score = input[index];
            index++
        }
        console.log(`${nameBaker} has ${currentSum} points.`);

        if (currentSum > allSum){
            console.log(`${nameBaker} is the new number 1!`);
            allSum = currentSum;
            nameWinner = nameBaker
        }
    }
    console.log(`${nameWinner} won competition with ${allSum} points!`);
}
easterCompetition(["2",
"Chef Angelov",
"9",
"9",
"9",
"Stop",
"Chef Rowe",
"10",
"10",
"10",
"10",
"Stop"])

