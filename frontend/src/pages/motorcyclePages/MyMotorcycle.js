import {updateMotorcycle} from "../../services/API-Service";
import {useParams} from "react-router-dom";
import {useAuth} from "../../auth/AuthProvider";
import {useState} from "react";
import Page from "../../components/Page";
import Header from "../../components/Header";
import Main from "../../components/Main";
import TextField from "../../components/TextField";
import NavBar from "../../components/NavBar";

export default function MyMotorcycle() {

    const {id} = useParams()
    const {token} = useAuth()
    const [motorcycle, setMotorcycle] = useState({
        motoNickName: "",
        manufacturer: "",
        model: "",
        constructionYear: "",
    })

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
            <Main as="form" onSubmit={handleSubmit}>
                <TextField
                    title="Moto Nickname :"
                    name="motoNickName"
                    value={motorcycle.motoNickName}
                    onChange={handleUpdateChange}
                />
                <TextField
                    title="Manufacturer :"
                    name="manufacturer"
                    value={motorcycle.manufacturer}
                    onChange={handleUpdateChange}
                />
                <TextField
                    title="Model :"
                    name="model"
                    value={motorcycle.model}
                    onChange={handleUpdateChange}
                />
                <TextField
                    title="Construction year:"
                    name="constructionYear"
                    value={motorcycle.constructionYear}
                    onChange={handleUpdateChange}
                />
                <button>save!</button>
                <button onSubmit={null}>delete</button>
                <button onSubmit={null}>cancel</button>
            </Main>
            <NavBar/>
        </Page>
    );
}