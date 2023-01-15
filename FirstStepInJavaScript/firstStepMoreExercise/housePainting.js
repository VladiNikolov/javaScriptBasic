// 1.	x – височината на къщата – реално число в интервала [2...100]
// 2.	y – дължината на страничната стена – реално число в интервала [2...100]
// 3.	h – височината на триъгълната стена на прокрива – реално число в интервала [2...100]


function housePainting(input){
    let heightHouse = Number(input[0]);
    let lengthHouse = Number(input[1]);
    let heightRoof = Number(input[2]);

    let frontRearWalls = (heightHouse * heightHouse * 2) - (1.2 * 2)
    let leftRightWalls = (heightHouse * lengthHouse * 2) - (1.5 * 1.5 * 2)
    let totalAreaWalls = frontRearWalls + leftRightWalls

    let frontRearRoof = ((heightRoof * heightHouse * 2) / 2)
    let leftRightRoof = heightHouse * lengthHouse * 2
    let totalAreaRoof = frontRearRoof + leftRightRoof

    let totalGreehPaint = totalAreaWalls / 3.4
    let totalRedPaint = totalAreaRoof / 4.3

    console.log(totalGreehPaint.toFixed(2))
    console.log(totalRedPaint.toFixed(2))

}
housePainting(["6", "10", "5.2"])