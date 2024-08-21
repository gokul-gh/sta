let cardDeck = document.getElementById("cardsDeckId");
let cpuCards = document.createElement("div");
let drawCards = document.createElement("div");
let playerCards = document.createElement("div");
let cpuCardsArray = [],
  playerCardsArray = [],
  drawCardsArray = [],
  dropCardsArray;
let cpuTurn = false,
  cardBorderDiv,
  clickedIndex,
  turnSkipCount = 0;

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
const displayCard = (color, name, appendTag) => {
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
const displayUnoImageFunc = (appendTag) => {
  let cardBorderDiv = document.createElement("div");
  cardBorderDiv.className = "cardBorderDivId";
  let img = document.createElement("img");
  cardBorderDiv.appendChild(img);
  appendTag.appendChild(cardBorderDiv);
};

//Display cpu cards
cpuCardsArray = cardStackCopy.splice(0, 7);
cpuCardsArray.forEach((element) => displayUnoImageFunc(cpuCards));

//Display draw cards
displayUnoImageFunc(drawCards);
//noSpecialCards is a recursive function.  If a special card is found, the current index is skipped and next card is processed
const noSpecialCards = () => {
  let isNoSpecialCard = specialCards.some(
    (cards) => cards == cardStackCopy[0].name
  );
  if (isNoSpecialCard) {
    cardStackCopy.splice(0, 1);
    noSpecialCards();
  } else dropCardsArray = cardStackCopy.splice(0, 1)[0];
};
noSpecialCards();
displayCard(dropCardsArray.color, dropCardsArray.name, drawCards);

//Display player cards
playerCardsArray = cardStackCopy.splice(0, 7);
playerCardsArray = [{ name: "1", color: "red" }];
playerCardsArray.forEach((element) => {
  displayCard(element.color, element.name, playerCards);
});

//Append all of the created div
[cpuCards, drawCards, playerCards].forEach((element) => {
  cardDeck.appendChild(element);
});

let allPlayerCards = document.querySelector(".playerCardsId");
const clickPlayerCard = (event) => {
  if (!cpuTurn) {
    getCardFunc();
    const clickedCard = event.target.closest(".cardDivId");
    const color = clickedCard.style.backgroundColor;

    const allPlayerCardsList = playerCards.querySelectorAll(".cardDivId");
    allPlayerCardsList.forEach((element, index) => {
      if (element == clickedCard) clickedIndex = index;
    });
    //if condition - executes when the card name is a number
    //else condition - executes when the card name is skip or reverse
    if (clickedCard.firstElementChild.textContent) {
      const name = clickedCard.firstElementChild.textContent;
      //if condition - executes if the card is +2 number
      //else condition - executes if the card is normal number
      if (name == "+2") {
        if (dropCardsArray.name == name || dropCardsArray.color == color) {
          for (let iter = 0; iter < 2; iter++) {
            cpuCardsArray.push(
              cardStackCopy[Math.floor(Math.random() * cardStackCopy.length)]
            );
            displayUnoImageFunc(cpuCards);
          }
          cpuTurn = false;
        }
        playerToDropCardFunc(name, color);
      } else {
        playerToDropCardFunc(name, color);
        if (dropCardsArray.name == name || dropCardsArray.color == color) {
          cpuTurn = true;
        } else {
          getCardFunc();
        }
      }
    } else {
      console.log("test");
      const name = clickedCard.firstElementChild.firstElementChild.outerHTML;
      playerToDropCardFunc(name, color);
    }
  }
  if (cpuTurn) {
    allPlayerCards.removeEventListener("click", clickPlayerCard);
    setTimeout(() => {
      cpuTurnFunc();
    }, 1000);
  }
};
allPlayerCards.addEventListener("click", clickPlayerCard);

//Player clicks a card, this function executes
const playerToDropCardFunc = (name, color) => {
  if (dropCardsArray.name == name || dropCardsArray.color == color) {
    dropCardsArray = playerCardsArray[clickedIndex];
    playerCardsArray.splice(clickedIndex, 1);
    playerCards.children[clickedIndex].remove();
    displayCard(color, name, drawCards);
    drawCards.children[1].remove();
  }
};

//Function to do cpu turn
const cpuTurnFunc = () => {
  //Find the first match of a cpu card with dropCards
  let matchedIndex = cpuCardsArray.findIndex(
    (element) =>
      element.name == dropCardsArray.name ||
      element.color == dropCardsArray.color
  );
  //If a match is found with cpuCard and dropcard, "if" condition executes
  if (matchedIndex != -1) {
    dropCardsArray = cpuCardsArray[matchedIndex];
    cpuCardsArray.splice(matchedIndex, 1);
    cpuCards.children[matchedIndex].remove();
    displayCard(dropCardsArray.color, dropCardsArray.name, drawCards);
    drawCards.children[1].remove();

    allPlayerCards.addEventListener("click", clickPlayerCard);
    cpuTurn = false;
  }
  //Draw card if no match is found in cpuArray
  else {
    cpuCardsArray.push(cardStackCopy.shift());
    displayUnoImageFunc(cpuCards);
    cpuTurn = false;
    allPlayerCards.addEventListener("click", clickPlayerCard);
  }
};

//Check if any of playerCardsArray matches with dropCards at start, else drawCard
const getCardFunc = () => {
  let matchedIndex = playerCardsArray.findIndex(
    (element) =>
      element.name == dropCardsArray.name ||
      element.color == dropCardsArray.color
  );

  if (matchedIndex == -1) {
    allPlayerCards.removeEventListener("click", clickPlayerCard);
    let image = drawCards.querySelector("img");

    const clickFunc = () => {
      let addedCard = cardStackCopy.shift();
      console.log(addedCard);
      console.log(dropCardsArray);
      //If the drawCard matches with dropCard characteristics, then show play/pass button
      if (
        addedCard.name == dropCardsArray.name ||
        addedCard.color == dropCardsArray.color
      ) {
        displayCard(addedCard.color, addedCard.name, drawCards);
        let div = document.createElement("div");
        div.className = "playPass";
        ["play", "pass"].forEach((element) => {
          let btn = document.createElement("button");
          btn.className = element;
          btn.textContent = element;
          div.appendChild(btn);
        });
        drawCards.appendChild(div);

        let allBtn = document.getElementsByTagName("button");
        allBtn[0].onclick = () => {
          while (drawCards.children.length > 1) {
            drawCards.children[1].remove();
          }
          dropCardsArray = addedCard;
          displayCard(dropCardsArray.color, dropCardsArray.name, drawCards);
          cpuTurn = true;
          setTimeout(() => {
            cpuTurnFunc();
          }, 1000);
        };
        allBtn[1].onclick = () => {
          //Remove card and button
          drawCards.children[2].remove();
          drawCards.children[2].remove();
          playerCardsArray.push(addedCard);
          displayCard(addedCard.color, addedCard.name, playerCards);
          cpuTurn = true;
          setTimeout(() => {
            cpuTurnFunc();
          }, 1000);
        };
      } else {
        playerCardsArray.push(addedCard);
        displayCard(
          playerCardsArray[playerCardsArray.length - 1].color,
          playerCardsArray[playerCardsArray.length - 1].name,
          playerCards
        );
        cpuTurn = true;
        setTimeout(() => {
          cpuTurnFunc();
        }, 1000);
      }
      image.removeEventListener("click", clickFunc);
      //Initially get card from drawCard, then pass the turn to CPU
    };
    image.addEventListener("click", clickFunc);
  }
};
getCardFunc();
