//Variables declaration
let inputStringId = document.getElementById("stringId");
let indexPositionId = document.getElementById("searchResult");

function stringFunction() {
  let inputString = inputStringId.value;
  let isVowelPresent = false;
  indexPositionId.value = "";

  if (inputStringId.value != "") {
    for (let iteration = 0; iteration < inputString.length; iteration++) {
      if (
        inputString[iteration] == "a" ||
        inputString[iteration] == "e" ||
        inputString[iteration] == "i" ||
        inputString[iteration] == "o" ||
        inputString[iteration] == "u" ||
        inputString[iteration] == "A" ||
        inputString[iteration] == "E" ||
        inputString[iteration] == "I" ||
        inputString[iteration] == "O" ||
        inputString[iteration] == "U"
      ) {
        indexPositionId.value += `${iteration} `;
        isVowelPresent = true;
      }
    }
    if (isVowelPresent == false) {
      indexPositionId.value = "No vowel found";
    }
  } else {
    alert("Enter valid inputs");
  }
}

function reset() {
  inputStringId.value = "";
  indexPositionId.value = "";
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
