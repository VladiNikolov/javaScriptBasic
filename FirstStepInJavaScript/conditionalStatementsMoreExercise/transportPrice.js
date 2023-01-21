function transportPrice(input){
    let kilometers = Number(input[0]);
    let word = input[1];
    let cheapestTransport = 0 

    if (kilometers < 20 && word === 'day'){
        cheapestTransport += kilometers * 0.79 + 0.70;
    } else if (kilometers < 20 && word == "night"){
        cheapestTransport += kilometers * 0.90 + 0.70;
    }else if (kilometers >= 20 && kilometers < 100){
        cheapestTransport += kilometers * 0.09;
    }else if (kilometers >= 100){
        cheapestTransport += kilometers * 0.06;
    }
    console.log(cheapestTransport.toFixed(2));
}
transportPrice(["180", "night"])