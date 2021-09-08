import Main from '../components/Main'
import LoginTextField from "../components/LoginTextField"
import { useAuth } from '../auth/AuthProvider'
import { useState } from "react";

const defaultState = {
    userName: '',
    password: '',
}

export default function Login() {

    const [credentials, setCredentials] = useState(defaultState)


    return(
        <div>
            <Main as="form">
                <LoginTextField
                    title="Username"
                    name="username"
                    value={null}
                    onChange={null}
                />
                <LoginTextField
                title="Password"
                name="password"
                value={null}
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