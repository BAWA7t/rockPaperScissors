
let HumanScore = 0

let ComputerScore = 0

let tier = 0

roundsPlayed = 0

let totalRounds = 5

const playerChoiceDisplay = document.querySelector('.playerChoice');
const computerChoiceDisplay = document.querySelector('.computerChoice');
const playerScoreDisplay = document.querySelector('.playerScore');
const computerScoreDisplay = document.querySelector('.computerScore');
const winnerDisplay = document.querySelector('.winner');
const tiersDisplay = document.querySelector('.tiers');
const playAgainBtn = document.querySelector('.reset');
 //create a list containing rock paper scissors
 let listItem = ["rock","paper","scissors"];

 const pimgs = document.querySelectorAll('.pimg');

 pimgs.forEach(pimg => {
    pimg.addEventListener('click', (event) => {
        if (roundsPlayed < totalRounds) {
            const playerChoice = event.target.id;
            const computerChoice = getComputerChoice();
            playRound(playerChoice, computerChoice);
            displayChoices(playerChoice, computerChoice);
            displayScores();
            roundsPlayed++;
            if (roundsPlayed === totalRounds) {
                displayWinner();
                playAgainBtn.style.display = 'block'; // Show the Play Again button
            }
        }
    });
});


//create a function called getComputerChoice
function getComputerChoice(){
   //randomly return "rock","paper","scissors" from a list
   //getComputerChoice();
   return(listItem[(Math.floor(Math.random() * listItem.length))]);
}

    
//create a function called getHumanChoice

//getHumanChoice();
//create a variable to store human score

//create a variable to store computer score


//create a function called playRound
//Define two parameters humanChoice and computerChoice
function playRound(playerChoice, computerChoice){
    // make humanChoice case insensitive
    //humanChoice = humanChoice.toLowerCase();
    //checking a tie
    if(playerChoice === computerChoice){
        //console.log("Its a tie")
        tier++
    }else if(
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        //console.log("Human wins! "  +  humanChoice + " beats "  + computerChoice);
        HumanScore++;
    } else {
        //console.log("Computer wins! " +  computerChoice + " beats " + humanChoice);
        ComputerScore++;
    }
}


function displayChoices(playerChoice,computerChoice){
    playerChoiceDisplay.textContent = `Choice : ${playerChoice}`;
    computerChoiceDisplay.textContent = `Choice : ${computerChoice}`;
}
function displayScores() {
    playerScoreDisplay.textContent = `Score: ${HumanScore}`;
    computerScoreDisplay.textContent = `Score: ${ComputerScore}`;
    tiersDisplay.textContent = `Tiers: ${tier}`;
}
function displayWinner(){
    if (HumanScore > ComputerScore) {
        winnerDisplay.textContent = 'Player wins the game!';
    } else if (HumanScore < ComputerScore) {
        winnerDisplay.textContent = 'Computer wins the game!';
    } else {
        winnerDisplay.textContent = 'It\'s a tie game!';
    }
}

document.querySelector('.reset').addEventListener('click', resetGame);

playAgainBtn.addEventListener('click', resetGame);

function resetGame() {
    HumanScore = 0;
    ComputerScore = 0;
    tier = 0;
    roundsPlayed = 0;
    playerScoreDisplay.textContent = `Score: 0`;
    computerScoreDisplay.textContent = `Score: 0`;
    tiersDisplay.textContent = `Tiers: 0`;
    winnerDisplay.textContent = '';
    playerChoiceDisplay.textContent = '';
    computerChoiceDisplay.textContent = '';
    playAgainBtn.style.display = 'none';
}





