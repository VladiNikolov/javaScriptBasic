function readText1(input){
    let index = 0
    while (true){
        let text = input[index];
        index++;
        if (text === "Stop"){
            break;
        }
        console.log(text);

    }
}
readText1(["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"])
