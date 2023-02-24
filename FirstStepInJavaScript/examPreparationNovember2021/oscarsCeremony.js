function oscarsCeremony(input){
    let hallRent = Number(input[0]);

    let statuetki = hallRent * 0.70
    let catering = statuetki * 0.85
    let music = catering / 2

    let result = hallRent + statuetki + catering + music
    console.log(result.toFixed(2));
}
oscarsCeremony(["3500"])