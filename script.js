const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let totalRounds = 5;
    let currentRound = 1;

    const playerScoreDisplay = document.getElementById('playerScore');
    const computerScoreDisplay = document.getElementById('computerScore');
    const result = document.getElementById('round_winner');

    const startGame = () => {
        const rockBtn = document.getElementById('rock');
        const paperBtn = document.getElementById('paper');
        const scissorsBtn = document.getElementById('scissors');

        //Player event listeners
        rockBtn.addEventListener('click', () => playRound('rock'));
        paperBtn.addEventListener('click', () => playRound('paper'));
        scissorsBtn.addEventListener('click', () => playRound('scissors'));

    }
    function playRound(playerChoice){
        if (currentRound <= totalRounds) {
            console.log(`Round ${currentRound}`);

            const choices = ['rock', 'paper', 'scissor']
            const computerChoice = choices[Math.floor(Math.random() * 3)];
            console.log(`Player chose ${playerChoice}`);
            console.log(`Computer chose ${computerChoice}`);
            
            // Decide round winner
            if (playerChoice === computerChoice) {
                result.innerHTML = 'It\'s a tie!';
            }
            else if (playerChoice === 'rock') {
                if (computerChoice === 'paper') {
                    result.innerHTML = 'You lose! Paper beats rock';
                    computerScore++;
                } else {
                    result.innerHTML = 'You win! Rock beats scissors';
                    playerScore++;
                }
            }
            else if (playerChoice === 'paper') {
                if (computerChoice === 'scissors') {
                    result.innerHTML = 'You lose! Scissors beats paper';
                    computerScore++;
                } else {
                    result.innerHTML = 'You win! Paper beats rock';
                    playerScore++;
                }
            }
            else if (playerChoice === 'scissors') {
                if (computerChoice === 'rock') {
                    result.innerHTML = 'You lose! Rock beats scissors';
                    computerScore++;
                } else {
                    result.innerHTML = 'You win! Rock beats scissors';
                    playerScore++;
                }
            }
            currentRound++;
        }
        //Update the score board
        computerScoreDisplay.textContent = `Computer : ${computerScore}`;
        playerScoreDisplay.innerHTML = `Player : ${playerScore}`;
    }
    startGame();
}
game();
