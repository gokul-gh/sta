let cardDeck = document.getElementById("cardsDeckId");
let cpuCards = document.createElement("div");
let drawCards = document.createElement("div");
let playerCards = document.createElement("div");
let timerOutput = document.getElementById("timerId");
let cpuCardsArray = [],
  playerCardsArray = [],
  drawCardsArray = [],
  dropCardsArray,
  loginName = "",
  score = 0,
  image;
let cpuTurn = false,
  cardBorderDiv,
  clickedIndex,
  turnSkipCount = 0,
  isUnoButton = false,
  playerName;

const skip = `<i class="fa-solid fa-ban fa-xs"></i>`;
const reverse = `<i class="fa-solid fa-rotate fa-xs"></i>`;
let specialCards = [skip, reverse, "+2"];
//prettier-ignore
let cardsColor = ["red", "green", "blue", "yellow"];
let cardsName = [],
  cardStack = [],
  cardStackCopy = [];

//Login page
let nameInputDiv = document.createElement("div");
let p = document.createElement("p");
let enterBtn = document.createElement("button");
let namePattern = /^[a-zA-z ]*$/;
enterBtn.textContent = "Enter game";
p.textContent = "Enter your name";
nameInputDiv.className = "nameInputDivId";
let nameInput = document.createElement("input");
[p, nameInput, enterBtn].forEach((element) =>
  nameInputDiv.appendChild(element)
);
cardDeck.appendChild(nameInputDiv);

enterBtn.onclick = () => {
  if (namePattern.test(nameInput.value)) playerName = nameInput.value;
  else alert("Enter valid name");
  if (playerName) {
    let playerDiv = document.createElement("div");
    playerDiv.className = "playerName";
    playerDiv.textContent = `${playerName}'s Cards`;
    cardDeck.appendChild(playerDiv);

    nameInputDiv.style.display = "none";
    [playerDiv, cpuDiv, cpuCards, drawCards, playerCards].forEach((element) => {
      element.style.display = "inherit";
    });
    timerFunc();
  }
};

const timerFunc = () => {
  for (let i = 300; i >= 0; i--) {
    (function (second) {
      setTimeout(function () {
        if (
          (second % 60).toString().length == 1 &&
          Math.floor(second / 60).toString().length == 1
        )
          timerOutput.innerHTML = `0${Math.floor(second / 60)}:0${second % 60}`;
        else if ((second % 60).toString().length == 1)
          timerOutput.innerHTML = `${Math.floor(second / 60)}:0${second % 60}`;
        else if (Math.floor(second / 60).toString().length == 1)
          timerOutput.innerHTML = `0${Math.floor(second / 60)}:${second % 60}`;
        else
          timerOutput.innerHTML = `${Math.floor(second / 60)}:${second % 60}`;
        if (second == 0 && score == 0) {
          allPlayerCards.removeEventListener("click", clickPlayerCard);
          if (calculteScore(playerCardsArray) < calculteScore(cpuCardsArray))
            createModalFunc("Player");
          else if (
            calculteScore(cpuCardsArray) < calculteScore(playerCardsArray)
          )
            createModalFunc("CPU");
          else if (
            calculteScore(cpuCardsArray) == calculteScore(playerCardsArray)
          )
            createModalFunc("Draw");
        }
      }, 1000 + 1000 * (300 - second));
    })(i);
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

cpuCards.className = "cpuCardsId";
drawCards.className = "drawCardsId";
playerCards.className = "playerCardsId";

let cpuDiv = document.createElement("div");
cpuDiv.className = "cpuName";
cpuDiv.textContent = "CPU's Cards";
cardDeck.appendChild(cpuDiv);

//Function to display cards
const displayCard = (color, name, appendTag) => {
  //cardBorderDiv is for creating border around a card
  cardBorderDiv = document.createElement("div");
  cardBorderDiv.className = "cardBorderDivId";
  cardBorderDiv.style.backgroundColor = color;
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
          specialCardFunc(cpuCardsArray);
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
      const name = clickedCard.firstElementChild.firstElementChild.outerHTML;
      playerToDropCardFunc(name, color);
    }
  }
  if (cpuTurn) {
    allPlayerCards.removeEventListener("click", clickPlayerCard);
    let timeOut = 1000;
    if (playerCardsArray.length == 2) timeOut = 4000;

    setTimeout(() => {
      if (playerCardsArray.length != 0) {
        cpuTurnFunc();
      }
    }, timeOut);
  }
};
allPlayerCards.addEventListener("click", clickPlayerCard);

const specialCardFunc = (array) => {
  for (let iter = 0; iter < 2; iter++) {
    array.push(cardStackCopy.splice(0, 1)[0]);
    displayUnoImageFunc(cpuCards);
  }
};

