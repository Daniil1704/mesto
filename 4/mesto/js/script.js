// first popup
const addButton = document.querySelector(".profile__button-edit");
const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup__close");
const nameInput = document.querySelector(".popup__author");
const infoInput = document.querySelector(".popup__about");
const name = document.querySelector(".profile__author");
const info = document.querySelector(".profile__about");

function edit() {
  popup.classList.add("popup_opened");
}
function close() {
  popup.classList.remove("popup_opened");
}
addButton.addEventListener("click", edit);
popupClose.addEventListener("click", close);

const formElement = document.querySelector("form");

function formSubmitHandler(evt) {
  evt.preventDefault();
  name.textContent = nameInput.value;
  info.textContent = infoInput.value;
  close();
}

formElement.addEventListener("submit", formSubmitHandler);
