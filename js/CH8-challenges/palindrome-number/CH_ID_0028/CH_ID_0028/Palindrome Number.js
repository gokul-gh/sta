//Variables declaration
let firstNumberId = document.getElementById("firstNumber");
let secondNumberId = document.getElementById("secondNumber");
let dropdownId = document.getElementById("selectId");
let forOutputArea = document.getElementById("showFor");
let whileOutputArea = document.getElementById("showWhile");
let dowhileOutputArea = document.getElementById("showDowhile");

const MIN_VALUE = 0,
  MAX_VALUE = 51;

//Futction to list palindrome numbers within the input range
function palindrome() {
  let firstNumberValue = parseInt(firstNumberId.value);
  let secondNumberValue = parseInt(secondNumberId.value);
  let dropdownValue = dropdownId.value;
  let iterate = firstNumberValue,
    number,
    lastDigit;

  //clear output values in loop area if the particular loop is not selected
  forOutputArea.value = "";
  whileOutputArea.value = "";
  dowhileOutputArea.value = "";

  if (
    firstNumberId.value != "" &&
    secondNumberId.value != "" &&
    firstNumberValue > MIN_VALUE &&
    secondNumberValue > MIN_VALUE &&
    firstNumberValue < MAX_VALUE &&
    secondNumberValue < MAX_VALUE
  ) {
    switch (dropdownValue) {
      //logic implemented by for loop
      case "forLoop":
        for (; iterate <= secondNumberValue; iterate++) {
          let sum = 0;
          for (number = iterate; number > 0; number = Math.floor(number / 10)) {
            lastDigit = number % 10;
            sum = sum * 10 + lastDigit;
          }

          if (sum == iterate) {
            forOutputArea.value += `${sum}\n`;
          }
        }
        break;

      //logic implemented by while loop
      case "whileLoop":
        while (iterate <= secondNumberValue) {
          let sum = 0;
          number = iterate;
          while (number > 0) {
            lastDigit = number % 10;
            sum = sum * 10 + lastDigit;
            number = Math.floor(number / 10);
          }

          if (sum == iterate) {
            whileOutputArea.value += `${sum}\n`;
          }
          iterate++;
        }
        break;

      //logic implemented by do while loop
      case "dowhileLoop":
        do {
          let sum = 0;
          number = iterate;
          do {
            lastDigit = number % 10;
            sum = sum * 10 + lastDigit;
            number = Math.floor(number / 10);
          } while (number > 0);

          if (sum == iterate) {
            dowhileOutputArea.value += `${sum}\n`;
          }
          iterate++;
        } while (iterate <= secondNumberValue);
    }
  } else {
    alert("Enter valid inputs");
    dropdownId.value = "";
  }
}

//Function to clear input values
function reset() {
  firstNumberId.value = "";
  secondNumberId.value = "";
  dropdownId.value = "";
  forOutputArea.value = "";
  whileOutputArea.value = "";
  dowhileOutputArea.value = "";
}

//Date and Time Declration
let displayDate = new Date();

//Code Logic
const copyText = document.querySelector("#copy");
copyText.addEventListener("click", () => {
  navigator.clipboard.writeText(document.querySelector("#successCode").value);
  copyText.textContent = "copied";
  setTimeout(() => {
    copyText.innerHTML = `<span>&#128203; </span>copy`;
  }, 2000);
});

//Modal
const toggleSuccessModal = () => successModal.classList.toggle("active");
const toggleErrorModal = () => errorModal.classList.toggle("active");
window.addEventListener("click", function (event) {
  if (event.target === successModal) successModal.classList.remove("active");
  if (event.target === errorModal) errorModal.classList.remove("active");
});
