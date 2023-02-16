function moving(input){
    index = 0;

    let length = Number(input[index]);
    index++;

    let width = Number(input[index]);
    index++;

    let height = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let totalVolume = length * width * height

    while (command !== "Done"){
        let boxes = Number(command)

        if (totalVolume - boxes < 0){
            console.log(`No more free space! You need ${Math.abs(totalVolume - boxes)} Cubic meters more.`);
            break;
        } else {
            totalVolume -= boxes
        }

        command = input[index];
        index++;
    }
    if (command === "Done"){
        console.log(`${totalVolume} Cubic meters left.`);
    } 
    
}
moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])

