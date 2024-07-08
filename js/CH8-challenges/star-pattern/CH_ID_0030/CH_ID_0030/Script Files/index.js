/*************************************************************************************
 *  Name of the challenge  : Star Pattern                                            *
 *  Developed for          : SOFT TECH ASHRAM                                        *
 *                                                                                   *
 *  Developer                 Creation Date                        Activity          *
 *                                                                                   *
 *                                                                                   *
 *                            Maintenance History                                    *
 *                                                                                   *
 *************************************************************************************/

//Variables Declaration
let noOfRowsId = document.getElementById("numberId");
let textChoiceId = document.getElementById("chooseText");
let repeatId = document.getElementById("chooseRepeat");
let loopId = document.getElementById("selectId");
let forOutput = document.getElementById("showFor");
let whileOutput = document.getElementById("showWhile");
let dowhileOutput = document.getElementById("showDowhile");

//Constant declaration
const MAX_ROW = 10,
  MIN_ROW = 1;

//Error message declaration
const ERR_MESSAGE = "No.of.rows value is greater than 10. Enter less than 10.";

//Fuction to display the star pattern
function repeat() {
  let noOfRows = noOfRowsId.value;
  let textChoice = textChoiceId.value;
  let repeatOption = repeatId.value;
  let loopOption = loopId.value;
  let row;

  //Clear outputs at each initial time
  forOutput.value = "";
  whileOutput.value = "";
  dowhileOutput.value = "";

  if (
    noOfRowsId.value != "" &&
    textChoiceId.value != "" &&
    repeatId.value != "" &&
    loopId.value != "" &&
    noOfRows >= MIN_ROW &&
    noOfRows <= MAX_ROW
  ) {
    switch (loopOption) {
      case "forLoop":
        //print top part of star pattern
        for (row = 1; row <= Math.floor(noOfRows / 2) + 1; row++) {
          for (
            let space = 0;
            space <= Math.floor(noOfRows / 2) - row + 1;
            space++
          ) {
            forOutput.value += " ";
          }
          for (let star = 1; star <= 2 * row - 1; star++) {
            if (repeatOption == "withoutRepeat") {
              if (star == 1 || star == 2 * row - 1) {
                forOutput.value += textChoice;
              }
              if (star > 1 && star < 2 * row - 1) {
                forOutput.value += " ";
              }
            } else {
              forOutput.value += textChoice;
            }
          }
          forOutput.value += "\n";
        }

        //Print bottom part of star pattern
        for (row = 1; row <= Math.floor(noOfRows / 2); row++) {
          for (let space = 0; space <= row; space++) {
            forOutput.value += " ";
          }
          for (let star = 1; star <= noOfRows - 2 * row; star++) {
            if (repeatOption == "withoutRepeat") {
              if (star == 1 || star == noOfRows - 2 * row) {
                forOutput.value += textChoice;
              } else {
                forOutput.value += " ";
              }
            } else {
              forOutput.value += textChoice;
            }
          }
          forOutput.value += "\n";
        }
        break;

      case "whileLoop":
        //Print top part of star pattern
        row = 1;
        while (row <= Math.floor(noOfRows / 2) + 1) {
          let space = 0;
          while (space <= Math.floor(noOfRows / 2) - row + 1) {
            whileOutput.value += " ";
            space++;
          }
          let star = 1;
          while (star <= 2 * row - 1) {
            if (repeatOption == "withoutRepeat") {
              if (star == 1 || star == 2 * row - 1) {
                whileOutput.value += textChoice;
              }
              if (star > 1 && star < 2 * row - 1) {
                whileOutput.value += " ";
              }
            } else {
              whileOutput.value += textChoice;
            }
            star++;
          }
          whileOutput.value += "\n";
          row++;
        }

        //Print bottom part of star pattern
        row = 1;
        while (row <= Math.floor(noOfRows / 2)) {
          let space = 0;
          while (space <= row) {
            whileOutput.value += " ";
            space++;
          }
          let star = 1;
          while (star <= noOfRows - 2 * row) {
            if (repeatOption == "withoutRepeat") {
              if (star == 1 || star == noOfRows - 2 * row) {
                whileOutput.value += textChoice;
              } else {
                whileOutput.value += " ";
              }
            } else {
              whileOutput.value += textChoice;
            }
            star++;
          }
          whileOutput.value += "\n";
          row++;
        }
        break;

      case "dowhileLoop":
        //Print top part of star pattern
        row = 1;
        do {
          let space = 0;
          do {
            dowhileOutput.value += " ";
            space++;
          } while (space <= Math.floor(noOfRows / 2) - row + 1);
          let star = 1;
          do {
            if (repeatOption == "withoutRepeat") {
              if (star == 1 || star == 2 * row - 1) {
                dowhileOutput.value += textChoice;
              }
              if (star > 1 && star < 2 * row - 1) {
                dowhileOutput.value += " ";
              }
            } else {
              dowhileOutput.value += textChoice;
            }
            star++;
          } while (star <= 2 * row - 1);
          dowhileOutput.value += "\n";
          row++;
        } while (row <= Math.floor(noOfRows / 2) + 1);

        //Print bottom part of star pattern
        row = 1;
        do {
          let space = 0;
          do {
            dowhileOutput.value += " ";
            space++;
          } while (space <= row);
          let star = 1;
          do {
            if (repeatOption == "withoutRepeat") {
              if (star == 1 || star == noOfRows - 2 * row) {
                dowhileOutput.value += textChoice;
              } else {
                dowhileOutput.value += " ";
              }
            } else {
              dowhileOutput.value += textChoice;
            }
            star++;
          } while (star <= noOfRows - 2 * row);
          dowhileOutput.value += "\n";
          row++;
        } while (row <= Math.floor(noOfRows / 2));
        break;
    }
  } else {
    alert(ERR_MESSAGE);
    loopId.value = "";
  }
}

//Function to clear input values
function reset() {
  forOutput.value = "";
  whileOutput.value = "";
  dowhileOutput.value = "";
  noOfRowsId.value = "";
  textChoiceId.value = "";
  repeatId.value = "";
  loopId.value = "";
}

//Modal
const toggleSuccessModal = () => successModal.classList.toggle("active");
const toggleErrorModal = () => errorModal.classList.toggle("active");
window.addEventListener("click", function (event) {
  if (event.target === successModal) successModal.classList.remove("active");
  if (event.target === errorModal) errorModal.classList.remove("active");
});

//copy to clipboard
const copyText = document.querySelector("#copy");
copyText.addEventListener("click", () => {
  navigator.clipboard.writeText(document.querySelector("#successCode").value);
  copyText.textContent = "copied";
  setTimeout(() => {
    copyText.innerHTML = `<span>&#128203; </span>copy`;
  }, 2000);
});
