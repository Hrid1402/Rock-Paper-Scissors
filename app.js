const options = ["rock", "paper", "scissors"]
game();
console.log(getComputerChoice());
let playerChoose = ""

function game(){
    for (let i = 1; i <=5; i++){
        playerChoose = prompt("SELECT YOUR OPTION: (Rock, Paper, Scissors)");
        console.log(playRound(playerChoose, getComputerChoice()));
    }
    
}

function getComputerChoice(){
    return options[(Math.floor(Math.random() * options.length))];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection){
        return "Draw, both choose " + playerSelection;
    }
    else if(playerSelection === "paper" && computerSelection === "rock"){
        return "You Win! paper beats rock";
    }
    else if(playerSelection === "rock" && computerSelection === "scissors"){
        return "You Win! rock beats scissors";
    }
    else if(playerSelection === "scissors" && computerSelection === "paper"){
        return "You Win! scissors beats paper";
    }
    else{
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
    
}