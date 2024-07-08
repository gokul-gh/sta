//Variables declaration
let ageId = document.getElementById("ageId");
let male = document.getElementById("maleGender");
let female = document.getElementById("femaleGender");
let output = document.getElementById("checkId");

const MIN_AGE = 0,
  MAX_AGE = 100;

//Function for age validation
function validate() {
  //Code Statements
  let age = parseInt(ageId.value);
  if (age >= MIN_AGE && age <= MAX_AGE) {
    if (male.checked && age >= 21) {
      output.value = "He is eligible for marriage";
    } else if (female.checked && age >= 18) {
      output.value = "She is eligible for marriage";
    } else if (male.checked && age < 21) {
      output.value = "He is eligible for marriage";
    } else if (female.checked && age < 18) {
      output.innerHTML = "She is not eligible for marriage";
    }
  } else {
    alert("fill all values");
  }
}

//Reset function to default
function reset() {
  ageId.value = "";
  male.checked = false;
  female.checked = false;
  output.innerHTML = "";
}

// Screen date and time declaration.
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
