
//code ideas from paper algorithm
// declares array with three elements
let rpsArray = ["rock", "paper", "scissors"];

//user inputs selection from array and selection written to console
let input = prompt("Type rock, paper or scissors to start game.");
console.log(`You have selected ${input}`);

//declares random element variable to select from array and print to console
const randElem = Math.floor(Math.random() * 3);
console.log("the computer has selected", randElem, rpsArray[randElem]);

//compare user selection (input) with computer random selection (randElem) (using if/else)

if (randElem == "0" && input == "rock") {
console.log("It's a draw, refresh to try again."); 
}

if (randElem == 1 && input == "paper") {
  console.log("It's a draw, refresh to try again."); 
}

if (randElem == 2 && input == "scissors") {
  console.log("It's a draw, refresh to try again");
}

if (randElem == 0 && input == "paper") {
  console.log("Paper beats rock, Paper Wins!");
}

if (randElem == 0 && input == "scissors") {
  console.log("Rock beats scissors, Rock Wins!");
}

//asks if user wants to play again
console.log(`Try Again? Refresh the page if you're feeling lucky`);