export default class FormValidator {
    constructor(formElements, form) {
        this._formSelector = form;
        this._inputSelector = formElements.inputSelector;
        this._submitButtonSelector = formElements.submitButtonSelector;
        this._inactiveButtonClass = formElements.inactiveButtonClass;
        this._inputErrorClass = formElements.inputErrorClass;
        this._errorClass = formElements.errorClass;
    }
    // показ ошибки 
    _showInputError(form, inputElement, errorMessage) {
        const errorElement = form.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
    };

    // удалитель ошибки 
    _hideInputError(form, inputElement) {
        const errorElement = form.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = '';
    };
    //   Проверка на корректность
    _checkInputValidity(form, inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(form, inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(form, inputElement);
        }
    }

    _setEventListeners(form) {
        const inputList = Array.from(form.querySelectorAll(this._inputSelector));
        const buttonElement = form.querySelector(this._submitButtonSelector);
        this._toggleButtonState(inputList, buttonElement);
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(form, inputElement);
                this._toggleButtonState(inputList, buttonElement);
            });
        });
    };

    enableValidation() {
        this._setEventListeners(this._formSelector);
    };
    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    };

    _toggleButtonState(inputList, buttonElement) {
        if (this._hasInvalidInput(inputList)) {
            buttonElement.classList.add(this._inactiveButtonClass);
        } else {
            buttonElement.classList.remove(this._inactiveButtonClass);
        }
    };
}


