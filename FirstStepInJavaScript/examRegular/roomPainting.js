function roomPainting(input){
    let countPaintBoxes = Number(input[0]);
    let countRollTapets = Number(input[1]);
    let priceGloves = Number(input[2]);
    let priceBrush = Number(input[3]);

    let allMoneyForPaint = countPaintBoxes * 21.50
    let allMoneyForTapets = countRollTapets * 5.20

    let countNeededGloves = Math.ceil(countRollTapets * 0.35)
    let allMoneyForGloves = countNeededGloves * priceGloves

    let countNeededBrush =  Math.floor(countPaintBoxes * 0.48)
    let allMoneyForBrush = countNeededBrush * priceBrush

    let allPrice = allMoneyForPaint + allMoneyForBrush + allMoneyForGloves + allMoneyForTapets
    let delivery = allPrice / 15


    console.log(`This delivery will cost ${delivery.toFixed(2)} lv.`);
}
roomPainting(["21", "18", "5", "2.2"])