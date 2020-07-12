import './pages/index.css';

import { Card } from './js/Card.js';

import { FormValidator } from './js/FormValidator.js';

import {
  initialCards,
  editButton,
  popup,
  popupClose,
  nameInput,
  infoInput,
  name,
  info,
  formElement,
  addButton,
  popupAdd,
  popupName,
  popupLink,
  formCase,
  popupPicture,
  buttonProfile,
  buttonAdd,
  cards,
  pictureName,
  pictureLink,
  formElements,
  userFormProfile
} from './js/utils.js';

import { Userinfo } from './js/UserInfo.js';

import { PopupWithForm } from './js/PopupWithForm.js';

// import { Popup } from './js/Popup.js';

import { Section } from './js/Section.js';

import { PopupWithImage } from './js/PopupWithImage.js';

const userInfo = new Userinfo(userFormProfile)

const popupWithForm = new PopupWithForm(popup, {
  submitForm: (item) => {
    userInfo.setUserInfo(item);
    popupWithForm.close();
  }
});

const openProfileForm = () => {

  const profile = userInfo.getUserInfo();
  nameInput.value = profile.name;
  infoInput.value = profile.text;
  popupWithForm.open()
}

const photoPopup = new PopupWithImage(popupPicture, pictureName, pictureLink);

const section = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = new Card('#template', {
      initialCards: item, handleCardClick: () => {
        photoPopup.open(item)
      }
    });
    const cardElement = card.generateCard();
    section.setItem(cardElement);
  },
},
  cards
);

section.renderItems(initialCards);

const popupWithFormPic = new PopupWithForm(popupAdd, {
  submitForm: (item) => {
    const card = new Card('#template', {
      initialCards: item, handleCardClick: () => {
        photoPopup.open(item)
      }
    });
    const cardElement = card.generateCard();
    section.setItem(cardElement);
    popupWithFormPic.close();
  }
});

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

editButton.addEventListener('click', () => openProfileForm());

addButton.addEventListener('click', () => { popupWithFormPic.open() });

switchButton();
