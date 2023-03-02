// •	На първия ред - името на футболният фен – текст
// •	На втория ред - предвиденият бюджет  – реално число в диапазона [1.0… 100 000.0]
// •	На третия ред - брой бутилки бира – цяло число в диапазона [1… 100 000]
// •	На четвърти ред - брой пакети чипс – цяло число в диапазона [1… 100 000]


function beerAndChips(input){
    let nameFan = input[0];
    let budget = Number(input[1]);
    let bottleOfBeer = Number(input[2]);
    let chipsPackets = Number(input[3]);

    let allPriceForBeer = bottleOfBeer * 1.20;

    let pricePerOneChips = allPriceForBeer * 0.45
    let allPriceforChips = Math.ceil(chipsPackets * pricePerOneChips)
    let totalPrice = allPriceForBeer + allPriceforChips

    let diff = Math.abs(budget - totalPrice)

    if (budget >= totalPrice){
        console.log(`${nameFan} bought a snack and has ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`${nameFan} needs ${diff.toFixed(2)} more leva!`);
    }

}
beerAndChips(["Valentin",
"5",
"2",
"4"])


