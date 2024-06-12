//Variables declaration
let rowValueId = document.getElementById("rowInput");
let colValueId = document.getElementById("columnInput");
let lockerOutputId = document.getElementById("lockerPreview");
let putGoldId = document.getElementById("sovereignInput");
let getGoldId = document.getElementById("resultInput");

//Array declaration
let lockerArray = [[], [], [], [], []];
lockerValue();

//Array Initialization values to zero
function lockerValue() {
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 3; col++) {
      lockerArray[row][col] = 0;
    }
  }
  displayValues();
}

function displayValues() {
  lockerOutputId.innerHTML = "";
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 3; col++) {
      lockerOutputId.innerHTML += "<div>" + lockerArray[row][col] + "</div>";
    }
  }
}

//Function to put sovereign from locker system
function putFunction() {
  displayValues();
  let rowValue = parseInt(rowValueId.value);
  let colValue = parseInt(colValueId.value);
  let putGoldValue = parseInt(putGoldId.value);
  lockerArray[rowValue][colValue] = putGoldValue;
  getGoldId.value = "";
  displayValues();
}

//Function to get sovereign from locker system
function getFunction() {
  let rowValue = parseInt(rowValueId.value);
  let colValue = parseInt(colValueId.value);

  getGoldId.value = lockerArray[rowValue][colValue];
  lockerArray[rowValue][colValue] = "0";
  putGoldId.value = "";
  displayValues();
}

//Reset function to clear all values
function resetFunction() {
  rowValueId.value = "";
  colValueId.value = "";
  getGoldId.value = "";
  putGoldId.value = "";

  lockerValue();
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
