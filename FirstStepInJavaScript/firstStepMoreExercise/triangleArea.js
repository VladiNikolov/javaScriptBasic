function triangleArea(input) {
    let sideA = Number(input[0]);
    let height = Number(input[1]);

    let area = sideA * height / 2;

    console.log(area.toFixed(2))
}
triangleArea(["20", "30"])