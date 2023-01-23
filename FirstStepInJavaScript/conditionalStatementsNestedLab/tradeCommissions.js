function tradeCommissions(input){
    let town = input[0];
    let sales = Number(input[1]);
    let commission = 0;

    if (town === "Sofia"){
        if (sales >= 0 && sales <= 500){
            commission = (sales * 5) / 100
            console.log(commission.toFixed(2));
        } else if (sales > 500 && sales <= 1000){
            commission = (sales * 7) / 100
            console.log(commission.toFixed(2));
        } else if (sales > 1000 && sales <= 10000){
            commission = (sales * 8) / 100
            console.log(commission.toFixed(2));
        } else if (sales > 10000){
            commission = (sales * 12) / 100
            console.log(commission.toFixed(2));
        } else {
            console.log("error");
        }
    } else if (town === "Varna"){
        if (sales >= 0 && sales <= 500){
            commission = (sales * 4.5) / 100
            console.log(commission.toFixed(2));
        } else if (sales > 500 && sales <= 1000){
            commission = (sales * 7.5) / 100
            console.log(commission.toFixed(2));
        } else if (sales > 1000 && sales <= 10000){
            commission = (sales * 10) / 100
            console.log(commission.toFixed(2));
        } else if (sales > 10000){
            commission = (sales * 13) / 100
            console.log(commission.toFixed(2));
        } else {
            console.log("error");
        }
    } else if (town === "Plovdiv"){
        if (sales >= 0 && sales <= 500){
            commission = (sales * 5.5) / 100
            console.log(commission.toFixed(2));
        } else if (sales > 500 && sales <= 1000){
            commission = (sales * 8) / 100
            console.log(commission.toFixed(2));
        } else if (sales > 1000 && sales <= 10000){
            commission = (sales * 12) / 100
            console.log(commission.toFixed(2));
        } else if (sales > 10000){
            commission = (sales * 14.5) / 100
            console.log(commission.toFixed(2));
        } else {
            console.log("error");
        }
    } else {
        console.log("error");
    }
}
tradeCommissions(["Sofia",
"1500"])
