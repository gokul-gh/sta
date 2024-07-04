/*            *************************************************************
 *  Name of the challenge   : Array Of Multiples               *
 *  Developed for           : VHITECH Training Program         *
 *               Maintenance History                          *
 *  Developer               :                                  *
 *  Creation date           :               Ticket No:        *
 ************************************************************ */

// Declaration

//Variable declaration
let firstNumberId = document.getElementById("firstNumber");
let secondNumberId = document.getElementById("secondNumber");
let result = document.getElementById("resultId");

//Function for creating the multiples of a number
function multiple() {
  let firstNumber = firstNumberId.valueAsNumber;
  let secondNumber = secondNumberId.valueAsNumber;
  if (
    !isNaN(firstNumber) &&
    !isNaN(secondNumber) &&
    firstNumber > 0 &&
    firstNumber <= 100 &&
    secondNumber > 0 &&
    secondNumber <= 100
  ) {
    for (let startValue = 1; startValue <= secondNumber; startValue++) {
      result.value += firstNumber * startValue + " ";
    }
  } else {
    alert("Enter valid inputs");
  }
}

//Reset function for clearing the output
function reset() {
  firstNumberId.value = "";
  secondNumberId.value = "";
  result.value = "";
}

// Screen date and time declaration.
let displayDate = new Date();
//copy to clipboard
const copyText = document.querySelector("#copy");
copyText.addEventListener("click", () => {
  navigator.clipboard.writeText(document.querySelector("#successCode").value);
  copyText.textContent = "copied";
  setTimeout(() => {
    copyText.innerHTML = `<span>&#128203; </span>copy`;
  }, 2000);
});

//modal
const toggleSuccessModal = () => successModal.classList.toggle("active");
const toggleErrorModal = () => errorModal.classList.toggle("active");
window.addEventListener("click", function (event) {
  if (event.target === successModal) successModal.classList.remove("active");
  if (event.target === errorModal) errorModal.classList.remove("active");
});
//Input declaration
