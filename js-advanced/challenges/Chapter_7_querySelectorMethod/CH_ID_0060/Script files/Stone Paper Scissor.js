/*            *************************************************************
 *  Name of the challenge  : Stone Paper Scissor               *
 *  Developed for          : VHITECH Training Program          *
 *               Maintenance History                           *
 *  Developer              :                                   *
 *  Creation date           :                 Ticket No:       *
 ************************************************************* */

//Varibales declaration
let clickedImage;
let userImageId = document.getElementById("userImage");
let cpuImageId = document.getElementById("cpuImage");

let playerScoreId = document.getElementById("ourScore");
let cpuScoreId = document.getElementById("cpuScores");

let createUserImg = document.createElement("img");
let createCpuImg = document.createElement("img");

let resultUpdateId = document.getElementById("resultUpdate");
let movesLeftId = document.querySelectorAll(".movesLeft");
let allImagesTag = document.getElementsByTagName("img");
let finalWinnerId = document.getElementById("whoWins");

let totalMoves = 10,
  cpuScore = 0,
  userScore = 0;

//Function executes when user clicks an image
let userClickedImage = function (event) {
  clickedImage = event.target.alt;
  createUserImg.src = `Images/${clickedImage}.png`;
  userImageId.appendChild(createUserImg);

  let choices = ["stone", "paper", "scissor"];
  let randomValue = Math.floor(Math.random() * 3);

  let cpuChoice = choices[randomValue];

  createCpuImg.src = `Images/${cpuChoice}.png`;
  cpuImageId.appendChild(createCpuImg);

  if (
    (clickedImage == "stone" && cpuChoice == "scissor") ||
    (clickedImage == "paper" && cpuChoice == "stone") ||
    (clickedImage == "scissor" && cpuChoice == "paper")
  ) {
    ++userScore;
    resultUpdateId.innerHTML = "Player has won this time";
    playerScoreId.innerHTML = `Player score: ${userScore}`;
  } else if (
    (clickedImage == "stone" && cpuChoice == "paper") ||
    (clickedImage == "paper" && cpuChoice == "scissor") ||
    (clickedImage == "scissor" && cpuChoice == "stone")
  ) {
    ++cpuScore;
    resultUpdateId.innerHTML = "Cpu has won this time";
    cpuScoreId.innerHTML = `Cpu score: ${cpuScore}`;
  } else {
    resultUpdateId.innerHTML = "Draw this time";
  }

  --totalMoves;
  for (let iteration = 0; iteration < movesLeftId.length; iteration++) {
    movesLeftId[iteration].innerHTML = `Moves left : ${totalMoves}`;
  }

  //Logic if the no moves are left
  if (totalMoves < 1) {
    for (let iteration = 0; iteration < allImagesTag.length; iteration++) {
      document
        .querySelector("#ourChoices")
        .removeEventListener("click", userClickedImage);
    }
    resultUpdateId.innerHTML = "";
    if (userScore > cpuScore) {
      finalWinnerId.innerHTML = "Player has finally won";
    } else if (cpuScore > userScore) {
      finalWinnerId.innerHTML = "Cpu has finally won";
    } else {
      finalWinnerId.innerHTML = "Match draw finally";
    }
  }
};

//Select which element the user has clicked
document
  .querySelector("#ourChoices")
  .addEventListener("click", userClickedImage);

// Screen date and time declaration.
let displayDate = new Date();
document.getElementById("dateOutput").innerHTML =
  displayDate.toLocaleDateString();
document.getElementById("timeOutput").innerHTML =
  displayDate.toLocaleTimeString();
