//prettier-ignore
let cardsName = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "ban", "rotate", "+2"];
//prettier-ignore
let cardsColor = ["#D72600", "#0956BF", "#379711", "#ECD407"];
let cardStack = [];

//First 52 cards
cardsColor.forEach((color) => {
  cardsName.forEach((name) => {
    cardStack.push({ color: `${color}`, name: `${name}` });
  });
});
//Next 48 cards
cardsColor.forEach((color) => {
  cardsName.forEach((name, index) => {
    if (index != 0) {
      cardStack.push({ color: `${color}`, name: `${name}` });
    }
  });
});

console.log(cardStack);

//Function to display cards
const displayCard = (name, color) => {
  let body = document.getElementsByTagName("body");
  let cardBorderDiv = document.createElement("div");
  let cardDiv = document.createElement("div");
  let upperNoDiv = document.createElement("div");
  let middleNoDiv = document.createElement("div");
  let lowerNoDiv = document.createElement("div");

  cardBorderDiv.style.height = "13rem";
  cardBorderDiv.style.width = "8rem";
  cardBorderDiv.style.border = "2px rgba(0, 0, 0, 0.3) solid";
  cardBorderDiv.style.borderRadius = "5px";

  cardDiv.style.backgroundColor = color;
  cardDiv.style.height = "94%";
  cardDiv.style.width = "90%";
  cardDiv.style.margin = "4% auto";
  cardDiv.style.borderRadius = "5px";
  cardDiv.style.color = "white";

  //Number at upper portion of card
  let div = document.createElement("div");
  if (name != "ban" && name != "rotate") div.textContent = name;
  else {
    let i = document.createElement("i");
    i.className = `fa-solid fa-${name}`;
    i.style.padding = "0.5rem 0rem";
    div.appendChild(i);
  }
  div.style.fontSize = "1.8rem";
  div.style.padding = "0rem 0.2rem";
  upperNoDiv.appendChild(div);

  //Number at middle portion of card
  div = document.createElement("div");
  if (name != "ban" && name != "rotate") div.textContent = name;
  else {
    let i = document.createElement("i");
    i.className = `fa-solid fa-${name}`;
    div.appendChild(i);
  }
  div.style.fontSize = "3rem";
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
  div = document.createElement("div");
  lowerNoDiv.style.padding = "1rem 0.2rem 0rem 5.7rem";
  if (name != "ban" && name != "rotate") div.textContent = name;
  else {
    let i = document.createElement("i");
    i.className = `fa-solid fa-${name}`;
    div.appendChild(i);
    lowerNoDiv.style.padding = "0rem 0.2rem 0rem 5.7rem";
  }
  div.style.fontSize = "1.8rem";
  div.style.transform = "rotate(-180deg)";
  lowerNoDiv.appendChild(div);
  
  cardDiv.appendChild(upperNoDiv);
  cardDiv.appendChild(middleNoDiv);
  cardDiv.appendChild(lowerNoDiv);
  cardBorderDiv.appendChild(cardDiv);
  body[0].appendChild(cardBorderDiv);
};

let cardNameRandom = Math.floor(Math.random() * cardsName.length);
let cardColorRandom = Math.floor(Math.random() * cardsColor.length);
displayCard(cardsName[cardNameRandom], cardsColor[cardColorRandom]);
