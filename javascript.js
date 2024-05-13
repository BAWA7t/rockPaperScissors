

 //create a list containing rock paper scissors
 let listItem = ["rock","paper","scissors"];

//create a function called getComputerChoice
function getComputerChoice(){
   //randomly return "rock","paper","scissors" from a list
   //getComputerChoice();
   return(listItem[(Math.floor(Math.random() * listItem.length))]);
}

    
//create a function called getHumanChoice
function getHumanChoice(){
    //prompt the user to enter a string
    //return the input
    return(prompt("rock,paper or scissors ?").toLowerCase());
}
//getHumanChoice();
//create a variable to store human score
let HumanScore = 0
//create a variable to store computer score
let ComputerScore = 0

//create a function called playRound
//Define two parameters humanChoice and computerChoice
function playRound(humanChoice, computerChoice){
    // make humanChoice case insensitive
    humanChoice = humanChoice.toLowerCase();
    //checking a tie
    if(humanChoice === computerChoice){
        //console.log("Its a tie")
    }else if(
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        //console.log("Human wins! "  +  humanChoice + " beats "  + computerChoice);
        HumanScore++;
    } else {
        //console.log("Computer wins! " +  computerChoice + " beats " + humanChoice);
        ComputerScore++;
    }
}

    





function playgame(){
    for (i = 0; i < 5; i++){
        const  humanSelection = getHumanChoice();
        const  computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection);
    }

    //Declare the winner at the end of the game
    if(HumanScore > ComputerScore) {
        console.log("Human wins!");
    }else if (HumanScore < ComputerScore){
        console.log("Computer wins!");
    }else {
        console.log("It's a tie game")
    }
}

// starts game
playgame();