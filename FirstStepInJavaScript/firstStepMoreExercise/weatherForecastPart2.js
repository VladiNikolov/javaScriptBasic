function weatherForecastPart2(input) {
    let degreese = Number(input[0]);

    if (degreese >= 26 && degreese <=35){
        console.log("Hot");
    } else if (degreese >= 20.1 && degreese <= 25.9){
        console.log("Warm");
    } else if (degreese >= 15.00 && degreese <= 20.00){
        console.log("Mild");
    } else if (degreese >= 12 && degreese <= 14.9){
        console.log("Cool");
    } else if (degreese >= 5.00 && degreese <= 11.9){
        console.log("Cold");
    } else {
        console.log("unknown")
    }
        
}
weatherForecastPart2(["8"])