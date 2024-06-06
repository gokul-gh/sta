//Variables declaration
let firstNumberId = document.getElementById("firstNumber");
let secondNumberId = document.getElementById("secondNumber");
let outputArea = document.getElementById("resultId");

function dowhileLoop() {
  // Code statements
  let firstNumberValue = firstNumberId.value;
  let secondNumberValue = secondNumberId.value;
  let iteration = firstNumberValue;

  outputArea.value = "";

  do {
    outputArea.value += `${iteration}\n`;
    iteration++;
  } while (iteration <= secondNumberValue);
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
