function suppliesForSchool(input){
    let packPen = Number(input[0]);
    let packMarker = Number(input[1]);
    let litersDetergent = Number(input[2]);
    let percentDiscount = Number(input[3]);

    let pricePen = 5.8;
    let priceMarkers = 7.2;
    let priceDetergent = 1.2;

    let totalPrice = (packPen * pricePen) + (packMarker * priceMarkers) + (litersDetergent * priceDetergent);
    let discount = (totalPrice * percentDiscount) / 100;
    let priceWhitDiscount = totalPrice - discount;

    console.log(priceWhitDiscount);
}
suppliesForSchool(["2",
"3",
"4",
"25"]
)