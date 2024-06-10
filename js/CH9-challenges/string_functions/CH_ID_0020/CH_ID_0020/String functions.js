//Code Logic
//Variables declaration
let inputStringId = document.getElementById("stringId");
let searchStringId = document.getElementById("searchId");

let searchOutputId = document.getElementById("searchResult");
let palindromeOutputId = document.getElementById("palindromeId");
let reverseOutputId = document.getElementById("reverseId");

//Functions to do string operations
function stringFunction() {
  let inputString = inputStringId.value;
  let searchString = searchStringId.value;
  let reverseString = "";

  let isSearchtrue = inputString.includes(searchString);

  if (isSearchtrue == true) {
    searchOutputId.value = searchString;

    for (let iteration = searchString.length - 1; iteration >= 0; iteration--) {
      reverseString += searchString[iteration];
    }

    if (searchString == reverseString) {
      palindromeOutputId.value = "Palindrome";
    } else {
      palindromeOutputId.value = "Not a palindrome";
    }
    reverseOutputId.value = reverseString;
  }
}

function reset() {
  inputStringId.value = "";
  searchStringId.value = "";
  searchOutputId.value = "";
  palindromeOutputId.value = "";
  reverseOutputId.value = "";
}

//Date and Time declarations
let displayDate = new Date();

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
