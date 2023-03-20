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
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newText = action.text;
            break;
    }
    return state;
};