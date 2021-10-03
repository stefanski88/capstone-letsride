import {getMyMotorcycle, updateMotorcycle} from "../../services/API-Service";
import {useHistory, useParams} from "react-router-dom";
import {useAuth} from "../../auth/AuthProvider";
import {useEffect, useState} from "react";
import Page from "../../components/Page";
import Header from "../../components/Header";
import Main from "../../components/Main";
import TextField from '@mui/material/TextField';
import NavBar from "../../components/NavBar";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import Button from "@mui/material/Button";

export default function MyMotorcycle() {

    const {id} = useParams()
    const history = useHistory()
    const {token} = useAuth()
    console.log(id)
    console.log(token)

    useEffect(() => {
        getMyMotorcycle(id, token)
            .then(motorcycle => setMotorcycle(motorcycle))
    }, [])

    const [loading, setLoading] = useState(false)
    const [motorcycle, setMotorcycle] = useState({})

    const handleSubmit = event => {
        event.preventDefault()
        updateMotorcycle(id, motorcycle, token)
            .then(motorcycle => setMotorcycle(motorcycle))
            .catch(error => console.error(error))
            .finally(() => setMotorcycle(motorcycle))
    }

    const handleUpdateChange = event =>
        setMotorcycle({...motorcycle, [event.target.name]: event.target.value})

    return (
        <Page>
            <Header/>
            <Main as="form">
                <Box sx={{'& > :not(style)': {m: 1}}}>
                    <FormControl variant="standard">
                        <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                            <TwoWheelerIcon sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                            <TextField variant="standard"
                                       name="motoNickName"
                                       value={motorcycle.motoNickName}
                                       onChange={handleUpdateChange}/>
                            <TwoWheelerIcon sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                            <TextField variant="standard"
                                       name="manufacturer"
                                       value={motorcycle.manufacturer}
                                       onChange={handleUpdateChange}/>
                            <TwoWheelerIcon sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                            <TextField variant="standard"
                                       name="model"
                                       value={motorcycle.model}
                                       onChange={handleUpdateChange}/>
                            <TwoWheelerIcon sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                            <TextField variant="standard"
                                       type="date"
                                       name="constructionYear"
                                       value={motorcycle.constructionYear}
                                       onChange={handleUpdateChange}/>
                        </Box>
                        <Button variant="outlined" size="small" onClick={handleSubmit}>
                            Update Motorcycle Profile</Button>
                    </FormControl>
                </Box>
        </Main>
    <NavBar/>
</Page>
)
    ;
}