//Player clicks a card, this function executes
const playerToDropCardFunc = (name, color) => {
  if (dropCardsArray.name == name || dropCardsArray.color == color) {
    let timeOut = 0,
      isBtnClicked = false;
    if (playerCardsArray.length == 2) {
      timeOut = 2000;
      let btn = document.createElement("button");
      btn.className = "unoButton";
      btn.textContent = "UNO";
      drawCards.appendChild(btn);
      btn.onclick = () => {
        isBtnClicked = true;
      };
      setTimeout(() => {
        drawCards.children[2].remove();
      }, timeOut);
    } else isBtnClicked = true;
    setTimeout(() => {
      dropCardsArray = playerCardsArray[clickedIndex];
      playerCardsArray.splice(clickedIndex, 1);
      playerCards.children[clickedIndex].remove();
      if (!isBtnClicked) {
        for (let iter = 0; iter < 2; iter++) {
          playerCardsArray.push(cardStackCopy.splice(0, 1)[0]);
          setTimeout(() => {
            displayCard(
              playerCardsArray[playerCardsArray.length - 1].color,
              playerCardsArray[playerCardsArray.length - 1].name,
              playerCards
            );
          }, timeOut - 1000);
          getCardFunc();
        }
      }
      displayCard(color, name, drawCards);
      drawCards.children[1].remove();

      //if player wins, end game and declare results
      if (playerCardsArray.length == 0) {
        calculteScore(cpuCardsArray);
        setTimeout(() => {
          createModalFunc("Player");
        }, 2000);
      }

      if (
        dropCardsArray.name.length == 2 ||
        dropCardsArray.name == skip ||
        dropCardsArray.name == reverse
      ) {
        let isMatchCard = playerCardsArray.some(
          (cards) =>
            cards.name == dropCardsArray.name ||
            cards.color == dropCardsArray.color
        );
        //when player puts a special card, and has no matching card, then get a card from drawCard
        if (!isMatchCard) {
          allPlayerCards.removeEventListener("click", clickPlayerCard);
          getCardFunc();
        }
      }
    }, timeOut);
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

    //If cpu wins, then show modal
    if (cpuCardsArray.length == 0) {
      calculteScore(playerCardsArray);
      createModalFunc("CPU");
      allPlayerCards.removeEventListener("click", clickPlayerCard);
    }

    if (
      dropCardsArray.name == reverse ||
      dropCardsArray.name == skip ||
      dropCardsArray.name == "+2"
    ) {
      //if cpu puts +2, then two cards must be added to player
      if (dropCardsArray.name == "+2") {
        for (let iter = 0; iter < 2; iter++) {
          playerCardsArray.push(cardStackCopy.shift(0, 1));
          displayCard(
            playerCardsArray[playerCardsArray.length - 1].color,
            playerCardsArray[playerCardsArray.length - 1].name,
            playerCards
          );
        }
      }
      cpuTurn = true;
      setTimeout(() => {
        cpuTurnFunc();
      }, 1000);
    } else {
      allPlayerCards.addEventListener("click", clickPlayerCard);
      cpuTurn = false;
      getCardFunc();
    }
  }
  //Draw card if no match is found in cpuArray
  else {
    cpuCardsArray.push(cardStackCopy.shift());
    displayUnoImageFunc(cpuCards);
    cpuTurn = false;
    allPlayerCards.addEventListener("click", clickPlayerCard);
    getCardFunc();
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
    image = drawCards.querySelector("img");

    const clickFunc = () => {
      let addedCard = cardStackCopy.shift();
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

        let allBtn = div.getElementsByTagName("button");
        allBtn[0].onclick = () => {
          while (drawCards.children.length > 1) {
            drawCards.children[1].remove();
          }
          dropCardsArray = addedCard;
          if (dropCardsArray.name == "+2") {
            specialCardFunc(cpuCardsArray);
            allPlayerCards.addEventListener("click", clickPlayerCard);
            getCardFunc();
          } else if (
            dropCardsArray.name == skip ||
            dropCardsArray.name == reverse
          ) {
            cpuCardsArray.push(cardStackCopy.splice(0, 1)[0]);
            cpuTurn = false;
            allPlayerCards.addEventListener("click", clickPlayerCard);
            getCardFunc();
          } else {
            cpuTurn = true;
            setTimeout(() => {
              cpuTurnFunc();
            }, 1000);
          }
          displayCard(dropCardsArray.color, dropCardsArray.name, drawCards);
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
    if (playerCardsArray.length == 0)
      image.removeEventListener("click", clickFunc);
  }
};
getCardFunc();

const calculteScore = (array) => {
  score = 0;
  array.forEach((element) => {
    if (element.name.length == 1) {
      score += Number(element.name);
    } else score += 20;
  });
  return score;
};

const createModalFunc = (whoWon) => {
  const modal = document.querySelector(".modal-overlay");
  const closeBtn = document.querySelector(".close-modal-btn");
  const modalContent = document.querySelector(".modal-content");
  if (whoWon == "Draw") modalContent.innerHTML = `<p>Match Draw</p>`;
  else
    modalContent.innerHTML = `<p>${whoWon} Won this match</p> <p>${whoWon} score is ${score} </p>`;
  modal.classList.remove("hide");
  const closeModal = (e, clickedOutside) => {
    if (clickedOutside) {
      if (e.target.classList.contains("modal-overlay"))
        modal.classList.add("hide");
    } else modal.classList.add("hide");
  };
  closeBtn.addEventListener("click", closeModal);
};
