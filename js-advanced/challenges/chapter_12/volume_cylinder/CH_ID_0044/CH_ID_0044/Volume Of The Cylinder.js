/*            *************************************************************
 *  Name of the challenge   : Volume of the cylinder (Class)   *
 *               Maintenance History                           *
 *  Developer               :                                  *
 *  Creation date           :               Ticket No:         *
 ************************************************************ */

//Variables Declaration
let radiusId = document.getElementById("firstNumber");
let heightId = document.getElementById("secondNumber");
let result = document.getElementById("resultId");
let calculateButton = document.getElementById("buttonId");
let getAllInputs = document.querySelectorAll("input");

//Function to calculate volume of a cylinder using class
calculateButton.addEventListener("click", function (event) {
  let radiusInput = parseInt(radiusId.value);
  let heightInput = parseInt(heightId.value);

  class Volume {
    constructor(radius, height) {
      this.radius = radius;
      this.height = height;
    }

    displayOutput() {
      const calculateVolume = Math.PI * Math.pow(this.radius, 2) * this.height;
      result.value = calculateVolume;
    }
  }

  const inputObj = new Volume(radiusInput, heightInput);
  inputObj.displayOutput();
});

//Reset function to clear input fields
document.getElementById("resetId").addEventListener("click", function (event) {
  getAllInputs.forEach((element) => {
    if (element.type) {
      element.value = "";
    }
  });
});

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
