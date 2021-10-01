import Main from '../../components/Main'
import {useAuth} from '../../auth/AuthProvider'
import {useState} from "react";
import {Redirect} from "react-router-dom";
import Header from "../../components/Header";
import Page from "../../components/Page";
import NavBar from "../../components/NavBar";
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

const defaultState = {
    userName: '',
    password: '',
}

export default function Login() {

    const {login, user} = useAuth()
    const [credentials, setCredentials] = useState(defaultState)

    const changeCredentialsHandler = event =>
        setCredentials({...credentials, [event.target.name]: event.target.value})

    const submitHandler = () => {
        login(credentials)
            .catch(error => console.error(error))
    }

    if (user) {
        return <Redirect to="/"/>
    }

    return (
        <Page>
            <Header/>
            <Main>
                <Box sx={{'& > :not(style)': {m: 1}}}>
                    <FormControl variant="standard">
                        <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                            <AccountCircle sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                            <TextField label="Username"
                                       variant="standard"
                                       name="userName"
                                       value={credentials.userName}
                                       onChange={changeCredentialsHandler}/>
                            <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                                <VpnKeyIcon sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                                <TextField label="Password"
                                           variant="standard"
                                           name="password"
                                           type="password"
                                           value={credentials.password}
                                           onChange={changeCredentialsHandler}/>
                            </Box>
                        </Box>
                        <Button variant="outlined" onClick={submitHandler}>Login</Button>
                    </FormControl>
                </Box>
            </Main>
            <NavBar/>
        </Page>


    );
}