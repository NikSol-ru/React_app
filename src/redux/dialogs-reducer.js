const ADD_MESSAGE = "ADD-MESSAGE",
    UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
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
};

export const dialogsReducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: state.messagesData.length + 1,
                message: state.newMessageText
            };
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.message;
            return state;
        default: return state;
    }
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreator = (newMessageText) => ({ type: UPDATE_NEW_MESSAGE_TEXT, message: newMessageText })