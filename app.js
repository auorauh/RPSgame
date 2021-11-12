let computerChoice
let winner
let playerScore =0;
let computerScore =0;
let ties =0;

function computerPlay(){
    rndNum = Math.floor(Math.random() * 3);
    if (rndNum == 1) {
        computerChoice = "Rock"
    } else if (rndNum == 2){
        computerChoice = "Paper"
    } else {
        computerChoice = "Scissors"
    }
    return computerChoice;
}
function game() {
function playRound(){
    let playerChoice =prompt("Choose; Rock, Paper or Scissors"); 
    computerPlay()
    if (playerChoice == "Rock", computerChoice == "Rock") {
        winner = "Tie."
    } else if (playerChoice == "Rock", computerChoice == "Scissors") {
        winner = "Player"
    } else if (playerChoice == "Rock", computerChoice == "Paper") {
        winner = "Computer"
    }else if (playerChoice == "Paper", computerChoice == "Scissors") {
        winner = "Computer"
    } else if (playerChoice == "Paper", computerChoice == "Paper") {
        winner = "Tie."
    }else if (playerChoice == "Paper", computerChoice == "Rock") {
        winner = "Player"
    } else if (playerChoice == "Scissors", computerChoice == "Scissors") {
        winner = "Tie."
    }else if (playerChoice == "Scissors", computerChoice == "Paper") {
        winner = "Player"
    } else if (playerChoice == "Scissors", computerChoice == "Rock") {
        winner = "Computer"
        return winner;
    }
    
    console.log("Computer picked")
    console.log(computerChoice)
    console.log("Player picked")
    console.log(playerChoice)
    console.log("Winner is ...")
    console.log(winner)
    if (winner == "Player") {
        playerScore++;
    } else if (winner == "Computer") {
        computerScore++;
    } else if (winner == "Tie.") {
        ties++;
    }
console.log("Score")
console.log("Player Score:")
console.log(playerScore)
console.log("Computer Score")
console.log(computerScore)
console.log("Ties.")
console.log(ties)
}
playRound()
playRound()
playRound()
playRound()
playRound()
if (playerScore > computerScore){
    alert("You Won!")
} else if (computerScore > playerScore) {
    alert("You Lost!")
} else if (playerScore == computerScore) {
    alert("Its a Tie.")
}
}
game()