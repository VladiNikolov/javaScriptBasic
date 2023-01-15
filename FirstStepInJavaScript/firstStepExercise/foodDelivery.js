// •	Брой пилешки менюта – цяло число в интервала [0 … 99]
// •	Брой менюта с риба – цяло число в интервала [0 … 99]
// •	Брой вегетариански менюта – цяло число в интервала [0 … 99]

// •	Пилешко меню –  10.35 лв. 
// •	Меню с риба – 12.40 лв. 
// •	Вегетарианско меню  – 8.15 лв. 



function foodDelivery(input){
    let chikenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let veganMenu = Number(input[2]);

    let priceChikenMenu = 10.35;
    let priceFishMenu = 12.40;
    let priceVeganMenu = 8.15;
    let delivery = 2.50;

    let totalPriceOrder = (chikenMenu * priceChikenMenu) + (fishMenu * priceFishMenu) + (veganMenu * priceVeganMenu);
    let desert = totalPriceOrder * 0.20;
    let totalPrice = totalPriceOrder + desert + delivery;

    console.log(totalPrice);
}
foodDelivery(["2", "4", "3"])