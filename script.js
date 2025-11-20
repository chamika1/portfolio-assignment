// This function turns Light Mode ON or OFF
function toggleLightMode() {
  document.body.classList.toggle("light");
}
let yearText = document.getElementById("year");
yearText.textContent = new Date().getFullYear();
