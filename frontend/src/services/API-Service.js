import axios from "axios";

export const getToken = credentials =>
    axios
        .post('/auth/access_token', credentials)
        .then(response => response.data)
        .then(dto => dto.token)

const headers = token => {return{
    headers: {
        Authorization: `Bearer ${token}`,
    },
}}

// --- USER API ---
export const getUser = async (userName, token) => {
    try {
        const request = await axios
            .get(`/api/getUser/${userName}`, headers(token))
        return request.data
    }
    catch (error) {
        console.warn(error)
        return false;
    }
}

export const getUsers = async () => {
    try {
        const request = await axios
            .get('/api/getUsers')
        return request.data
    }
    catch (error) {
        console.warn(error)
        return false;
    }
}



export const createUser = newUser =>
    axios
        .post('/api/registerUser', newUser)
        .then(response => response.data)

export const deleteUser = (token) =>
    axios
        .delete('/api/deleteUser', headers(token))
        .then(response => response.data)

export const updateUser = (token, updateUser) =>
    axios
        .put('/api/updateUser', updateUser, headers(token))
        .then(response => response.data)

// --- MOTORCYCLE API ---
export const getMyMotorcycle = (motoID, token) =>
    axios
        .get('/api/moto/getMotoByMotoID/'+motoID, headers(token))
        //.then(response => response.data)

export const getMyMotorcycles = (token) =>
    axios
        .get('/api/moto/getAllMotos', headers(token))
        .then(response => response.data)


export const updateMotorcycle = (motoID, motorcycle, token) =>
    axios
        .put(`/api/moto/updateMoto/${motoID}`, motorcycle, headers(token))
        .then(response => response.data)


export const createMotorcycle = (newMotorcycle, token) =>
    axios
        .post('/api/moto/createMoto', newMotorcycle, headers(token))
        .then(response => response.data)


// --- INVITE API ---
export const getAllReceivedInvites = (token) =>
    axios
        .get('/api/invite/getAllReceivedInvites', headers(token))
        .then(response => response.data)

export const getAllSentInvites = (token) =>
    axios
        .get('/api/invite/getAllSentInvites', headers(token))
        .then(response => response.data)

export const deleteInvite = async (inviteID, token) =>{
    try{
        const request = await axios
            .delete(`/api/invite/deleteInvite/${inviteID}`, headers(token))
        return request.data;
    }
    catch(error) {
        console.warn(error)
        return false;
    }
}

export const updateInvite = async (inviteID, token) => {
    try {
        const request = await axios
            .put(`/api/invite/updateInvite/${inviteID}`, headers(token))
        return request.data;
    }
    catch (error) {
        console.warn(error)
        return false;
    }
}

export const createInvite = async (newInvite, token) => {
    try {
        const request = await axios
            .post('/api/invite/createInvite', newInvite, headers(token))
        return request.data
    }
    catch (error) {
        console.warn(error)
        return false;
    }
}




