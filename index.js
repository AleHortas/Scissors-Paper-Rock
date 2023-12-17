



function Game() {
    function letComputerChoose() {
        /*Math.random genera un numero decimal aleatorio entre 0 y 1
          A ese número lo multiplicamos por 3
          y lo redondeamos hacia abajo con Math.floor
          el resultado se guarda en la variable computer selection.
          */
    
        const computerSelection = Math.floor(Math.random() * 3);
    
        // Convertimos el numero a una string:
        switch (computerSelection) {
            case 0:
                return "Scissors";
            case 1:
                return "Paper";
            case 2:
                return "Rock";
            default:
                break;
        }
    }
    const computerSelection = letComputerChoose();
    console.log("Computer has chosen " + computerSelection);
    
    
    const playerSelection = prompt("Scissors, parer or rock?");
    console.log("You have chosen " + playerSelection);
    
    
    
    
    function playRound(playerSelection, computerSelection) {
    
        if (playerSelection == computerSelection) {
            return "Tie";
        } else if ((computerSelection === "Scissors" && playerSelection === "Paper") ||
            (computerSelection === "Paper" && playerSelection === "Rock") ||
            (computerSelection === "Rock" && playerSelection === "Scissors")) {
            return "You Lose! " + computerSelection + " le gana a " + playerSelection;
        } else {
            return "You Win! " + playerSelection + " le gana a " + computerSelection;
        }
    }
    
    console.log(playRound(playerSelection, computerSelection));
}

Game();