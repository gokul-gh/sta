const cardsDeckDiv = document.getElementById("cardsDeckId");
const cpuCardsDiv = document.getElementById("cpuCardsId");
const closeDeckDiv = document.getElementById("closeDeckId");
const openDeckDiv = document.getElementById("openDeckId");
const playerCardsDiv = document.getElementById("playerCardsId");

const skip = `<i class="fa-solid fa-ban fa-xs"></i>`;
const reverse = `<i class="fa-solid fa-rotate fa-xs"></i>`;
const drawTwo = "+2";
const specialCards = [skip, reverse, drawTwo];
const cardsColor = ["red", "green", "blue", "yellow"];

let cpuCardsArray = [],
  playerCardsArray = [],
  openDeckArray = [],
  closeDeckArray = [];

let cardsName = [],
  cardStack = [],
  cardStackCopy = [];

let clickedIndex, clickedCardDiv, clickedCard;

let cpuTurn = false;

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

const createCpuImage = (element) => {
  let unoImage = document.createElement("img");
  unoImage.className = "cpuUnoImage";
  cpuCardsDiv.appendChild(unoImage);
};

//Display cpu cards
cpuCardsArray = cardStackCopy.splice(0, 7);
cpuCardsArray.forEach(() => createCpuImage(cpuCardsDiv));

let deckImage = document.createElement("img");
deckImage.className = "closeDeckUnoImage";
closeDeckDiv.appendChild(deckImage);

const displayNoCard = (element, appendElement) => {
  let cardDiv = document.createElement("div");
  cardDiv.className = "cardDivId";
  cardDiv.cardObject = element;
  cardDiv.style.backgroundColor = element.color;
  let uppperNoDiv = document.createElement("div");
  uppperNoDiv.className = "upperNoClass";
  let middleNoDiv = document.createElement("div");
  middleNoDiv.className = "middleNoClass";
  middleNoDiv.style.color = element.color;
  let lastNoDiv = document.createElement("div");
  lastNoDiv.className = "lastNoClass";
  [uppperNoDiv, middleNoDiv, lastNoDiv].forEach((e) => {
    e.innerHTML = element.name;
    cardDiv.appendChild(e);
  });
  appendElement.appendChild(cardDiv);
};

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
displayNoCard(openDeckArray, openDeckDiv);

//Display player cards
playerCardsArray = cardStackCopy.splice(0, 7);
playerCardsArray.forEach((element) => displayNoCard(element, playerCardsDiv));

const playerClickedFunc = (event) => {
  if (!cpuTurn) {
    clickedCardDiv = event.target.closest(".cardDivId");
    clickedCard = clickedCardDiv.cardObject;
    clickedIndex = playerCardsArray.indexOf(clickedCard);
    // If player clicked and open deck card matches in any of one parameters
    if (
      clickedCard.name == openDeckArray.name ||
      clickedCard.color == openDeckArray.color
    ) {
      playerToOpenDeckFn();
    }
  }
  if (cpuTurn) {
    console.log("cpuTurn");
    cpuTurn = false;
  }
};

if (!cpuTurn) playerCardsDiv.addEventListener("click", playerClickedFunc);

const playerToOpenDeckFn = () => {
  console.log(clickedCard);
  console.log(openDeckArray);
  if (clickedCard.name == drawTwo) {
    console.log("draw two");
    cpuTurn = false;
  } else if (clickedCard.name == skip) {
    console.log("skip");
    cpuTurn = false;
  } else if (clickedCard.name == reverse) {
    console.log("reverse");
    cpuTurn = false;
  } else {
    cpuTurn = true;
  }
};
