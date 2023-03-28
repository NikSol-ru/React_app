const FOLLOW = "FOLLOW",
    UNFOLLOW = "UNFOLLOW",
    SET_USERS = "SET_USERS";

let initialState = { users: [] }

export const usersReducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return user;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    }
                    return user;
                })
            }

        case SET_USERS:
            return { ...state, users: [...action.users] }

        default: return state;
    }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
