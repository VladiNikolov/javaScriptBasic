function projects(input){
    let name = input[0];
    let numberProjects = input[1];
    totalProjects = numberProjects * 3;
    result = `The architect ${name} will need ${totalProjects} hours to complete ${numberProjects} project/s.`
    console.log(result)
}
projects(["George ",
"4 "])
