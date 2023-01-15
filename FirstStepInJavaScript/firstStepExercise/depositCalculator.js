function depositCalculator(input){
    let depositSum = Number(input[0]);
    let depositTerm = Number(input[1]);
    let percentPerYear = Number(input[2]);

    divident = (depositSum * percentPerYear) / 100;
    lihvaOneMonth = divident / 12;
    sum = depositSum + (lihvaOneMonth * depositTerm);
    console.log(sum);
}
depositCalculator(["2350",
"6 ",
"7 "]
)