/*            *************************************************************
 *  Name of the challenge  : Populate Dropdown                *
 *  Developed for          : VHITECH Training Program         *
 *               Maintenance History                          *
 *  Developer              :                                  *
 *  Creation date           :               Ticket No:        *
 ************************************************************* */

// Declaration
const countryAPI = "https://restcountries.com/v3.1/all";
let countriesDropdown = document.getElementById("countriesId");
let capitalDropdown = document.getElementById("capitalId");

//Function to find the captial
async function findCapital() {
  const response = await fetch(countryAPI);
  const data = await response.json();

  //logic to add all country names to the dropdown
  data.forEach((element) => {
    let countryName = element.name.official;
    let dropdownOption = document.createElement("option");
    dropdownOption.textContent = countryName;
    countriesDropdown.appendChild(dropdownOption);
  });

  //Logic to find the capital of the clicked country in dropdown
  countriesDropdown.addEventListener("change", function (event) {
    selectedCountry =
      event.target.options[event.target.selectedIndex].textContent;

    data.forEach((element) => {
      let capital = element.capital;

      if (element.capital && element.name.official == selectedCountry) {
        capitalDropdown.innerHTML = "";
        let dropdownOption = document.createElement("option");
        dropdownOption.textContent = "Select";
        capitalDropdown.appendChild(dropdownOption);

        capital.forEach((capitalElement) => {
          let dropdownOption = document.createElement("option");
          dropdownOption.textContent = capitalElement;
          capitalDropdown.appendChild(dropdownOption);
        });
      } else if (element.name.official == selectedCountry) {
        capitalDropdown.innerHTML = "";
        let dropdownOption = document.createElement("option");
        dropdownOption.textContent = "No capital found for this country";
        capitalDropdown.appendChild(dropdownOption);
      }
    });
  });
}

findCapital();

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
