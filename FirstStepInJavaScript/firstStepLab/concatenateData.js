function concatenateData(input){
    let firstName = input[0];
    let secondName = input[1];
    let age = Number(input[2]);
    let town = input[3];
    result = "You are" + " " + firstName + " " + secondName + ", a " + age + "-years old person from " + town + ".";
    console.log(result);
}
concatenateData(["Vladimir", "Nikolov", "39", "Vidin"])