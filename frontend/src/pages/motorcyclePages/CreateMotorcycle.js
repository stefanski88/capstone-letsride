import Main from "../../components/Main";
import {useState} from "react";
import {createMotorcycle} from "../../services/API-Service";
import {useAuth} from "../../auth/AuthProvider";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import Page from "../../components/Page";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import AccountCircle from "@mui/icons-material/AccountCircle";
import TextField from "@mui/material/TextField";
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler'
import Button from '@mui/material/Button';

export default function CreateMotorcycle() {

    const {token} = useAuth()
    console.log(token)

    const [error, setError] = useState()
    const [newMotorcycle, setNewMotorcycle] = useState({
        motoNickName: "",
        manufacturer: "",
        model: "",
        constructionYear: "",
    })

    const handleChange = event =>
        setNewMotorcycle({...newMotorcycle, [event.target.name]: event.target.value})

    const handleSubmit = event => {
        event.preventDefault()
        createMotorcycle(newMotorcycle, token)
            .catch(error => setError(error))
            .finally(() => setNewMotorcycle(newMotorcycle))
    }

    return (
        <Page>
            <Header/>
            <Main>
                <Box sx={{'& > :not(style)': {m: 1}}}>
                    <FormControl variant="standard">
                        <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                            <TwoWheelerIcon sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                                <TextField label="Nickname"
                                           variant="standard"
                                           name="motoNickName"
                                           value={newMotorcycle.motoNickName}
                                           onChange={handleChange}/>
                                <TwoWheelerIcon sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                                <TextField label="Manufacturer"
                                           variant="standard"
                                           name="manufacturer"
                                           value={newMotorcycle.manufacturer}
                                           onChange={handleChange}/>
                                <TwoWheelerIcon sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                                <TextField label="Model"
                                           variant="standard"
                                           name="model"
                                           value={newMotorcycle.model}
                                           onChange={handleChange}/>
                                <TwoWheelerIcon sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                                <TextField variant="standard"
                                           type="date"
                                           name="constructionYear"
                                           value={newMotorcycle.constructionYear}
                                           onChange={handleChange}/>
                            </Box>
                        <Button variant="outlined" size="small" onClick={handleSubmit}>Add Motorcycle</Button>
                    </FormControl>
                </Box>
            </Main>
            <NavBar/>
        </Page>
    );
}