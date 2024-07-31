/* *************************************************************
 *  Name of the challenge  : CRUD                             *
 *  Developed for          :                                  *
 *               Maintenance History                          *
 *  Developer              :                                  *
 *  Creation date           :               Ticket No:        *
 ************************************************************* */

//Variables declaration
let imageInput = document.getElementById("uploadButton");
let dobInput = document.getElementById("dob");
let countrySelect = document.getElementById("country");
let organizationSelect = document.getElementById("organization");
let lastNameInput = document.getElementById("enterLast");
let lastNameError = document.getElementById("lastError");
let mobileNoInput = document.getElementById("enterMobile");
let mobileNoError = document.getElementById("mobileError");
let stateSelect = document.getElementById("state");
let firstNameInput = document.getElementById("firstName");
let firstNameError = document.getElementById("firstError");
let maleCheckBox = document.getElementById("male");
let femaleCheckBox = document.getElementById("female");
let genderValueError = document.getElementById("genderError");
let emailInput = document.getElementById("email");
let emailIdError = document.getElementById("mailError");
let cityInput = document.getElementById("city");
let cityNameError = document.getElementById("cityError");
let communicationAddressId = document.getElementById("commAddress");
let communicationAddressError = document.getElementById("commAddr");
let permanentAddressId = document.getElementById("perAddress");
let permanentAddressError = document.getElementById("permAddr");
let pincodeInput = document.getElementById("pinNumber");
let pincodeError = document.getElementById("pinError");
let isSameAdress = document.getElementById("checkedBox");
let imageOutput = document.getElementById("photoId");
let registerButton = document.getElementById("regBtn");
let updateButton = document.getElementById("update");
let resetButton = document.getElementById("resetBtn");
let form = document.querySelector("form");
let getAllInputs = document.querySelectorAll("input");
let getAllSpan = document.querySelectorAll("span");
let getAllSelect = document.querySelectorAll("select");
let getAllTextarea = document.querySelectorAll("textarea");

let isInputsFilled = false;
let lastNamePattern = /^[a-zA-Z]+[\sa-zA-Z]*$/;
let mobileNoPattern = /^[6-9][0-9]{9}$/;
let firstNamePattern = /^[a-zA-Z]+[\sa-zA-Z]+$/;
let emailPattern = /^[a-zA-Z0-9-_.]+@[a-zA-Z0-9-]+\.[a-zA-z0-9]{2,16}$/;
let cityPattern = /^[a-zA-Z]+[\sa-zA-Z]*$/;
let pincodePattern = /^[1-9][0-9]{5}$/;
let allErrorOutputs = [],
  allInputFields = [],
  organizationOptions = ["Code tech", "Tech ultra", "Coders", "Chip company"];
let dob, lastName, mobileNo, firstName, email, cityName, pincode;
let gender = false;

//Get all input fields and push into an array
allInputFields.push(imageOutput);
getAllInputs.forEach((element) => {
  if (
    element.id != "regBtn" &&
    element.id != "update" &&
    element.id != "resetBtn" &&
    element.id != "successCode" &&
    element.id != "uploadButton" &&
    element.id != "male" &&
    element.id != "female" &&
    element.id != "checkedBox"
  ) {
    allInputFields.push(element);
  }
});
getAllSelect.forEach((element, index) => {
  if (index == 0) allInputFields.splice(2, 0, element);
  else if (index == 1) allInputFields.splice(3, 0, element);
  else if (index == 2) allInputFields.splice(6, 0, element);
});
allInputFields.splice(8, 0, gender);
getAllTextarea.forEach((element, index) => {
  if (index == 0) allInputFields.splice(11, 0, element);
  if (index == 1) allInputFields.splice(12, 0, element);
});

//Get all error span fields and push it in an array
getAllSpan.forEach((element) => {
  if (
    element.id != "exerciseHeading" &&
    element.id != "inputId" &&
    element.id != ""
  ) {
    allErrorOutputs.push(element);
  }
});

