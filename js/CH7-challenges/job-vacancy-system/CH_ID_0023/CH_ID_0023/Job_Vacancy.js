//Code Logic

//Variables declaration
let degreeOption = document.getElementById("degree");
let eligiblity = document.getElementById("result");

//Function to check software vacancies
function findEligiblity() {
  let degree = degreeOption.value;

  if (degree != "") {
    if (
      degree == "bca" ||
      degree == "bscCs" ||
      degree == "beCs" ||
      degree == "beIt"
    ) {
      eligiblity.innerHTML = "Jr. Software developer";
    } else if (
      degree == "mca" ||
      degree == "mscCs" ||
      degree == "meCs" ||
      degree == "meIt"
    ) {
      eligiblity.innerHTML = "Sr. Software developer";
    }
  } else {
    alert("Select any dropdown option");
  }
}

//Reset function to clear input values
function reset() {
  eligiblity.innerHTML = "";
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
