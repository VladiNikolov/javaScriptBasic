function combinations(input){
    let combination = Number(input[0]);
    let countCombination = 0;

    for (x = 0; x <= combination; x++){
        for (y = 0; y <= combination; y++){
            for (z = 0; z <= combination; z++){
                if (x + y + z === combination){
                    countCombination += 1 
                }
            }
        }
    }
    console.log(countCombination);
}
combinations(["20"])