// 1.	Дължина в см – цяло число в интервала [10 … 500]
// 2.	Широчина в см – цяло число в интервала [10 … 300]
// 3.	Височина в см – цяло число в интервала [10… 200]
// 4.	Процент  – реално число в интервала [0.000 … 100.000]


function fishTank(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]) / 100;

    let totalVolumeInSm = length * width * height
    let totalVolumeInLiter = totalVolumeInSm / 1000
    let freeVolume = totalVolumeInLiter - (totalVolumeInLiter * percent)

    console.log(freeVolume)
}
fishTank(["85", "75", "47", "17"])