const ADD_POST = "ADD-POST",
    UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT",
    SET_USER_PROFILE = "SET_USER_PROFILE"

let initialState = {
    profile: null,
    postsData: [
        { id: 1, post: "Мой первый пост", likesCount: 5 },
        { id: 2, post: "Мой второй пост", likesCount: 12 },
        { id: 3, post: "Мой третий пост", likesCount: 16 },
    ],
    newText: 'Привет!'
};

export const profileReducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.postsData.length + 1,
                post: state.newText,
                likesCount: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newText: '',
            };

        case UPDATE_NEW_POST_TEXT:
            let newText = action.text;
            return {
                ...state,
                newText: newText,
            };

        case SET_USER_PROFILE:
            return { ...state, profile: action.profile };

        default: return state;
    }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (newText) => ({ type: UPDATE_NEW_POST_TEXT, text: newText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });