// •	На първи ред - броят на котките - цяло число в интервала [1..100]
// •	На всеки следващ ред за всяка котка - Х грама храна - реално число в интервала [100.00..400.00]


function catFood(input){
    let index = 0;
    let numberOfCats = Number(input[index]);
    index++;

    let smallCat = 0;
    let bigCat = 0;
    let giantCat = 0;

    let allFood = 0;

    for (let i = 0; i < numberOfCats; i++){
        let current_food = Number(input[index]);
        index++;

        allFood += current_food;

        if (current_food >= 100 && current_food < 200){
            smallCat++;
        } else if (current_food < 300){
            bigCat++;
        } else if (current_food < 400){
            giantCat++;
        }

    }
    console.log(`Group 1: ${smallCat} cats.`);
    console.log(`Group 2: ${bigCat} cats.`);
    console.log(`Group 3: ${giantCat} cats.`);
    let foodInKilo = allFood / 1000;
    let priceFoodPerDay = foodInKilo * 12.45;
    console.log(`Price for food per day: ${priceFoodPerDay.toFixed(2)} lv.`);
}
catFood(["7",
"100",
"200",
"342",
"300",
"234",
"123",
"212"])


