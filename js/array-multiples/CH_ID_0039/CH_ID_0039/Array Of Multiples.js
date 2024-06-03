/*            *************************************************************
              *  Name of the challenge   : Array Of Multiples               *
              *  Developed for           : VHITECH Training Program         *
              *               Maintenance History                          *
              *  Developer               :                                  *
              *  Creation date           :               Ticket No:        *
              ************************************************************ */


// Declaration
// Screen date and time declaration.
let displayDate = new Date();
//copy to clipboard
const copyText = document.querySelector("#copy");
copyText.addEventListener("click", () => {
  navigator.clipboard.writeText(document.querySelector("#successCode").value);
  copyText.textContent = "copied";
  setTimeout(() => {
    copyText.innerHTML = `<span>&#128203; </span>copy`;
  }, 2000);
});

//modal
const toggleSuccessModal = () => successModal.classList.toggle("active");
const toggleErrorModal = () => errorModal.classList.toggle("active");
window.addEventListener("click", function (event) {
  if (event.target === successModal) successModal.classList.remove("active");
  if (event.target === errorModal) errorModal.classList.remove("active");
});
//Input declaration