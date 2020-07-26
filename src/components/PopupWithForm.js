import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
    constructor(popupElement, { submitForm }) {
        super(popupElement);
        this._submitCallback = submitForm;
        this._formElement = this._popupElement.querySelector('form');
        this._buttonSubmit = this._popupElement.querySelector('.popup__save');
        this._buttonText = this._buttonSubmit.textContent;

    }

    getInputValues() {
        this._popupInputs = this._popupElement.querySelectorAll('.popup__input');
        this._formValues = {};
        this._popupInputs.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        console.log(this._formValues);
        return this._formValues;
    }

    _sendingForm(evt) {
        evt.preventDefault();
        this._submitCallback(this.getInputValues());
    }

    setEventListeners() {
        super.setEventListeners();
        this._submit = this._sendingForm.bind(this);
        this._formElement.addEventListener('submit', this._submit);
    }

    sendingLoading(isLoading) {
        if (isLoading) {
            this._buttonSubmit.classList.add('popup__button-loading');
            this._buttonSubmit.textContent = 'Сохранение...'
        } else if (!isLoading) {
            this._buttonSubmit.classList.remove('popup__button-loading');
            this._buttonSubmit.textContent = this._buttonText
        }
    }

}
