function equalSumEvenOddPosition(input){
    let start = Number(input[0]);
    let end = Number(input[1]);
    let result = "";

    for (let currNum = start; currNum <= end; currNum++){
        let evenSum = 0;
        let oddSum = 0;
        let currNumAsString = String(currNum)

        for (let index = 0; index < currNumAsString.length; index++){
            let currDigit = Number(currNumAsString[index])

            let position = index + 1

            if (position % 2 === 0){
                evenSum += currDigit
            }else {
                oddSum += currDigit
            }
        }
        if (evenSum === oddSum){
            result += currNum + ' '
        }
    }
    console.log(result);
}
equalSumEvenOddPosition(["100000",
"100050"])
