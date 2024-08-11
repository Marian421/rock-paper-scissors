function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  }

function getComputerChoice() {
    randomValue = getRandomIntInclusive(1,3);
    if (randomValue == 1)
    {
        return "rock";
    } else if (randomValue == 2){
        return "paper";
    } else return "scissors";
    
}
const display = document.querySelector("div");
let humanScore = 0;
let computerScore = 0;
let humanChoice;
const rock = document.querySelector("#rock");
rock.addEventListener('click', () => 
    {humanChoice = 'rock';
    playGame();
    });

function playGame() {

    function playRound() {

        let computerChoice = getComputerChoice();

        if (humanChoice == computerChoice)
        {
            display.textContent = "Draw";
            console.log("Draw!");
        } else if (humanChoice == "scissors" && computerChoice == "paper")
        {
            display.textContent = "You win! Scissors beats paper";
            console.log("You win! Scissors beats paper");
            humanScore++;
        } else if (humanChoice == "scissors" && computerChoice == "rock")
        {
            display.textContent = "You lose! Scissors gets betean by rock";
            console.log("You lose! Scissors gets betean by rock");
            computerScore++;
        } else if (humanChoice == "rock" && computerChoice == "paper")
        {
            display.textContent = "You lose! Rock gets betean by paper";
            console.log("You lose! Rock gets betean by paper");
            computerScore++;
        } else if (humanChoice == "rock" && computerChoice == "scissors")
        {
            display.textContent = "You win! Rock beats scissors";
            console.log("You win! Rock beats scissors");
            humanScore++;
        } else if (humanChoice == "paper" && computerChoice == "rock")
        {
            display.textContent = "You win! Paper beats rock";
            console.log("You win! Paper beats rock");
            humanScore++;
        } else if (humanChoice == "paper" && computerChoice == "scissors")
        {
            display.textContent = "You lose! Paper gets beaten by scissors";
            console.log("You lose! Paper gets beaten by scissors");
            computerScore++;
        } 
    }
    playRound();
    if (computerScore == 5) {
        display.textContent = "You lose! Computer score: " + computerScore + "; Your score: " + humanScore;
        console.log("You lose! Computer score: " + computerScore + "; Your score: " + humanScore);
    }
    if (humanScore == 5) {
        display.textContent = "You win! Computer score: " + computerScore + "; Your score: " + humanScore;
        console.log("You win! Computer score: " + computerScore + "; Your score: " + humanScore)
    }
}





