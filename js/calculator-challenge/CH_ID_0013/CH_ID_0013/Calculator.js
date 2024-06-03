//code Statements

  //variable declarations
  let firstNumber = document.getElementById("firstNumber");
  let secondNumber = document.getElementById("secondNumber");
  let resultNumber = document.getElementById("resultId");
 
  //Addition operation
  function addOperation() {
    let addition = parseInt(firstNumber.value) + parseInt(secondNumber.value);
    resultNumber.value = addition;
  }
 
  //Subtraction operation
  function subOperation() {
    let subtraction = parseInt(firstNumber.value) - parseInt(secondNumber.value);
    resultNumber.value = subtraction;
  }
 
  //Multiplication operation
  function multiplyOperation() {
    let multiplication = parseInt(firstNumber.value) * parseInt(secondNumber.value);
    resultNumber.value = multiplication;
  }
 
  //Division operation
  function divideOperation() {
    let division = parseInt(firstNumber.value) / parseInt(secondNumber.value);
    resultNumber.value = division;
  }

  //Resetting fields
  function reset() {
    firstNumber.value = "";
    secondNumber.value = "";
    resultNumber.value = "";
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
   navigator.clipboard.writeText(
     document.querySelector("#successCode").value,
   );
   copyText.textContent = "copied";
   setTimeout(() => {
     copyText.innerHTML = `<span>&#128203; </span>copy`;
   }, 2000);
 });

 //Modal
 const toggleSuccessModal = () => successModal.classList.toggle("active");
 const toggleErrorModal = () => errorModal.classList.toggle("active");
 window.addEventListener("click", function (event) {
   if (event.target === successModal)
     successModal.classList.remove("active");
   if (event.target === errorModal) errorModal.classList.remove("active");
 });