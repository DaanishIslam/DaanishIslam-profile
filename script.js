
function open_dropdown_menu() {
  console.log("button clicked");
  const dropdown_menu = document.querySelector(
    ".navbar-toggle-btn-dropdown-menu"
  ); // Corrected selector
  dropdown_menu.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function(event) {
  // Add a class to the body when the page loads or returns to the home section
  document.body.classList.add("show-home-animation");

  // Remove the animation class after the animation ends
  document.querySelector("#home").addEventListener("animationend", function() {
      document.body.classList.remove("show-home-animation");
  });
});
