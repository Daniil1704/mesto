import togglePopup from './script.js';
import { popupPicture } from './script.js';
export default class Card {
    constructor(link, name, cardSelector) {
        this._link = link;
        this._name = name;
        this._cardSelector = cardSelector;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.card')
            .cloneNode(true);
        return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._element.querySelector('.card__photo-title').textContent = this._name;
        this._element.querySelector('.card__image').src = this._link;
        this._element.querySelector('.card__image').alt = this._name;



        return this._element;
    }

    _cardRubbish() {
        this._element.remove();

    }

    _likeButton() {
        this._element.querySelector('.card__button-like').classList.toggle('card__button-like_active');

    }

    _popupPicture() {
        popupPicture.querySelector('.popup-picture__image').src = this._link;
        popupPicture.querySelector('.popup-picture__title').textContent = this._name;
        togglePopup(popupPicture);
    }

    _setEventListeners() {
        this._element.querySelector('.card__button-like').addEventListener('click', () => {
            this._likeButton();
        });
        this._element.querySelector('.card__rubbish').addEventListener('click', () => {
            this._cardRubbish();
        });
        this._element.querySelector('.card__image').addEventListener('click', () => {
            this._popupPicture();
        });

    }
}

