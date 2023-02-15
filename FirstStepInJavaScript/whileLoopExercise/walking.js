function walking(input){
    let index = 0;
    let sumSteps = 0;

    while (sumSteps < 10000){
        
        let command = input[index];
        index++;

        if (command === "Going home"){
            let lastStep = Number(input[index]);
            index++;
            sumSteps += lastStep
            break;
        } else{
            sumSteps += Number(command)
        }
        
    }
    if (sumSteps >= 10000){
        console.log(`Goal reached! Good job!`);
        console.log(`${Math.abs(sumSteps - 10000)} steps over the goal!`);
    } else {
        console.log(`${Math.abs(sumSteps - 10000)} more steps to reach goal.`);
    }
    
}
walking(["1500",
"300",
"2500",
"3000",
"Going home",
"200"])




