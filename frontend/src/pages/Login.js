import Main from '../components/Main'
import LoginTextField from "../components/LoginTextField"
import { useAuth } from '../auth/AuthProvider'
import { useState } from "react";
import {Redirect} from "react-router-dom";


const defaultState = {
    username: '',
    password: '',
}

export default function Login() {

    const {user, login} = useAuth()
    const [credentials, setCredentials] = useState(defaultState)

    const handleCredentialsChange = event =>
        setCredentials({ ...credentials, [event.target.name]: event.target.value })

    const handleSubmit = event => {
        event.preventDefault()
        login(credentials)
    }

    if (user) {
        return <Redirect to="/landing" />
    }

    return(
        <div>
            <Main as="form" onSubmit={handleSubmit}>
                <LoginTextField
                    title="Username"
                    name="username"
                    value={credentials.username}
                    onChange={handleCredentialsChange}
                />
                <LoginTextField
                title="Password"
                name="password"
                type="password"
                value={credentials.password}
                onChange={handleCredentialsChange}
                />
                <button>login</button>
            </Main>
        </div>
    );
}