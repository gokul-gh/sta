const loginPageDiv = document.getElementById("loginPageId");
const playerNameId = document.getElementById("name");
const nameError = document.getElementById("nameErrorId");
const startButton = document.getElementById("startButtonId");
const gameStartsDiv = document.getElementById("gameStartsId");
const cpuCards = document.getElementById("cpuCardsId");
const playerCards = document.getElementById("playerCardsId");
document.body.style.backgroundImage = "url(/Images/login_page.jpg)";
document.body.style.backgroundSize = "cover";

let cpuCardsArray = [],
  closeDeckArray = [],
  openDeckArray = [],
  playerCardsArray = [],
  cardsName = [],
  cardStack = [],
  cardStackCopy = [];

const skip = `<i class="fa-solid fa-ban fa-xs"></i>`;
const reverse = `<i class="fa-solid fa-rotate fa-xs"></i>`;
const drawTwo = "+2";
const specialCards = [skip, reverse, drawTwo];
const cardsColor = ["red", "green", "blue", "yellow"];

gameStartsDiv.style.display = "none";

//Player enters a valid name, then redirects to the game
startButton.onclick = (event) => {
  const namePattern = /^[a-zA-Z ]+$/;
  const playerName = playerNameId.value;
  if (playerName != "" && namePattern.test(playerName)) {
    gameStartsDiv.style.display = "block";
    loginPageDiv.style.display = "none";
  } else {
    nameError.innerHTML = "Enter valid name";
  }
};

//Push numbers and special cards to cardsName array
for (let iter = 0; iter < 10; iter++) cardsName.push(iter);
specialCards.forEach((element) => cardsName.push(element));

for (let iter = 0; iter < 2; iter++) {
  cardsColor.forEach((color) => {
    cardsName.forEach((name, index) => {
      //First 52 cards
      if (iter == 0) cardStack.push({ color: `${color}`, name: `${name}` });
      //Exclude zero for next 48 cards
      if (iter == 1)
        if (index != 0) cardStack.push({ color: `${color}`, name: `${name}` });
    });
  });
}

//Fisher-Yates Sorting Algorithm
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
shuffle(cardStack);

cardStackCopy.push(...cardStack);

document.body.style.backgroundImage = "url(/Images/uno_background.jpeg)";

playerCardsArray = cardStackCopy.splice(0, 7);

//noSpecialCards is a recursive function.  If a special card is found, the current index is skipped and next card is processed
const noSpecialCards = () => {
  let isNoSpecialCard = specialCards.some(
    (cards) => cards == cardStackCopy[0].name
  );
  if (isNoSpecialCard) {
    cardStackCopy.splice(0, 1);
    noSpecialCards();
  } else openDeckArray = cardStackCopy.splice(0, 1)[0];
};
noSpecialCards();
closeDeckArray = cardStackCopy;

const createCpuCardFunc = (appendTag) => {
  let cpuImage = document.createElement("img");
  cpuImage.className = "unoImageId";
  appendTag.appendChild(cpuImage);
};

cpuCardsArray = cardStackCopy.splice(0, 7);
cpuCardsArray.forEach((element) => createCpuCardFunc(cpuCards));
