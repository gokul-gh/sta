//Variables declaration
let firstNumberId = document.getElementById("firstNumber");
let secondNumberId = document.getElementById("secondNumber");
let outputArea = document.getElementById("resultId");
const MIN_VALUE = 0,
  MAX_VALUE = 500;

function dowhileLoop() {
  // Code statements
  let firstNumberValue = parseInt(firstNumberId.value);
  let secondNumberValue = parseInt(secondNumberId.value);
  let iteration = firstNumberValue;

  outputArea.value = "";
  if (
    firstNumberId.value != "" &&
    secondNumberId.value != "" &&
    firstNumberValue >= MIN_VALUE &&
    secondNumberValue >= MIN_VALUE &&
    firstNumberValue <= MAX_VALUE &&
    secondNumberValue <= MAX_VALUE &&
    firstNumberValue < secondNumberValue
  ) {
    do {
      if (iteration >= secondNumberValue) {
        outputArea.value += `${iteration}`;
      } else {
        outputArea.value += `${iteration},`;
      }
      iteration++;
    } while (iteration <= secondNumberValue);
    outputArea.value.trim();
  } else {
    alert("Fill only valid inputs");
  }
}

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
