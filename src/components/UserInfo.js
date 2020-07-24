export class Userinfo {
    constructor(user) {
        this._name = user.name
        this._info = user.text
        this._avatar = user.avatar;
    }
    getUserInfo() {
        const userProfile = {
            name: this._name.textContent,
            text: this._info.textContent,
            avatar: this._avatar.src
        }
        return userProfile;
    }

    setUserInfo(dataUser) {
        this._name.textContent = dataUser.name;
        this._info.textContent = dataUser.about;
        this._avatar.src = dataUser.avatar
    }

    setUser(user) {

        this._name.textContent = user.name;
        this._info.textContent = user.about;
        this._avatar.src = user.avatar;
    }
    setAvatarLink(user) {
        this._avatar.src = user.avatar;
    }
    
}
