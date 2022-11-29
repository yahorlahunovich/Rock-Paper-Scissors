const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const comp = document.querySelector("[data-comp-score]");
const hum = document.querySelector("[data-hum-score]");
const text = document.querySelector(".text");
const newGameBut = document.querySelector(".nextGame");
const winningPage = document.querySelector(".winning-page");

lista = ["rock", "paper", "scissors"];

let choice = "";

rock.addEventListener("click", () => {
  choice = "rock";
  game(choice);
});
paper.addEventListener("click", () => {
  choice = "paper";
  game(choice);
});
scissors.addEventListener("click", () => {
  choice = "scissors";
  game(choice);
});

function game() {
  let random = lista[Math.floor(Math.random() * lista.length)];
  if (choice === random) {
    text.textContent = "Draw!";
  } else if (
    (choice === "rock" && random == "scissors") ||
    (choice === "paper" && random == "rock") ||
    (choice === "scissors" && random == "paper")
  ) {
    incrementScore(hum);
    text.textContent = "You win!";
  } else {
    incrementScore(comp);
    text.textContent = "Compur win!";
  }
  winningPage.classList.add("active");
}

function incrementScore(scoreSpan) {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
}

newGameBut.addEventListener("click", () => {
  winningPage.classList.remove("active");
});
