function circleAreaAndPerimeter(input) {
    let radius = Number(input[0]);

    let areaCircle = Math.PI * radius * radius

    let perimeterCircle = 2 * Math.PI * radius

    console.log(areaCircle.toFixed(2))
    console.log(perimeterCircle.toFixed(2))
}
circleAreaAndPerimeter(["3"])