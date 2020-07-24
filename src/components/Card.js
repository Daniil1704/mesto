export class Card {
    constructor(cardSelector, userId, { initialCards, handleCardClick, deleteCards, handleLike, handleDeleteLike, }) {
        this._link = initialCards.link;
        this._name = initialCards.name;
        this._handleCardClick = handleCardClick
        this._cardSelector = cardSelector;
        this._id = initialCards._id;
        this._handleDeleteLike = handleDeleteLike;
        this._handleLike = handleLike;
        this._likes = initialCards.likes
        this._userId = userId
        this._owner = initialCards.owner
        this._deleteCards = deleteCards
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.card')
            .cloneNode(true);
        return cardElement;
    }

    clickLike(arr) {
        const like = this._element.querySelector('.card__span-like')
        like.textContent = arr.length
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._element.querySelector('.card__photo-title').textContent = this._name;
        this._element.querySelector('.card__image').src = this._link;
        this._element.querySelector('.card__image').alt = this._name;
        this._element.id = this._id;
        const elementLike = this._element.querySelector('.card__button-like')
        const elementSpan = this._element.querySelector('.card__span-like')

        elementSpan.textContent = `${this._likes.length}`;

        if (this._likes.find((like) => like._id = this._userId)) {
            elementLike.classList.add('card__button-like_active')
        }

        if (this._owner._id !== this._userId) {
            this._element.querySelector('.card__rubbish').style.display = 'none';
        }

        return this._element;
    }

    _cardRubbish() {
        this._element.remove();

    }

    likeButton() {
        this._element.querySelector('.card__button-like').classList.toggle('card__button-like_active');

    }

    _showLike() {
        const like = this._element.querySelector('.card__button-like')
        like.classList.contains('card__button-like_active')
            ? this._handleDeleteLike()
            : this._handleLike()
    }
    _popupPicture() {
        popupPicture.querySelector('.popup-picture__image').src = this._link;
        popupPicture.querySelector('.popup-picture__title').textContent = this._name;

    }

    delete() {
        this._element.remove();
        this._element = null;
    }
    _setEventListeners() {
        this._element.querySelector('.card__button-like').addEventListener('click', () => {
            this._showLike();
        });
        this._element.querySelector('.card__image').addEventListener('click', () => {
            this._handleCardClick();
        });
        this._element.querySelector('.card__rubbish').addEventListener('click', () => {
            this._deleteCards();
        });
    }
}

