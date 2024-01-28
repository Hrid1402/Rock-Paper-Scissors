const options = ["rock", "paper", "scissors"]

const rockBtn = document.querySelector('#Rock');
const paperBtn = document.querySelector('#Paper');
const scissorsBtn = document.querySelector('#Scissors');

const result = document.querySelector("#result");

let points = 0
const pointsText = document.querySelector("#points");


const you = document.querySelector("#you");
const computer = document.querySelector("#computer");



rockBtn.addEventListener('click', () => {
    you.textContent = "You: Rock";
    let computerChoise = getComputerChoice();
    computer.textContent = "Computer: " + computerChoise;
    result.textContent = playRound("rock", computerChoise);
});

paperBtn.addEventListener('click', () => {
    you.textContent = "You: Paper";
    let computerChoise = getComputerChoice();
    computer.textContent = "Computer: " + computerChoise;
    result.textContent = playRound("paper", computerChoise);
});

scissorsBtn.addEventListener('click', () => {
    you.textContent = "You: Scissors";
    let computerChoise = getComputerChoice();
    computer.textContent = "Computer: " + computerChoise;
    result.textContent = playRound("scissors", computerChoise);
});


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
        points += 1;
        pointsText.textContent = "Points: " + points;
        return "You Win! paper beats rock";
        
    }
    else if(playerSelection === "rock" && computerSelection === "scissors"){
        points += 1;
        pointsText.textContent = "Points: " + points;
        return "You Win! rock beats scissors";
        
    }
    else if(playerSelection === "scissors" && computerSelection === "paper"){
        points += 1;
        pointsText.textContent = "Points: " + points;
        return "You Win! scissors beats paper";
        
    }
    else{
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
    
}


