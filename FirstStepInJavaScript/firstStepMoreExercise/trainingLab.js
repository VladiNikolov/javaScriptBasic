function traningLab(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);

    let lengthInCentimeter = length * 100
    let widthInCentimeter = width * 100


    let widthWithoutCorridor = widthInCentimeter - 100

    let widthWorkingPlase = 70
    let lengthWorkingPlase = 120

    let countWidth = Math.floor(widthWithoutCorridor / widthWorkingPlase)
    let countLenht = Math.floor(lengthInCentimeter / lengthWorkingPlase)
    let totalWorkingPlase = (countLenht * countWidth) - 3

    console.log(totalWorkingPlase)
}
traningLab(["15", "8.9"])