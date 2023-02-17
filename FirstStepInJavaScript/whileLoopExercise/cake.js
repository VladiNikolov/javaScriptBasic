function cake(input){
    let index = 0;

    let lengthCake = Number(input[index]);
    index++;

    let widthCake = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let allPieces = lengthCake * widthCake

    while (command !== "STOP"){
        let takenPieces = Number(command)

        if (allPieces - takenPieces < 0){
            console.log(`No more cake left! You need ${Math.abs(allPieces - takenPieces)} pieces more.`);
            break;
        } else{
            allPieces -= takenPieces
        }
        command = input[index];
        index++;

    }
    if (command === "STOP"){
        console.log(`${allPieces} pieces are left.`);

    }

}
cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"])


