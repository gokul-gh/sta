//Code Statements

//Declaring and initializing variables
let firstPersonAge = document.getElementById("firstId");
let secondPersonAge = document.getElementById("secondId");
let thirdPersonAge = document.getElementById("thirdId");
let elderOutput = document.getElementById("ageId");
let descendingAgeOrder = document.getElementById("orderId");

//Constant declaration
let MAX_AGE = 110;
let MIN_AGE = 0;

//Function to compare age
function compareAge() {
  let firstPersonInput = parseInt(firstPersonAge.value);
  let secondPersonInput = parseInt(secondPersonAge.value);
  let thirdPersonInput = parseInt(thirdPersonAge.value);

  //Condition to validate the age limit is between 0 to 110
  if (
    firstPersonInput <= MAX_AGE &&
    firstPersonInput >= 0 &&
    secondPersonInput <= MAX_AGE &&
    secondPersonInput >= 0 &&
    thirdPersonInput <= MAX_AGE &&
    thirdPersonInput >= 0
  ) {
    //Condition if all three person's age are equal
    if (
      firstPersonInput == secondPersonInput &&
      secondPersonInput == thirdPersonInput &&
      thirdPersonInput == firstPersonInput
    ) {
      elderOutput.innerHTML = "First, second and third persons are of same age";
      descendingAgeOrder.innerHTML = `${firstPersonInput} ${secondPersonInput} ${thirdPersonInput}`;
    }

    //Condition if any of two persons age are equal
    else if (firstPersonInput == secondPersonInput) {
      if (firstPersonInput > thirdPersonInput) {
        elderOutput.innerHTML =
          "First and second persons are elder with same age";
        descendingAgeOrder.innerHTML = `${firstPersonInput} ${secondPersonInput} ${thirdPersonInput}`;
      } else {
        elderOutput.innerHTML = "Third person is elder";
        descendingAgeOrder.innerHTML = `${thirdPersonInput} ${firstPersonInput} ${secondPersonInput}`;
      }
    } else if (secondPersonInput == thirdPersonInput) {
      if (secondPersonInput > firstPersonInput) {
        elderOutput.innerHTML =
          "Second and third persons are elder with same age";
        descendingAgeOrder.innerHTML = `${secondPersonInput} ${thirdPersonInput} ${firstPersonInput}`;
      } else {
        elderOutput.innerHTML = "First person is elder";
        descendingAgeOrder.innerHTML = `${firstPersonInput} ${secondPersonInput} ${thirdPersonInput}`;
      }
    } else if (thirdPersonInput == firstPersonInput) {
      if (thirdPersonInput > secondPersonInput) {
        elderOutput.innerHTML =
          "First and third persons are elder with same age";
        descendingAgeOrder.innerHTML = `${firstPersonInput} ${thirdPersonInput} ${secondPersonInput}`;
      } else {
        elderOutput.innerHTML = "Second person is elder";
        descendingAgeOrder.innerHTML = `${secondPersonInput} ${thirdPersonInput} ${firstPersonInput}`;
      }
    }

    //Condition if all three person's age are distinct
    else {
      if (
        firstPersonInput > secondPersonInput &&
        firstPersonInput > thirdPersonInput
      ) {
        elderOutput.innerHTML = "First person is elder";
        if (secondPersonInput > thirdPersonInput) {
          descendingAgeOrder.innerHTML = `${firstPersonInput} ${secondPersonInput} ${thirdPersonInput}`;
        } else {
          descendingAgeOrder.innerHTML = `${firstPersonInput} ${thirdPersonInput} ${secondPersonInput}`;
        }
      } else if (secondPersonInput > thirdPersonInput) {
        elderOutput.innerHTML = "Second person is elder";
        if (firstPersonInput > thirdPersonInput) {
          descendingAgeOrder.innerHTML = `${secondPersonInput} ${firstPersonInput} ${thirdPersonInput}`;
        } else {
          descendingAgeOrder.innerHTML = `${secondPersonInput} ${thirdPersonInput} ${firstPersonInput}`;
        }
      } else {
        elderOutput.innerHTML = "Third person is elder";
        if (firstPersonInput > secondPersonInput) {
          descendingAgeOrder.innerHTML = `${thirdPersonInput} ${firstPersonInput} ${secondPersonInput}`;
        } else {
          descendingAgeOrder.innerHTML = `${thirdPersonInput} ${secondPersonInput} ${firstPersonInput}`;
        }
      }
    }
  } else {
    alert("Enter age from the limit 0 to 110");
  }
}

//Reset function to clear all user input values
function reset() {
  firstPersonAge.value = "";
  secondPersonAge.value = "";
  thirdPersonAge.value = "";
  elderOutput.innerHTML = "";
  descendingAgeOrder.innerHTML = "";
}

//Date and Time declaration
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
