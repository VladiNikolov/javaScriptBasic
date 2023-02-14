function minNumber(input){
    let index = 0;
    let command = input[index];

    let minNumber = Number.MAX_SAFE_INTEGER
    while (command !== "Stop"){
        if (Number(command) < minNumber){
            minNumber = Number(command)
        }
        command = input[index];
        index++;
    }
    console.log(minNumber);

}
minNumber(["100",
"99",
"80",
"70",
"Stop"])
