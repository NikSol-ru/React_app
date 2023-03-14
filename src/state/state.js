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
            ]
        }
    },

    _callSubscriber () { },

    getState () {
        return this._state;
    },

    subscribe (observer) {
        this._callSubscriber = observer;
    },

    addPost () {
        let newPost = {
            id: this._state.postsPage.postsData.length + 1,
            post: this._state.postsPage.newText,
            likesCount: 0
        };
        this._state.postsPage.postsData.push(newPost);
        this._callSubscriber(this._state);
        this._state.postsPage.newText = '';
    },

    updateNewPostText (newText) {
        this._state.postsPage.newText = newText;
        this._callSubscriber(this._state);
    },
}

export default store;
window.store = store;
