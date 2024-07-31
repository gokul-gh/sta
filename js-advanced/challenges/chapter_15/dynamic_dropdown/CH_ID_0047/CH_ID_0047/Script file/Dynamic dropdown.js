/*            *************************************************************
 *  Name of the challenge  : Dynamic Dropdown                  *
 *  Developed for          : VHITECH Training Program          *
 *               Maintenance History                           *
 *  Developer              :                                   *
 *  Creation date           :                 Ticket No:       *
 ************************************************************* */

//Variable declaration
let clickHereButton = document.getElementById("buttonId");
let selectDiv = document.getElementById("selectDivId");
let isFristClick = false,
  count = 0;

const addElements = () => {
  if (!isFristClick) {
    dropdownFunc(dropdownData, dropdownData, (level = 1));
    isFristClick = true;
  }
};

const dropdownFunc = (data, dropdownData, level = 1) => {
  let select = document.createElement("select");
  data.forEach((element) => {
    let option = document.createElement("option");
    option.textContent = element.name;
    select.appendChild(option);
  });
  selectDiv.appendChild(select);

  select.addEventListener("change", (event) => {
    data.forEach((element) => {
      if (select.value == element.name) {
        while (selectDiv.childElementCount > level) {
          selectDiv.removeChild(selectDiv.lastChild);
        }
        console.log(selectDiv.childElementCount);
        if (element.data) {
          console.log(`Selected element: ${element.name}, level ${level}`);
          dropdownFunc(element.data, dropdownData, level + 1);
        } else {
          console.log(`Selected element: ${element.name}, level ${level}`);
        }
      }
    });
  });
};
// console.log(selectDiv.childElementCount);

const reset = () => {
  while (selectDiv.lastChild) selectDiv.removeChild(selectDiv.lastChild);
  isFristClick = false,
  count = 0;
};

// Date and time declaration.
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
