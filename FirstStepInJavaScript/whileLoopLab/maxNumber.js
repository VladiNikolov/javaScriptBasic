function maxNumber(input){
    let index = 0;
    let maxNum = Number.MIN_SAFE_INTEGER

    while (true){
        let command = input[index];
        index++;
        if (command === "Stop"){
            break;
        }
        if (maxNum < Number(command)){
            maxNum = Number(command)
        }
    }
    console.log(maxNum);

}
maxNumber(["100",
"99",
"80",
"70",
"Stop"])
