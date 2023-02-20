function building(input){
    let floors = Number(input[0]);
    let rooms = Number(input[1]);

    for (let f = floors; f > 0; f--){
        let resultAsStr = "";
        for (let r = 0; r < rooms; r++){
            if (f === floors){
                resultAsStr += "L" + f + r + " ";
            } else if (f % 2 === 0){
                resultAsStr += "O" + f + r + " ";
            } else {
                resultAsStr += "A" + f + r + " ";
            }
        }
        console.log(resultAsStr);
    }
}
building(["6", "4"])