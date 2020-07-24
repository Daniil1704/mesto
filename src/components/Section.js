export class Section {
    constructor({ data, renderer }, containerSelector) {
        this._initialArray = data;
        this._renderer = renderer;
        this._container = containerSelector;

    }

    renderItems(cards, userId) {
        this._container.innerHTML = '';
        cards.reverse().forEach(item => {
            this._renderer(item, userId);
        });
    }

    setItem(element) {
        this._container.prepend(element);
    }

    addItem(element) {
        this._container.append(element);
    }
}