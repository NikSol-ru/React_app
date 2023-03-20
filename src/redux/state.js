import { profileReducer } from "./profile-reducer";
import { dialogsReducer } from "./dialogs-reducer";

let store = {
    _state: {
        postsPage: {
            postsData: [
                { id: 1, post: "Мой первый пост", likesCount: 5 },
                { id: 2, post: "Мой второй пост", likesCount: 12 },
                { id: 3, post: "Мой третий пост", likesCount: 16 },
            ],
            newText: 'Привет!'
        },

        dialogsPage: {
            dialogsData: [
                { id: 1, userName: "Коля" },
                { id: 2, userName: "Гуля" },
                { id: 3, userName: "Петрович" },
                { id: 4, userName: "Артем" },
                { id: 5, userName: "Туман" },
            ],

            messagesData: [
                { id: 1, message: "Привет!" },
                { id: 2, message: "Как дела?" },
                { id: 3, message: "Все хорошо)" },
                { id: 4, message: "А у тебя?" },
            ],
            newMessageText: 'Hi!',
        }
    },

    _callSubscriber () { },

    getState () {
        return this._state;
    },

    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch (action) {
        this._state.postsPage = profileReducer(this._state.postsPage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }

}

export default store;
window.store = store;
