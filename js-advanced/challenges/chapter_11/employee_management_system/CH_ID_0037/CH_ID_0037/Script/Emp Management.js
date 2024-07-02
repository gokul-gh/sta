/*            *************************************************************
 *  Name of the challenge  : Employee Management System       *
 *  Developed for          : VHITECH Training Program         *
 *               Maintenance History                          *
 *  Developer               :                                 *
 *  Creation date           :     Ticket No:                  *
 **************************************************************/
// Declaration

//Input declaration
let totalEmployeesId = document.getElementById("countId");
let employeeNumberId = document.getElementById("empId");
let employeeNameId = document.getElementById("nameId");
let employeeDepartmentId = document.getElementById("deptId");

let employeeOutput = document.getElementById("supplierTable");
let sortedOutput = document.getElementById("sortTable");

let searchInputId = document.getElementById("searchId");
let searchOutput = document.getElementById("filterId");

let getAllInputs = document.querySelectorAll("input");

let employeeDetail = [],
  count = 0;

//Function to add employee detail to an array
const addItems = () => {
  let totalEmployees = parseInt(totalEmployeesId.value);
  let employeeNumber = parseInt(employeeNumberId.value);
  let employeeName = employeeNameId.value;
  let employeeDepartment = employeeDepartmentId.value;

  if (count < totalEmployees) {
    employeeDetail.push([employeeNumber, employeeName, employeeDepartment]);

    employeeDetail.forEach((row) => {
      let trNew = document.createElement("tr");
      row.forEach((column) => {
        let tdNew = document.createElement("td");
        tdNew.textContent = column;
        trNew.appendChild(tdNew);
      });
      employeeOutput.appendChild(trNew);
    });
  }
  count++;
};

//Function to sort array
const sort = () => {
  let afterSortArray = employeeDetail.sort();
  afterSortArray.forEach((row) => {
    let trNew = document.createElement("tr");
    row.forEach((column) => {
      let tdNew = document.createElement("td");
      tdNew.textContent = column;
      trNew.appendChild(tdNew);
    });
    sortedOutput.appendChild(trNew);
  });
};

//Function to search for employee by name
const employeeSearch = () => {
  let searchInput = searchInputId.value;
  searchOutput.value = "";
  employeeDetail.forEach((element) => {
    if (element[1] == searchInput) {
      searchOutput.value += `${element}\n`;
    }
  });
};

//Function to clear values
const reset = () => {
  employeeDetail = [];
  count = 0;
  searchOutput.value = "";

  while (employeeOutput.firstChild) {
    employeeOutput.removeChild(employeeOutput.firstChild);
  }
  while (sortedOutput.firstChild) {
    sortedOutput.removeChild(sortedOutput.firstChild);
  }

  getAllInputs.forEach((element) => {
    //if condition is used because not to affect input field in success code
    if (element.type) {
      element.value = "";
    }
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
