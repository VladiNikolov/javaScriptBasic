function smallShop(input){
    let product = input[0];
    let town = input[1];
    let quantity = input[2];
    let totalSum = 0

    if (town === "Sofia" && product === "coffee"){
        totalSum = quantity * 0.50;
    } else if (town === "Sofia" && product === "water"){
        totalSum = quantity * 0.80;
    } else if (town === "Sofia" && product === "beer"){
        totalSum = quantity * 1.20;
    } else if (town === "Sofia" && product === "sweets"){
        totalSum = quantity * 1.45;
    } else if (town === "Sofia" && product === "peanuts"){
        totalSum = quantity * 1.60;
    } else if (town === "Plovdiv" && product === "coffee"){
        totalSum = quantity * 0.40;
    } else if (town === "Plovdiv" && product === "water"){
        totalSum = quantity * 0.70;
    } else if (town === "Plovdiv" && product === "beer"){
        totalSum = quantity * 1.15;
    } else if (town === "Plovdiv" && product === "sweets"){
        totalSum = quantity * 1.30; 
    } else if (town === "Plovdiv" && product === "peanuts"){
        totalSum = quantity * 1.50;
    } else if (town === "Varna" && product === "coffee"){
        totalSum = quantity * 0.45;
    } else if (town === "Varna" && product === "water"){
        totalSum = quantity * 0.70;
    } else if (town === "Varna" && product === "beer"){
        totalSum = quantity * 1.10;
    } else if (town === "Varna" && product === "sweets"){
        totalSum = quantity * 1.35;
    } else if (town === "Varna" && product === "peanuts"){
        totalSum = quantity * 1.55
    }
    console.log(totalSum);
}
smallShop(["coffee", "Varna", "2"])