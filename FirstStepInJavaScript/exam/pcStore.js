function pcStore(input){
    let priceProcessor = Number(input[0]);
    let priceVideoCard = Number(input[1]);
    let priceRamMemory = Number(input[2]);
    let countRamMemory = Number(input[3]);
    let percentDiscount = Number(input[4]);

    let priceProcesoirLv = priceProcessor * 1.57
    let priceVideoCardLv = priceVideoCard * 1.57
    let priceRamMemoryLV = priceRamMemory * 1.57

    
    let allRamMemory = priceRamMemoryLV * countRamMemory
    
    let processorAfretDiscount = priceProcesoirLv * percentDiscount
    let procesorSum = priceProcesoirLv - processorAfretDiscount
    
    let videoCardAfretDiscount = priceVideoCardLv * percentDiscount
    let videocardSum = priceVideoCardLv - videoCardAfretDiscount
    let totalPrice = allRamMemory + procesorSum + videocardSum

    console.log(`Money needed - ${totalPrice.toFixed(2)} leva.`);

}
pcStore(["200",
"100",
"80",
"1"
,"0.01"])



