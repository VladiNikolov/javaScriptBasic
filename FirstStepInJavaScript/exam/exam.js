function exam(input){
    let index = 0;
    let numberStudents = Number(input[index]);
    index++;

    let countExcellent = 0;
    let countVeryGoog = 0;
    let countGood = 0;
    let countMiddle = 0;
    let sumAllGrades = 0;

    for (i = 0; i < numberStudents; i++){
        let currentStudentGrade = Number(input[index])
        index++;
        sumAllGrades += currentStudentGrade

        if (currentStudentGrade >= 2 && currentStudentGrade <= 2.99){
            countMiddle ++;
        } else if (currentStudentGrade <= 3.99){
            countGood++;
        } else if (currentStudentGrade <= 4.99){
            countVeryGoog++;
        } else if (currentStudentGrade >= 5.00){
            countExcellent++;
        }

    }
    let prcentExcelent = (countExcellent / numberStudents) *100;
    console.log(`Top students: ${prcentExcelent.toFixed(2)}%`)
    let prcentVeryGood = (countVeryGoog / numberStudents) * 100; 
    console.log(`Between 4.00 and 4.99: ${prcentVeryGood.toFixed(2)}%`);
    let prcentGood = (countGood / numberStudents) * 100;
    console.log(`Between 3.00 and 3.99: ${prcentGood.toFixed(2)}%`);
    let prcentFail = (countMiddle / numberStudents) * 100; 
    console.log(`Fail: ${prcentFail.toFixed(2)}%`);
    let avg = (sumAllGrades / numberStudents);
    console.log(`Average: ${avg.toFixed(2)}`);
}
exam(["6",
"2",
"3",
"4",
"5",
"6",
"2.2"])
