//Variables declaration
let firstNumberId = document.getElementById("firstNumber");
let secondNumberId = document.getElementById("secondNumber");
let thirdNumberId = document.getElementById("thirdNumber");
let result = document.getElementById("resultId");

//Arithmetic operation function
function addFunction() {
  let firstNumberValue = parseInt(firstNumberId.value);
  let secondNumberValue = parseInt(secondNumberId.value);
  let thirdNumberValue = parseInt(thirdNumberId.value);

  result.value = firstNumberValue + secondNumberValue + thirdNumberValue;
}

//Date and Time declaration
let displayDate = new Date();
document.getElementById("dateOutput").innerHTML =
  displayDate.toLocaleDateString();
document.getElementById("timeOutput").innerHTML =
  displayDate.toLocaleTimeString();

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