//Event listener to remove error message if user started typing
allInputFields.forEach((element, index) => {
  if (index != 8) {
    element.addEventListener("keydown", (event) => {
      allErrorOutputs[index].innerHTML = "";
    });
    if (index == 1 || index == 2 || index == 3 || index == 6) {
      element.addEventListener("change", (event) => {
        allErrorOutputs[index].innerHTML = "";
      });
    }
  }
});
//Disable update button
updateButton.style.display = "none";

//Accept only image type in file selector
imageInput.setAttribute("accept", "image/*");
//Get image and display it
imageInput.onchange = (event) => {
  let file = event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.addEventListener("load", function () {
    imageOutput.src = reader.result;
  });
};

//Set minimum and maximum range for date input
const dateRange = () => {
  let today = new Date();
  dobInput.setAttribute(
    "min",
    `${today.getFullYear() - 100}-${("0" + (today.getMonth() + 1)).slice(-2)}-${("0" + today.getDate()).slice(-2)}`
  );
  dobInput.setAttribute(
    "max",
    `${today.getFullYear() - 18}-${("0" + (today.getMonth() + 1)).slice(-2)}-${("0" + today.getDate()).slice(-2)}`
  );
};
dateRange();

//Function to fill select dropdown values in country and state
const dropdownFunc = (data, select) => {
  while (select.firstChild) {
    select.removeChild(select.lastChild);
  }
  let option = document.createElement("option");
  option.textContent = "Select";
  select.appendChild(option);
  if (data.length) {
    data.forEach((element) => {
      option = document.createElement("option");
      option.textContent = element.name;
      select.appendChild(option);
    });
  } else {
    let option = document.createElement("option");
    option.textContent = "No state avilable for this country";
    select.appendChild(option);
  }
};
dropdownFunc(dropdownData, countrySelect);

//Function call to fill states dropdown
countrySelect.addEventListener("change", (event) => {
  dropdownData.forEach((element) => {
    if (element.name == countrySelect.value) {
      dropdownFunc(element.states, stateSelect);
    }
  });
});

//Organization select
organizationOptions.forEach((element) => {
  let option = document.createElement("option");
  option.textContent = element;
  organizationSelect.appendChild(option);
});
organizationSelect.addEventListener("change", (event) => {});

//Communication and permanent address to be same
isSameAdress.addEventListener("change", () => {
  if (isSameAdress.checked) {
    permanentAddressId.value = communicationAddressId.value;
    permanentAddressId.disabled = true;
    allErrorOutputs[12].innerHTML = "";
  } else if (!isSameAdress.checked) permanentAddressId.disabled = false;
});
communicationAddressId.addEventListener("input", () => {
  if (isSameAdress.checked)
    permanentAddressId.value = communicationAddressId.value;
});

const validationFunc = () => {
  //Clear all error messages
  allErrorOutputs.forEach((element) => {
    element.innerHTML = "";
  });
  isInputsFilled = true;
  allErrorOutputs.forEach((element) => {
    element.innerHTML = "Please fill this field";
  });

  if (!maleCheckBox.checked && !femaleCheckBox.checked)
    genderValueError.innerHTML = "Please fill this field";
  else genderValueError.innerHTML = "";
  //element "" for dob, element "Select" for dropdown, element.value for input fields
  allInputFields.forEach((element, index) => {
    if (index != 0 && index != 8) {
      if (element.value == "" || element.value == "Select") {
        isInputsFilled = false;
      }
    }
  });
  //Clear all input error messages if valid input is found
  allInputFields.forEach((element, index) => {
    if (element.value != "" && element.value != "Select")
      allErrorOutputs[index].innerHTML = "";
    if (imageOutput.src != "") {
      allErrorOutputs[0].innerHTML = "";
    }
  });
  //Regex pattern
  if (lastNameInput.value != "" && !lastNamePattern.test(lastNameInput.value)) {
    lastNameError.innerHTML = "Enter valid name";
  }
  if (mobileNoInput.value != "" && !mobileNoPattern.test(mobileNoInput.value)) {
    mobileNoError.innerHTML = "Enter valid mobile number";
  }
  if (
    firstNameInput.value != "" &&
    !firstNamePattern.test(firstNameInput.value)
  )
    firstNameError.innerHTML = "Enter valid fist name";
  if (emailInput.value != "" && !emailPattern.test(emailInput.value))
    emailIdError.innerHTML = "Enter valid email id";
  if (cityInput.value != "" && !cityPattern.test(cityInput.value))
    cityNameError.innerHTML = "Enter valid city name";
  if (pincodeInput.value != "" && !pincodePattern.test(pincodeInput.value))
    pincodeError.innerHTML = "Enter valid pincode";
  return isInputsFilled;
};

