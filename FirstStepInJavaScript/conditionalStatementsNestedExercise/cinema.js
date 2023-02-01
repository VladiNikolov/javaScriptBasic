function cinema(input){
    let type = input[0];
    let countRows = Number(input[1]);
    let countColumns = Number(input[2]);
    let sum = 0

    if (type === "Premiere"){
        sum = (countColumns * countRows * 12) 
    } else if (type === "Normal"){
        sum = (countColumns * countRows * 7.5) 
    } else if (type === "Discount"){
        sum = (countColumns * countRows * 5) 
    }
    console.log(`${sum.toFixed(2)} leva`);
}
cinema(["Premiere",
"10",
"12"])