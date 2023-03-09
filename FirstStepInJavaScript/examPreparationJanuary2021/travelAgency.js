function travelAgency(input){
    let townName = input[0];
    let packageType = input[1];
    let vipDiscount = input[2];
    let days = Number(input[3]);
    let allPrice = 0;

    if (days > 7){
        days--;
    }

    if (days < 1){
        console.log(`Days must be positive number!`);
        return
    }

    if (townName === "Bansko" || townName === "Borovets"){
        if (packageType === "withEquipment" && vipDiscount === "yes"){
            allPrice = (days * 100) * 0.90;
        } else if (packageType === "withEquipment" && vipDiscount === "no"){
            allPrice = days * 100;
        } else if (packageType === "noEquipment" && vipDiscount === "yes"){
            allPrice = (days * 80) * 0.95;
        } else if (packageType === "noEquipment" && vipDiscount === "no"){
            allPrice = days * 80;
        } else{
            console.log(`Invalid input!`);
            return
        }
    } else if (townName === "Varna" || townName === "Burgas"){
        if (packageType === "withBreakfast" && vipDiscount === "yes"){
            allPrice = (days * 130) * 0.88;
        } else if (packageType === "withBreakfast" && vipDiscount === "no"){
            allPrice = days * 130;
        } else if (packageType === "noBreakfast" && vipDiscount === "yes"){
            allPrice = (days * 100) * 0.93;
        } else if (packageType === "noBreakfast" && vipDiscount === "no"){
            allPrice = days * 100;
        } else {
            console.log(`Invalid input!`);
            return
        }
    
    } else {
        console.log(`Invalid input!`);
        return

    }
    console.log(`The price is ${allPrice.toFixed(2)}lv! Have a nice time!`);
    
    
}
travelAgency(["Gabrovo",
"noBreakfast",
"no",
"3"])






