export class Userinfo {
    constructor(user) {
        this._name = user.name
        this._info = user.text
    }
    getUserInfo() {
        const userProfile = {
            name: this._name.textContent,
            text: this._info.textContent
        }
        return userProfile;
    }

    setUserInfo(dataUser) {
        this._name.textContent = dataUser.nameAuthor;
        this._info.textContent = dataUser.textAuthor;
    }
}
