const SET_USER_DATA = "SET_USER_DATA";


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
};

export const authReducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            };

        default: return state;
    }
};

export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } });
