import Main from "../components/Main";
import {useState} from "react";
import {createMotorcycle} from "../services/API-Service";
import {useAuth} from "../auth/AuthProvider";
import TextField from "../components/TextField";


export default function CreateMotorcycle() {

    const {token} = useAuth()

    const [error, setError] = useState()
    const [create, setCreate] = useState({
        motoNickName: "",
        manufacturer: "",
        model: "",
        constructionYear: "",
    })

    const handleCreate = event =>
        setCreate({...create, [event.target.name]: event.target.value })

    const handleSubmit = event =>
        event.preventDefault()
    createMotorcycle(token, create)
        .then(create => setCreate(token, create))
        .catch(error => setError(error))
        .finally(() => setCreate(create))


    return(
        <Main as="form">
            <TextField
                title="Motorcycle Nickname: "
                name="motoNickName"
                value={null}
                onChange={null}
            />
            <TextField
            title="manufacturer: "
            name="manufacturer"
            value={null}
            onChange={null}
        />
            <TextField
            title="Model: "
            name="model"
            value={null}
            onChange={null}
        />
            <TextField
            title="Construction Year: "
            name="constructionYear"
            value={null}
            onChange={null}
        />
        </Main>
    );
}