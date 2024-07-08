// Declaration

//Input declaration for using variables method
let actorNameId1 = document.getElementById("actorNameInput1");
let actorNameId2 = document.getElementById("actorNameInput2");
let actorNameId3 = document.getElementById("actorNameInput3");
let outputusingVariables = document.getElementById("variableResultsId");

//Input declaration for using array method
let actorArrayNameId1 = document.getElementById("actorNameArrayInput1");
let actorArrayNameId2 = document.getElementById("actorNameArrayInput2");
let actorArrayNameId3 = document.getElementById("actorNameArrayInput3");
let outputusingArrays = document.getElementById("arrayResultId");

//Fuction to display names using variables method
function printActorNames() {
  outputusingVariables.innerHTML = "";
  let actorName1 = actorNameId1.value;
  let actorName2 = actorNameId2.value;
  let actorName3 = actorNameId3.value;

  if (
    actorNameId1.value != "" &&
    actorNameId2.value != "" &&
    actorNameId3.value != ""
  ) {
    outputusingVariables.innerHTML += `${actorName1}  ${actorName2} ${actorName3}`;
  } else {
    alert("Enter valid inputs");
  }
}

//Reset variables type function values
function resetVariableInputs() {
  actorNameId1.value = "";
  actorNameId2.value = "";
  actorNameId3.value = "";
  outputusingVariables.innerHTML = "";
}

//Function to display names using array method
function printArrayActorNames() {
  outputusingArrays.innerHTML = "";
  let actorArrayName = [
    actorArrayNameId1.value,
    actorArrayNameId2.value,
    actorArrayNameId3.value,
  ];
  if (
    actorArrayNameId1.value != "" &&
    actorArrayNameId2.value != "" &&
    actorArrayNameId3.value != ""
  ) {
    for (let iteration = 0; iteration < actorArrayName.length; iteration++) {
      outputusingArrays.innerHTML += actorArrayName[iteration] + "  ";
    }
  } else {
    alert("Enter valid input");
  }
}

//Function to reset values in array method
function resetArrayInputs() {
  actorArrayNameId1.value = "";
  actorArrayNameId2.value = "";
  actorArrayNameId3.value = "";
  outputusingArrays.innerHTML = "";
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
