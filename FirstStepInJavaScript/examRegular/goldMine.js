// Първоначално от конзолата се прочита едно число – брой локации – цяло число в интервала [1.. 100]
// За всяка една локация се четат две числа, по едно на ред:
// 1.	На първия ред – очакван среден добив на ден злато – реално число в интервала [0.00.. 10000.00]
// 2.	На втория ред – брой дни, в който ще се копае на дадената локация – цяло число в интервала [1.. 30


function goldMine(input){
    index = 0;
    let locations = Number(input[index]);
    index++;

    for (let location = 0; location < locations; location++){

        let expectedAverageYieldPerDay = Number(input[index])
        index++

        let daysForDigging = Number(input[index]);
        index++;

        let avgGold = 0;

        for (day = 0; day < daysForDigging; day++){

            let currentDayGold = Number(input[index]);
            index++

            avgGold += currentDayGold

        }

        if (avgGold / daysForDigging >= expectedAverageYieldPerDay){
            console.log(`Good job! Average gold per day: ${(avgGold / daysForDigging).toFixed(2)}.`);
        } else {
            console.log(`You need ${(expectedAverageYieldPerDay - (avgGold / daysForDigging)).toFixed(2)} gold.`);
        }
    }
}
goldMine(["1",
"5",
"3",
"10",
"1",
"3"])

