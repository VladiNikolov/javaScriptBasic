function numberPyramid(input){
    let number = Number(input[0])
    let count = 1;
    let isBigger = false;
    let printCurrentLine = "";

    for (let rows = 1; rows <= number; rows++){
        for (let cols = 1; cols <= rows; cols++){
            if (count > number){
                isBigger = true;
                break;
            }
            printCurrentLine += count + " ";
            count++; 
        }
        console.log(printCurrentLine);
        printCurrentLine = "";
        if (isBigger){
            break;
        }
    }
}
numberPyramid(["7"])