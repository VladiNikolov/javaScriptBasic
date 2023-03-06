function easterEggs(input){
    let index = 0;
    let numberOfPaintedEggs = Number(input[index]);
    index++;

    let countRedEggs = 0;
    let countBlueEggs = 0;
    let countGreenEggs = 0;
    let countOrangeEggs = 0;
    let maxEggs = 0;
    let eggColor = "";

    for (i = 0; i < numberOfPaintedEggs; i++){
        let currentColor = input[index];
        index++;

        if (currentColor === "red"){
            countRedEggs++;
            if (countRedEggs > maxEggs){
                eggColor = "red";
                maxEggs = countRedEggs;
            }
        } else if (currentColor === "blue"){
            countBlueEggs++;
            if (countBlueEggs > maxEggs){
                eggColor = "blue";
                maxEggs = countBlueEggs
            }
        } else if (currentColor === "green"){
            countGreenEggs++;
            if (countGreenEggs > maxEggs){
                eggColor = "green";
                maxEggs = countGreenEggs;
            }
        } else if (currentColor === "orange"){
            countOrangeEggs++;
            if (countOrangeEggs > maxEggs){
                eggColor = "orange";
                maxEggs = countOrangeEggs
            }
        }
    }
    console.log(`Red eggs: ${countRedEggs}`);
    console.log(`Orange eggs: ${countOrangeEggs}`);
    console.log(`Blue eggs: ${countBlueEggs}`);
    console.log(`Green eggs: ${countGreenEggs}`);
    console.log(`Max eggs: ${maxEggs} -> ${eggColor}`);
}
easterEggs([7, "orange", "blue", "green", "green", "blue", "red", "green"])