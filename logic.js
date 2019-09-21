
// Global variables
var possibleWords =["clouds", "angels", "bergamot", "doves", "chocolate", "silk", "bathtubs",
"elvis", "stairway", "alpacas" ];
var randomSelection = "";
var lettersOfWord= [];
var numBlanks = 0;
var blanksAndSucesses = [];
var wrongLetters = [];
var wins = 0;
var losses = 0;
var remainingTries = 10;

// var heavenImages = {
//   "clouds": "img src='.assets/images/clouds.jpg'",
//   "angels": ".assets/images/angels.jpg",
//   "bergamot": ".assets/images/bergamot.jpg",
//   "doves": ".assets/images/doves.jpg",
//   "chocolate": ".assets/images.chocolate.jpg",
//   "silk": ".assets/images.silk.jpg",
//   "bathtubs": ".assets/images.bathtubs.jpg",
//   "elvis":".assets/images/elvis.jpg",
//   "stairway": ".assets/images/stairs.jpg",
//   "alpacas": ".assets/images/alpacas.jpg.",
// }


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
    //Sets the precedent as false until the argument proves it true.
      var isLetterInWord = false;
      for (var i=0; i<numBlanks; i++){
        //if the letter is in the list of letters of the random selection, than var isLetterInWord is true
        if (randomSelection[i]== letter) {
          isLetterInWord = true;
          console.log("the letter is in the word");
        }
       }
       // if the letter is in the word, it adds the letter to blanks and sucesses based on the position it occupies in numbBlanks
      if (isLetterInWord) { 
        for (var i=0; i<numBlanks; i++) {
          if (randomSelection[i] == letter){
            blanksAndSucesses[i] = letter;
            console.log(blanksAndSucesses);
          }
        }
      }
      //runs if the letter is not in the word - compares letter to the array of wrong letters
      else {
        if (wrongLetters.length ===0 ) {
          wrongLetters.push(letter);
          remainingTries--;
        }
        else {
          for (let i = 0; i < wrongLetters.length; i++) {
            const element = wrongLetters[i];
            if (letter !== element) {
            wrongLetters.push(letter);
            remainingTries--;
            console.log("This is the wrong letter" + wrongLetters);
            }
          }
          // for (var i=0; i < wrongLetters.length; i++){
          //   if (wrongLetters[i] !== letter){

          //   }
          // }
        }
          


        
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
      document.getElementById("image-col").innerHTML =  "<img src='assets/images/" + randomSelection +".jpg>'";
     //document.getElementById("image-col").innerHTML =  heavenImages.randomSelection;

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


