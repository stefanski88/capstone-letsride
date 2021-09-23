import Main from "../components/Main";
import {useState} from "react";
import {createMotorcycle} from "../services/API-Service";
import {useAuth} from "../auth/AuthProvider";
import TextField from "../components/TextField";
import Header from "../components/Header";
import NavBar from "../components/NavBar";


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
        setNewMotorcycle({...newMotorcycle, [event.target.name]: event.target.value })

    const handleSubmit = event => {
        event.preventDefault()
    createMotorcycle(newMotorcycle, token)
        .catch(error => setError(error))
        .finally(() => setNewMotorcycle(newMotorcycle))
    }

    return(
        <Main as="form" onSubmit={handleSubmit}>
            <Header />
            <TextField
                title="Motorcycle Nickname: "
                name="motoNickName"
                value={newMotorcycle.motoNickName}
                onChange={handleChange}
            />
            <TextField
            title="manufacturer: "
            name="manufacturer"
            value={newMotorcycle.manufacturer}
            onChange={handleChange}
        />
            <TextField
            title="Model: "
            name="model"
            value={newMotorcycle.model}
            onChange={handleChange}
        />
            <TextField
            title="Construction Year: "
            name="constructionYear"
            value={newMotorcycle.constructionYear}
            onChange={handleChange}
        />
            <button>create moto!!!!</button>
            <NavBar />
        </Main>
    );
}