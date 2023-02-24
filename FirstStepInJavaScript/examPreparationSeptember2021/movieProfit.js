function movieProfit(input){
    let nameMovie = input[0];
    let days = Number(input[1]);
    let numberTickets = Number(input[2]);
    let pricePerOneTicket = Number(input[3]);
    let percentForCinema = Number(input[4]);

    let sumAllTickets = numberTickets * pricePerOneTicket;
    let totalSumTuckets = sumAllTickets * days
    let discount = (totalSumTuckets * percentForCinema) / 100

    let totalPrice = totalSumTuckets - discount
    console.log(`The profit from the movie ${nameMovie} is ${totalPrice.toFixed(2)} lv.`);
}

movieProfit(["The Programmer", "20", "500", "7.50", "7"])