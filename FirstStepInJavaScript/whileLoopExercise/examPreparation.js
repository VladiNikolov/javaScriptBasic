function examPreparation(input){
    let index = 0;
    let badScore = Number(input[index]);
    index++;

    let nameTask = input[index];
    index++;

    let grade = Number(input[index]);
    index++;

    let sumGrade = 0;
    let badReceivedScore = 0;
    let countGrades = 0;
    let lastNameTask = ''
    
    while (nameTask !== "Enough"){
        lastNameTask = nameTask
        
        if (grade <= 4){
            badReceivedScore++;
        }
        if (badReceivedScore === badScore){
            console.log(`You need a break, ${badReceivedScore} poor grades.`);
            break;
        }
        sumGrade += grade
        countGrades++;

        nameTask = input[index];
        index++;

        grade = Number(input[index]);
        index++;


    }
    if (nameTask === "Enough"){
        let avgScore = sumGrade / countGrades; 
        console.log(`Average score: ${avgScore.toFixed(2)}`);
        console.log(`Number of problems: ${countGrades}`);
        console.log(`Last problem: ${lastNameTask}`);
    }

}
examPreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])

