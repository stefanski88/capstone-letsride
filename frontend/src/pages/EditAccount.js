import Main from "../components/Main";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import {getUser, updateUser} from "../services/API-Service";
import {useEffect, useState} from "react";
import TextField from "../components/TextField";
import {useAuth} from "../auth/AuthProvider";

export default function EditAccount() {

    const { token, user } = useAuth()
    const [error, setError] = useState()
    const [update, setUpdate] = useState({})

    useEffect(() => {
        getUser(user.username, token)
            .then(data => setUpdate(data))
    }, [])

    const handleUpdate = event =>
        setUpdate({ ...update, [event.target.name]: event.target.value })

    const handleSubmit = event => {
        event.preventDefault()
        updateUser(token, update)
            .then(update => setUpdate(update))
            .catch(error => setError(error))
            .finally(() => setUpdate(update))
    }

    return(
        <Main as="form" onSubmit={handleSubmit}>
            <Header />
            <TextField
                title="Password :"
                name="password"
                type="password"
                value={update.password}
                onChange={handleUpdate}
            />
            <TextField
                title="First name :"
                name="firstName"
                value={update.firstName}
                onChange={handleUpdate}
            />
            <TextField
                title="Last name:"
                name="lastName"
                value={update.lastName}
                onChange={handleUpdate}
            />
            <TextField
                title="Age :"
                name="age"
                type="number"
                value={update.age}
                onChange={handleUpdate}
            />
            <TextField
                title="Location :"
                name="location"
                value={update.location}
                onChange={handleUpdate}
            />
            <TextField
                title="Driving Experience: "
                name="drivingExp"
                value={update.drivingExp}
                onChange={handleUpdate}
            />
            <TextField
                title="Driving Style :"
                name="drivingStyle"
                value={update.drivingStyle}
                onChange={handleUpdate}
            />
            <button>Update!</button>
            <NavBar />
        </Main>

    );
}