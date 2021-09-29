import TextField from "../../components/TextField";
import Main from "../../components/Main";
import {useState} from "react";
import {createUser} from "../../services/API-Service";
import Error from "../../components/Error";
import Header from "../../components/Header";
import {Redirect} from "react-router-dom";
import Page from "../../components/Page";
import NavBar from "../../components/NavBar";
import {drivingExpOptions, drivingStyleOptions} from "../../services/FilterOptions";
import Select from "../../components/Select";

export default function Registration() {

    const [error, setError] = useState()
    const [loading, setLoading] = useState()
    const [registerUser, setRegisterUser] = useState({})

    const handleRegistration = event =>
        setRegisterUser({...registerUser, [event.target.name]: event.target.value})

    const handleSubmit = async () => {
        setLoading(true)
            const createRequest = await createUser({
                userName: registerUser.userName,
                password: registerUser.password,
                email: registerUser.email,
                firstName: registerUser.firstName,
                lastName: registerUser.lastName,
                age: registerUser.age,
                location: registerUser.location,
                drivingStyle: registerUser.drivingStyle,
                drivingExp: registerUser.drivingExp,
            });
            setLoading(false)
            if (createRequest) {
                alert(`Hey ${registerUser.userName}, welcome to Let's Ride!`)
            } else {
                console.error('Could not create account, please fill in all Fields!')
            }
        }

    return (
        <Page>
            <Header/>
            <Main>
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
                    placeholder="*required"
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
                    type="date"
                    value={registerUser.age}
                    onChange={handleRegistration}
                />
                <TextField
                    title="Location :"
                    name="location"
                    value={registerUser.location}
                    onChange={handleRegistration}
                />
                <Select
                    title="Driving Experience: "
                    name="drivingExp"
                    placeholder="*required"
                    options={drivingStyleOptions}
                    value={registerUser.drivingExp}
                    onChange={handleRegistration}
                />
                <Select
                    title="Driving Style :"
                    name="drivingStyle"
                    placeholder="*required"
                    options={drivingExpOptions}
                    value={registerUser.drivingStyle}
                    onChange={handleRegistration}
                />
                {(registerUser.userName !== "" && registerUser.password !== "" && registerUser.email !== "" &&
                    registerUser.age !== "" && registerUser.drivingExp !== "" && registerUser.drivingStyle !== "") ?
                    <button onClick={handleSubmit}>Register!</button> : <Error>Please fill all required fields..</Error>}
            </Main>
            <NavBar/>
        </Page>
    );
}