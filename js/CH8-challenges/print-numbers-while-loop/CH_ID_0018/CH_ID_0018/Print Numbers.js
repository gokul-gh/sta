//Variables declaration
let firstNumberId = document.getElementById("firstNumber");
let secondNumberId = document.getElementById("secondNumber");
let outputArea = document.getElementById("resultId");
//Constant declaration
const MIN_VALUE = 0,
  MAX_VALUE = 500;

function whileLoop() {
  // Code statements
  outputArea.value = "";
  let firstNumberValue = parseInt(firstNumberId.value);
  let secondNumberValue = parseInt(secondNumberId.value);
  let iteration = firstNumberValue;

  if (
    firstNumberId.value != "" &&
    secondNumberId.value != "" &&
    firstNumberValue >= MIN_VALUE &&
    secondNumberValue >= MIN_VALUE &&
    firstNumberValue <= MAX_VALUE &&
    secondNumberValue <= MAX_VALUE &&
    firstNumberValue < secondNumberValue
  ) {
    while (iteration <= secondNumberValue) {
      if (iteration < secondNumberValue) {
        outputArea.value += `${iteration},`;
      } else {
        outputArea.value += `${iteration}`;
      }
      iteration++;
    }
  } else {
    alert("Fill only valid inputs");
  }
}

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
