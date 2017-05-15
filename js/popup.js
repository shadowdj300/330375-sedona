var link = document.querySelector(".hotel-search-btn-text");
var popup = document.querySelector(".hotel-search-wrapper");
var form = document.querySelector(".hotel-search-form");
var datein = form.querySelector("[name=date-in]");
var dateout = form.querySelector("[name=date-out]");
var adults = form.querySelector("[name=adults]");
var children = form.querySelector("[name=children]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("hotel-search-show");
  datein.focus();
});

form.addEventListener("submit", function(evt) {
  if (!adults.value || !children.value) {
    evt.preventDefault();
    console.log("Нужно выбрать количество людей");
  }
  else{
    localStorage.setItem("adults", adults.value);
    localStorage.setItem("children", children.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
  if (popup.classList.contains("hotel-search-show")) {
    popup.classList.remove("hotel-search-show");
    popup.classList.remove("modal-error");
    }
  }
 });
