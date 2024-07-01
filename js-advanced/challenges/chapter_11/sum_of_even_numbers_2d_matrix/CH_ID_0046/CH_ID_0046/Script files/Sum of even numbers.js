/*
*************************************************************
*   Name of the challenge: Sum of the diagonals(2D Array)   *
*            Challenge No: 23                               *
*            Developed by: VHI tech                         *
*           Programmed by: Kanagalakshmi                    *
*     Maintenance history: Kanagalakshmi    Ticket No:      *
*************************************************************  */
// Declaration
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
        navigator.clipboard.writeText(
          document.querySelector("#successCode").value
        );
        copyText.textContent = "copied";
        setTimeout(() => {
          copyText.innerHTML = `<span>&#128203; </span>copy`;
        }, 2000);
      });



// "Create a function that returns the sum of all even elements in a 2D matrix.

// Examples
// sumOfEvens([
//  [1, 0, 2],
//  [5, 5, 7],
//  [9, 4, 3]
// ]) ➞ 6

// // 2 + 4 = 6

// sumOfEvens([
//  [1, 1],
//  [1, 1]
// ]) ➞ 0
//Input declaration
