export class Popup {
    constructor(popupElement) {
        this._popupElement = popupElement;
        this._handleEscClose = this._handleEscClose.bind(this);
        this._closeByOverlay = this._closeByOverlay.bind(this);
    }

    open() {
        this._popupElement.classList.add('popup_opened');
        document.addEventListener('mousedown', this._closeByOverlay);
        document.addEventListener('keydown', this._handleEscClose);

        this.setEventListeners();
    }

    close() {
        document.removeEventListener('click', this._closeByOverlay);
        document.removeEventListener('keyup', this._handleEscClose);
        this._popupElement.classList.remove('popup_opened');
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    _closeByOverlay(evt) {
        if (evt.target.classList.contains('popup_opened')) {
            this.close();
        }
    }
    setEventListeners() {
        this._closeButton = this._popupElement.querySelector('.popup__close');
        this._closeButton.addEventListener('click', () => {
            this.close()
        });

    }
}