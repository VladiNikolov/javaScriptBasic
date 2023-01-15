function worldSwimmingRecord(input){
    let worldRecordTime = Number(input[0]);
    let distanceMeters = Number(input[1]);
    let timePerOneMeter = Number(input[2]);

    let timeSwimingDistance = distanceMeters * timePerOneMeter
    let countPunishment = Math.floor(distanceMeters / 15)

    let ivansTime = timeSwimingDistance + (countPunishment * 12.5)

    if (ivansTime < worldRecordTime){
        console.log(`Yes, he succeeded! The new world record is ${ivansTime.toFixed(2)} seconds.`);
    } else{
        let difference = Math.abs(ivansTime - worldRecordTime)
        console.log(`No, he failed! He was ${difference.toFixed(2)} seconds slower.`);
    }
     
}
worldSwimmingRecord(["55555.67",
"3017",
"5.03"])

