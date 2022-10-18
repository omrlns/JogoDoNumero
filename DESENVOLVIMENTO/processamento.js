let secretNumber = Math.trunc(Math.random() * 20) + 1

let score = [20]
let highscore = [0]

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if ((guess <= 0) | (guess > 20)) {
    displayMessage("OPS... ESCOLHA APENAS NÚMEROS QUE ESTEJAM ENTRE 1 E 20!");

    
  } else if (guess === secretNumber) { 
    document.querySelector(".message").textContent = "🎊PARABÉNS, VOCÊ CONSEGUIU🎊";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    //quando o palpite estiver errado
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "MUITO ALTO!📈" : " MUITO BAIXO!📉");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥GAME OVER💥");
      document.querySelector(".score").textContent = 0;
    }
  }
});

//botão para "jogar novamente"
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  displayMessage("BORA, QUAL O SEU PALPITE?");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});