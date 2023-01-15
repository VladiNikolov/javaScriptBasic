// •	Първи ред – Цена за килограм зеленчуци – реално число[0.00… 1000.00]
// •	Втори ред – Цена за килограм плодове – реално число[0.00… 1000.00]
// •	Трети ред – Общо килограми на зеленчуците – цяло число[0… 1000]
// •	Четвърти ред – Общо килограми на плодовете – цяло число[0… 1000]


function vegetableMarket(input) {
    let priceVegetable = Number(input[0]);
    let priceFruit = Number(input[1]);
    let quantityVegetable = Number(input[2]);
    let quantityFruit = Number(input[3]);

    let totalPrice = (priceVegetable * quantityVegetable) + (priceFruit * quantityFruit)
    let totalPriceEuro = totalPrice / 1.94

    console.log(totalPriceEuro.toFixed(2))
}
vegetableMarket(["0.194", "19.4", "10", "10"])