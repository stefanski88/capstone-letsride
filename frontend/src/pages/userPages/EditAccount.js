import Main from "../../components/Main";
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import {getUser, updateUser} from "../../services/API-Service";
import {useEffect, useState} from "react";
import {useAuth} from "../../auth/AuthProvider";
import Page from "../../components/Page";
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import AccountCircle from "@mui/icons-material/AccountCircle";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import {InputLabel, MenuItem} from "@material-ui/core";
import Select from "@mui/material/Select";
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import Button from '@mui/material/Button';
import {UserInfoTextField} from "../../components/UserInfoTextField";
import {Wrapper} from "../../components/styled/Wrapper";

export default function EditAccount() {

    const {token, user} = useAuth()
    const [error, setError] = useState()
    const [update, setUpdate] = useState({})

    useEffect(() => {
        getUser(user.username)
            .then(data => setUpdate(data))
    }, [])

    const handleUpdate = event =>
        setUpdate({...update, [event.target.name]: event.target.value})

    const handleSubmit = event => {
        event.preventDefault()
        updateUser(token, update)
            .then(update => setUpdate(update))
            .catch(error => setError(error))
            .finally(() => setUpdate(update))
    }

    return (
        <Page>
            <Header/>
            <Main as="form" onSubmit={handleSubmit}>
                <Box sx={{'& > :not(style)': {m: 1}}}>
                    <FormControl variant="standard">
                        <Box >
                            <Wrapper>
                                <UserInfoTextField>
                                    <VpnKeyIcon sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                                    <TextField
                                        variant="standard"
                                        name="password"
                                        type="password"
                                        value={update.password}
                                        onChange={handleUpdate}/>
                                </UserInfoTextField>
                                <UserInfoTextField>
                                    <AccountCircle sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                                    <TextField
                                        variant="standard"
                                        name="firstName"
                                        value={update.firstName}
                                        onChange={handleUpdate}/>
                                </UserInfoTextField>
                                <UserInfoTextField>
                                    <AccountCircle sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                                    <TextField
                                        variant="standard"
                                        name="lastName"
                                        value={update.lastName}
                                        onChange={handleUpdate}/>
                                </UserInfoTextField>
                                <UserInfoTextField>
                                    <AccountCircle sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                                    <TextField variant="standard"
                                               name="age"
                                               type="date"
                                               value={update.age}
                                               onChange={handleUpdate}/>
                                </UserInfoTextField>
                                <UserInfoTextField>
                                    <LocationCityIcon sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                                    <TextField
                                        variant="standard"
                                        name="location"
                                        value={update.location}
                                        onChange={handleUpdate}/>
                                </UserInfoTextField>
                                <UserInfoTextField>
                                    <TextSnippetOutlinedIcon sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                                    <TextField
                                        variant="standard"
                                        name="aboutMe"
                                        value={update.aboutMe}
                                        onChange={handleUpdate}
                                        multiline
                                        rows={1}
                                        maxRows={1}/>
                                </UserInfoTextField>
                                <UserInfoTextField>
                                    <InputLabel>Driving Experience</InputLabel>
                                    <Select
                                        value={update.drivingExp}
                                        name="drivingExp"
                                        label="Driving Experie"
                                        onChange={handleUpdate}
                                    >
                                        <MenuItem value="beginner">beginner</MenuItem>
                                        <MenuItem value="experienced">experienced</MenuItem>
                                        <MenuItem value="expert">expert</MenuItem>
                                    </Select>
                                </UserInfoTextField>
                                <UserInfoTextField>
                                    <InputLabel>Driving Style</InputLabel>
                                    <Select
                                        value={update.drivingStyle}
                                        name="drivingStyle"
                                        label="Driving Style"
                                        onChange={handleUpdate}
                                    >
                                        <MenuItem value="comfortable">comfortable</MenuItem>
                                        <MenuItem value="sporty">sporty</MenuItem>
                                        <MenuItem value="knee slider">knee slider</MenuItem>
                                    </Select>
                                </UserInfoTextField>
                            </Wrapper>
                        </Box>
                        <Button variant="outlined" onClick={handleSubmit}>Save Account Information</Button>
                    </FormControl>
                </Box>
            </Main>
            <NavBar/>
        </Page>
    );
}