// popup-edit

const editButton = document.querySelector(".profile__button-edit");
const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup__close");
const nameInput = document.querySelector(".popup__author");
const infoInput = document.querySelector(".popup__about");
const name = document.querySelector(".profile__author");
const info = document.querySelector(".profile__about");
const formElement = document.querySelector("form");
// popup-add
const cards = document.querySelector(".cards"); // находим в DOM блок card
const addButton = document.querySelector(".profile__button-add"); // кнопка добавления карточки в DOM
const popupAdd = document.querySelector(".popup__add"); // блок попап добавления карточки в DOM
const popupShut = document.querySelector(".popup__shut"); // кнопка закрытия попапа добавления карточкив DOM
const popupName = document.querySelector(".popup__name"); // поле имени картинки попапа добавление карточки в DOM
const popupLink = document.querySelector(".popup__link"); // поле добавления ссылки на картинкинку ПДК в DOM
const popupMake = document.querySelector(".popup__make"); // кнопки сохранения карточки ПДК в DOM
const formCase = document.querySelector(".popup__case"); // ПДК в DOM
// popup-picture
const popupPicture = document.querySelector(".popup-picture"); // попап с картинкой
const popupImageClose = document.querySelector(".popup-image__close-btn"); // закрытие попапа с картинкой

const initialCards = [
  {
    name: "Архыз",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

function togglePopup(elem) {
  elem.classList.toggle("popup__opened");
}

function addElement(item) {
  const template = document.querySelector("#template").content; // находим в DOM шаблон с карточкой.
  const cardsItem = template.cloneNode(true); // клонируем шаблон карточки
  const cardRubbish = cardsItem.querySelector(".card__rubbish"); // Находим кнопку удаления
  const likeButton = cardsItem.querySelector(".card__button-like"); // Находим кнопку лайк.
  const cardImg = cardsItem.querySelector(".card__photo-name"); // выбрали картинку
  const cardTitle = cardsItem.querySelector(".card__photo-title"); // выбрали текст картинки

  cardImg.src = item.link; // Добавляем ссылку на картинку из массива
  cardTitle.textContent = item.name;

  cardImg.addEventListener("click", function () {
    togglePopup(popupPicture); // открываем попап с картинкой.
    popupPicture.querySelector(".popup-picture__image").src = item.link; // добавляем URL картинки
    popupImageClose.querySelector(".popup-picture__title").textContent =
      item.name;
  });

  cardRubbish.addEventListener("click", function (evt) {
    // Добавляем кнопке удаления слушатель с функцией удаления карточки
    evt.target.parentElement.remove();
  });

  likeButton.addEventListener("click", function (evt) {
    // Добавляем кнопке лайк слушатель с функцией постановки лайка
    evt.target.classList.toggle("card__like_active");
  });

  cards.prepend(cardsItem);
}

initialCards.forEach(addElement);

// Обработчик  формы редактирования профиля
function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  name.textContent = nameInput.value; // вставляем имя в профиль из формы ввода.
  info.textContent = infoInput.value; // вставляем профессию в профиль из формы ввода.

  togglePopup(popup); // Закрываем попап
}

// Функция создания добавления нового объекта в массив из формы добавления новой карточки.

function userAddElemnt(evt) {
  evt.preventDefault(); // отменяем стандартный сабмит для формы.
  const newCard = {}; // создём новый объект
  newCard.name = popupName.value; // Записываем в имя объекта название из поля ввода имени в форме
  newCard.link = popupLink.value; // Записываем ссылку в объект из поля вводы ссылки в форме
  initialCards.push(newCard); // вставляем объект в конец массива с карточками
  addElement(initialCards[initialCards.length - 1]); // вызываем функцию создания карточки и вставляем данные из последнего объекта массива.
  togglePopup(popupAdd); // вызываем функцию закрытия формы добавления карточки
}

formElement.addEventListener("submit", formSubmitHandler); // слушатель события “submit” - «отправка» в форме редактирования профиля.

editButton.addEventListener("click", () => togglePopup(popup)); // ловим клик по кнопке редактирования и открываем popup

popupClose.addEventListener("click", () => togglePopup(popup)); // ловим клик по кнопке закрытия попапа и закрываем его функцией

formCase.addEventListener("submit", userAddElemnt); // навешиваем слушатель события сабмит на форму добавения карточки.

addButton.addEventListener("click", () => togglePopup(popupAdd)); // Слушатель клика для кнопки добавить карточку в профиле пользователя.

popupShut.addEventListener("click", () => togglePopup(popupAdd)); // Слушатель кника для кнопки закрытия попапа редактирования карточки.

popupImageClose.addEventListener("click", () => togglePopup(ppopupPicture)); //  Слушатель клика для закрытия попапа с картинкой по кнопке закрыть.
