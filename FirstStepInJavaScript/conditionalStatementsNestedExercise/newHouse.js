function newHouse(input){
    let typeFlower = input[0];
    let countFlower = Number(input[1]);
    let budget  = Number(input[2]);
    let sum = 0

    if (typeFlower === "Roses"){
        if (countFlower > 80){
            sum = (countFlower * 5) * 0.90
        }else {
            sum = countFlower * 5
        }
        
    } else if (typeFlower === "Dahlias"){
        if (countFlower > 90){
            sum = (countFlower * 3.80) * 0.85
        } else {
            sum = countFlower * 3.80
        }
    } else if (typeFlower === "Tulips"){
        if (countFlower > 80){
            sum = (countFlower * 2.80) * 0.85
        } else {
            sum = (countFlower * 2.80)
        }
    } else if (typeFlower === "Narcissus"){
        if (countFlower < 120){
            sum = (countFlower * 3) * 1.15
        } else {
            sum = countFlower * 3 
        }
    } else if (typeFlower === "Gladiolus"){
        if (countFlower < 80){
            sum = (countFlower * 2.50) * 1.2
        } else {
            sum = countFlower * 2.5
        }
    }
    let difference = Math.abs(budget - sum)
    if (budget >= sum){
        console.log(`Hey, you have a great garden with ${countFlower} ${typeFlower} and ${difference.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${difference.toFixed(2)} leva more.`);
    }
}
newHouse(["Tulips",
"88",
"260"])

