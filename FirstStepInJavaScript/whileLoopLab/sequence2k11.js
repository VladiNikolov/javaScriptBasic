function sequence2k11(input){
    let number = Number(input[0])

    let k = 1

    while (true){
        console.log(k);
        k = k * 2 + 1
        if (k > number){
            break;
        }
    }
}
sequence2k11(["31"])