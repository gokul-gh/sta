//code statements

//Variables declaration
let studentName = document.getElementById("nameId");
let languageSubject = document.getElementById("langId");
let physicsSubject = document.getElementById("physicsId");
let mathsSubject = document.getElementById("mathsId");
let chemistrySubject = document.getElementById("chemistryId");
let biologySubject = document.getElementById("bioId");
let total = document.getElementById("totalId");
let average = document.getElementById("avgId");
let grade = document.getElementById("gradeId");
let pass = document.getElementById("passId");
let cutoff = document.getElementById("cutoffId");
let eligiblity = document.getElementById("eligibleId");

//Constant declaration
const MAX_MARK = 100;
const MIN_MARK = 0;

//Function to calculate mark statement
function calculate() {
  let languageMark = parseInt(languageSubject.value);
  let physicsMark = parseInt(physicsSubject.value);
  let mathsMark = parseInt(mathsSubject.value);
  let chemistryMark = parseInt(chemistrySubject.value);
  let biologyMark = parseInt(biologySubject.value);
  let totalMark;
  let averageMark;
  let cutoffMark;

  if (
    languageMark >= MIN_MARK &&
    languageMark <= MAX_MARK &&
    physicsMark >= MIN_MARK &&
    physicsMark <= MAX_MARK &&
    mathsMark >= MIN_MARK &&
    mathsMark <= MAX_MARK &&
    chemistryMark >= MIN_MARK &&
    chemistryMark <= MAX_MARK &&
    biologyMark >= MIN_MARK &&
    biologyMark <= MAX_MARK
  ) {
    totalMark =
      languageMark + physicsMark + mathsMark + chemistryMark + biologyMark;
    total.value = totalMark;
    averageMark = totalMark / 5;
    average.value = averageMark;

    switch (true) {
      case averageMark > 90:
        grade.value = "A";
        break;
      case averageMark > 60 && averageMark <= 90:
        grade.value = "B";
        break;
      case averageMark > 40 && averageMark <= 60:
        grade.value = "C";
        break;
    }

    cutoffMark = mathsMark + physicsMark / 2 + chemistryMark / 2;
    cutoff.value = cutoffMark;

    if (
      languageMark > 40 &&
      physicsMark > 40 &&
      mathsMark > 40 &&
      chemistryMark > 40 &&
      biologyMark > 40
    ) {
      pass.value = "Pass";

      if (cutoffMark >= 180) {
        eligiblity.value = "Medicine";
      } else if (cutoffMark < 180 && cutoffMark > 160) {
        eligiblity.value = "Engineering";
      }
    } else {
      pass.value = "Fail";
      eligiblity.value = "";
    }
  } else {
    alert("Enter marks value only ranging from 0 to 100");
  }
}

//Reset function to clear input values
function reset() {
  studentName.value = "";
  languageSubject.value = "";
  physicsSubject.value = "";
  mathsSubject.value = "";
  chemistrySubject.value = "";
  biologySubject.value = "";
  total.value = "";
  average.value = "";
  grade.value = "";
  pass.value = "";
  cutoff.value = "";
  eligiblity.value = "";
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
