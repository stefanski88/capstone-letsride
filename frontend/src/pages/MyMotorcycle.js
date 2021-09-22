import Main from "../components/Main";
import Header from "../components/Header";
import TextField from "../components/TextField";
import {useEffect, useState} from "react";
import {useAuth} from "../auth/AuthProvider";
import {getMyMotorcycle, getMyMotorcycles, updateMotorcycle} from "../services/API-Service";
import NavBar from "../components/NavBar";
import {useParams} from 'react-router-dom'

export default function MyMotorcycle() {

    const {id} = useParams()
    const {token} = useAuth()
    const [update, setUpdate] = useState({})
    const [error, setError] = useState()

    useEffect(()=> {
        console.log(token)
        console.log(id)

        if(!id)return
            getMyMotorcycle(token, id)
                .then(data => setUpdate(data))
    },[])
    console.log(update)

    const handleUpdate = event =>
        setUpdate({...update, [event.target.name]: event.target.value })

    const handleSubmit = event => {
        event.preventDefault()
        updateMotorcycle(token, update, id)
            .then(update => setUpdate(update))
            .catch(error => setError(error))
            .finally(() => setUpdate(update))
    }

    return(
        <Main as="form" onSubmit={handleSubmit}>
            <Header />
            <TextField
                title="Motorcycle Nickname: "
                name="motoNickName"
                value={update.motoNickName}
                onChange={handleUpdate}
            />
            <TextField
                title="Manufacturer :"
                name="manufacturer"
                value={null}
                onChange={null}
            />
            <TextField
                title="Model :"
                name="model"
                value={null}
                onChange={null}
            />
            <TextField
                title="Construction year :"
                name="constructionYear"
                value={null}
                onChange={null}
            />
            <button>update?!</button>
            <NavBar />
        </Main>
    );
}