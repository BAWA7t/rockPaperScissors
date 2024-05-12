

 //create a list containing rock paper scissors
 let listItem = ["rock","paper","scissors"];

//create a function called getComputerChoice
function getComputerChoice(){
   //randomly return "rock","paper","scissors" from a list
   return(listItem[(Math.floor(Math.random() * listItem.length))]);

}
//getComputerChoice();
    
//create a function called getHumanChoice
    //prompt the user to enter a string