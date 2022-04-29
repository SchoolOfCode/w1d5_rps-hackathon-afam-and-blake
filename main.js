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

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

let playerMove = PAPER;
let computerMove = ROCK;

if (playerMove === computerMove) {
  console.log("Its a draw!!");
} else if (
  (playerMove === ROCK && computerMove === SCISSORS) ||
  (playerMove === PAPER && computerMove === ROCK) ||
  (playerMove === SCISSORS && computerMove === PAPER)
) {
  console.log("Player Wins!");
} else {
  console.log("Computer Wins!");
}
