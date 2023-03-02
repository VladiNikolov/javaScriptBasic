function christmasGift(input){
    let index = 0;

    let command = input[index];
    index++

    let toys = 0;
    let sweaters = 0;

    let coutKids = 0;
    let countAdults = 0;

    while (command !== "Christmas"){
        let age = Number(command)

        if (age <= 16){
            toys++;
            coutKids++;
        } else {
            sweaters++;
            countAdults++;
        }

        command = input[index];
        index++

    }
    console.log(`Number of adults: ${countAdults}`);
    console.log(`Number of kids: ${coutKids}`);
    console.log(`Money for toys: ${toys * 5}`);
    console.log(`Money for sweaters: ${sweaters * 15}`);
    
}
christmasGift(["16",
"16",
"16",
"16",
"16",
"Christmas"])

