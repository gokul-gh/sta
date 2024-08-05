//prettier-ignore
let cardName = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "skip", "reverse", "drawTwo"];
//prettier-ignore
let cardColor = ["red", "yellow", "green", "blue"];

let cardStack = [];

cardColor.forEach((color) => {
  cardName.forEach((name) => {
    cardStack.push({ color: `${color}`, name: `${name}` });
  });
});

cardColor.forEach((color) => {
  cardName.forEach((name, index) => {
    if (index != 0) {
      cardStack.push({ color: `${color}`, name: `${name}` });
    }
  });
});

console.log(cardStack);
