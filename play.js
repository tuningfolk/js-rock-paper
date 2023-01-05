var i = 0;
var player = 0;
var computer = 0;
var computerSelection;

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

function playRound(playerSelection){
    i++;
    computerSelection = getComputerChoice();

    if(playerSelection.toUpperCase() == "ROCK"){
        if(computerSelection.toUpperCase() == "SCISSORS"){
            return "player"
        }else{
            return "computer"
        }
    }else if(playerSelection.toUpperCase() == "PAPER"){
        if(computerSelection.toUpperCase() == "ROCK"){
            return "player"
        }else{
            return "computer"
        }
    }else{
        if(computerSelection.toUpperCase() == "PAPER"){
            return "player"
        }else{
            return "computer"
        }
    }


}

function check(winner){
    if(winner =='player'){
        player++;
    }else{
        computer++;
    }
    document.getElementById("comp").innerHTML = computerSelection;
    document.getElementById("winner").innerHTML = winner;
    document.getElementById("num_of_rounds").innerHTML = player+computer;
}

