
// Declaration
// Screen date and time declaration.
let displayDate = new Date();
document.getElementById("dateOutput").innerHTML = displayDate.toLocaleDateString();
document.getElementById("timeOutput").innerHTML = displayDate.toLocaleTimeString();
let displayOutput=document.getElementById("displayMessage")
displayOutput.innerHTML="External Script is displayed"