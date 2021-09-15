import axios from "axios";

export const getToken = credentials =>
    axios
        .post('auth/access_token', credentials)
        .then(response => response.data)
        .then(dto => dto.token)

export const getUsers = () =>
    axios
        .get('api/getUsers')
        .then(response => response.data)

export const getUser = () =>
    axios
        .get('api/getUser/user1')
        .then(response => response.data)

export const registerUser = () =>
    axios
        .post('api/registerUser')
        .then(response => response.data)

/*
const headers = token => ({
    headers: {
        Authorization: `Bearer ${token}`,
    },
})
 */

