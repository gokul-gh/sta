/*            *************************************************************
 *  Name of the challenge  : Student Top Marks Calculator    *
 *               Maintenance History                          *
 *  Developer              :                                  *
 *  Creation date           :               Ticket No:        *
 ************************************************************ */

//Variables Declaration
let totalStudentsId = document.getElementById("sizeId");
let studentKeyId = document.getElementById("keyId");
let studentNameId = document.getElementById("nameId");
let studentMarkId = document.getElementById("enterMarkId");

let studentMarksArrayOutput = document.getElementById("markArrayId");
let objectsOutput = document.getElementById("displayObject");
let topMarksOutput = document.getElementById("displayArrayitems");

let getAllInputsId = document.querySelectorAll("input");
let getAllTextArea = document.querySelectorAll("textarea");

let studentKey,
  studentName,
  studentMark,
  studentMarksArray = [],
  studentInfo = [],
  studentObj,
  totalStudents,
  noOfStudents = [];

//Constant declaration
const ERR_MESSAGE = "Enter valid input";

//Function to get total number of students
const isNumber = (event) => {
  noOfStudents.push(event.key);
  totalStudents = noOfStudents.join("");
};

//Function to add marks to mark array
const pushItems = () => {
  studentMark = parseInt(studentMarkId.value);
  if (studentMarkId.value != "") {
    studentMarksArray.length < 5
      ? studentMarksArray.push(studentMark)
      : alert("Maximum subject marks exceeded");
  } else {
    alert(ERR_MESSAGE);
  }
  studentMarksArrayOutput.value = studentMarksArray;
  studentMarkId.value = "";
};

//Function to add student object to an array
const addItems = () => {
  studentKey = studentKeyId.value;
  studentName = studentNameId.value;

  if (studentMarksArray.length == 0) {
    studentMarksArray.push(0);
  }

  if (studentInfo.length < Number(totalStudents)) {
    studentObj = {
      id: studentKey,
      name: studentName,
      marks: studentMarksArray,
    };
    studentInfo.push(studentObj);
  }
  objectsOutput.value = JSON.stringify(studentInfo);

  studentKeyId.value = "";
  studentNameId.value = "";
  studentMarkId.value = "";
  studentMarksArrayOutput.value = "";
  studentMarksArray = [];
};

//Function to output the student's largest marks in an array
const convertObject = () => {
  let topMarkArray = [];

  studentInfo.forEach((individual) => {
    individual.marks.sort(
      (firstNumber, secondNumber) => firstNumber - secondNumber
    );
    topMarkArray.push(individual.marks[individual.marks.length - 1]);
  });

  topMarksOutput.value = topMarkArray;
};

//Reset function to clear values
const reset = () => {
  (totalStudents = 0),
    (studentKey = 0),
    (studentName = ""),
    (studentMark = 0),
    (studentMarksArray = []),
    (studentInfo = []),
    studentObj;

  getAllInputsId.forEach((element) => {
    if (element.type) {
      element.value = "";
    }
  });
  getAllTextArea.forEach((element) => {
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
