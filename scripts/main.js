
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

//print either "player wins" or "computer wins"
console.log(``);
//asks if user wants to play again
console.log(`Try Again? Refresh the page if you're feeling lucky`);