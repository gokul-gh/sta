//Code Logic

//Variables declaration
let maths = document.getElementById("maths");
let physics = document.getElementById("physics");
let chemistry = document.getElementById("chemistry");
let cutoff = document.getElementById("cutoff");
let eligiblity = document.getElementById("result");

//Constant declaration
const MIN_MARK = 0;
const MAX_MARK = 100;

//Function to find eligible college
function findCutOff() {
  let mathsMark = parseInt(maths.value);
  let physicsMark = parseInt(physics.value);
  let chemistryMark = parseInt(chemistry.value);
  let cutoffMark;

  if (
    mathsMark >= 0 &&
    mathsMark <= 100 &&
    physicsMark >= 0 &&
    physicsMark <= 50 &&
    chemistryMark >= 0 &&
    chemistryMark <= 50
  ) {
    cutoffMark = mathsMark + physicsMark + chemistryMark;
    cutoff.value = cutoffMark;

    switch (true) {
      case cutoffMark >= 195 && cutoffMark <= 200:
        eligiblity.innerHTML = "Level 1 Government Engineering College";
        break;
      case cutoffMark >= 190 && cutoffMark < 195:
        eligiblity.innerHTML = "Level 2 Government Engineering College";
        break;
      case cutoffMark >= 185 && cutoffMark < 190:
        eligiblity.innerHTML = "Level 1 Private Engineering College";
        break;
      case cutoffMark >= 180 && cutoffMark < 185:
        eligiblity.innerHTML = "Level 2 Private Engineering College";
        break;
    }
    if (cutoffMark < 180) {
      eligiblity.innerHTML = "";
    }
  } else {
    alert("Enter mark values only within the range.");
  }
}

//Reset function to clear input values
function reset() {
  maths.value = "";
  physics.value = "";
  chemistry.value = "";
  cutoff.value = "";
  eligiblity.innerHTML = "";
}

//Date and Time Declaration
let displayDate = new Date();
document.getElementById("datOutput").innerHTML =
  displayDate.toLocaleDateString();
document.getElementById("timOutput").innerHTML =
  displayDate.toLocaleTimeString();
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
