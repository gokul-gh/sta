//Code Statements

    //Variable declaration
    let firstNumber = document.getElementById("firstNumber");
    let secondNumber = document.getElementById("secondNumber");
    let resultNumber = document.getElementById("resultId");
    let paraContent = document.getElementById("onMouseOver");

    //Addition operation
    function calculate() {
        resultNumber.value = firstNumber.valueAsNumber + secondNumber.valueAsNumber;
    }

    //mouseOver operation when mouse is moved over the paragraph content
    function mouseOver() {
        paraContent.style.color = "red";
    }

    //mouseOut operation when mouse is mover out from the paragraph content
    function mouseOut() {
        paraContent.style.color = "rgb(54, 82, 121)";
    }




      //Date and Time declaration
      let displayDate = new Date();
      document.getElementById("dateOutput").innerHTML =
        displayDate.toLocaleDateString();
      document.getElementById("timeOutput").innerHTML =
        displayDate.toLocaleTimeString();

      //copy to clipboard
      const copyText = document.querySelector("#copy");
      copyText.addEventListener("click", () => {
        navigator.clipboard.writeText(
          document.querySelector("#successCode").value
        );
        copyText.textContent = "copied";
        setTimeout(() => {
          copyText.innerHTML = `<span>&#128203; </span>copy`;
        }, 2000);
      });

      //Modal
      const toggleSuccessModal = () => successModal.classList.toggle("active");
      const toggleErrorModal = () => errorModal.classList.toggle("active");
      window.addEventListener("click", function (event) {
        if (event.target === successModal)
          successModal.classList.remove("active");
        if (event.target === errorModal) errorModal.classList.remove("active");
      });