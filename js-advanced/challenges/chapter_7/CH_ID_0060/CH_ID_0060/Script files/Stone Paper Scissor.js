/*            *************************************************************
 *  Name of the challenge  : Stone Paper Scissor               *
 *  Developed for          : VHITECH Training Program          *
 *               Maintenance History                           *
 *  Developer              :                                   *
 *  Creation date           :                 Ticket No:       *
 ************************************************************* */

// Variables declaration
let userImageId = document.getElementById("userImage");
let cpuImageId = document.getElementById("cpuImage");

let userScoreId = document.getElementById("ourScore");
let cpuScoreId = document.getElementById("cpuScores");

let movesLeftId = document.querySelectorAll(".movesLeft");
let resultUpdateId = document.getElementById("resultUpdate");
let finalWinner = document.getElementById("whoWins");
let imgTag = document.getElementsByTagName("img");

let createUserImg = document.createElement("img");
let createCpuImg = document.createElement("img");

userScoreId.innerHTML = "User Score: 0";
cpuScoreId.innerHTML = "Cpu Score: 0";

let cpuScore = 0,
  userScore = 0,
  movesLeft = 10;

//Game logic function
function game(userClicked) {
  //Statement to display image based on user click
  switch (userClicked) {
    case 0:
      createUserImg.src = "Images/stone.png";
      userImageId.appendChild(createUserImg);
      break;
    case 1:
      createUserImg.src = "Images/paper.png";
      userImageId.appendChild(createUserImg);
      break;
    case 2:
      createUserImg.src = "Images/scissor.png";
      userImageId.appendChild(createUserImg);
      break;
  }

  let randomValue = Math.floor(Math.random() * 3);
  //Statement to display image based on cpu random generation
  if (randomValue == 0) {
    createCpuImg.src = "Images/stone.png";
    cpuImageId.appendChild(createCpuImg);
  } else if (randomValue == 1) {
    createCpuImg.src = "Images/paper.png";
    cpuImageId.appendChild(createCpuImg);
  } else if (randomValue == 2) {
    createCpuImg.src = "Images/scissor.png";
    cpuImageId.appendChild(createCpuImg);
  }

  //Logic to find if player or cpu has won at particular click
  if (
    (userClicked == 0 && randomValue == 2) ||
    (userClicked == 1 && randomValue == 0) ||
    (userClicked == 2 && randomValue == 1)
  ) {
    ++userScore;
    userScoreId.innerHTML = `User Score: ${userScore}`;
    resultUpdateId.innerHTML = "Player won this time";
  } else if (
    (userClicked == 0 && randomValue == 1) ||
    (userClicked == 1 && randomValue == 2) ||
    (userClicked == 2 && randomValue == 0)
  ) {
    ++cpuScore;
    cpuScoreId.innerHTML = `Cpu Score: ${cpuScore}`;
    resultUpdateId.innerHTML = "Cpu won this time";
  } else {
    resultUpdateId.innerHTML = "Tie this time";
  }

  //Function to show moves left
  --movesLeft;
  for (let i = 0; i < movesLeftId.length; i++) {
    movesLeftId[i].innerHTML = `Moves left : ${movesLeft}`;
  }

  //Logic to find who won finally
  if (movesLeft < 1) {
    for (let i = 0; i < imgTag.length; i++) {
      imgTag[i].onclick = null;
    }

    resultUpdateId.innerHTML = "";
    if (userScore > cpuScore) {
      finalWinner.innerHTML = "User has won finally";
    } else if (cpuScore > userScore) {
      finalWinner.innerHTML = "Cpu has won finally";
    } else {
      finalWinner.innerHTML = "Match draw finally";
    }
  }
}

// Screen date and time declaration.
let displayDate = new Date();
document.getElementById("dateOutput").innerHTML =
  displayDate.toLocaleDateString();
document.getElementById("timeOutput").innerHTML =
  displayDate.toLocaleTimeString();
