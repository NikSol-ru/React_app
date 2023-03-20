const ADD_POST = "ADD-POST",
    UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";


export const profileReducer = (state, action) => {

    // eslint-disable-next-line default-case
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.postsData.length + 1,
                post: state.newText,
                likesCount: 0
            };
            state.postsData.push(newPost);
            state.newText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newText = action.text;
            return state;
        default: return state;
    }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (newText) => ({ type: UPDATE_NEW_POST_TEXT, text: newText });