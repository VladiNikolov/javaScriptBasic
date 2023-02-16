function oldBooks(input){
    let index = 0;
    let searchedBook = input[index];
    index++;

    let command = input[index];
    index++;

    let checkBooks = 0;

    while (command !== "No More Books"){

        if (command === searchedBook){
            console.log(`You checked ${checkBooks} books and found it.`)
            break;
        }
        checkBooks++;
        command = input[index];
        index++;

    }
    if (command === "No More Books"){
        console.log(`The book you search is not here!`);
        console.log(`You checked ${checkBooks} books.`);
    }

}
oldBooks(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])

