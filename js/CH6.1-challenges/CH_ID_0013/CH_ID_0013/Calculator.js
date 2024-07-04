//code Statements

//variable declarations
let firstNumberId = document.getElementById("firstNumber");
let secondNumberId = document.getElementById("secondNumber");
let resultNumber = document.getElementById("resultId");

//Addition operation
function addOperation() {
  let firstNumber = parseInt(firstNumberId.value);
  let secondNumber = parseInt(secondNumberId.value);
  if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
    let addition = parseInt(firstNumber) + parseInt(secondNumber);
    resultNumber.value = addition;
  } else {
    alert("Enter valid inputs");
  }
}

//Subtraction operation
function subOperation() {
  let firstNumber = parseInt(firstNumberId.value);
  let secondNumber = parseInt(secondNumberId.value);
  if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
    let subtraction = parseInt(firstNumber) - parseInt(secondNumber);
    resultNumber.value = subtraction;
  } else {
    alert("Enter valid inputs");
  }
}

//Multiplication operation
function multiplyOperation() {
  let firstNumber = parseInt(firstNumberId.value);
  let secondNumber = parseInt(secondNumberId.value);
  if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
    let multiplication = parseInt(firstNumber) * parseInt(secondNumber);
    resultNumber.value = multiplication;
  } else {
    alert("Enter valid inputs");
  }
}

//Division operation
function divideOperation() {
  let firstNumber = parseInt(firstNumberId.value);
  let secondNumber = parseInt(secondNumberId.value);
  if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
    let division = parseInt(firstNumber) / parseInt(secondNumber);
    resultNumber.value = division;
  } else {
    alert("Enter valid inputs");
  }
}

//Resetting fields
function reset() {
  firstNumber.value = "";
  secondNumber.value = "";
  resultNumber.value = "";
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
