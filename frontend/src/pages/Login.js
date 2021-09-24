import Main from '../components/Main'
import TextField from "../components/TextField"
import {useAuth} from '../auth/AuthProvider'
import {useState} from "react";
import {Redirect} from "react-router-dom";
import Header from "../components/Header";
import Page from "../components/Page";


const defaultState = {
    userName: '',
    password: '',
}

export default function Login() {

    const {login, user} = useAuth()
    const [credentials, setCredentials] = useState(defaultState)

    const changeCredentialsHandler = event =>
        setCredentials({...credentials, [event.target.name]: event.target.value})

    const submitHandler = event => {
        event.preventDefault()
        login(credentials)
            .catch(error => console.error(error))
    }

    if (user) {
        return <Redirect to="/landing"/>
    }

    return (
        <Page>
            <Header/>
            <Main as="form" onSubmit={submitHandler}>
                <TextField
                    title="Username"
                    name="userName"
                    placeholder="required"
                    value={credentials.userName}
                    onChange={changeCredentialsHandler}
                />
                <TextField
                    title="Password"
                    name="password"
                    type="password"
                    placeholder="required"
                    value={credentials.password}
                    onChange={changeCredentialsHandler}/>
                <button>login</button>
            </Main>
        </Page>
    );
}