import TextField from "../components/TextField";
import Main from "../components/Main";
import {useState} from "react";
import {createUser} from "../services/API-Service";
import Error from "../components/Error";


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

    const changeRegistrationHandler = event =>
        setRegisterUser({ ...registerUser, [event.target.name]: event.target.value })

    const submitHandler = event => {
        event.preventDefault()
        createUser(registerUser)
            .then(registerUser => setRegisterUser(registerUser))
            .catch(error => setError(error))
            .finally(() => setRegisterUser(registerUser))
    }

    return(
        <Main as="form" onSubmit={submitHandler}>
            <TextField
                title="Username: "
                name="userName"
                value={registerUser.userName}
                onChange={changeRegistrationHandler}
                />
            <TextField
                title="Password :"
                name="password"
                type="password"
                value={registerUser.password}
                onChange={changeRegistrationHandler}
                />
            <TextField
                title="E-Mail :"
                name="email"
                type="email"
                value={registerUser.email}
                onChange={changeRegistrationHandler}
            />
            <TextField
                title="First name :"
                name="firstName"
                value={registerUser.firstName}
                onChange={changeRegistrationHandler}
            />
            <TextField
                title="Last name:"
                name="lastName"
                value={registerUser.lastName}
                onChange={changeRegistrationHandler}
            />
            <TextField
                title="Age :"
                name="age"
                type="number"
                value={registerUser.age}
                onChange={changeRegistrationHandler}
            />
            <TextField
                title="Location :"
                name="location"
                value={registerUser.location}
                onChange={changeRegistrationHandler}
            />
            <TextField
                title="Driving Experience: "
                name="drivingExp"
                value={registerUser.drivingExp}
                onChange={changeRegistrationHandler}
            />
            <TextField
                title="Driving Style :"
                name="drivingStyle"
                value={registerUser.drivingStyle}
                onChange={changeRegistrationHandler}
            />
            <TextField
                title="About me :"
                name="aboutMe"
                value={registerUser.aboutMe}
                onChange={changeRegistrationHandler}
            />
            { (registerUser.userName !== "" && registerUser.password !== "" && registerUser.email !== "" &&
            registerUser.age !== "" && registerUser.drivingExp !== "" && registerUser.drivingStyle !== "") ?
                <button>Register!</button> : <Error>Please fill in all fields..</Error> }

        </Main>
    );
}