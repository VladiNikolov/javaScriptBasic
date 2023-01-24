function invalidNumber(input){
    let num = Number(input[0]);
    let isValid = num >= 100 && num <= 200

    if (!isValid && num !== 0) {
        console.log("invalid");
    }
}
invalidNumber(["150"])