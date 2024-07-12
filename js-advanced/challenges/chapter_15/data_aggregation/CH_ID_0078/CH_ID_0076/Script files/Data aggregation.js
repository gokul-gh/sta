/*            *************************************************************
 *  Name of the challenge  : Data Aggregation                 *
 *  Developed for          :                                  *
 *               Maintenance History                          *
 *  Developer              :                                  *
 *  Creation date           :               Ticket No:        *
 ************************************************************* */

// Declaration
let supplierTableId = document.getElementById("supplierTable");
let createTable = document.createElement("table");
supplierTableId.appendChild(createTable);
createTable.style.border = "2px black solid";
createTable.style.borderCollapse = "collapse";

let createHead = document.createElement("thead");
let createTr = document.createElement("tr");
let headerContents = [
  "SupplierID",
  "CompanyName",
  "ContactName",
  "Address",
  "ProductName",
  "UnitsInStock",
  "UnitsOnOrder",
  "UnitPrice",
];
let nameArray = [],
  totalStockUnits = [],
  totalOrderUnits = [],
  totalPriceUnits = [];

headerContents.forEach((element) => {
  let createTh = document.createElement("th");
  createTh.textContent = element;
  createTr.appendChild(createTh);
});

createHead.appendChild(createTr);
createTable.appendChild(createHead);

let tableData = (element, createTr) => {
  let createTd = document.createElement("td");
  createTd.textContent = element;
  createTr.appendChild(createTd);
};

supplierSales.forEach((element) => {
  if (!nameArray[element.SupplierID - 1]) {
    nameArray[element.SupplierID - 1] = [];
    totalStockUnits[element.SupplierID - 1] = 0;
    totalOrderUnits[element.SupplierID - 1] = 0;
    totalPriceUnits[element.SupplierID - 1] = 0;
  }
  nameArray[element.SupplierID - 1].push(element.ProductName);
  totalStockUnits[element.SupplierID - 1] += element.UnitsInStock;
  totalOrderUnits[element.SupplierID - 1] += element.UnitsOnOrder;
  totalPriceUnits[element.SupplierID - 1] += element.UnitPrice;
});

if (supplierJson.length > totalStockUnits.length) {
  totalStockUnits.push(0);
  totalOrderUnits.push(0);
  totalPriceUnits.push(0);
}

let newArr = [];
for (let iter = 0; iter < nameArray.length; iter++) {
  newArr[iter] = nameArray[iter].join(",");
}

let createBody = document.createElement("tbody");
supplierJson.forEach((element) => {
  let createTr = document.createElement("tr");
  tableData(element.SupplierID, createTr);
  tableData(element.CompanyName, createTr);
  tableData(element.ContactName, createTr);
  tableData(element.Address, createTr);
  tableData(newArr[element.SupplierID - 1], createTr);
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
