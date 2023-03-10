function fitnesCenter(input){
    let index = 0;
    let numberClients = Number(input[index]);
    index++;

    let countBack = 0;
    let countChest = 0;
    let countLegs = 0;
    let countAbs = 0;
    let countProteinBar = 0;
    let countproteinShake = 0;
    

    for (i = 0; i < numberClients; i++){
        activityInGum = input[index];
        index++;

        if (activityInGum === "Protein bar"){
                countProteinBar++;
        } else if (activityInGum === "Protein shake"){
                countproteinShake++;
        }else if (activityInGum === "Back"){
            countBack++;
        } else if (activityInGum === "Chest"){
            countChest++;
        } else if (activityInGum === "Legs"){
            countLegs++;
        } else if (activityInGum === "Abs"){
            countAbs++;
        } 

    }
    let allPeopleTrening = countAbs + countBack + countChest + countLegs
    let allPeopleProdyct = countProteinBar + countproteinShake
    console.log(`${countBack} - back`);
    console.log(`${countChest} - chest`);
    console.log(`${countLegs} - legs`);
    console.log(`${countAbs} - abs`);
    console.log(`${countproteinShake} - protein shake`);
    console.log(`${countProteinBar} - protein bar`);
    console.log(`${((allPeopleTrening / numberClients) * 100).toFixed(2)}% - work out`);
    console.log(`${((allPeopleProdyct / numberClients) * 100).toFixed(2)}% - protein`);
}

fitnesCenter(["10",
"Back",
"Chest",
"Legs",
"Abs",
"Protein shake",
"Protein bar",
"Protein shake",
"Protein bar",
"Legs",
"Abs"])


