import TextField from "../components/TextField";
import Main from "../components/Main";
import {useState} from "react";
import {createUser} from "../services/API-Service";
import Error from "../components/Error";
import Header from "../components/Header";


export default function Registration() {

    const [registerUser, setRegisterUser] = useState( {
        userName: "",
        password: "",
        email: "",
        firstName: "",
        lastName: "",
        age: "",
        location: "",
        drivingExp: "",
        drivingStyle: "",
        aboutMe: "",
    } )
    const [error, setError] = useState()

    const handleRegistration = event =>
        setRegisterUser({ ...registerUser, [event.target.name]: event.target.value })

    const handleSubmit = event => {
        event.preventDefault()
        createUser(registerUser)
            .then(registerUser => setRegisterUser(registerUser))
            .catch(error => setError(error))
            .finally(() => setRegisterUser(registerUser))
    }

    return(
        <Main as="form" onSubmit={handleSubmit}>
            <Header />
            <TextField
                title="Username: "
                name="userName"
                placeholder="*required"
                value={registerUser.userName}
                onChange={handleRegistration}
                />
            <TextField
                title="Password :"
                name="password"
                type="password"
                placeholder="*required"
                value={registerUser.password}
                onChange={handleRegistration}
                />
            <TextField
                title="E-Mail :"
                name="email"
                type="email"
                placeholder="*required"
                value={registerUser.email}
                onChange={handleRegistration}
            />
            <TextField
                title="First name :"
                name="firstName"
                value={registerUser.firstName}
                onChange={handleRegistration}
            />
            <TextField
                title="Last name:"
                name="lastName"
                value={registerUser.lastName}
                onChange={handleRegistration}
            />
            <TextField
                title="Age :"
                name="age"
                type="number"
                placeholder="*required"
                value={registerUser.age}
                onChange={handleRegistration}
            />
            <TextField
                title="Location :"
                name="location"
                value={registerUser.location}
                onChange={handleRegistration}
            />
            <TextField
                title="Driving Experience: "
                name="drivingExp"
                placeholder="*required"
                value={registerUser.drivingExp}
                onChange={handleRegistration}
            />
            <TextField
                title="Driving Style :"
                name="drivingStyle"
                placeholder="*required"
                value={registerUser.drivingStyle}
                onChange={handleRegistration}
            />
            <TextField
                title="About me :"
                name="aboutMe"
                value={registerUser.aboutMe}
                onChange={handleRegistration}
            />
            { (registerUser.userName !== "" && registerUser.password !== "" && registerUser.email !== "" &&
            registerUser.age !== "" && registerUser.drivingExp !== "" && registerUser.drivingStyle !== "") ?
                <button>Register!</button> : <Error>Please fill in all fields..</Error> }
        </Main>
    );
}