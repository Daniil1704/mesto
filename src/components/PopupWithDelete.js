import { Popup } from './Popup.js';

export class PopupWithDelete extends Popup {
    constructor(popupElement) {
        super(popupElement);
        this._form = this._popupElement.querySelector('.popup__sure-case')
        console.log(this._form)
    }
    setHandleSubmit(foo) {
        this._handleSubmit = foo
    }

    setEventListeners() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmit();
            this.close();
        })
        super.setEventListeners();
    }
}