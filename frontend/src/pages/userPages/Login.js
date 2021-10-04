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
import * as PropTypes from "prop-types";
import MainCenter from '../../components/MainCenter'
import Loading from '../../components/Loading'
import Error from "../../components/Error";

const defaultState = {
    userName: '',
    password: '',
}

MainCenter.propTypes = {children: PropTypes.node};
export default function Login() {

    const {login, user} = useAuth()
    const [credentials, setCredentials] = useState(defaultState)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()

    const changeCredentialsHandler = event =>
        setCredentials({...credentials, [event.target.name]: event.target.value})

    const submitHandler = (event) => {
        event.preventDefault()
        setError()
        setLoading(true)
        login(credentials)
            .catch(error => setError(error))
            .finally(() => setLoading(false))
    }

    if (user) {
        return <Redirect to="/"/>
    }

    return (
        <Page>
            <Header/>
            <MainCenter>
                {loading && <Loading/>}
                {!loading &&
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
                </Box>}
            </MainCenter>
            {error && <Error/>}
            <NavBar/>
        </Page>
    );
}