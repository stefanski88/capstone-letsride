import axios from "axios";

export const getToken = credentials =>
    axios
        .post('auth/access_token', credentials)
        .then(response => response.data)
        .then(dto => dto.token)

const headers = token => ({
    headers: {
        Authorization: `Bearer ${token}`,
    },
})

export const getUser = (token, userName) =>
    axios
        .get(`api/getUser/${userName}`, headers(token))
        .then(response => response.data)

export const getUsers = () =>
    axios
        .get('api/getUsers')
        .then(response => response.data)

export const createUser = newUser =>
    axios
        .post('api/registerUser', newUser)
        .then(response => response.data)

export const deleteUser = (token) =>
    axios
        .delete('api/deleteUser', headers(token))
        .then(response => response.data)

export const updateUser = (token, updateUser) =>
    axios
        .put('api/updateUser', updateUser, headers(token))
        .then(response => response.data)

export const getMyMotorcycle = (token, motoID) =>
    axios
        .get(`api/moto/getMotoByMotoID/${motoID}`, headers(token))
        .then(response => response.data)

export const updateMotorcycle = (token, motorcycle, motoID ) =>
    axios
        .get(`api/moto/updateMoto/${motoID}`, headers(token))
        .then(response => response.data)

export const getMyMotorcycles = (token) =>
    axios
        .get('api/moto/getAllMotos', headers(token))
        .then(response => response.data)







