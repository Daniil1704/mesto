export class Api {
    constructor(options) {
        this._urlApi = options.urlApi;
        this._token = options.token;
    }

    getCards() {
        return fetch(`${this._urlApi}/cards`, {
            method: 'GET',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Что-то пошло не так: ${res.status}`);
            })
    }
    addCards(card) {
        return fetch(`${this._urlApi}/cards`, {
            method: 'POST',

            body: JSON.stringify({
                name: card.name,
                link: card.link
            }),
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                else if (!res.ok) {
                    return Promise.reject(res.status);
                }
            })
    }
    deleteCard(id) {
        return fetch(`${this._urlApi}/cards/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Что-то пошло не так: ${res.status}`);
            })
    }

    getProfileInfo() {
        return fetch(`${this._urlApi}/users/me`, {
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            }
        })

            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Что-то пошло не так: ${res.status}`);
            })

    }

    changeProfileEdit(user) {
        return fetch(`${this._urlApi}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: user.name,
                about: user.about
            })
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Что-то пошло не так: ${res.status}`);
            })
    }

    addLike(id) {
        return fetch(`${this._urlApi}/cards/likes/${id}`, {
            method: 'PUT',
            headers: {
                authorization: this._token
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Что-то пошло не так: ${res.status}`);
            })
    }

    deleteLike(id) {
        return fetch(`${this._urlApi}/cards/likes/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Что-то пошло не так: ${res.status}`);
            })
    }

    changeAvatar(avatar) {
        return fetch(`${this._urlApi}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: avatar.avatar
            })
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Что-то пошло не так: ${res.status}`);
            })
    }
}
