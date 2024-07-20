const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let totalRounds = 5;
    let currentRound = 1;

    const gameRound = document.getElementById('rounds');
    gameRound.textContent = `Round ${currentRound} of ${totalRounds}`;

    const playerScoreDisplay = document.getElementById('playerScore');
    const playerChoiceDisplay = document.getElementById('playerChoice');
    const computerScoreDisplay = document.getElementById('computerScore');
    const computerChoiceDisplay = document.getElementById('computerChoice');
    const result = document.getElementById('results');
    const finalResult = document.getElementById('finalResults');
    const rockBtn = document.getElementById('rock');
    const paperBtn = document.getElementById('paper');
    const scissorsBtn = document.getElementById('scissors');

    const startGame = () => {
        //Player event listeners
        rockBtn.addEventListener('click', () => playRound('rock'));
        paperBtn.addEventListener('click', () => playRound('paper'));
        scissorsBtn.addEventListener('click', () => playRound('scissors'));
        finalResult.style.display = 'none';
    }
    function playRound(playerChoice){
        if (currentRound <= totalRounds) {
            //Update round information
            gameRound.textContent = `Round ${currentRound} of ${totalRounds}`;
            console.log(`Round ${currentRound}`);
            //Generate computer's choice
            const choices = ['rock', 'paper', 'scissors']
            const computerChoice = choices[Math.floor(Math.random() * 3)];
            console.log(`Player chose ${playerChoice}`);
            console.log(`Computer chose ${computerChoice}`);
            // Decide round winner
            if (playerChoice === computerChoice) {
                result.innerHTMtextContentL = 'It\'s a tie!';
            }
            else if (playerChoice === 'rock') {
                if (computerChoice === 'paper') {
                    result.textContent = 'Computer gets a point! Paper beats rock';
                    computerScore++;
                } else {
                    result.textContent = 'You get a point! Rock beats scissors';
                    playerScore++;
                }
            }
            else if (playerChoice === 'paper') {
                if (computerChoice === 'scissors') {
                    result.textContent = 'Computer gets a point! Scissors beats paper';
                    computerScore++;
                } else {
                    result.textContent = 'You get a point! Paper beats rock';
                    playerScore++;
                }
            }
            else if (playerChoice === 'scissors') {
                if (computerChoice === 'rock') {
                    result.textContent = 'Computer gets a point! Rock beats scissors';
                    computerScore++;
                } else {
                    result.textContent = 'You get a point! Rock beats scissors';
                    playerScore++;
                }
            }
            //Update the round's results
            playerChoiceDisplay.textContent = `Player chose: ${playerChoice}`;
            computerChoiceDisplay.textContent = `Computer chose: ${computerChoice}`;

            currentRound++;
            if (currentRound > totalRounds)
            {
                endGame();
            }
        } 
        //Update the score board
        computerScoreDisplay.textContent = `Computer : ${computerScore}`;
        playerScoreDisplay.textContent = `Player : ${playerScore}`;
        console.log(`Player score: ${playerScore}, Computer score: ${computerScore}`);
    }
    function endGame(){
        rockBtn.style.display = 'none';
        paperBtn.style.display = 'none';
        scissorsBtn.style.display = 'none';
        result.style.display = 'none';
        let winner = "";
        if (playerScore > computerScore) {
            winner = "Player Wins!";
        } 
        else if (playerScore < computerScore){
            winner = "Computer wins!";
        } else {
            winner = "It's a tie!";
        }
        finalResult.style.display = 'block';
        finalResult.innerHTML = `Game Over. <br> ${winner}`;
    }
    startGame();
}
game();
