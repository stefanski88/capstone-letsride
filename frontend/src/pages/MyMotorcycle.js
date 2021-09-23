import {useEffect, useState} from "react";
import {useAuth} from "../auth/AuthProvider";
import {Redirect, useParams} from "react-router-dom";
import TextField from "../components/TextField";
import NavBar from "../components/NavBar";
import {getMyMotorcycle, updateMotorcycle} from "../services/API-Service";
import Main from "../components/Main";
import Header from "../components/Header";

const defaultState = {
    motoNickName: '',
    manufacturer: '',
    model: '',
    constructionYear: '',
}

export default function MyMotorcycle() {

    const {id} = useParams()
    const {token} = useAuth()
    const [uupdateMotorcycle, setUupdateMotorcycle] = useState(defaultState)
    const [currentMotorcycle, setCurrentMotorcycle] = useState()
    const [redirectToHome, setRedirectToHome] = useState(false)

    useEffect(() => {
        getMyMotorcycle(id, token)
            .then(response => {
                setCurrentMotorcycle(response)
                setUupdateMotorcycle(response)
            })
            .catch(error => console.error(error))
    }, [token])

    const handleSubmit = event => {
        event.preventDefault()
        updateMotorcycle(id, uupdateMotorcycle, token)
            .catch(error => console.error(error))
            .then(setRedirectToHome(true))
    }

    const handleUpdateChange = event =>
        setUupdateMotorcycle({...uupdateMotorcycle, [event.target.name]: event.target.value})

    const handleCancel = () => setUupdateMotorcycle(currentMotorcycle)

    if (redirectToHome) {
        return <Redirect to="/landing"/>
    }
    return (
        <Main as="form" onSubmit={handleSubmit}>
            <Header/>
            <TextField
                title="Moto Nickname :"
                name="motoNickName"
                value={uupdateMotorcycle.motoNickName}
                onChange={handleUpdateChange}
            />
            <TextField
                title="Manufacturer :"
                name="manufacturer"
                value={uupdateMotorcycle.manufacturer}
                onChange={handleUpdateChange}
            />
            <TextField
                title="Model :"
                name="numberOfHookahHeads"
                value={uupdateMotorcycle.model}
                onChange={handleUpdateChange}
            />
            <TextField
                title="Construction year:"
                name="favHookah"
                value={uupdateMotorcycle.constructionYear}
                onChange={handleUpdateChange}
            />
            <button>speichern</button>
            <button onClick={handleCancel}>cancel</button>
            <NavBar/>
        </Main>
    )
}