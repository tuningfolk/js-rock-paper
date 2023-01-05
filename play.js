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
    
    document.getElementById("Result").innerHTML = "";

    if(winner =='player'){
        player++;
    }else if(winner == 'computer'){
        computer++;
    }else{
        draw++;
    } 
    document.getElementById("comp").innerHTML = "Computer played " + computerSelection;
    document.getElementById("winner").innerHTML = winner + " wins";
    let plays = player+computer+draw;
    
    document.getElementById("num_of_rounds").innerHTML = `rounds : ` + plays;
    document.getElementById("player").innerHTML = "player : " + player;
    document.getElementById("computer").innerHTML = "computer : " + computer; 
    if(plays == 5){
        if(computer>player){
            document.getElementById("Result").innerHTML = "Computer wins!";
        }else if(player>computer){
            document.getElementById("Result").innerHTML = "Player wins!";
        }else{
            document.getElementById("Result").innerHTML = "Draw!";
        }
        computer = 0;
        player = 0;
        draw = 0;
    }
}

