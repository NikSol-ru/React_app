const ADD_POST = "ADD-POST",
    UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";


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

    dispatch (action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: this._state.postsPage.postsData.length + 1,
                post: this._state.postsPage.newText,
                likesCount: 0
            };
            this._state.postsPage.postsData.push(newPost);
            this._callSubscriber(this._state);
            this._state.postsPage.newText = '';

        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.postsPage.newText = action.text;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (newText) => ({ type: UPDATE_NEW_POST_TEXT, text: newText });


export default store;
window.store = store;
