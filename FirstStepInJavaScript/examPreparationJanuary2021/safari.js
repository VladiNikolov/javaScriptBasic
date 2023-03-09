function safari(input){
    let budget = Number(input[0]);
    let fuel = Number(input[1]);
    let dayOfWeek = input[2];

    let allMoney = (fuel * 2.10) + 100

    if (dayOfWeek === "Saturday"){
        allMoney = allMoney * 0.90
    } else if (dayOfWeek === "Sunday"){
        allMoney = allMoney * 0.80
    }
    let difference = Math.abs(budget - allMoney)
    if (budget >= allMoney){
        console.log(`Safari time! Money left: ${difference.toFixed(2)} lv. `);
    } else {
        console.log(`Not enough money! Money needed: ${difference.toFixed(2)} lv.`);
    }

}
safari(["120",
"30",
"Saturday"])


