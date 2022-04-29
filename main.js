/*
Task 1
- set of if statements to determine rock paper scissors winner
- The two moves stored in variables
- Hard code each move in these variables
- Complete when all permutationss of the combined moves have been handled.

- Create constants with each move 
- Create variables for player and computer move

Create an if statement with permutations below
Draw    
   if cMove = Rock and Pmove = Rock, 
    if cMove = Paper and Pmove = Paper,
    if cMove = Scissors and Pmove = Scissors

    Player Wins 
     if pMove = Rock and Cmove = Scissors or 
     if pMove = Paper and Cmove = Rock or
     if pMove = Scissors and Cmove = Paper

  Computer Wins (don't need to include this)
    if cMove = Rock and Pmove = Scissors, 
    if cMove = Paper and Pmove = Rock,
    if cMove = Scissors and Pmove = Paper


*/

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";

// let playerMove = PAPER;
// let computerMove = ROCK;

// if (playerMove === computerMove) {
//   console.log("Its a draw!!");
// } else if (
//   (playerMove === ROCK && computerMove === SCISSORS) ||
//   (playerMove === PAPER && computerMove === ROCK) ||
//   (playerMove === SCISSORS && computerMove === PAPER)
// ) {
//   console.log("Player Wins!");
// } else {
//   console.log("Computer Wins!");
// }

// TASK 2
/* 
- Create function using the if/else statements
- Use our variables as function parameters for the moves
- Do not print result to console
- instead, return 1 if player wins
  0 for draw
  -1 if computer wins

- function should be able to return any permutation of moves.
- console.log result variable to test it
*/

function getWinner(playerMove, computerMove) {
  if (playerMove === computerMove) {
    return 0;
  } else if (
    (playerMove === ROCK && computerMove === SCISSORS) ||
    (playerMove === PAPER && computerMove === ROCK) ||
    (playerMove === SCISSORS && computerMove === PAPER)
  ) {
    return 1;
  } else {
    return -1;
  }
}

let result = getWinner(ROCK, PAPER);
// console.log(result);

// Task 3
/* 
- Use prompt to get a value for player from the user.
- Call function with that value as the player move 
    and the hard-coded computer move
-  Display result using alert 
- Considered complete when user can input any player move 
    and get correct result

How to get user input for player move

- Create a variable which stores user prompt data;
- Question: Please enter one move: ROCK, PAPER or SCISSORS.
        Conditions for Prompt
        - Edit users input string to uppercase
        - Remove spaces from the string
        

        Loop Condition
        - Loop runs until UserInput is spelt correctly
        - Each iteration will prompt user for input again.
        
        Using do-while loops

        The do...while statement creates a loop that executes a specified statement until the test condition evaluates to false. 
        The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.

        do {
            this code block will run before condition evaluated
            then will run again if the test condition is true
        } while (condition entered is true)


        Pseudo code do while 
        do {
            prompt user for userInput
        } while (while spelling is incorrect)
        what is true while the spelling is incorrect:
        - The spelling is incorrect if userInput is not equal to ROCK, PAPER or SCISSORS
        
       -  userInput ===  ROCK

- Call function with user prompt variable and computer variable
- Display result using alert (1, 0 or -1)




*/

let userInput;

do {
  userInput = prompt(
    "Please type one move in capital letters: ROCK, PAPER or SCISSORS."
  );
  userInput = userInput.toUpperCase().split(" ").join("");
  console.log(userInput);
  console.log(` strict eqaulity operator test ${userInput === ROCK}`);
  console.log(`strict inequlity operator test ${userInput !== ROCK}`);
} while (userInput !== ROCK && userInput !== PAPER && userInput !== SCISSORS);

// console.log(userInput);
// let computerMove = PAPER;
// let taskThreeResult = getWinner(userInput, computerMove);
// console.log(taskThreeResult);
