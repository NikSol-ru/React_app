import { rerenderEntireThree } from "../render";

const state = {
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
};

window.state = state;

export const addPost = (postMessage) => {
    let newPost = {
        post: postMessage,
        id: state.postsPage.postsData.length + 1,
        likesCount: 0
    };
    state.postsPage.postsData.push(newPost);
    rerenderEntireThree(state, addPost, updateNewPostText);
}

export const updateNewPostText = (newText) => {
    state.postsPage.newText = newText;
    rerenderEntireThree(state, addPost, updateNewPostText);
}

export default state;