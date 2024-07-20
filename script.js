const game = () => {
    let playerScore;
    let computerScore;
    let totalRounds = 0;
    let currentRound;

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
    const replayBtn = document.getElementById('restart');

    const gameStartSetup = () => {
        // Set game variables
        playerScore = 0;
        computerScore = 0;
        currentRound = 1;
        
        // Reset game views
        replayBtn.style.display = 'none';
        finalResult.style.display = 'none';
        playerChoiceDisplay.style.display = 'none';
        computerChoiceDisplay.style.display = 'none';
        rockBtn.style.display = 'inline';
        paperBtn.style.display = 'inline';
        scissorsBtn.style.display = 'inline';
        gameRound.textContent = `Round ${currentRound} of ${totalRounds}`;   
        startGame();
    }
    const startGame = () => {
        //Ask user how many rounds they want to play
        totalRounds = prompt("How many rounds would you like to play?");
        console.log(totalRounds)
        if (totalRounds === null) {
            window.close(); // close the window if prompt is cancelled
        } else {
        //Check if user input is a number
        totalRounds = parseInt(totalRounds);
        if (isNaN (totalRounds) || totalRounds < 0) {
            alert("Invalid input. Please enter a positive number.");
            startGame();
        } else {            
            //Update round information
            gameRound.textContent = `Round ${currentRound} of ${totalRounds}`;
            //Player event listeners
            rockBtn.addEventListener('click', () => playRound('rock'));
            paperBtn.addEventListener('click', () => playRound('paper'));
            scissorsBtn.addEventListener('click', () => playRound('scissors'));
        }
    }
}
    
    function playRound(playerChoice){
        if (currentRound <= totalRounds) {
            gameRound.textContent = `Round ${currentRound} of ${totalRounds}`;
            console.log(`Round ${currentRound}`);
            playerChoiceDisplay.style.display = 'block';
            computerChoiceDisplay.style.display = 'block';    
            //Generate computer's choice
            const choices = ['rock', 'paper', 'scissors']
            const computerChoice = choices[Math.floor(Math.random() * 3)];
            console.log(`Player chose ${playerChoice}`);
            console.log(`Computer chose ${computerChoice}`);
            // Decide round winner
            if (playerChoice === computerChoice) {
                result.textContent = 'It\'s a tie!';
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
            result.style.display = 'block';

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
        replayBtn.style.display = 'inline';
        replayBtn.addEventListener('click', () => {
            window.location.reload();
        })
    }
    gameStartSetup();
}
game();
