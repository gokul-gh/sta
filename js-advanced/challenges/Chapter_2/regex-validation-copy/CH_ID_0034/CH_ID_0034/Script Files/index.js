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

let nameError = document.getElementById("nameErrorId");
let emailError = document.getElementById("mailErrorId");
let creditCardError = document.getElementById("creditCardErrorId");
let panCardError = document.getElementById("panCardErrorId");
let gstError = document.getElementById("gstErrorId");

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
  let panNoPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  let gstNoPattern =
    /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[0-9]{1}[A-Z]{1}[0-9]{1}$/;

  if (
    nameId.value != "" &&
    emailId.value != "" &&
    creditNoId.value != "" &&
    panNoId.value != "" &&
    gstNoId.value != ""
  ) {
    if (namePattern.test(name)) {
      nameOutputId.innerHTML = `:  ${name}`;
      nameError.style.display = "none";
    } else {
      nameError.style.display = "block";
    }

    if (emailPattern.test(email)) {
      mailOutputId.innerHTML = `: ${email}`;
      emailError.style.display = "none";
    } else {
      emailError.style.display = "block";
    }

    if (creditCardPattern.test(creditNo)) {
      creditOutputId.innerHTML = `: ${creditNo}`;
      creditCardError.style.display = "none";
    } else {
      creditCardError.style.display = "block";
    }

    if (panNoPattern.test(panNo)) {
      panOutputId.innerHTML = `: ${panNo}`;
      panCardError.style.display = "none";
    } else {
      panCardError.style.display = "block";
    }

    if (gstNoPattern.test(gstNo)) {
      gstOutputId.innerHTML = `: ${gstNo}`;
      gstError.style.display = "none";
    } else {
      gstError.style.display = "block";
    }

    if (
      namePattern.test(name) &&
      emailPattern.test(email) &&
      creditCardPattern.test(creditNo) &&
      panNoPattern.test(panNo) &&
      gstNoPattern.test(gstNo)
    ) {
      showModal.style.display = "block";
    } else {
      showModal.style.display = "none";
    }
  } else {
    alert("Enter all inputs");
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
