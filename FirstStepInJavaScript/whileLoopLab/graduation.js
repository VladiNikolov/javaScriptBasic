function graduation(input){
    let index = 0;
    let name = input[index];
    index++;

    let badGrade = 1;
    let sumGrades = 0;
    let condition = false;
    let countClass = 0;

    while (countClass < 12){
        let grade = Number(input[index])
        index++;
        countClass += 1
        if (grade < 4){
            badGrade++;
            if (badGrade == 2){
                condition = true;
                break;
            }
            continue;
        }
        sumGrades += grade
    }
    if (condition === true){
        console.log(`${name} has been excluded at ${countClass} grade`);
    } else {
        console.log(`${name} graduated. Average grade: ${(sumGrades / countClass).toFixed(2)}`);
    }

}
graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])



