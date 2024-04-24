let hobbiesSection = document.getElementById("hobbiesSection");
let showHobbiesButton = document.getElementById("showHobbiesButton");

function showHobbies() {
  if (hobbiesSection.style.display == "none") {
    hobbiesSection.style.display = "block";
  } else {
    hobbiesSection.style.display = "none";
  }
}

showHobbiesButton.addEventListener("click", showHobbies);
