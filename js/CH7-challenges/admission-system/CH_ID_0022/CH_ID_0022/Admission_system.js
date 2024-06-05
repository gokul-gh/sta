//Code Logic Statements

//Variable declarations
let maths = document.getElementById("maths");
let physics = document.getElementById("physics");
let chemistry = document.getElementById("chemistry");
let cutoff = document.getElementById("cutoff");
let oc = document.getElementById("oc");
let bc = document.getElementById("bc");
let sc = document.getElementById("sc");
let eligiblity = document.getElementById("result");

//Constant declarations
const MIN_MARK = 0;
const MAX_MARK = 100;

//Function to find the eligible college based on cutoff mark 
function findCutOff() {
  let mathsMark = parseInt(maths.value);
  let physicsMark = parseInt(physics.value);
  let chemistryMark = parseInt(chemistry.value);
  let cutoffMark;

  cutoffMark = mathsMark + physicsMark / 2 + chemistryMark / 2;
  cutoff.value = cutoffMark;

  if (
    mathsMark >= MIN_MARK &&
    mathsMark <= MAX_MARK &&
    physicsMark >= MIN_MARK &&
    physicsMark <= MAX_MARK &&
    chemistryMark >= MIN_MARK &&
    chemistryMark <= MAX_MARK
  ) {
    switch (true) {
      case oc.checked:
        if (cutoffMark >= 195) {
          eligiblity.innerHTML = "Level 1 Government Engineering College";
        } else if (cutoffMark >= 190 && cutoffMark < 195) {
          eligiblity.innerHTML = "Level 2 Government Engineering College";
        } else if (cutoffMark >= 185 && cutoffMark < 190) {
          eligiblity.innerHTML = "Level 1 Private Engineering College";
        } else if (cutoffMark >= 180 && cutoffMark < 185) {
          eligiblity.innerHTML = "Level 2 Private Engineering College";
        }
        break;

      case bc.checked:
        if (cutoffMark >= 194) {
          eligiblity.innerHTML = "Level 1 Government Engineering College";
        } else if (cutoffMark >= 189 && cutoffMark < 194) {
          eligiblity.innerHTML = "Level 2 Government Engineering College";
        } else if (cutoffMark >= 184 && cutoffMark < 189) {
          eligiblity.innerHTML = "Level 1 Private Engineering College";
        } else if (cutoffMark >= 179 && cutoffMark < 184) {
          eligiblity.innerHTML = "Level 2 Private Engineering College";
        }
        break;

      case sc.checked:
        if (cutoffMark >= 193) {
          eligiblity.innerHTML = "Level 1 Government Engineering College";
        } else if (cutoffMark >= 188 && cutoffMark < 193) {
          eligiblity.innerHTML = "Level 2 Government Engineering College";
        } else if (cutoffMark >= 183 && cutoffMark < 188) {
          eligiblity.innerHTML = "Level 1 Private Engineering College";
        } else if (cutoffMark >= 178 && cutoffMark < 183) {
          eligiblity.innerHTML = "Level 2 Private Engineering College";
        }
        break;
    }
  } else {
    alert("Enter mark raging between the values 0 to 100");
  }
}

//Function to clear the input values
function reset() {
    maths.value = "";
    physics.value = "";
    chemistry.value = "";
    cutoff.value = "";
    oc.checked = false;
    bc.checked = false;
    sc.checked = false;
    eligiblity.innerHTML = "";
}

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
