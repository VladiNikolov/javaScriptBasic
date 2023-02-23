function movieRatings(input){
    let index = 0;
    let numberOfMovies = Number(input[index]);
    index++;

    let allSumRating = 0;

    let minRating = Number.MAX_SAFE_INTEGER;
    let movieMinRating = '';
    let maxRating = Number.MIN_SAFE_INTEGER;
    let movieMaxRating = '';

    for (i = 0; i < numberOfMovies; i++){
        let nameMovie = input[index];
        index++;

        let movieRating = Number(input[index])
        index++;

        if (movieRating > maxRating){
            maxRating = movieRating;
            movieMaxRating = nameMovie;

        } 
        if (movieRating < minRating){
            minRating = movieRating; 
            movieMinRating = nameMovie
        }
        allSumRating += movieRating 

    }
    console.log(`${movieMaxRating} is with highest rating: ${maxRating.toFixed(1)}`);
    console.log(`${movieMinRating} is with lowest rating: ${minRating.toFixed(1)}`);
    console.log(`Average rating: ${(allSumRating / numberOfMovies).toFixed(1)}`);
}
movieRatings(["3",
"Interstellar",
"8.5",
"Dangal",
"8.3",
"Green Book",
"8.2"])

