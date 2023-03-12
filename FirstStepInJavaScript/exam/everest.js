function everest(input){
    let index = 0;
    let command = input[index];
    index++;

    let currentMeters = 5364;
    let countDay = 1;
    let isFinish = false


    while (command !== "END"){
        

        if (command === "Yes"){
            countDay++;
        }

        if (countDay > 5){
            break;
        }

        let meters = Number(input[index]);
        index++

        currentMeters += meters

        if (currentMeters >= 8848){
            isFinish = true;
            break

        }
        
        command = input[index];
        index++
    }
    if (isFinish){
        console.log(`Goal reached for ${countDay} days!`);
    } else{
        console.log(`Failed!`);
        console.log(`${currentMeters}`);
    }

}
everest(["Yes",
"1000",
"Yes",
"945",
"No",
"1200",
"END"])











