function harvest(input){
    let vineyard = Number(input[0]);
    let grapes = Number(input[1]);
    let neededWine = Number(input[2]);
    let countWorkers = Number(input[3]);

    let allGrapesForWine = (vineyard * grapes) * 0.40;
    let currentWine = allGrapesForWine / 2.5;
    let difference = Math.abs(currentWine - neededWine)

    if (currentWine < neededWine){
        console.log(`It will be a tough winter! More ${Math.floor(difference)} liters wine needed.`);
    } else {
        let wineBetweenWorkers = difference / countWorkers
        console.log(`Good harvest this year! Total wine: ${Math.floor(currentWine)} liters.`);
        console.log(`${Math.ceil(difference)} liters left -> ${Math.ceil(wineBetweenWorkers)} liters per person.`);
    }
}
harvest(["1020", "1.5", "425", "4"])