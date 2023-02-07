function trekingMania(input){
    let numberOfGroups = Number(input[0]);
    
    let musala = 0
    let monblan = 0
    let kilimanjaro = 0
    let k2 = 0
    let everest = 0

    for (let i = 0; i < numberOfGroups; i++){
        let peopleInGroup = Number(input[i + 1]);

        if (peopleInGroup <= 5){
            musala += peopleInGroup
        } else if (peopleInGroup <= 12){
            monblan += peopleInGroup
        } else if (peopleInGroup <= 25){
            kilimanjaro += peopleInGroup
        } else if (peopleInGroup <= 40){
            k2 += peopleInGroup
        } else if (peopleInGroup >= 41){
            everest += peopleInGroup
        }

    }
    let allPeople = musala + monblan + kilimanjaro + k2 + everest
    console.log(`${((musala / allPeople) * 100).toFixed(2)}%`);
    console.log(`${((monblan / allPeople) * 100).toFixed(2)}%`);
    console.log(`${((kilimanjaro / allPeople) * 100).toFixed(2)}%`);
    console.log(`${((k2 / allPeople) * 100).toFixed(2)}%`);
    console.log(`${((everest / allPeople) * 100).toFixed(2)}%`);
}
trekingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])
