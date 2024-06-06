//Variables declaration
let firstNumberId = document.getElementById("firstNumber");
let secondNumberId = document.getElementById("secondNumber");
let outputResult = document.getElementById("resultId");

function forLoop() {
  // Code statements
  let firstNumberValue = firstNumberId.value;
  let secondNumberValue = secondNumberId.value;

  for (
    let iteration = firstNumberValue;
    iteration <= secondNumberValue;
    iteration++
  ) {
    outputResult.value += `${iteration}\n`;
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
