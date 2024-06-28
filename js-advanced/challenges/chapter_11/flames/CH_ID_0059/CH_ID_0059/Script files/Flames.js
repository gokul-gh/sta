/*            *************************************************************
              *  Name of the challenge  : Flames                           *
              *  Challenge No           : 27                               *
              *  Developed for          : VHITECH Training Program         *
              *               Maintenance History                          *
              *  Developer              : Kanagalakshmi                    *
              *  Creation date           : 12/2/2023     Ticket No:        *
              ************************************************************* */

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


