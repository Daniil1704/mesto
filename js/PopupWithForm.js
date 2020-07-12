import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
    constructor(popupElement, { submitForm }) {
        super(popupElement);
        this._submitCallback = submitForm;
        this._formElement = this._popupElement.querySelector('form');

    }

    _getInputValues() {
        this._popupInputs = this._popupElement.querySelectorAll('.popup__input');
        this._formValues = {};
        this._popupInputs.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    _sendingForm(evt) {
        evt.preventDefault();
        this._submitCallback(this._getInputValues());
    }

    setEventListeners() {
        super.setEventListeners();
        this._submit = this._sendingForm.bind(this);
        this._formElement.addEventListener('submit', this._submit);
    }

    close() {
        super.close();


    }



}
