/*            *************************************************************
 *   Name of the challenge: Longest Country Name             *
 *            Developed by:                                  *
 *           Programmed by:                                  *
 *     Maintenance history:                  Ticket No:      *
 *************************************************************  */

// Declaration
let inputCountryNameId = document.getElementById("arrayItems");
let displayCountryList = document.getElementById("displayArray");
let longestCountryNameId = document.getElementById("maxId");

let countryArray = [],
  iteration = 0,
  maxlength = 0,
  longestCountryName = "";

function addItems() {
  let inputCountryName = inputCountryNameId.value;
  const countryPattern = /^[a-zA-Z]+[ a-zA-z]+$/;

  if (inputCountryNameId.value != "" && countryPattern.test(inputCountryName)) {
    displayCountryList.value += `${inputCountryName}\n`;
    countryArray[iteration] = inputCountryName;
    iteration++;
    inputCountryNameId.value = "";
  } else {
    alert("Enter valid inputs");
  }
}

function longestName() {
  if (countryArray.length != 0) {
    for (countryName of countryArray) {
      if (countryName.length > maxlength) {
        longestCountryName = countryName;
        maxlength = countryName.length;
      }
    }
    longestCountryName =
      longestCountryName.charAt(0).toUpperCase() + longestCountryName.slice(1);
    longestCountryNameId.value = longestCountryName;
  } else {
    alert("Enter valid input. Check if its empty");
  }
}

function reset() {
  countryArray = [];
  iteration = 0;
  maxlength = 0;
  longestCountryName = "";
  inputCountryNameId.value = "";
  displayCountryList.value = "";
  longestCountryNameId.value = "";
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
