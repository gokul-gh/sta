let cardDeck = document.getElementById("cardsDeckId");
let cpuCards = document.createElement("div");
let drawCards = document.createElement("div");
let playerCards = document.createElement("div");
let cpuCardsArray = [],
  playerCardsArray = [],
  drawCardsArray = [],
  dropCardsArray = [];
let cpuTurn = false,
  cpuDrawCardCount = 0,
  isCodeLoaded = false;

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
cpuCards.className = "cpuCardsId";
drawCards.className = "drawCardsId";
playerCards.className = "playerCardsId";

//Function to display cards
const displayCard = (name, color, appendTag) => {
  //cardBorderDiv is for creating border around a card
  let cardBorderDiv = document.createElement("div");
  cardBorderDiv.className = "cardBorderDivId";
  //cardDiv is card content inside the border
  let cardDiv = document.createElement("div");
  cardDiv.className = "cardDivId";
  let upperNoDiv = document.createElement("div");
  upperNoDiv.className = "upperNoDivId";
  let middleNoDiv = document.createElement("div");
  middleNoDiv.className = "middleNoDivId"
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

  if (playerCards.childElementCount == 7) isCodeLoaded = true;

  //Event listener for player clicking a card
  cardDiv.addEventListener("click", (event) => {
    if (!cpuTurn) {
      cpuDrawCardCount = 0;
      //Finds if the clicked card matches with dropCards either with color or name
      if (
        cardDiv.style.backgroundColor == dropCardsArray[0].color ||
        cardDiv.firstElementChild.textContent == dropCardsArray[0].name ||
        cardDiv.firstElementChild.firstElementChild.outerHTML ==
          dropCardsArray[0].name
      ) {
        //If the clicked card consists of any of 0 to 9 cards
        if (cardDiv.firstElementChild.textContent != "") {
          playerTurn(
            cardDiv,
            cardDiv.style.backgroundColor,
            cardDiv.firstElementChild.textContent,
            playerCardsArray
          );
        }
        //else condition if the clicked card contains fontawesome icon
        //outerHTML is because, it converts into string from object, else display will be error
        else {
          playerTurn(
            cardDiv,
            cardDiv.style.backgroundColor,
            cardDiv.firstElementChild.firstElementChild.outerHTML,
            playerCardsArray
          );
        }
        //displayCard function call to update card in dropCards area, remove previous card
        displayCard(dropCardsArray[0].name, dropCardsArray[0].color, drawCards);
        drawCards.children[1].remove();
        cardBorderDiv.remove();
        //If user clicks +2 card, then add two cards and skip the cpu turn
        if (cardDiv.firstElementChild.textContent == "+2") {
          cpuCardsArray.push(
            cardStack[Math.floor(Math.random() * cardStack.length)]
          );
          cpuCardsArray.push(
            cardStack[Math.floor(Math.random() * cardStack.length)]
          );
          displayImage(cpuCards);
          displayImage(cpuCards);
          cpuTurn = false;
        }
      }
    }
    //Function call for cpuTurn
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
  if (isCodeLoaded) {
    console.log(playerCardsArray);
    console.log(dropCardsArray);
    console.log(cpuTurn);
  }
};

//Logic to do cpu movement
function cpuTurnFunc(
  cpuCardsArray,
  dropCardsArray,
  displayCard,
  drawCards,
  cardBorderDiv
) {
  //iteration to check if dropCard's name/color matches
  for (let iter = 0; iter < cpuCardsArray.length; iter++) {
    if (
      cpuCardsArray[iter].color == dropCardsArray[0].color ||
      cpuCardsArray[iter].name == dropCardsArray[0].name
    ) {
      //Function call to update dropCard div output with cpu matched card
      displayCard(
        cpuCardsArray[iter].name,
        cpuCardsArray[iter].color,
        drawCards
      );
      //update dropCardsArray with last card, remove matched card from cpuCardsArray, remove last drawCard element, remove matched cpuCard, handover turn to player
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
      //if a skip or reverse card found, then block player play and cpu has turn
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
  //If cpuCardsArray is not matched with dropcards color/name, then get a card from drawCardsArray
  if (cpuDrawCardCount == 0) {
    cpuCardsArray.push(drawCardsArray.pop());
    displayImage(cpuCards);
    setTimeout(() => {
      cpuTurnFunc(
        cpuCardsArray,
        dropCardsArray,
        displayCard,
        drawCards,
        cardBorderDiv
      );
    }, "1000");
    ++cpuDrawCardCount;
  } else {
    cpuTurn = false;
    return;
  }
}

//Player clicks a card, it gets removed from the array
function playerTurn(cardDiv, color, name, playerCardsArray) {
  let doSplice = true;
  let allPlayerCards = playerCards.querySelectorAll(".cardDivId");
  allPlayerCards.forEach((element) => {
    if (
      element.style.backgroundColor == color ||
      element.firstElementChild.textContent == name
    ) {
      dropCardsArray.push({
        color: color,
        name: name,
      });
      dropCardsArray.shift();

      let index = playerCardsArray.findIndex(
        (e) => e.name == name && e.color == color
      );
      //doSplice is for remove only one time. This forEach executes splice more than once and hence this usage
      if (doSplice) {
        playerCardsArray.splice(index, 1);
        doSplice = false;
      }
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
