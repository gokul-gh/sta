/*            *************************************************************
              *  Name of the challenge   : Percentage Calculation         *
              *  Developed for           : VHITECH Training Program       *
              *               Maintenance History                         *
              *  Developer               :                                *
              *  Creation date           :               Ticket No:       *
              ************************************************************ */


// Declaration
// Screen date and time declaration.
let displayDate = new Date();

 //copy to clipboard
 const copyText = document.querySelector("#copy");
 copyText.addEventListener("click", () => {
   navigator.clipboard.writeText(
     document.querySelector("#successCode").value
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

 function calculate(){
  let firstNumber = document.getElementById("firstNumber").value;
  let secondNumber = document.getElementById("secondNumber").value;
  let result = document.getElementById("resultId");

  result.value = firstNumber * ( secondNumber / 100 );
 }

 function reset() {
  document.getElementById("firstNumber").value = "";
  document.getElementById("secondNumber").value = "";
  document.getElementById("resultId").value = "";
 }