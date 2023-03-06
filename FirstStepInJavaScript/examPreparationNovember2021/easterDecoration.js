function easterDecoration(input){
    let index = 0;
    let customers = Number(input[index]);
    index++;

    let allSum = 0;

    for (i = 0; i < customers; i++){
        
        let command = input[index];
        index++;

        let countProduct = 0;
        let currentSum = 0;

        while (command !== "Finish"){
            let productType = command;
            countProduct++;

            if (productType === "basket"){
                currentSum += 1.50;
            } else if (productType === "wreath"){
                currentSum += 3.80;
            } else if (productType === "chocolate bunny"){
                currentSum += 7;
            }

            command = input[index];
            index++;
        }
        if (countProduct % 2 === 0){
            allSum += currentSum * 0.80
            console.log(`You purchased ${countProduct} items for ${(currentSum * 0.80).toFixed(2)} leva.`);
        } else {
            allSum += currentSum
            console.log(`You purchased ${countProduct} items for ${currentSum.toFixed(2)} leva.`);
        }

    }
    let avg = (allSum / customers); 
    console.log(`Average bill per client is: ${avg.toFixed(2)} leva.`);

}
easterDecoration(["2", "basket", "wreath", "chocolate bunny", "Finish", "wreath", "chocolate bunny", "Finish"])