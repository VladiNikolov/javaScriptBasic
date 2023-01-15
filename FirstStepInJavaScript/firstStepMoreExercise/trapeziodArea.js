function trapeziodArea(input) {
    let sideA = Number(input[0]);
    let sideB = Number(input[1]);
    let height = Number(input[2]);

    let trapeziodArea = (sideA + sideB) * height / 2
    console.log(trapeziodArea.toFixed(2))
}
trapeziodArea(["8", "13", "7"])