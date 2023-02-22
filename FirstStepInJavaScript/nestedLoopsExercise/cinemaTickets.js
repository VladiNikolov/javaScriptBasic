function cinemaTickets(input){
    let index = 0;
    let firstCommand = input[index];
    index++;

    let standartTicket = 0;
    let studentTicket = 0;
    let kidTicket = 0;

    while (firstCommand !== "Finish"){
        let nameMovie = firstCommand;

        let freeSpaces = Number(input[index]);
        index++;

        let secondCommand = input[index];
        index++;

        let spaceTaken = 0;

        while (secondCommand !== "End"){
            let typeMovie = secondCommand;

            if (typeMovie === "standard"){
                standartTicket++;
            } else if (typeMovie === "student"){
                studentTicket++;
            }else{
                kidTicket++;
            }
            spaceTaken++;

            if (freeSpaces === spaceTaken){
                break;
            }

            secondCommand = input[index];
            index++;

        }

        let percentFullHall = (spaceTaken / freeSpaces) * 100
        console.log(`${nameMovie} - ${percentFullHall.toFixed(2)}% full.`);

        firstCommand = input[index];
        index++;

    }

    let allTickets = standartTicket + studentTicket + kidTicket;
    console.log(`Total tickets: ${allTickets}`);

    let percentStudentTicket = (studentTicket / allTickets) * 100;
    console.log(`${percentStudentTicket.toFixed(2)}% student tickets.`);

    let percentStandardTicket = (standartTicket / allTickets) * 100;
    console.log(`${percentStandardTicket.toFixed(2)}% standard tickets.`);

    let percentKidTicket = (kidTicket / allTickets) * 100;
    console.log(`${percentKidTicket.toFixed(2)}% kids tickets.`);

}

cinemaTickets(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])
