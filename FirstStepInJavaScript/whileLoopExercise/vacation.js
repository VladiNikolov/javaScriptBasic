function vacation(input){
    let index= 0;
    let neededMoney = Number(input[index]);
    index++;

    let currentMoney = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let money = Number(input[index]);
    index++;

    let days = 0;
    let countSpend = 0;

    while (currentMoney < neededMoney){
        days++;
        if (command === "spend"){
            if (money > currentMoney){
                currentMoney = 0
            }else {
                currentMoney -= money;
            }
            countSpend++;
            
        } else {
            currentMoney += money;
            countSpend = 0;
        }
        if (countSpend === 5){
            console.log(`You can't save the money.`);
            console.log(`${days}`);
            return;
        }
        command = input[index];
        index++;

        money = Number(input[index]);
        index++;

    }
    console.log(`You saved the money for ${days} days.`);

}
vacation(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])







