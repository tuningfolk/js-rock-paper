var i = 0;
var player = 0;
var computer = 0;
var draw = 0;
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
    // console.log(computerSelection);
    // console.log(playerSelection);

    if(playerSelection.toUpperCase() == "ROCK"){
        if(computerSelection.toUpperCase() == "SCISSORS"){
            return "player";
        }else if(computerSelection.toUpperCase() == "PAPER"){
            return "computer";
        }else{
            return "draw"
        }
    }else if(playerSelection.toUpperCase() == "PAPER"){
        if(computerSelection.toUpperCase() == "ROCK"){
            return "player";
        }else if(computerSelection.toUpperCase() == "SCISSORS"){
            return "computer";
        }else{
            return "draw";
        }
    }else{
        if(computerSelection.toUpperCase() == "PAPER"){
            return "player";
        }else if(computerSelection.toUpperCase() == "ROCK"){
            return "computer";
        }else{
            return "draw";
        }
    }


}

function check(winner){
    if(winner =='player'){
        player++;
    }else if(winner == 'computer'){
        computer++;
    }else{
        draw++;
    } 
    document.getElementById("comp").innerHTML = computerSelection;
    document.getElementById("winner").innerHTML = winner;
    document.getElementById("num_of_rounds").innerHTML = `rounds : ${player}${computer}${draw}`;
    document.getElementById("player").innerHTML = "player : " + player;
    document.getElementById("computer").innerHTML = "computer : " + computer; 
}

