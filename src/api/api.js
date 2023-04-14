import axios from "axios"

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "83f7e25f-303c-465d-8399-6de4a424aac3",
    },
})

export const usersApi = {
    getUsers (currentPage = 1, pageSize = 100) {
        return instance
            .get(
                `users/?page=${ currentPage }&count=${ pageSize }`,
            )
            .then(response => response.data);
    }
}

export const authApi = {
    getAuthData () {
        return instance
            .get(`auth/me`)
    }
}
