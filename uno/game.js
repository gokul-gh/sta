let cardDeck = document.getElementById("cardsDeckId");
let cpuCards = document.createElement("div");
let drawCards = document.createElement("div");
let playerCards = document.createElement("div");
let cpuCardsArray = [],
  playerCardsArray = [],
  drawCardsArray = [],
  dropCardsArray = [];
let cpuTurn = false;

let skip = `<i class="fa-solid fa-ban fa-xs"></i>`;
let reverse = `<i class="fa-solid fa-rotate fa-xs"></i>`;
let specialCards = [skip, reverse, "+2"];
//prettier-ignore
let cardsColor = ["red", "green", "blue", "yellow"];
let cardStack = [],
  cardsName = [];

for (let iter = 0; iter < 10; iter++) {
  cardsName.push(iter);
}
//Push special cards to card names array
specialCards.forEach((element) => {
  cardsName.push(element);
});

for (let iter = 0; iter < 2; iter++) {
  cardsColor.forEach((color) => {
    cardsName.forEach((name, index) => {
      //First 52 cards
      if (iter == 0) cardStack.push({ color: `${color}`, name: `${name}` });
      //Next 48 cards
      if (iter == 1) {
        //Exclude zero for next 48 cards
        if (index != 0) cardStack.push({ color: `${color}`, name: `${name}` });
      }
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

//Apply flex property to cpuCards, drawCard and playerCards
cardDeck.style.display = "flex";
cardDeck.style.flexDirection = "column";
cardDeck.style.alignItems = "center";
cpuCards.className = "cpuCardsId";
cpuCards.style.display = "flex";
drawCards.style.display = "flex";
drawCards.className = "drawCards";
playerCards.className = "playerCardsId";
playerCards.style.display = "flex";

//Function to display cards
const displayCard = (name, color, appendTag) => {
  //cardBorderDiv is for creating border around a card
  let cardBorderDiv = document.createElement("div");
  cardBorderDiv.className = "cardBorderDivId";
  cardBorderDiv.style.margin = "0.2rem";
  //cardDiv is card content inside the border
  let cardDiv = document.createElement("div");
  cardDiv.className = "cardDivId";
  let upperNoDiv = document.createElement("div");
  let middleNoDiv = document.createElement("div");
  let lowerNoDiv = document.createElement("div");

  cardBorderDiv.style.height = "30vh";
  cardBorderDiv.style.width = "20vh";
  cardBorderDiv.style.border = "2px rgba(0, 0, 0, 0.3) solid";
  cardBorderDiv.style.borderRadius = "5px";

  cardDiv.style.backgroundColor = color;
  cardDiv.style.height = "94%";
  cardDiv.style.width = "90%";
  cardDiv.style.margin = "4% auto";
  cardDiv.style.borderRadius = "5px";
  cardDiv.style.color = "white";

  //Number at upper portion of card
  upperNoDiv.innerHTML = name;
  upperNoDiv.style.fontSize = "1.8rem";
  upperNoDiv.style.padding = "0 0.3rem";

  //Number at middle portion of card
  div = document.createElement("div");
  div.innerHTML = name;
  div.style.fontSize = "2rem";
  div.style.color = color;
  middleNoDiv.style.margin = "0.5rem 0rem 0rem 1.7rem";
  middleNoDiv.style.padding = "0 1.3rem 0 0";
  middleNoDiv.style.height = "50%";
  middleNoDiv.style.width = "35%";
  middleNoDiv.style.transform = "rotate(35deg)";
  middleNoDiv.style.backgroundColor = "white";
  middleNoDiv.style.borderRadius = "50%";
  div.style.transform = "rotate(-35deg)";
  div.style.padding = "1.8rem 0 0 0";
  middleNoDiv.appendChild(div);

  //Number at lower portion of card
  lowerNoDiv.style.padding = "0rem 0rem 0.8rem 0.3rem";
  lowerNoDiv.innerHTML = name;
  lowerNoDiv.style.fontSize = "1.8rem";
  lowerNoDiv.style.transform = "rotate(-180deg)";

  cardDiv.appendChild(upperNoDiv);
  cardDiv.appendChild(middleNoDiv);
  cardDiv.appendChild(lowerNoDiv);
  cardBorderDiv.appendChild(cardDiv);
  appendTag.appendChild(cardBorderDiv);

  //Event listener for player clicking a card
  cardDiv.addEventListener("click", (event) => {
    if (!cpuTurn) {
      //Finds if the clicked card matches with dropCards either with color or name
      if (
        cardDiv.style.backgroundColor == dropCardsArray[0].color ||
        cardDiv.firstElementChild.textContent == dropCardsArray[0].name ||
        cardDiv.firstElementChild.firstElementChild.outerHTML ==
          dropCardsArray[0].name
      ) {
        if (cardDiv.firstElementChild.textContent != "") {
          playerTurn(
            cardDiv,
            cardDiv.style.backgroundColor,
            cardDiv.firstElementChild.textContent
          );
        }
        //else condition for if the clicked card contains fontawesome icon
        //outerHTML is because, it converts into string from object, else display will be error
        else {
          playerTurn(
            cardDiv,
            cardDiv.style.backgroundColor,
            cardDiv.firstElementChild.firstElementChild.outerHTML
          );
        }
        displayCard(dropCardsArray[0].name, dropCardsArray[0].color, drawCards);
        drawCards.children[1].remove();
        cardBorderDiv.remove();
      }
    }
    if (cpuTurn) {
      setTimeout(() => {
        cpuTurnFunc(
          cpuCardsArray,
          dropCardsArray,
          displayCard,
          drawCards,
          cardBorderDiv
        );
      }, "1000");
    }
  });
};

//Logic to do cpu movement
function cpuTurnFunc(
  cpuCardsArray,
  dropCardsArray,
  displayCard,
  drawCards,
  cardBorderDiv
) {
  for (let iter = 0; iter < cpuCardsArray.length; iter++) {
    if (
      cpuCardsArray[iter].color == dropCardsArray[0].color ||
      cpuCardsArray[iter].name == dropCardsArray[0].name
    ) {
      displayCard(
        cpuCardsArray[iter].name,
        cpuCardsArray[iter].color,
        drawCards
      );

      dropCardsArray.push({
        color: cpuCardsArray[iter].color,
        name: cpuCardsArray[iter].name,
      });
      cpuCardsArray.splice(iter, 1);
      drawCards.children[1].remove();
      cardBorderDiv.remove();
      cpuCards.children[1].remove();
      dropCardsArray.shift();
      cpuTurn = false;

      if (dropCardsArray[0].name == reverse || dropCardsArray[0].name == skip)
        setTimeout(() => {
          cpuTurnFunc(
            cpuCardsArray,
            dropCardsArray,
            displayCard,
            drawCards,
            cardBorderDiv
          );
        }, "1000");
      return;
    }
  }
  //If cpuCardsArray is not matched with dropcards color/name, then recreate the cpuCardsArray with new iteration starting from index 10 of cardStack
  cpuCardsArray.forEach((element, index) => {
    cpuCardsArray[index] =
      cardStack[Math.floor(Math.random() * cardStack.length) + index];
  });
  setTimeout(() => {
    cpuTurnFunc(
      cpuCardsArray,
      dropCardsArray,
      displayCard,
      drawCards,
      cardBorderDiv
    );
  }, "1000");
}

function playerTurn(cardDiv, color, name) {
  //Player clicks a card, it gets removed from the array
  let allPlayerCards = playerCards.querySelectorAll(".cardDivId");
  allPlayerCards.forEach((element, index) => {
    if (
      element.style.backgroundColor == color ||
      element.firstElementChild.textContent == name
    ) {
      dropCardsArray.push({
        color: color,
        name: name,
      });
      dropCardsArray.shift();
      playerCardsArray.splice(index, 1);
      cpuTurn = true;
      //if player clicks skip/reverse, the cpu turn must not be given
      if (name == skip || name == reverse) cpuTurn = false;
    }
  });
}

//Function to display uno Image
const displayImage = (appendTag) => {
  let cardBorderDiv = document.createElement("div");
  cardBorderDiv.className = "cardBorderDivId";
  cardBorderDiv.style.margin = "0.2rem";
  cardBorderDiv.style.height = "30vh";
  cardBorderDiv.style.width = "20vh";
  cardBorderDiv.style.border = "2px rgba(0, 0, 0, 0.3) solid";
  cardBorderDiv.style.borderRadius = "5px";
  let img = document.createElement("img");
  img.src = "Images/UNO-Back-edit.png";
  img.style.width = "20vh";
  img.style.height = "30vh";
  cardBorderDiv.appendChild(img);
  appendTag.appendChild(cardBorderDiv);
};

//Function call to display cpu cards
for (let iter = 0; iter < 7; iter++) {
  cpuCardsArray.push(cardStack[iter]);
}
for (let iter = 0; iter < cpuCardsArray.length; iter++) {
  displayImage(cpuCards);
}

//Function call to display draw cards
displayImage(drawCards);
drawCardsArray.push(...cardStack);
let noSpecialCards = cardStack.filter(
  (element) => !specialCards.includes(element.name)
);
displayCard(noSpecialCards[50].name, noSpecialCards[50].color, drawCards);
dropCardsArray.push(noSpecialCards[50]);

//Function call to display player cards
for (let iter = 0; iter < 7; iter++) {
  playerCardsArray.push(cardStack[iter + 9]);
}
for (let iter = 0; iter < playerCardsArray.length; iter++) {
  displayCard(cardStack[iter + 9].name, cardStack[iter + 9].color, playerCards);
}

cardDeck.appendChild(cpuCards);
cardDeck.appendChild(drawCards);
cardDeck.appendChild(playerCards);
