//Variables declaration
let inputStringId = document.getElementById("stringId");
let splitStringId = document.getElementById("searchResult");
//Constant declaration
const MAX_VALUE = 55;

//Function to perform split method in a given string
function stringFunction() {
  let inputString = inputStringId.value;

  if (inputStringId.value != "" && inputString.length < MAX_VALUE) {
    splitStringId.value = inputString.split(" ");
  } else {
    alert("Enter valid inputs");
  }
}

//Function to clear input values
function reset() {
  inputStringId.value = "";
  splitStringId.value = "";
}

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
