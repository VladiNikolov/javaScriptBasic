function vacationBooksList(input){
    let numberPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let numberDays = Number(input[2]);

    totalReadTime = numberPages /
     pagesPerHour
    hoursPerDayReading = totalReadTime / numberDays
    console.log(hoursPerDayReading)
}
vacationBooksList(["212 ",
"20 ",
"2 "]
)