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

function getHumanChoice() {
    let goodChoice = "bad";
    let humanChoice;
    while (goodChoice == "bad") {
        humanChoice = prompt("Rock, paper or scissors? ");
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice == "rock" || humanChoice == "scissors" || humanChoice == "paper")
        {
            goodChoice = "good";
        } else{
            console.log("Not one of the three choices!")
        }
    }
   
    return humanChoice;
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound() {

        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        if (humanChoice == computerChoice)
        {
            console.log("Draw!");
            rounds++;
        } else if (humanChoice == "scissors" && computerChoice == "paper")
        {
            console.log("You win! Scissors beats paper");
            humanScore++;
        } else if (humanChoice == "scissors" && computerChoice == "rock")
        {
            console.log("You lose! Scissors gets betean by rock");
            computerScore++;
        } else if (humanChoice == "rock" && computerChoice == "paper")
        {
            console.log("You lose! Rock gets betean by paper");
            computerScore++;
        } else if (humanChoice == "rock" && computerChoice == "scissors")
        {
            console.log("You win! Rock beats scissors");
            humanScore++;
        } else if (humanChoice == "paper" && computerChoice == "rock")
        {
            console.log("You win! Paper beats rock");
            humanScore++;
        } else if (humanChoice == "paper" && computerChoice == "scissors")
        {
            console.log("You lose! Paper gets beaten by scissors");
            computerScore++;
        } 
    }
    let rounds = 5;
    while(rounds > 0)
    {
        playRound();
        rounds--;
    }

    if (computerScore > humanScore)
    {
        console.log("You lose! Computer score: " + computerScore + "; Your score: " + humanScore);
    } else 
    {
        console.log("You win! Computer score: " + computerScore + "; Your score: " + humanScore)
    }
}

playGame();




