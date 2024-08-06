//Menu icon//
function myFunction() {
  var x = document.getElementById("myLinks");
  if (window.innerWidth < 1260) {
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
}

// Close menu if clicked outside//
document.addEventListener("click", function (event) {
  var x = document.getElementById("myLinks");
  var icon = document.querySelector(".icon");
  var target = event.target;
  if (window.innerWidth < 1260 && x.style.display === "block") {
    if (!target.closest(".topnav")) {
      x.style.display = "none";
    }
  }
});

//Kontext boxes//
const kontextBoxes = document.querySelectorAll(".kontext-box");
// Loop through each kontext box so that you can click on each one//
kontextBoxes.forEach((kontextBox) => {
  //Get the button and popup elements for this kontext box//
  const kontextButton = kontextBox.querySelector(".kontext-box__button");
  const kontextPopup = kontextBox.querySelector(".kontext-box__popup");
  //Click event listener to the button//
  kontextButton.addEventListener("click", () => {
    kontextPopup.classList.toggle("kontext-box__popup--open");
  });
  //Click event listener to the window//
  window.addEventListener("click", (event) => {
    if (
      !kontextPopup.contains(event.target) &&
      !kontextButton.contains(event.target)
    ) {
      kontextPopup.classList.remove("kontext-box__popup--open");
    }
  });
});

//accordion//
//loop through so that it applies to all ids=accordion//
const accordions = document.querySelectorAll("#accordion");
accordions.forEach((accordion) => {
  $(accordion).accordion();
});

//selectable//
$(function () {
  $(".selectable").each(function () {
    $(this).selectable();
  });
});
