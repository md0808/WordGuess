
// Global variables
var possibleWords =["clouds", "angels", "bergamot", "doves", "chocolate", "silk", "bathtubs",
"elvis", "stairs", "alpacas" ];
var randomSelection = "";
var lettersOfWord= [];
var numBlanks = 0;
var blanksAndSucesses = [];
var wrongLetters = [];
var wins = 0;
var losses = 0;
var remainingTries = 10;

var images = {
  "clouds": ".assets/images.clouds.img",
  "angels": ".assets/images.angels.img",
  "bergamot": ".assets/images.bergamot.img",
  "doves": ".assets/images.doves.img",
  "chocolate": ".assets/images.chocolate.img",
  "silk": ".assets/images.silk.img",
  "bathtubs": ".assets/images.bathtubs.img",
  "elvis":".assets/images.elvis.img",
  "stairs": ".assets/images.stairs.img",
  "alpacas": ".assets/images.alpacas.img",

}




//functions

function startGame() {
    randomSelection= possibleWords[Math.floor(Math.random()* possibleWords.length)];
    lettersOfWord = randomSelection.split("");
    numBlanks = lettersOfWord.length;

    console.log(randomSelection);
    console.log(lettersOfWord);
    console.log(numBlanks);


    blanksAndSucesses = [];
    wrongLetters =[];
    remainingTries = 10;

   for (var i=0; i<numBlanks; i++){
   blanksAndSucesses.push("_ ");
  }

// manipulates dom
  document.getElementById("blanks-and-words").innerHTML = blanksAndSucesses.join("  ");
  document.getElementById("numGuesses").innerHTML = remainingTries;
  document.getElementById("win").innerHTML = wins;
  document.getElementById("loss").innerHTML = losses;
   console.log(blanksAndSucesses);
  
}
function checkLetters(letter) {
      var isLetterInWord = false;
      for (var i=0; i<numBlanks; i++){
        if (randomSelection[i]== letter) {
          isLetterInWord = true;
        }
       }

    if (isLetterInWord) { 
      for (var i=0; i<numBlanks; i++) {
        if (randomSelection[i] == letter){
          blanksAndSucesses[i] = letter;
        }
      }
    }

    else {
      wrongLetters.push(letter);
      remainingTries--
    }

    console.log(blanksAndSucesses);
}

function roundComplete() {
    //updates html to show most recent information
    document.getElementById("numGuesses").innerHTML = remainingTries;
    document.getElementById("blanks-and-words").innerHTML = blanksAndSucesses.join (" ");
    document.getElementById("wrong-letters").innerHTML = wrongLetters.join ("  ");

 //check if user won
  if (lettersOfWord.toString() == blanksAndSucesses.toString() ){
      wins++;
      document.getElementById("word-appears").innerHTML =  randomSelection + ": You win! New word:";

      document.getElementById("win").innerHTML = wins;
      // document.getElementById("image-col").innerHTML = image.// same as randomSelection

      startGame();
    }
 // check if user lost
  else if (remainingTries ==0){
      losses++
      document.getElementById("loss").innerHTML = losses;
      document.getElementById("word-appears").innerHTML = ("You lose. Try again");
      startGame();
  }
 
  console.log("win count" + wins +  " | loss count: " + losses + " | guesses left:" + remainingTries);
}
    




//main process----------------------------


// initiates code the first time
startGame();


document.onkeyup = function(event) {
  var letterGuessed = String.fromCharCode(event.keyCode)
  .toLowerCase();
  checkLetters(letterGuessed);
  roundComplete();

  console.log ("I am a " + letterGuessed);

  }


