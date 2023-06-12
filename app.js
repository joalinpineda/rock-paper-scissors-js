const game = () => {
  let playerScoreField = document.querySelector(".score__player span"),
    computerScoreField = document.querySelector(".score__computer span"),
    winnerText = document.querySelector(".board__players h3"),
    winnerTextSpan = document.querySelector(".board__players span"),
    playerSelection = document.querySelector(".board__player"),
    computerSelection = document.querySelector(".board__computer"),
    playerScore = 0,
    computerScore = 0;
  const options = document.querySelectorAll(".player__options button"),
    restartBtn = document.querySelector(".restart-btn");

  options.forEach((option) => {
    option.addEventListener("click", () => {
      const player = option.textContent;
      const computer = computerChoice();
      const options = {
        rock: "✊",
        paper: "✋",
        scissors: "✌️",
      };

      playerSelection.style.animation = "shakePlayer 0.5s ease";
      computerSelection.style.animation = "shakeComputer 0.5s ease";

      setTimeout(() => {
        playerSelection.innerText = options[player];
        playerSelection.style.animation = "";
        computerSelection.innerText = options[computer];
        computerSelection.style.animation = "";

        switch (player) {
          case "rock":
            computer === "rock"
              ? tie(player, computer)
              : computer === "scissors"
              ? userWins(player, computer)
              : computerWins(player, computer);
            break;
          case "scissors":
            computer === "scissors"
              ? tie(player, computer)
              : computer === "paper"
              ? userWins(player, computer)
              : computerWins(player, computer);
            break;
          case "paper":
            computer === "paper"
              ? tie(player, computer)
              : computer === "rock"
              ? userWins(player, computer)
              : computerWins(player, computer);
            break;
        }
      }, 500);
    });
  });
  restartBtn.addEventListener("click", () => restartGame());
  const computerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    const randomChoice = options[randomNumber];
    return randomChoice;
  };
  const userWins = (playerChoice, computerChoice) => {
    winnerText.textContent = "You win! 😎";
    winnerTextSpan.textContent = `${playerChoice} beats ${computerChoice}`;
    playerScore++;
    playerScoreField.innerText = playerScore;
  };
  const computerWins = (playerChoice, computerChoice) => {
    winnerText.textContent = "Computer wins! 💻";
    winnerTextSpan.textContent = `${playerChoice} lose to ${computerChoice}`;
    computerScore++;
    computerScoreField.innerText = computerScore;
  };
  const tie = (playerChoice, computerChoice) => {
    winnerText.textContent = "It's a tie! 🤷‍♂️";
    winnerTextSpan.textContent = `${playerChoice} equals ${computerChoice}`;
  };
  const restartGame = () => {
    computerScore = 0;
    playerScore = 0;
    winnerText.textContent = "Let's start";
    winnerTextSpan.textContent = "Make your move!";
    computerScoreField.innerText = computerScore;
    playerScoreField.innerText = playerScore;
  };
};
game();
