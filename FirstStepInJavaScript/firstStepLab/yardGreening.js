function yardGreening(input){
    let sqMeters = Number(input[0])
    pricePerOneSqMeter = 7.61
    totalPrice = sqMeters * pricePerOneSqMeter
    totalDiscount = totalPrice * 0.18
    totalPriceWhitDiscount = totalPrice - totalDiscount
    console.log(`The final price is: ${totalPriceWhitDiscount} lv.`)
    console.log(`The discount is: ${totalDiscount} lv.`)
}
yardGreening(["550"])