/*            *************************************************************
 *  Name of the challenge  : Data Aggregation                 *
 *  Developed for          :                                  *
 *               Maintenance History                          *
 *  Developer              :                                  *
 *  Creation date           :               Ticket No:        *
 ************************************************************* */

//Variables Declaration
let nameArray = [],
  totalStockUnits = [],
  totalOrderUnits = [],
  totalPriceUnits = [];
let supplierTableId = document.getElementById("supplierTable");

//Create a table and add styles
let createTable = document.createElement("table");
supplierTableId.appendChild(createTable);
createTable.style.border = "2px black solid";
createTable.style.borderCollapse = "collapse";

//Create thead and header row and append th elements
createTable.innerHTML = `<thead> <tr> <th>SupplierID</th> <th>CompanyName</th> <th>ContactName</th> <th>Address</th> <th>ProductName</th> <th>UnitsInStock</th> <th>UnitsOnOrder</th> <th>UnitPrice</th> </tr> </thead>`;

//Get sales info and arrange it into array in terms of supplier
supplierSales.forEach((element) => {
  if (!nameArray[element.SupplierID - 1]) {
    nameArray[element.SupplierID - 1] = []; //Creating empty 2d array
    //Assigning value 0 initially to arrays that is going to store integer
    totalStockUnits[element.SupplierID - 1] = 0;
    totalOrderUnits[element.SupplierID - 1] = 0;
    totalPriceUnits[element.SupplierID - 1] = 0;
  }

  nameArray[element.SupplierID - 1].push(element.ProductName);
  totalStockUnits[element.SupplierID - 1] += element.UnitsInStock;
  totalOrderUnits[element.SupplierID - 1] += element.UnitsOnOrder;
  totalPriceUnits[element.SupplierID - 1] += element.UnitPrice;
});

//if any supplier has no stock, order and price units, then assign it 0
if (supplierJson.length > totalStockUnits.length) {
  totalStockUnits.push(0);
  totalOrderUnits.push(0);
  totalPriceUnits.push(0);
}

//Convert 2d Product name to 1d array, else it cant display in table
let convertArrayName = [];
for (let iter = 0; iter < nameArray.length; iter++) {
  convertArrayName[iter] = nameArray[iter].join(",");
}

//Function to be called when to create a new body element
let tableData = (element, createTr) => {
  let createTd = document.createElement("td");
  createTd.textContent = element;
  createTr.appendChild(createTd);
};

//Logic to create table elements
let createBody = document.createElement("tbody");
supplierJson.forEach((element) => {
  let createTr = document.createElement("tr");
  tableData(element.SupplierID, createTr);
  tableData(element.CompanyName, createTr);
  tableData(element.ContactName, createTr);
  tableData(element.Address, createTr);
  tableData(convertArrayName[element.SupplierID - 1], createTr);
  tableData(totalStockUnits[element.SupplierID - 1], createTr);
  tableData(totalOrderUnits[element.SupplierID - 1], createTr);
  tableData(totalPriceUnits[element.SupplierID - 1], createTr);
  createBody.appendChild(createTr);
});

createTable.appendChild(createBody);

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
