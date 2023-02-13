function password1(input){
    let index = 0
    let username = input[index];
    index++;

    let pass = input[index];
    index++;

    while (true){
        let tempPass = input[index];
        index++;
        if (tempPass === pass){
            break;
        }
    }
    console.log(`Welcome ${username}!`);

}
password1(["Nakov",
"1234",
"Pass",
"1324",
"1234"])
