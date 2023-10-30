
function main(){

let computerSelection="";



/*playerSelection=prompt("Choose rock paper or scissor");
playerSelection= playerSelection.toLowerCase();
*/
let playerResult=0;
let computerResult=0;
function roundPlay(playerSelection=prompt("choose rock paper or scissors"), computerSelection){
    playerSelection= playerSelection.toLowerCase();
    let randomGenerater = Math.floor(Math.random() * 3 + 1);
    console.log(randomGenerater);
    function getComputerChoice(randomGenerater){
        if(randomGenerater === 1){
           return computerSelection="rock";
           
        }else if(randomGenerater === 2){
             return computerSelection="paper";
           
        }else if(randomGenerater === 3){
             return computerSelection="scissor";
    
        }
    
    }
    getComputerChoice(randomGenerater);
    console.log(playerSelection);
    console.log(computerSelection);

    if((playerSelection==="rock" && computerSelection==="scissor") ||
        (playerSelection==="paper"&& computerSelection==="rock") ||
        (playerSelection==="scissor"&& computerSelection==="paper"))
    {
        playerResult++;
        return console.log("You  win!!!"+" "+playerSelection+" beats"+" "+computerSelection);
    }else if((playerSelection==="rock" && computerSelection==="paper") ||
                (playerSelection==="paper"&& computerSelection==="scissor")||
                (playerSelection==="scissor"&& computerSelection==="rock"))  
            {
                computerResult++;
            return console.log("You Lose ): "+playerSelection+" beats"+" "+computerSelection);
            }   
                else if(playerSelection==computerSelection)
                {
        return console.log("It's a Tie");
        }
}
  
   function game(){
    for(i=1; i<6; i++){
        roundPlay(playerSelection=prompt("choose rock paper or scissors"), computerSelection);
        
    }
    if(playerResult>computerResult){
         console.log( "you have won and the result is "+playerResult+" to "+computerResult);
    }else if (computerResult>playerResult){
         console.log("you have lost and the result is "+computerResult+ " to "+playerResult);
    }
   }
  game();
}
main();