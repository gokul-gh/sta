//Code Logic

//Variables declaration
let totalRowsId = document.getElementById("numberId");
let selectOptionId = document.getElementById("selectId");
let forOutput = document.getElementById("showFor");
let whileOutput = document.getElementById("showWhile");
let dowhileOutput = document.getElementById("showDowhile");

//Constant declaration
const MAX_ROW = 10;

//Error declaration
const ERR_MESSAGE = "Enter row values only within 10";

//Function to print number pattern
function pattern() {
  let totalRows = totalRowsId.value;
  let selectOption = selectOptionId.value;
  let row, number;

  forOutput.value = "";
  whileOutput.value = "";
  dowhileOutput.value = "";

  if (totalRows <= MAX_ROW) {
    switch (selectOption) {
      case "forLoop":
        //logic to top portion of the pattern using for loop
        for (row = 1; row <= Math.floor(totalRows / 2) + 1; row++) {
          number = 1;
          for (
            let space = 1;
            space <= Math.floor(totalRows / 2) - row + 1;
            space++
          ) {
            forOutput.value += "  ";
          }
          for (
            let displayPosition = 1;
            displayPosition <= row * 2 - 1;
            displayPosition++
          ) {
            forOutput.value += `${number} `;
            if (displayPosition > row - 1) {
              --number;
            } else {
              ++number;
            }
          }
          forOutput.value += "\n";
        }

        //Logic to print bottom portion of the pattern
        for (row = 1; row <= Math.floor(totalRows / 2); row++) {
          number = 1;
          for (let space = 1; space <= row; space++) {
            forOutput.value += "  ";
          }
          for (
            let displayPosition = 1;
            displayPosition <= totalRows - 2 * row;
            displayPosition++
          ) {
            forOutput.value += `${number} `;
            if (displayPosition > Math.floor((totalRows - 2 * row) / 2)) {
              --number;
            } else {
              ++number;
            }
          }
          forOutput.value += "\n";
        }
        break;

      case "whileLoop":
        row = 1;
        //Logic to print top portion of pattern using while loop
        while (row <= Math.floor(totalRows / 2) + 1) {
          number = 1;
          let space = 1;
          while (space <= Math.floor(totalRows / 2) - row + 1) {
            whileOutput.value += "  ";
            space++;
          }
          let displayPosition = 1;
          while (displayPosition <= row * 2 - 1) {
            displayPosition++;
            whileOutput.value += `${number} `;
            if (displayPosition > row) {
              --number;
            } else {
              ++number;
            }
          }
          whileOutput.value += "\n";
          row++;
        }

        //Logic to print bottom portion of the number pattern using while loop
        row = 1;
        while (row <= Math.floor(totalRows / 2)) {
          let space = 1;
          number = 1;
          while (space <= row) {
            whileOutput.value += "  ";
            space++;
          }
          let displayPosition = 1;
          while (displayPosition <= totalRows - 2 * row) {
            whileOutput.value += `${number} `;
            if (displayPosition > Math.floor((totalRows - 2 * row) / 2)) {
              --number;
            } else {
              ++number;
            }
            displayPosition++;
          }
          whileOutput.value += "\n";
          row++;
        }
        break;

      case "dowhileLoop":
        row = 1;
        //Logic to print top portion of the number pattern using do while loop
        do {
          let space = 1;
          number = 1;
          do {
            if (space > 1) {
              dowhileOutput.value += "  ";
            }
            space++;
          } while (space <= Math.floor(totalRows / 2) - row + 2);
          let displayPosition = 1;
          do {
            displayPosition++;
            dowhileOutput.value += `${number} `;
            if (displayPosition > row) {
              --number;
            } else {
              ++number;
            }
          } while (displayPosition <= row * 2 - 1);
          dowhileOutput.value += "\n";
          row++;
        } while (row <= Math.floor(totalRows / 2) + 1);

        //Logic to print bottom portion of the number pattern using do while loop
        row = 1;
        do {
          let space = 1;
          number = 1;
          do {
            dowhileOutput.value += "  ";
            space++;
          } while (space <= row);
          let displayPosition = 1;
          do {
            dowhileOutput.value += `${number} `;
            if (displayPosition > Math.floor((totalRows - 2 * row) / 2)) {
              --number;
            } else {
              ++number;
            }
            displayPosition++;
          } while (displayPosition <= totalRows - 2 * row);
          dowhileOutput.value += "\n";
          row++;
        } while (row <= Math.floor(totalRows / 2));
        break;
    }
  }
  // Print error message if the rows value inputted is maximum than the limit value 10
  else {
    alert(ERR_MESSAGE);
  }
}

//Reset function to clear values
function reset() {
  totalRowsId.value = "";
  selectOptionId.value = "";
  forOutput.value = "";
  whileOutput.value = "";
  dowhileOutput.value = "";
}

// Declaration
// Screen date and time declaration.
let displayDate = new Date();

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
