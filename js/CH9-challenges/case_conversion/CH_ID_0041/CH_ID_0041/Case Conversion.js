/*            *************************************************************
 *  Name of the challenge   : Case Conversion                *
 *  Developed for           : VHITECH Training Program       *
 *               Maintenance History                         *
 *  Developer               :                                *
 *  Creation date           :               Ticket No:       *
 ************************************************************ */

// Declaration

//Input declaration
let stringInputId = document.getElementById("stringId");
let resultId = document.getElementById("resultId");

const VALID_CHARACTERS = /^[a-zA-Z\s]+$/;

//Function to invert case
function caseConvert() {
  let stringInput = stringInputId.value;

  if (stringInput.value != "" && VALID_CHARACTERS.test(stringInput)) {
    for (let iteration = 0; iteration < stringInput.length; iteration++) {
      if (stringInput[iteration] == stringInput[iteration].toLowerCase()) {
        resultId.value += stringInput[iteration].toUpperCase();
      } else {
        resultId.value += stringInput[iteration].toLowerCase();
      }
    }
  } else {
    alert("Enter valid inputs");
  }
}

function reset() {
  stringInputId.value = "";
  resultId.value = "";
}

// Screen date and time declaration.
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
