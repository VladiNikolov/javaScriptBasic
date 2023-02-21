function specialNumbers(input){
    let number = Number(input[0]);
    let result = "";

    for (let start = 1111; start <= 9999; start++){
        let startToString = String(start);
        let isSpecial = true;

        for (let index = 0; index < startToString.length; index++){
            if(number % Number(startToString[index]) !== 0){
                isSpecial = false;
                break;
            }
        }
        if (isSpecial){
            result += start + " "
        }    
    }
    console.log(result);

}
specialNumbers(["3"])