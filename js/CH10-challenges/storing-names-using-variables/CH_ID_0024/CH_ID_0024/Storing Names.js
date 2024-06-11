// Declaration
let actorNameId1 = document.getElementById("actorNameInput1");
let actorNameId2 = document.getElementById("actorNameInput2");
let actorNameId3 = document.getElementById("actorNameInput3");
let resultOutput = document.getElementById("variableResultsId");

//Function to print input names in result
function printNames() {
  resultOutput.innerHTML = "";

  let actorName1 = actorNameId1.value;
  let actorName2 = actorNameId2.value;
  let actorName3 = actorNameId3.value;

  resultOutput.innerHTML += `${actorName1}  ${actorName2}  ${actorName3}`;
}

//Function to reset all
function reset() {
  actorNameId1.value = "";
  actorNameId2.value = "";
  actorNameId3.value = "";
  resultOutput.innerHTML = "";
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
