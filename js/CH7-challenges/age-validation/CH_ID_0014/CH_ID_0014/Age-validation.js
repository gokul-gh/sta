//Variables declaration
let age = document.getElementById("ageId");
let male = document.getElementById("maleGender");
let female = document.getElementById("femaleGender");
let output = document.getElementById("checkId");

//Function for age validation
function validate() {
  //Code Statements
  if (
    (male.checked && age.value >= 21) ||
    (female.checked && age.value >= 18)
  ) {
    output.innerHTML = "Eligible for marriage";
  } else if (
    (male.checked && age.value < 21) ||
    (female.checked && age.value < 18)
  ) {
    output.innerHTML = "Not eligible";
  } 
}

//Reset function to default
function reset() {
    age.value = "";
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
