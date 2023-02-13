function password(input){
    let index = 0
    let username = input[index];
    index++;

    let pass = input[index];
    index++;

    let current_pass = input[index];
    index++;

    while (current_pass !== pass){
        current_pass = input[index];
        index++;
    }
    console.log(`Welcome ${username}!`);
}
password(["Gosho",
"secret",
"secret"])

