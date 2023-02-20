function trainTheTrainers(input){
    let index = 0;
    let numberJury = Number(input[index]);
    index++;

    let command = input[index];
    index++;
    let countPresentation = 0;
    let allsumGrades = 0;

    while (command !== "Finish"){
        let namePresentation = command;
        let sumCurrentGrade = 0;

        for (let x = 0; x < numberJury; x++){
            let current_grade = Number(input[index]);
            index++;
            countPresentation++;
            allsumGrades += current_grade
            sumCurrentGrade += current_grade;
        }
        console.log(`${namePresentation} - ${(sumCurrentGrade/numberJury).toFixed(2)}.`);

        command = input[index];
        index++;
    }
    console.log(`Student's final assessment is ${(allsumGrades/countPresentation).toFixed(2)}.`);
}
trainTheTrainers(["3",
"Arrays",
"4.53",
"5.23",
"5.00",
"Lists",
"5.83",
"6.00",
"5.42",
"Finish"])

