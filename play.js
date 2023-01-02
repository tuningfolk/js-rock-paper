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