//Register button function to add new info to localStorage
const validateForm = () => {
  (dob = dobInput.value),
    (lastName = lastNameInput.value),
    (mobileNo = mobileNoInput.value),
    (firstName = firstNameInput.value),
    (email = emailInput.value),
    (cityName = cityInput.value),
    (pincode = pincodeInput.value);
  if (maleCheckBox.checked) gender = maleCheckBox.value;
  else if (femaleCheckBox.checked) gender = femaleCheckBox.value;
};
//To prevent form getting submitted when validation fails
form.addEventListener("submit", (event) => {
  if (isInputsFilled) {
    if (localStorage.getItem("personInfo") == null) {
      personInfoArray = [];
    } else {
      personInfoArray = JSON.parse(localStorage.getItem("personInfo"));
    }
    let existingPersonIndex = personInfoArray.findIndex(
      (person) =>
        person.firstName === firstNameInput.value &&
        person.lastName === lastNameInput.value
    );
    if (existingPersonIndex !== -1) {
      personInfoArray[existingPersonIndex] = {
        personImg: imageOutput.src,
        dob: dobInput.value,
        country: countrySelect.value,
        organization: organizationSelect.value,
        lastName: lastNameInput.value,
        mobileNo: mobileNoInput.value,
        state: stateSelect.value,
        firstName: firstNameInput.value,
        gender: gender,
        email: emailInput.value,
        city: cityInput.value,
        communicationAddress: communicationAddressId.value,
        permanentAddress: permanentAddressId.value,
        pincode: pincodeInput.value,
      };
    } else {
      // Add new person's information
      let personInfoObj = {
        personImg: imageOutput.src,
        dob: dobInput.value,
        country: countrySelect.value,
        organization: organizationSelect.value,
        lastName: lastNameInput.value,
        mobileNo: mobileNoInput.value,
        state: stateSelect.value,
        firstName: firstNameInput.value,
        gender: gender,
        email: emailInput.value,
        city: cityInput.value,
        communicationAddress: communicationAddressId.value,
        permanentAddress: permanentAddressId.value,
        pincode: pincodeInput.value,
      };
      personInfoArray.push(personInfoObj);
    }
    localStorage.setItem("personInfo", JSON.stringify(personInfoArray));
  } else {
    event.preventDefault();
    validationFunc();
  }
});
//Display table
let crudTableId = document.getElementById("crudTable");
const showPersonInfo = () => {
  if (localStorage.getItem("personInfo") == "[]") {
    personInfoArray = [];
    while (crudTableId.lastChild) {
      crudTableId.removeChild(crudTableId.lastChild);
    }
  } else {
    personInfoArray = JSON.parse(localStorage.getItem("personInfo"));

    let table = document.createElement("table");
    table.style.borderCollapse = "collapse";
    let tableContent = "";
    while (crudTableId.lastChild) {
      crudTableId.removeChild(crudTableId.lastChild);
    }
    tableContent = `<thead>
                  <th> Image </th>
                  <th> Frist Name </th>
                  <th> Last Name </th>
                  <th> Date of Birth </th>
                  <th> Organization </th>
                  <th> Mobile number </th>
                  <th> Country </th>
                  <th> State </th>
                  <th> Gender </th>
                  <th> Email </th>
                  <th> City </th>
                  <th> Communication address</th>
                  <th> Permanent address </th>
                  <th> Pincode </th>
                  <th> Actions </th>
                  </thead><tbody>`;

    personInfoArray.forEach((element, index) => {
      tableContent += `<tr>
      <td> <img src="${element.personImg}" height=100px width=100px/> </td>
      <td> ${element.firstName} </td>
      <td> ${element.lastName} </td>
      <td> ${element.dob} </td>
      <td> ${element.organization} </td>
      <td> ${element.mobileNo} </td>
      <td> ${element.country} </td>
      <td> ${element.state} </td>
      <td> ${element.gender} </td>
      <td> ${element.email} </td>
      <td> ${element.city} </td>
      <td> ${element.communicationAddress} </td>
      <td> ${element.permanentAddress} </td>
      <td> ${element.pincode} </td>
      <td> <i class="fa-solid fa-pen-to-square" style="cursor: pointer;" onclick="editFunc(${index})"></i> <br> <br>
           <i class="fa-solid fa-trash" style="color: #ff0000; cursor: pointer" onclick="deleteFunc(${index})"></i> </td>
      </tr>`;
    });
    tableContent += "</tbody>";
    table.innerHTML = tableContent;
    crudTableId.appendChild(table);
  }
};
document.onload = showPersonInfo();

