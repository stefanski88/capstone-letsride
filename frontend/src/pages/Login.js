import Main from '../components/Main'
import LoginTextField from "../components/LoginTextField"
import { useAuth } from '../auth/AuthProvider'
import { useState } from "react";
import {Redirect} from "react-router-dom";


const defaultState = {
    userName: '',
    password: '',
}

export default function Login() {

    const {login, user} = useAuth()
    const [credentials, setCredentials] = useState(defaultState)

    const changeCredentialsHandler = event =>
        setCredentials({ ...credentials, [event.target.name]: event.target.value })

    const submitHandler = event => {
        event.preventDefault()
        login(credentials)
            .catch(error => console.error(error))
    }

    if (user) {
        return <Redirect to="/landing" />
    }

    return(
        <div>
            <Main as="form" onSubmit={submitHandler}>
                <LoginTextField
                    title="Username"
                    name="userName"
                    value={credentials.userName}
                    onChange={changeCredentialsHandler}
                />
                <LoginTextField
                title="Password"
                name="password"
                type="password"
                value={credentials.password}
                onChange={changeCredentialsHandler}
                />
                <button>login</button>
            </Main>
        </div>
    );
}