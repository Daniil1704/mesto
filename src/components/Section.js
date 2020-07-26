export class Section {
    constructor({ data, renderer }, containerSelector) {
        this._initialArray = data;
        this._renderer = renderer;
        this._container = containerSelector;

    }

    renderItems() {
        this._container.innerHTML = '';
        this._initialArray.reverse().forEach(item => {
            this._renderer(item);
        });
    }

    setItem(element) {
        this._container.prepend(element);
    }

}