//Edit function if user clicked the edit button
const editFunc = (index) => {
  registerButton.style.display = "none";
  updateButton.style.display = "block";
  let personInfoArray = JSON.parse(localStorage.getItem("personInfo"));

  const personInfoValue = Object.values(personInfoArray[index]);
  imageOutput.src = personInfoValue[0];
  allInputFields.forEach((element, loopIndex) => {
    if (loopIndex != 0 && loopIndex != 6)
      element.value = personInfoValue[loopIndex];
    if (loopIndex == 6) {
      dropdownData.forEach((element) => {
        if (element.name == personInfoValue[2]) {
          dropdownFunc(element.states, stateSelect);
          stateSelect.value = personInfoValue[6];
        }
      });
    }
  });
  personInfoValue[8] == "Male"
    ? (maleCheckBox.checked = true)
    : (femaleCheckBox.checked = true);
  //Update function if user clicks update button
  updateButton.addEventListener("click", (event) => {
    if (validationFunc()) {
      personInfoArray[index].city = allInputFields[10].value;
      personInfoArray[index].communicationAddress = allInputFields[11].value;
      personInfoArray[index].country = allInputFields[2].value;
      personInfoArray[index].dob = allInputFields[1].value;
      personInfoArray[index].email = allInputFields[9].value;
      personInfoArray[index].firstName = allInputFields[7].value;
      if (maleCheckBox.checked) gender = maleCheckBox.value;
      else if (femaleCheckBox.checked) gender = femaleCheckBox.value;
      personInfoArray[index].gender = gender;
      personInfoArray[index].lastName = allInputFields[4].value;
      personInfoArray[index].mobileNo = allInputFields[5].value;
      personInfoArray[index].organization = allInputFields[3].value;
      personInfoArray[index].permanentAddress = allInputFields[12].value;
      personInfoArray[index].personImg = imageOutput.src;
      personInfoArray[index].pincode = allInputFields[13].value;
      personInfoArray[index].state = allInputFields[6].value;

      localStorage.setItem("personInfo", JSON.stringify(personInfoArray));
      showPersonInfo();
    } else {
      event.preventDefault();
    }
  });
  //Reset function
  resetButton.addEventListener("click", (event) => {
    const personInfoValue = Object.values(personInfoArray[index]);
    imageOutput.src = personInfoValue[0];
    allInputFields.forEach((element, loopIndex) => {
      if (loopIndex != 0 && loopIndex != 6)
        element.value = personInfoValue[loopIndex];
      if (loopIndex == 6) {
        dropdownData.forEach((element) => {
          if (element.name == personInfoValue[2]) {
            dropdownFunc(element.states, stateSelect);
            stateSelect.value = personInfoValue[6];
          }
        });
      }
    });
    personInfoValue[8] == "Male"
      ? (maleCheckBox.checked = true)
      : (femaleCheckBox.checked = true);
    event.preventDefault();
  });
};

const updateForm = (element) => {};
const clearFields = () => {};
const deleteFunc = (index) => {
  let personInfoArray = JSON.parse(localStorage.getItem("personInfo"));
  personInfoArray.splice(index, 1);
  localStorage.setItem("personInfo", JSON.stringify(personInfoArray));
  showPersonInfo();
};

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
