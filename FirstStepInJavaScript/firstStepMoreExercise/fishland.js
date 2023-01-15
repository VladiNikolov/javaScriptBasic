// •	Първи ред – цена на скумрията на килограм. Реално число в интервала [0.00…40.00]
// •	Втори ред – цена на цацата на килограм. Реално число в интервала [0.00…30.00]
// •	Трети ред – килограма паламуд. Реално число в интервала [0.00…50.00]
// •	Четвърти ред – килограма сафрид. Реално число в интервала [0.00… 70.00]
// •	Пети ред – килограма миди. Цяло число в интервала [0 ... 100]


function fishland(input) {
    let priceMackerel = Number(input[0]);
    let priceSprinkle = Number(input[1]);
    let quantityBonito = Number(input[2]);
    let quantitySafrid = Number(input[3]);
    let quantityMussels = Number(input[4]);

    let priceBonito = priceMackerel * 1.60;
    let priceSafrid = priceSprinkle * 1.80;
    let priceMussels = 7.50;

    let totalPriceNeeded = (priceBonito * quantityBonito) + (priceSafrid * quantitySafrid) + (priceMussels * quantityMussels)

    console.log(totalPriceNeeded.toFixed(2))
}
fishland(["6.90", "4.20", "1.5", "2.5", "1"])
