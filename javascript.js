

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
 //