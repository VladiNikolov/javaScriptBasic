function numberInRange1(input){
    let number = Number(input[0]);

    if (number < -100 || number > 100 || number === 0){
        console.log("No");
    } else {
        console.log("Yes");
    }
}
numberInRange1([-25])