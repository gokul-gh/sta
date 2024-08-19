let cardDeck = document.getElementById("cardsDeckId");
let cpuCards = document.createElement("div");
let drawCards = document.createElement("div");
let playerCards = document.createElement("div");
let cpuCardsArray = [],
  playerCardsArray = [],
  drawCardsArray = [],
  dropCardsArray = [];
let cpuTurn = false,
  isCardDrawn = false,
  cardBorderDiv,
  cpuDrawCardCount = 0;

const skip = `<i class="fa-solid fa-ban fa-xs"></i>`;
const reverse = `<i class="fa-solid fa-rotate fa-xs"></i>`;
let specialCards = [skip, reverse, "+2"];
//prettier-ignore
let cardsColor = ["red", "green", "blue", "yellow"];
let cardsName = [],
  cardStack = [],
  cardStackCopy = [];

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

cpuCards.className = "cpuCardsId";
drawCards.className = "drawCardsId";
playerCards.className = "playerCardsId";

//Function to display cards
const displayCard = (name, color, appendTag) => {
  //cardBorderDiv is for creating border around a card
  cardBorderDiv = document.createElement("div");
  cardBorderDiv.className = "cardBorderDivId";
  //cardDiv is card content inside the border
  let cardDiv = document.createElement("div");
  cardDiv.className = "cardDivId";
  let upperNoDiv = document.createElement("div");
  upperNoDiv.className = "upperNoDivId";
  let middleNoDiv = document.createElement("div");
  middleNoDiv.className = "middleNoDivId";
  let lowerNoDiv = document.createElement("div");
  lowerNoDiv.className = "lowerNoDivId";
  cardDiv.style.backgroundColor = color;

  //Number at upper portion of card
  upperNoDiv.innerHTML = name;

  //Number at middle portion of card
  div = document.createElement("div");
  div.className = "middleNoId";
  div.innerHTML = name;
  div.style.color = color;
  middleNoDiv.appendChild(div);

  //Number at lower portion of card
  lowerNoDiv.innerHTML = name;

  cardDiv.appendChild(upperNoDiv);
  cardDiv.appendChild(middleNoDiv);
  cardDiv.appendChild(lowerNoDiv);
  cardBorderDiv.appendChild(cardDiv);
  appendTag.appendChild(cardBorderDiv);
};

//Function to display uno image
const displayImage = (appendTag) => {
  let cardBorderDiv = document.createElement("div");
  cardBorderDiv.className = "cardBorderDivId";
  let img = document.createElement("img");
  cardBorderDiv.appendChild(img);
  appendTag.appendChild(cardBorderDiv);
};

//Display cpu cards
cpuCardsArray = cardStackCopy.splice(0, 7);
cpuCardsArray.forEach((element) => displayImage(cpuCards));

//Display draw cards
displayImage(drawCards);
const noSpecialCards = () => {
  let isNoSpecialCard = specialCards.some(
    (cards) => cards == cardStackCopy[0].name
  );
  if (isNoSpecialCard) {
    cardStackCopy.splice(0, 1);
    noSpecialCards();
  } else dropCardsArray = cardStackCopy.splice(0, 1);
};
noSpecialCards();
displayCard(dropCardsArray[0].name, dropCardsArray[0].color, drawCards);

//Display player cards
playerCardsArray = cardStackCopy.splice(0, 7);
playerCardsArray.forEach((element) => {
  displayCard(element.name, element.color, playerCards);
});
//Append all of the created div
[cpuCards, drawCards, playerCards].forEach((element) => {
  cardDeck.appendChild(element);
});

let allPlayerCards = document.querySelector(".playerCardsId");
const clickPlayerCard = (event) => {
  const clickedCard = event.target.closest(".cardDivId");
  const color = clickedCard.style.backgroundColor;

  //if condition - executes when thecard name is a number
  //else condition - executes when the card name is skip or reverse
  if (clickedCard.firstElementChild.textContent) {
    const name = clickedCard.firstElementChild.textContent;
    //if condition - executes if the card is +2 number
    //else condition - executes if the card is normal number
    if (name == "+2") {
      for (let iter = 0; iter < 2; iter++) {
        cpuCardsArray.push(
          cardStackCopy[Math.floor(Math.random() * cardStackCopy.length)]
        );
        displayImage(cpuCards);
      }
      cpuTurn = false;
    } else {
      console.log("test");

    }
  } else {
    const name = clickedCard.firstElementChild.firstElementChild.outerHTML;
  }
};

allPlayerCards.addEventListener("click", clickPlayerCard);
