// 1.	Необходимо количество найлон (в кв.м.) - цяло число в интервала [1... 100]
// 2.	Необходимо количество боя (в литри) - цяло число в интервала [1…100]
// 3.	Количество разредител (в литри) - цяло число в интервала [1…30]
// 4.	Часовете, за които майсторите ще свършат работата - цяло число в интервала [1…9]

// •	Предпазен найлон - 1.50 лв. за кв. метър
// •	Боя - 14.50 лв. за литър
// •	Разредител за боя - 5.00 лв. за литър



function repainting(input){
    let nylonQuantity = Number(input[0]) + 2;
    let paintQuantity = Number(input[1]);
    let thinnerQuantity = Number(input[2]);
    let hoursWorkers = Number(input[3]);

    let totalPaint = paintQuantity + (paintQuantity / 10)
    let nylonPrice = 1.5
    let paintPrice = 14.5
    let thinnerPrice = 5

    let totalPriceMaterial = (nylonPrice * nylonQuantity) + (paintPrice * totalPaint) + (thinnerPrice * thinnerQuantity) + 0.40
    let sumWorkersPerHours = (totalPriceMaterial * 0.30) * hoursWorkers
    let totalPrice = sumWorkersPerHours + totalPriceMaterial
    console.log(totalPrice)
}
repainting(["10", "11 ", "4", "8"])