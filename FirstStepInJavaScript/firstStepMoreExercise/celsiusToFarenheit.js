function celsiusToFarenheit(input){
    let degreeseCelsius = Number(input[0]);

    let farenheitCelsius = degreeseCelsius * 1.8 + 32

    console.log(farenheitCelsius.toFixed(2))

}
celsiusToFarenheit(["25"])
