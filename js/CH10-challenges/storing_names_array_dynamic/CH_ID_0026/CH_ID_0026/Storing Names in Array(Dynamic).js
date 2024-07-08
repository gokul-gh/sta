// Declaration

//Input declaration
//Declaration for inputs using variables
let actorNameId1 = document.getElementById("actorNameInput1");
let actorNameId2 = document.getElementById("actorNameInput2");
let actorNameId3 = document.getElementById("actorNameInput3");
let variableOutput = document.getElementById("variableResultsId");

//Declaration for inputs using array
let actorNameInputId = document.getElementById("actorsNameArrayInput");
let actorNameOutput = document.getElementById("arrayResultId");
let numberOfActorsAdded = document.getElementById("numberOfActorsAdded");

//Function to print actor names using variables method
function printActorNames() {
  variableOutput.innerHTML = "";

  let actorName1 = actorNameId1.value;
  let actorName2 = actorNameId2.value;
  let actorName3 = actorNameId3.value;

  if (
    actorNameId1.value != "" &&
    actorNameId2.value != "" &&
    actorNameId3.value != ""
  ) {
    variableOutput.innerHTML = `${actorName1}\n ${actorName2}\n ${actorName3}\n`;
  } else {
    alert("Enter valid inputs in variables method");
  }
}

//Reset values in inputs using variables method
function resetVariableInputs() {
  variableOutput.innerHTML = "";
  actorNameId1.value = "";
  actorNameId2.value = "";
  actorNameId3.value = "";
}

//Function to display names using array method
let actorsArray = [];
let iteration = 0;
function addActorsName() {
  if (actorNameInputId.value != "") {
    actorsArray[iteration] = actorNameInputId.value;
    iteration++;
    numberOfActorsAdded.innerHTML = `No. of Actors added : ${iteration}`;
  } else {
    alert("Enter valid input in array method");
  }
}

//Reset function to clear values using array method
function printArrayActorNames() {
  actorNameOutput.innerHTML = "";

  for (let index = 0; index < iteration; index++) {
    actorNameOutput.innerHTML += actorsArray[index] + "<br>";
  }
}

function resetArrayInputs() {
  actorNameInputId.value = "";
  numberOfActorsAdded.innerHTML = "No. of Actors added : 0";
  actorNameOutput.innerHTML = "";
  iteration = 0;
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
