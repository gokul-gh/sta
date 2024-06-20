/*************************************************************************************
 *  Name of the challenge  : Validation                                              *
 *  Developed for          : SOFT TECH ASHRAM                                        *
 *                                                                                   *
 *  Developer                 Creation Date                        Activity          *
 *                                                                                   *
 *                                                                                   *
 *                            Maintenance History                                    *
 *                                                                                   *
 *************************************************************************************/

// Declaration
//Variables declaration for inputs
let nameId = document.getElementById("stringId");
let emailId = document.getElementById("mailId");
let creditNoId = document.getElementById("creditId");
let panNoId = document.getElementById("panId");
let gstNoId = document.getElementById("gstId");

//Variables to open model on click and close, print error message
let showModal = document.getElementById("outputModal");
let validateBtn = document.getElementById("buttonId");
let closeBtn = document.getElementById("output");
let errorMessage = document.getElementById("errorValidate");

//Variables declaration to output in modal
let nameOutputId = document.getElementById("nameOutput");
let mailOutputId = document.getElementById("mailOutput");
let creditOutputId = document.getElementById("creditOutput");
let panOutputId = document.getElementById("panOutput");
let gstOutputId = document.getElementById("gstOutput");

//Declaration to close modal on clicking close button
closeBtn.onclick = function () {
  showModal.style.display = "none";
};

//Function to validate inputs using regex
function stringFunction() {
  let name = nameId.value;
  let email = emailId.value;
  let creditNo = creditNoId.value;
  let panNo = panNoId.value;
  let gstNo = gstNoId.value;

  let namePattern = /^[a-zA-z\s]+$/;
  let emailPattern = /^[a-zA-Z0-9-_.]+@[a-zA-Z0-9-_.]+\.[a-zA-z]{2,4}$/;
  let creditCardPattern = /^[0-9]{16}$/;
  let panNoPattern = /^[0-9]{10}$/;
  let gstNoPattern = /^[0-9]{15}$/;

  if (
    namePattern.test(name) &&
    emailPattern.test(email) &&
    creditCardPattern.test(creditNo) &&
    panNoPattern.test(panNo) &&
    gstNoPattern.test(gstNo)
  ) {
    nameOutputId.innerHTML = `:  ${name}`;
    mailOutputId.innerHTML = `: ${email}`;
    creditOutputId.innerHTML = `: ${creditNo}`;
    panOutputId.innerHTML = `: ${panNo}`;
    gstOutputId.innerHTML = `: ${gstNo}`;

    showModal.style.display = "block";
    errorMessage.style.display = "none";
  } else {
    errorMessage.style.display = "block";
  }
}

//Reset function to clear all values
function reset() {
  nameId.value = "";
  emailId.value = "";
  creditNoId.value = "";
  panNoId.value = "";
  gstNoId.value = "";
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
