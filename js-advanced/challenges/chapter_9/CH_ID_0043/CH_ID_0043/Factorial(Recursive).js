/*            *************************************************************
 *  Name of the challenge   : Factorial : Recursive function  *
 *  Developed for           : VHITECH Training Program        *
 *               Maintenance History                          *
 *  Developer               :                                 *
 *  Creation date           :               Ticket No:        *
 ************************************************************* */

//Variables declaration
let inputNumberId = document.getElementById("numberId");
let result = document.getElementById("resultId");

//Function to calculate factorial of a number
function recursiveFunction() {
  let factorial = 1,
    iteration = 1;

  let inputNumber = parseInt(inputNumberId.value);
  recursive(inputNumber, factorial, iteration);
}

//Recursive function declaration to find factorial
function recursive(inputNumber, factorial, iteration) {
  if (iteration > inputNumber) {
    result.value = factorial;
    return;
  }
  factorial *= iteration;
  recursive(inputNumber, factorial, iteration + 1);
}

//Reset function to clear all input values
function reset() {
  factorial = 1;
  inputNumberId.value = "";
  result.value = "";
}

// Date and time declaration.
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
