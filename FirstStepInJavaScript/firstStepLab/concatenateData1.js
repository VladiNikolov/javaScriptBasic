function concatenateData(input){
    let firstName = input[0];
    let secondName = input[1];
    let age = Number(input[2]);
    let town = input[3];
    concatenateResult = `You are ${firstName} ${secondName}, a ${age}-years old person from ${town}.`;
    console.log(concatenateResult);
}
concatenateData(["Vladimir", "Nikolov", "39", "Vidin"])