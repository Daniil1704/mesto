export const editButton = document.querySelector('.profile__button-edit');
export const popup = document.querySelector('.popup');
export const popupClose = document.querySelector('.popup__close');
export const nameInput = document.querySelector('.popup__input_author');
export const infoInput = document.querySelector('.popup__input_about');
export const name = document.querySelector('.profile__author');
export const info = document.querySelector('.profile__about');
export const formElement = document.querySelector('form');
// popup-add
export const addButton = document.querySelector('.profile__button-add');
export const popupAdd = document.querySelector('.popup-add');
export const popupName = document.querySelector('.popup__input_name');
export const popupLink = document.querySelector('.popup__input_link');
export const formCase = document.querySelector('.popup-add__case');
// popup-picture
export const popupPicture = document.querySelector('.popup-picture');
export const buttonProfile = document.querySelector('.popup__save');
export const buttonAdd = document.querySelector('.popup__save-add');
export const cards = document.querySelector('.cards');
export const pictureName = document.querySelector('.popup-picture__title');
export const pictureLink = document.querySelector('.popup-picture__image');
export const formElements = {
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disabled',
    inputErrorClass: 'popup__input-error',
    errorClass: 'popup__span-error_active'
};

export const userFormProfile = {
    name: name,
    text: info
}
export const initialCards = [
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

