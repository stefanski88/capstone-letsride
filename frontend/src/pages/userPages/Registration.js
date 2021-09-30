import Main from "../../components/Main";
import {useState} from "react";
import {createUser} from "../../services/API-Service";
import Error from "../../components/Error";
import Header from "../../components/Header";
import {Redirect} from "react-router-dom";
import Page from "../../components/Page";
import NavBar from "../../components/NavBar";
import {drivingExpOptions, drivingStyleOptions} from "../../services/FilterOptions";
import {Button, InputLabel, MenuItem} from "@material-ui/core";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import AccountCircle from "@mui/icons-material/AccountCircle";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import TextField from '@mui/material/TextField';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import Select from '@mui/material/Select';


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
                <Box sx={{'& > :not(style)': {m: 1}}}>
                    <FormControl variant="standard">
                        <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                            <AccountCircle sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                            <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                                <TextField label="Username"
                                           variant="standard"
                                           name="userName"
                                           value={registerUser.userName}
                                           onChange={handleRegistration}/>
                                <VpnKeyIcon sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                                <TextField label="Password"
                                           variant="standard"
                                           name="password"
                                           type="password"
                                           value={registerUser.password}
                                           onChange={handleRegistration}/>
                                <AlternateEmailIcon sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                                <TextField label="E-Mail"
                                           variant="standard"
                                           name="email"
                                           type="email"
                                           value={registerUser.email}
                                           onChange={handleRegistration}/>
                                <AccountCircle sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                                <TextField label="First Name"
                                           variant="standard"
                                           name="firstName"
                                           value={registerUser.firstName}
                                           onChange={handleRegistration}/>
                                <AccountCircle sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                                <TextField label="Last Name"
                                           variant="standard"
                                           name="lastName"
                                           value={registerUser.lastName}
                                           onChange={handleRegistration}/>
                                <AccountCircle sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                                <TextField variant="standard"
                                           name="age"
                                           type="date"
                                           value={registerUser.age}
                                           onChange={handleRegistration}/>
                                <LocationCityIcon sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                                <TextField label="Location"
                                           variant="standard"
                                           name="location"
                                           value={registerUser.location}
                                           onChange={handleRegistration}/>
                                <InputLabel>Driving Experience</InputLabel>
                                <Select
                                    value={registerUser.drivingExp}
                                    name="drivingExp"
                                    label="Driving Experience"
                                    onChange={handleRegistration}
                                >
                                    <MenuItem value="beginner">beginner</MenuItem>
                                    <MenuItem value="experienced">experienced</MenuItem>
                                    <MenuItem value="expert">expert</MenuItem>
                                </Select>
                                <InputLabel>Driving Style</InputLabel>
                                <Select
                                    value={registerUser.drivingStyle}
                                    name="drivingStyle"
                                    label="Driving Style"
                                    onChange={handleRegistration}
                                >
                                    <MenuItem value="comfortable">comfortable</MenuItem>
                                    <MenuItem value="sporty">sporty</MenuItem>
                                    <MenuItem value="knee slider">knee slider</MenuItem>
                                </Select>
                            </Box>
                        </Box>
                        <Button onClick={handleSubmit}>Sign up</Button>
                    </FormControl>
                </Box>
            </Main>
            <NavBar/>
        </Page>
    );
}