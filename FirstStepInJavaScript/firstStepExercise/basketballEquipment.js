// •	Баскетболни кецове – цената им е 40% по-малка от таксата за една година
// •	Баскетболен екип – цената му е 20% по-евтина от тази на кецовете
// •	Баскетболна топка – цената ѝ е 1 / 4 от цената на баскетболния екип
// •	Баскетболни аксесоари – цената им е 1 / 5 от цената на баскетболната топка


function basketballEquipment(imput){
    let annualFee = Number(imput[0]);

    let snickersBasketball = annualFee * 0.6
    let outfitBasketball = snickersBasketball * 0.80
    let ballBasketball = outfitBasketball * 0.25
    let accessoriesBasketball = ballBasketball * 0.20

    let totalPriceNeeded = annualFee + snickersBasketball + outfitBasketball + ballBasketball + accessoriesBasketball

    console.log(totalPriceNeeded)
}
basketballEquipment(["365"])