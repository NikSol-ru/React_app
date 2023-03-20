const ADD_MESSAGE = "ADD-MESSAGE",
    UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

export const dialogsReducer = (state, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: state.messagesData.length + 1,
                message: state.newMessageText
            };
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            break;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.message;
            break;
    }
    return state;
};