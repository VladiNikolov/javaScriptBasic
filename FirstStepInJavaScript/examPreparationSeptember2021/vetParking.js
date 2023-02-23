function vetParking(input){
    let index = 0;
    let days = Number(input[index]);
    index++;

    let numberOfHours = Number(input[index]);
    index++;

    let sum = 0;

    for(let day = 1; day < days + 1; day++){
        let currentSum = 0;
        


        for (let hour = 1; hour < numberOfHours + 1; hour++){
            
            if (day % 2 == 0 && hour % 2 != 0){
                currentSum += 2.50;
            } else if (day % 2 != 0 && hour % 2 == 0){
                currentSum += 1.25;
            } else {
                currentSum += 1;
            }


        }
        console.log(`Day: ${day} - ${currentSum.toFixed(2)} leva`);
        sum += currentSum
    }
    console.log(`Total: ${sum.toFixed(2)} leva`);

}
vetParking(["5",
"2"])

