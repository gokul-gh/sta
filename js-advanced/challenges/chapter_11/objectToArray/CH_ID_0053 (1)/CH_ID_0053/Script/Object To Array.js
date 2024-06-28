/*            *************************************************************
 *  Name of the challenge  : Object to Array                  *
 *               Maintenance History                          *
 *  Developer               :                                  *
 *  Creation date           :               Ticket No:        *
 ************************************************************ */

//Input declaration
let objectKeyId = document.getElementById("keyId");
let objectValueId = document.getElementById("valueId");
let objectOutputArea = document.getElementById("displayObject");
let arrayOutputArea = document.getElementById("displayArrayitems");

//Button declaration
let addButton = document.getElementById("addButton");
let convertButton = document.getElementById("pushButton");
let resetuButton = document.getElementById("resetId");
let objectVariable,
  objectArray = [],
  iteration = 0;

//Function to add key values
let addItems = () => {
  let objectKey = parseInt(objectKeyId.value);
  let objectValue = parseInt(objectValueId.value);

  objectVariable = {
    objectKey: objectKey,
    objectValue: objectValue,
  };
  objectOutputArea.value += JSON.stringify(objectVariable);

  objectArray[iteration] = objectVariable;
  iteration++;
};

//Function to convert objects to array
let convertObject = () => {
  arrayOutputArea.value = "";
  objectArray.forEach((position) => {
    arrayOutputArea.value += `${Object.values(position)}\n`;
  });
};

//Reset function to clear values
let reset = () => {
  objectKeyId.value = "";
  objectValueId.value = "";
  objectOutputArea.value = "";
  arrayOutputArea.value = "";
  objectArray = [];
  iteration = 0;
};

// Screen date and time declaration.
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
