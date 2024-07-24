//Variables declaration
let inputStringId = document.getElementById("stringId");
let indexPositionId = document.getElementById("searchResult");

function stringFunction() {
  let inputString = inputStringId.value;
  let isVowelPresent = false;
  indexPositionId.value = "";

  if (inputStringId.value != "") {
    if (inputString.indexOf("a") >= 0) {
      indexPositionId.value += inputString.indexOf("a");
    }
    if (inputString.indexOf("e") >= 0) {
      indexPositionId.value += inputString.indexOf("e");
    }
    if (inputString.indexOf("i") >= 0) {
      indexPositionId.value += inputString.indexOf("i");
    }
    if (inputString.indexOf("o") >= 0) {
      indexPositionId.value += inputString.indexOf("o");
    }
    if (inputString.indexOf("u") >= 0) {
      indexPositionId.value += inputString.indexOf("u");
    }

    if (indexPositionId.value == "") {
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
