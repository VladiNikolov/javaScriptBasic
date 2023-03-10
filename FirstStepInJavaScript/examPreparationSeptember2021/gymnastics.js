function gymnastics(input){
    let country = input[0];
    let instrument = input[1];

    let totalScore = 0;

    if (country === "Russia"){
        if (instrument === "ribbon"){
            totalScore = 9.100 + 9.400;
        } else if (instrument === "hoop"){
            totalScore = 9.300 + 9.800;
        } else if (instrument === "rope"){
            totalScore = 9.600 + 9.000;
        }
    } else if (country === "Bulgaria"){
        if (instrument === "ribbon"){
            totalScore = 9.600 + 9.400;
        } else if (instrument === "hoop"){
            totalScore = 9.550 + 9.750;
        } else if (instrument === "rope"){
            totalScore = 9.500 + 9.400;
        }
    } else if (country === "Italy"){
        if (instrument === "ribbon"){
            totalScore = 9.200 + 9.500;
        } else if (instrument === "hoop"){
            totalScore = 9.450 + 9.350;
        } else if (instrument === "rope"){
            totalScore = 9.700 + 9.150;
        }
    }
    console.log(`The team of ${country} get ${totalScore.toFixed(3)} on ${instrument}.`);
    let result = 20 - totalScore
    let percentNeeded = (result / 20) * 100
    console.log(`${percentNeeded.toFixed(2)}%`);

}
gymnastics(["Russia", "rope"])
