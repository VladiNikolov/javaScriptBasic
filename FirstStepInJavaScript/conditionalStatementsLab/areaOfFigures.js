function areaOfFigures(input){
    let typeOfFigure = input[0];
    let result = 0;

    if (typeOfFigure === "square"){
        let side = Number(input[1]);
        result = side * side;
    } else if (typeOfFigure === "rectangle"){
        let sideA = Number(input[1]);
        let sideB = Number(input[2]);
        result = sideA * sideB;
    } else if (typeOfFigure === "circle"){
        let radius = Number(input[1]);
        result = Math.PI * Math.pow(radius, 2);
    } else{
        let side = Number(input[1]);
        let height = Number(input[2]);
        result = side * height / 2;
    }
    console.log(result.toFixed(3))
}
areaOfFigures(["square", "5"])