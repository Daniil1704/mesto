// popup-edit

const editButton = document.querySelector('.profile__button-edit');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const nameInput = document.querySelector('.popup__input_author');
const infoInput = document.querySelector('.popup__input_about');
const name = document.querySelector('.profile__author');
const info = document.querySelector('.profile__about');
const formElement = document.querySelector('form');
// popup-add
const cards = document.querySelector('.cards');
const addButton = document.querySelector('.profile__button-add');
const popupAdd = document.querySelector('.popup-add');
const popupShut = document.querySelector('.popup-add__shut');
const popupName = document.querySelector('.popup__input_name');
const popupLink = document.querySelector('.popup__input_link');
const popupMake = document.querySelector('.popup-add__make');
const formCase = document.querySelector('.popup-add__case');
// popup-picture
const popupPicture = document.querySelector('.popup-picture');
const popupImageClose = document.querySelector('.popup-picture__shut');




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




function addElement(item) {
  const template = document.querySelector('#template').content;
  const cardsItem = template.cloneNode(true);
  const cardRubbish = cardsItem.querySelector('.card__rubbish');
  const likeButton = cardsItem.querySelector('.card__button-like');
  const cardImg = cardsItem.querySelector('.card__image');
  const cardTitle = cardsItem.querySelector('.card__photo-title');

  cardImg.src = item.link;
  cardImg.alt = item.name;
  cardTitle.textContent = item.name;

  cardImg.addEventListener('click', function openPhoto(evt) {
    const photo = evt.target;
    popupPicture.querySelector('.popup-picture__image').src = photo.src;
    popupPicture.querySelector('.popup-picture__title').textContent = photo.alt;
    togglePopup(popupPicture);
  });

  cardRubbish.addEventListener('click', function (evt) {

    evt.target.parentElement.remove();
  });

  likeButton.addEventListener('click', function (evt) {

    evt.target.classList.toggle('card__button-like_active');
  });


  cards.prepend(cardsItem);
}

initialCards.forEach(addElement);


//  Обработчик  формы редактирования профиля

function togglePopup(elem) {
  elem.classList.toggle('popup_opened');
  nameInput.value = name.textContent;
  infoInput.value = info.textContent;
  document.addEventListener('keydown', escHandler);
  enableValidation(object);
}

function formSubmitHandler(evt) {
  evt.preventDefault();

  name.textContent = nameInput.value
  info.textContent = infoInput.value

  togglePopup(popup);
}


// Функция создания добавления нового объекта в массив из формы добавления новой карточки.

function userAddElemnt(evt) {
  evt.preventDefault();
  const newCard = [];
  newCard.name = popupName.value;
  newCard.link = popupLink.value;
  addElement(newCard);
  togglePopup(popupAdd);

}


function escHandler(evt) {
  if (evt.key === 'Escape') {
    document.querySelector('.popup_opened').classList.remove('popup_opened');
    document.removeEventListener('keydown', escHandler);
  }
};

document.addEventListener('click', function (evt) {
  evt.target.classList.remove('popup_opened');
  evt.stopPropagation();
});

formElement.addEventListener('submit', formSubmitHandler);

editButton.addEventListener('click', () => togglePopup(popup));

popupClose.addEventListener('click', () => togglePopup(popup));

formCase.addEventListener('submit', userAddElemnt);

addButton.addEventListener('click', () => togglePopup(popupAdd));

popupShut.addEventListener('click', () => togglePopup(popupAdd));

popupImageClose.addEventListener('click', () => togglePopup(popupPicture));

