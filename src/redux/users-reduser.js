const FOLLOW = "FOLLOW",
    UNFOLLOW = "UNFOLLOW",
    SET_USERS = "SET_USERS";

let initialState = { users: [] }
//     users: [
//         // { id: 1, avatarUrl: 'https://w7.pngwing.com/pngs/165/652/png-transparent-businessperson-computer-icons-avatar-avatar-heroes-public-relations-business.png', followed: false, fullName: "Коля", location: { city: "Южно-Подольск", country: "Россия" } },
//         // { id: 2, avatarUrl: 'https://w7.pngwing.com/pngs/165/652/png-transparent-businessperson-computer-icons-avatar-avatar-heroes-public-relations-business.png', followed: false, fullName: "Гуля", location: { city: "Омск", country: "Россия" } },
//         // { id: 3, avatarUrl: 'https://w7.pngwing.com/pngs/165/652/png-transparent-businessperson-computer-icons-avatar-avatar-heroes-public-relations-business.png', followed: true, fullName: "Петрович", location: { city: "Омск", country: "Россия" } },
//         // { id: 4, avatarUrl: 'https://w7.pngwing.com/pngs/165/652/png-transparent-businessperson-computer-icons-avatar-avatar-heroes-public-relations-business.png', followed: true, fullName: "Артем", location: { city: "Омск", country: "Россия" } },
//         // { id: 5, avatarUrl: 'https://w7.pngwing.com/pngs/165/652/png-transparent-businessperson-computer-icons-avatar-avatar-heroes-public-relations-business.png', followed: true, fullName: "Туман", location: { city: "Омск", country: "Россия" } },
//     ],
// }

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
