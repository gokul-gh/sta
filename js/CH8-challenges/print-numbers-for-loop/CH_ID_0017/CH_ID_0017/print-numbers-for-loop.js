//Variables declaration
let firstNumberId = document.getElementById("firstNumber");
let secondNumberId = document.getElementById("secondNumber");
let outputResult = document.getElementById("resultId");
//Constant declaration
const MIN_VALUE = 0,
  MAX_VALUE = 500;

function forLoop() {
  // Code statements
  let firstNumberValue = parseInt(firstNumberId.value);
  let secondNumberValue = parseInt(secondNumberId.value);

  if (
    firstNumberId.value != "" &&
    secondNumberId.value != "" &&
    firstNumberValue >= MIN_VALUE &&
    secondNumberValue >= MIN_VALUE &&
    firstNumberValue <= MAX_VALUE &&
    secondNumberValue <= MAX_VALUE &&
    firstNumberValue < secondNumberValue
  ) {
    for (
      let iteration = firstNumberValue;
      iteration <= secondNumberValue;
      iteration++
    ) {
      iteration < secondNumberValue
        ? (outputResult.value += `${iteration},`)
        : (outputResult.value += `${iteration}`);
    }
  } else {
    alert("Fill only valid inputs");
  }
}

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
