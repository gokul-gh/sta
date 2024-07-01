/*            *************************************************************
 *  Name of the challenge   : Percentage Calculation         *
 *  Developed for           : VHITECH Training Program       *
 *               Maintenance History                         *
 *  Developer               :                                *
 *  Creation date           :               Ticket No:       *
 ************************************************************ */

//Variables declaration
let firstNumberId = document.getElementById("firstNumber");
let secondNumberId = document.getElementById("secondNumber");
let result = document.getElementById("resultId");

//Percentage calculation function
function calculate() {
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
    result.valueAsNumber = firstNumber * (secondNumber / 100);
  } else {
    alert("Enter a valid number");
  }
}

//Reset function
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

//Modal
const toggleSuccessModal = () => successModal.classList.toggle("active");
const toggleErrorModal = () => errorModal.classList.toggle("active");
window.addEventListener("click", function (event) {
  if (event.target === successModal) successModal.classList.remove("active");
  if (event.target === errorModal) errorModal.classList.remove("active");
});
