const loginPageDiv = document.getElementById("loginPageId");
const playerNameId = document.getElementById("name");
const nameError = document.getElementById("nameErrorId");
const startButton = document.getElementById("startButtonId");
document.body.style.backgroundImage = "url(/Images/login_page.jpg)";
document.body.style.backgroundSize = "cover";

startButton.onclick = (event) => {
  const namePattern = /^[a-zA-Z ]+$/;
  const playerName = playerNameId.value;
  if (playerName != "" && namePattern.test(playerName)) {
    
  } else {
    nameError.innerHTML = "Enter valid name";
  }
};