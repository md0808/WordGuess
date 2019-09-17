
// Global variables
var possibleWords =["clouds", "angels", "bergamot", "doves", "chocolate", "silk", "bathtubs",
"elvis", "honey", "spirits", "saints", "harps", "thunderbolts", "alpacas" ];
var randomSelection = "";
var lettersOfWord= [];
var numBlanks = 0;
var blanksAndSucesses = [];
var wrongLetters = [];
var wins = 0;
var losses = 0;
var remainingTries = 10;





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
    remainingTries = 8;

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
          alert("letter found")
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

  document.getElementById("numGuesses").innerHTML = remainingTries;
  document.getElementById("blanks-and-words").innerHTML = blanksAndSucesses.toString;

 //check if user won
  if (lettersOfWord.toString() == blanksAndSucesses.toString() ){
      wins++;
      alert ("you won");
      document.getElementById("word-appears").innerHTML =  randomSelection + ": You win! New word:";

      document.getElementById("win").innerHTML = wins;
      startGame();
    }
 // check if user lost
  else if (remainingTries ==0){
      losses++
      alert("you lost");
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


// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
//first try stuff


//for (var i=0; i<lettersOfWord.length; i++);
  //     if (lettersOfWord[i] === userLetter) {
  //         win++;
        

  //     }
  // make an object with images that correspond to words
                  
// var imageFile ={ clouds : "./assets/images/.img",
// }
var showImage = document.getElementById("image-col");


// create a function so that the computer randomly selects one of the possible words 



// function where the letters of the randomSelection are detected and added to empty string
// function detectLetters(randomSelection){

// }
// var lettersOfWord = detectLetters(randomSelection);



// function addLetters(randomSelection,emptyWordString){

// }
 


//create a function that detects users letter choice with key press detectUserLetter determines chosenLetter




       




    


// function detectLetters(randomSelection, choosenLetter){}


// var blankSpace = "_";
// var numberOfLetters =;

    // function that adds a blankSpace to blanks-and-words for numberofLetters  
// function blankSpaceMaker(){

// }

    // chosenLetter is compared against allLetters in the wordFromHeaven.

//  function compareLetters() {

//  }

  
      // if else statements for if correct, that letters becomes correctLetter, and  correctLetter replaces the blankSpace 
      // if wrong, triggers function wrongLetter, and chosenLetter appears in the list of wrong letters chosen, -1 from possibleTries.
      // 8 wrong letters guessed before game restarts and point is lost 
      // if the letter has already been used, nothing happens
 // Add the letters into an empty array
  //when all letters are correctly guessed (no blank spaces left), 
    //user is congratulated, word is displayed
    //user earns a point
  // if all 8 tries are used without guessing the word, -1 score and a new round starts

//   function displayWord () {}

//   var dw = document.getElementById("image-col");
//   dw.

//   function displayImage () {}
//   function newRound (){}
  // number of letters used begins at 0, new word is selected from possibleWords



