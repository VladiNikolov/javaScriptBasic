function oscars(input){
    let nameActor = input[0];
    let points = Number(input[1]);
    let numberOfAssessors = Number(input[2]);
    let condition = false

    for (let i = 3; i < input.length; i += 2){
        let nameAssessors = input[i];
        let pointsAssessors = Number(input[i + 1])

        let allPointAssessors = (nameAssessors.length * pointsAssessors) / 2
        points += allPointAssessors
       
        if (points > 1250.5){
            condition = true;
            break;
    }
        }
    if (condition === true){
        console.log(`Congratulations, ${nameActor} got a nominee for leading role with ${points.toFixed(1)}!`);
    } else {
        neededPoints = 1250.5 - points
        console.log(`Sorry, ${nameActor} you need ${neededPoints.toFixed(1)} more!`);
    }
}

oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])



