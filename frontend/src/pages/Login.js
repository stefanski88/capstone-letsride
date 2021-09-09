import Main from '../components/Main'
import LoginTextField from "../components/LoginTextField"
import { useAuth } from '../auth/AuthProvider'
import { useState } from "react";

const defaultState = {
    userName: '',
    password: '',
}

export default function Login() {

    const {user, login} = useAuth()
    const [credentials, setCredentials] = useState(defaultState)
    const [error, setError] = useState()

    /*
    const handleCredentialsChange = event =>
        setCredentials({ ...credentials, [event.target.name]: event.target.value })

    const handleSubmit = event => {
        event.preventDefault()
        setError()
        login(credentials).catch(error => {
            setError(error)
        })
    }

    if (user) {
        return <Redirect to={login} />
    }



     */


    return(
        <div>
            <Main as="form" onSubmit={null}>
                <LoginTextField
                    title="Username"
                    name="username"
                    value={credentials.userName}
                    onChange={null}
                />
                <LoginTextField
                title="Password"
                name="password"
                type="password"
                value={credentials.password}
                onChange={null}
                />
                <button>login</button>
            </Main>

            <div>
                <label>Username:</label>
                <br/>
                <input type="text"/>
                <br/>
                <label>Password: </label>
                <br/>
                <input type="text"/>

            </div>
        </div>
    );
}