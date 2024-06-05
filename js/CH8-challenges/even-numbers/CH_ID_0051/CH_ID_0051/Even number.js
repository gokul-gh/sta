//Variable declaration
let firstNumberId = document.getElementById("firstNumber");
let secondNumberId = document.getElementById("secondNumber");
let dropdownId = document.getElementById("selectId");
let forLoopOutput = document.getElementById("showFor");
let whileLoopOutput = document.getElementById("showWhile");
let dowhileLoopOutput = document.getElementById("showDowhile");
let initialize;

//Function to print even numbers in a range
function evaluvate() {
  let firstNumber = firstNumberId.value;
  let secondNumber = secondNumberId.value;
  let dropdown = dropdownId.value;

  switch (true) {
    case dropdown == "forLoop":
      for (initialize = firstNumber; initialize <= secondNumber; initialize++) {
        if (initialize % 2 == 0) {
          forLoopOutput.value += `${initialize} `;
        }
      }
      break;

    case dropdown == "whileLoop":
      initialize = firstNumber;
      while (initialize <= secondNumber) {
        if (initialize % 2 == 0) {
          whileLoopOutput.value += `${initialize} `;
        }
        initialize++;
      }
      break;

    case dropdown == "doWhileLoop":
      initialize = firstNumber;
      do {
        if (initialize % 2 == 0) {
          dowhileLoopOutput.value += `${initialize} `;
        }
        initialize++;
      } while (initialize <= secondNumber);
      break;
  }
}

//Reset function to clear all values
function reset() {
  firstNumberId.value = "";
  secondNumberId.value = "";
  dropdownId.value = "";
  forLoopOutput.value = "";
  whileLoopOutput.value = "";
  dowhileLoopOutput.value = "";
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
