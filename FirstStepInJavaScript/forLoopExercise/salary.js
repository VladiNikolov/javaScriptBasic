function salary(input){
    let openTags = Number(input[0]);
    let salary = Number(input[1]);
    let condition = true;

    for(let i = 0; i < openTags; i++){
        let nameTags = input[i + 2];
        if (nameTags === "Facebook"){
            salary -= 150;
        } else if (nameTags === "Instagram"){
            salary -= 100;
        } else if (nameTags === "Reddit"){
            salary -= 50;
        }
        if (salary <= 0){
            condition = false;
            break;

        }
    } 
    if (condition === false){
        console.log(`You have lost your salary.`);
    } else {
        console.log(salary);
    }

}
salary(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"])


