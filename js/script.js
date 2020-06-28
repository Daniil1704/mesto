// popup-edit
import Card from './Card.js';

import FormValidator from './FormValidator.js';

const editButton = document.querySelector('.profile__button-edit');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const nameInput = document.querySelector('.popup__input_author');
const infoInput = document.querySelector('.popup__input_about');
const name = document.querySelector('.profile__author');
const info = document.querySelector('.profile__about');
const formElement = document.querySelector('form');
// popup-add
const addButton = document.querySelector('.profile__button-add');
const popupAdd = document.querySelector('.popup-add');
const popupShut = document.querySelector('.popup-add__shut');
const popupName = document.querySelector('.popup__input_name');
const popupLink = document.querySelector('.popup__input_link');
const formCase = document.querySelector('.popup-add__case');
// popup-picture
export const popupPicture = document.querySelector('.popup-picture');
const popupImageClose = document.querySelector('.popup-picture__shut');

const buttonProfile = document.querySelector('.popup__save');
const buttonAdd = document.querySelector('.popup__save-add');

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const formElements = {
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input-error',
  errorClass: 'popup__span-error_active'
};

function escHandler(evt) {
  if (evt.key === 'Escape') {
    document.querySelector('.popup_opened').classList.remove('popup_opened');
    document.removeEventListener('keydown', escHandler);
  }
};

export default function togglePopup(elem) {
  elem.classList.toggle('popup_opened');
  nameInput.value = name.textContent;
  infoInput.value = info.textContent;
  document.addEventListener('keydown', escHandler);
  switchButton();

}


//  Обработчик  формы редактирования профиля


function formSubmitHandler(evt) {
  evt.preventDefault();

  name.textContent = nameInput.value
  info.textContent = infoInput.value

  togglePopup(popup);
}

document.addEventListener('click', function (evt) {
  evt.target.classList.remove('popup_opened');
  evt.stopPropagation();
});

function addCard() {
  initialCards.forEach((item) => {
    const card = new Card(item.link, item.name, '#template');
    const cardElement = card.generateCard();
    document.querySelector('.cards').append(cardElement);
  });

}
function userAddElement(evt) {
  evt.preventDefault();
  const card = new Card(popupLink.value, popupName.value, '#template');
  const cardElement = card.generateCard();
  document.querySelector('.cards').prepend(cardElement);
  togglePopup(popupAdd);
}

function switchButton() {

  if (popup.classList.contains('popup')) {
    buttonProfile.classList.remove('popup__save_disabled');
    buttonProfile.disabled = false;
  }
  else if (popupAdd.classList.contains('popup-add')) {
    buttonAdd.classList.add('popup__save_disabled');

    buttonAdd.disabled = true;
  }
}

const formValidator = new FormValidator(formElements, popup);
formValidator.enableValidation();

const formValidatorCard = new FormValidator(formElements, popupAdd);
formValidatorCard.enableValidation();

formElement.addEventListener('submit', formSubmitHandler);

editButton.addEventListener('click', () => togglePopup(popup));

popupClose.addEventListener('click', () => togglePopup(popup));

formCase.addEventListener('submit', userAddElement);

addButton.addEventListener('click', () => togglePopup(popupAdd));

popupShut.addEventListener('click', () => togglePopup(popupAdd));

popupImageClose.addEventListener('click', () => togglePopup(popupPicture));

addCard();

switchButton();
