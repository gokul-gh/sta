/*            *************************************************************
              *  Name of the challenge  : Array Chunking                   *
              *               Maintenance History                          *
              *  Developer              :                                  *
              *  Creation date          :               Ticket No:         *
              ************************************************************ */


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





// Write a funtion to retun Array Chunking.
// Example:
//  chunking([1,2,3,4,5,],2);
//  returns [[1,2],[3,4],[5]];"
//Input declaration
//Code Logic
