function getComputerChoice(){
        let x = Math.floor( Math.random()* 12);
        if(x<4){
            return "rock";
        }
        else if(x<8){
            return "paper";
        }else{
            return "scissors";
        }
}



function playRound(playerSelection, getComputerChoice){

    if(playerSelection.toUpperCase() == "ROCK"){
        if(getComputerChoice.toUpperCase() == "SCISSORS"){
            return "player"
        }else{
            return "computer"
        }
    }else if(playerSelection.toUpperCase() == "PAPER"){
        if(getComputerChoice.toUpperCase() == "ROCK"){
            return "player"
        }else{
            return "computer"
        }
    }else{
        if(getComputerChoice.toUpperCase() == "PAPER"){
            return "player"
        }else{
            return "computer"
        }
    }
    
}