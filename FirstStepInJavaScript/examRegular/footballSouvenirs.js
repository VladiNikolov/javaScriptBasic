// •	Първият ред – отбор – текст с възможности: "Argentina", "Brazil", "Croatia", "Denmark"
// •	Вторият ред – вид сувенири – текст с възможности: "flags", "caps", "posters", "stickers" 
// •	Третият ред – брой закупени сувенири – цяло число в интервала [1…200]


function footballSouvenirs(input){
    let country = input[0];
    let typeSouvenir = input[1];
    let countSouvenirs = Number(input[2]);

    let result = 0

    if (country === "Argentina"){
        if (typeSouvenir === "flags"){
            result = countSouvenirs * 3.25;
        } else if (typeSouvenir === "caps"){
            result = countSouvenirs * 7.20;
        } else if (typeSouvenir === "posters"){
            result = countSouvenirs * 5.10;
        } else if (typeSouvenir === "stickers"){
            result = countSouvenirs * 1.25;
        } else {
            console.log(`Invalid stock!`);
            return;
        }
    } else if (country === "Brazil"){
        if (typeSouvenir === "flags"){
            result = countSouvenirs * 4.20;
        } else if (typeSouvenir === "caps"){
            result = countSouvenirs * 8.50;
        } else if (typeSouvenir === "posters"){
            result = countSouvenirs * 5.35;
        } else if (typeSouvenir === "stickers"){
            result = countSouvenirs * 1.20;
        } else {
            console.log(`Invalid stock!`);
            return;
        }
    } else if (country === "Croatia"){
        if (typeSouvenir === "flags"){
            result = countSouvenirs * 2.75;
        } else if (typeSouvenir === "caps"){
            result = countSouvenirs * 6.90;
        } else if (typeSouvenir === "posters"){
            result = countSouvenirs * 4.95;
        } else if (typeSouvenir === "stickers"){
            result = countSouvenirs * 1.10;
        } else {
            console.log(`Invalid stock!`);
            return;
        }
    } else if (country === "Denmark"){
        if (typeSouvenir === "flags"){
            result = countSouvenirs * 3.10;
        } else if (typeSouvenir === "caps"){
            result = countSouvenirs * 6.50;
        } else if (typeSouvenir === "posters"){
            result = countSouvenirs * 4.80;
        } else if (typeSouvenir === "stickers"){
            result = countSouvenirs * 0.90;
        } else {
            console.log(`Invalid stock!`);
            return;
        }
    } else {
        console.log(`Invalid country!`);
        return;
    }
    console.log(`Pepi bought ${countSouvenirs} ${typeSouvenir} of ${country} for ${result.toFixed(2)} lv.`);

}
footballSouvenirs(["Argentina",
"shirts",
"35"])




