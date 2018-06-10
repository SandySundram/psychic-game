var wins = 0;
var losses = 0;
var guesses = 10;
var guessSoFar;
var secretLetter = randomLetter();
console.log(secretLetter + " out loop");


document.getElementById("guessesLeft").innerHTML = "Guesses Left: 10";

function psychic(userInput){
    // var guesses;
    var key = userInput.key;
    key = key.toLowerCase();
    document.getElementById("guessSoFar").innerHTML += key+" ";
    document.querySelector("#wins").style.color = "";
    document.querySelector("#losses").style.color = "";
    // document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guesses;
    
    if(key != secretLetter){
        guesses = guesses - 1;
        document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guesses;
        if(guesses == 0){
            losses++;
            guesses = 10;
            document.getElementById("losses").innerHTML = "Losses: " + losses;
            document.getElementById("guessesLeft").innerHTML = "Guesses Left: 10";
            document.getElementById("guessSoFar").innerHTML = "Your Guesses so far: ";
            secretLetter = randomLetter();
            document.querySelector("#losses").style.color = "red";
            setTimeout(function(){document.querySelector("#losses").style.color = ""},1000);
            console.log(secretLetter + " in loop");
        }
    } else{
        wins++;
        guesses = 10;
        document.getElementById("guessesLeft").innerHTML = "Guesses Left: 10";
        document.getElementById("guessSoFar").innerHTML = "Your Guesses so far: ";
        document.getElementById("wins").innerHTML = "Wins :" + wins;
        secretLetter = randomLetter();
        document.querySelector("#wins").style.color = "#0DFF3B";
        setTimeout(function(){document.querySelector("#wins").style.color = ""},1000);
        console.log(secretLetter + " in loop");

    }
    

}
//Call psychic function when key is released
document.onkeyup = psychic;

//Function to generate random letter
function randomLetter(){
    var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    //Math.random returns a number between 0 and 1
    //Math.floor rounds number down so that we have no decimals
    return letters[Math.floor(Math.random() * 26)];

}