/*            *************************************************************
 *   Name of the challenge: Date functions                   *
 *           Programmed by:                                  *
 *     Maintenance history:                  Ticket No:      *
 *************************************************************  */

//Variables Declaration
let inputDateId = document.getElementById("dateId");
let dayOutput = document.getElementById("dayId");
let monthOutput = document.getElementById("monthId");
let noOfDays = document.getElementById("countId");
let currentWeekNumber = document.getElementById("weekId");
let daysLeftChristmas = document.getElementById("daysId");
let isWeekend = document.getElementById("weekendId");

let getAllInputs = document.querySelectorAll("input");

//Function to do date operations
const calculate = () => {
  let inputDate = inputDateId.value;
  let dateInfo = new Date(inputDate);
  let dayArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let monthArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  dayOutput.value = dayArray[dateInfo.getDay()];
  monthOutput.value = monthArray[dateInfo.getMonth()];

  //Calculate number of days from beginning of the year
  let yearBeginning = new Date(dateInfo.getFullYear(), 0, 1);
  let fromYearStart = Math.ceil(
    (dateInfo - yearBeginning) / (1000 * 60 * 60 * 24),
  );
  noOfDays.value = fromYearStart;

  //Calculate week number of the month
  currentWeekNumber.value = Math.ceil(fromYearStart / 7);

  //Calculate days left until next christmas
  let christmasDate = new Date(dateInfo.getFullYear(), 11, 25);
  let daysLeftTillChristmas = Math.ceil(
    (christmasDate - dateInfo) / (1000 * 60 * 60 * 24),
  );
  if (daysLeftTillChristmas < 0) {
    let christmasDate = new Date(dateInfo.getFullYear() + 1, 11, 25);
    daysLeftTillChristmas = Math.ceil(
      (christmasDate - dateInfo) / (1000 * 60 * 60 * 24),
    );
  }
  daysLeftChristmas.value = daysLeftTillChristmas;

  //Calculate weekend or not
  if (dateInfo.getDay() == 6) {
    isWeekend.value = "weekend";
  } else {
    isWeekend.value = "Not a weekend";
  }
};

//Function to clear input values
const reset = () => {
  getAllInputs.forEach((element) => {
    element.value = "";
  });
};

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
