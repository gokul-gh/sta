/*            *************************************************************
 *  Name of the challenge  : Pincode Validation               *
 *  Developed for          : VHITECH Training Program         *
 *               Maintenance History                          *
 *  Developer               :                                 *
 *  Creation date           :     Ticket No:                  *
 **************************************************************/

// Declaration

let pinCodeId = document.getElementById("pinId");
let result = document.getElementById("resultId");

//Function to validate pincode
function stringFunction() {
  let pinCode = pinCodeId.value;
  let pinCodePattern = /^\d{6}$/;

  if (pinCodePattern.test(pinCode)) {
    result.value = "Pincode is valid";
  } else {
    result.value = "Invalid pincode";
  }
}

//Function to reset values
function reset() {
  pinCodeId.value = "";
  result.value = "";
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

//Code Logic
