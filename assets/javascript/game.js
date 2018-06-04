var wins = 0;
var losses = 0;
var guesses = 10;
var guessSoFar;
var secretLetter = randomLetter();
// console.log(secretLetter + " out loop");



function psychic(userInput){
    // var guesses;
    var key = userInput.key;
    key = key.toLowerCase();
    document.getElementById("guessSoFar").innerHTML += key+" ";
    
    if(key != secretLetter){
        guesses = guesses - 1;
        document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guesses;
        if(guesses == 0){
            losses++;
            guesses = 10;
            document.getElementById("losses").innerHTML = "Losses: " + losses;
            document.getElementById("guessesLeft").innerHTML = "Guesses Left: ";
            document.getElementById("guessSoFar").innerHTML = "Your Guesses so far: ";
            secretLetter = randomLetter();
        }
    } else{
        wins++;
        guesses = 10;
        document.getElementById("guessesLeft").innerHTML = "Guesses Left: ";
        document.getElementById("guessSoFar").innerHTML = "Your Guesses so far: ";
        document.getElementById("wins").innerHTML = "Wins :" + wins;
        secretLetter = randomLetter();
        // console.log(secretLetter + " in loop");

    }
    

}

document.onkeyup = psychic;

function randomLetter(){
    var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    return letters[Math.floor(Math.random() * Math.floor(27))];

}