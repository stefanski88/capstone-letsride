import Page from "../../components/Page";
import Header from "../../components/Header";
import Main from "../../components/Main";
import NavBar from "../../components/NavBar";
import TextField from "../../components/TextField";
import {useParams} from "react-router-dom";
import {useAuth} from "../../auth/AuthProvider";
import {useState} from "react";
import {updateMotorcycle} from "../../services/API-Service";

export default function UpMoto() {

    const id = 1;
    const {token} = useAuth()
    const [motorcycle, setMotorcycle] = useState({
        motoNickName: "",
    })

    const handleSubmit = event => {
        event.preventDefault()
        updateMotorcycle(id, motorcycle, token)
            .then(motorcycle => setMotorcycle(motorcycle))
            .finally(() => setMotorcycle(motorcycle))
    }

    const handleUpdateChange = event =>
        setMotorcycle({...motorcycle, [event.target.name] : event.target.value})

    return (
        <Page>
            <Header/>
            <Main as="form" onSubmit={handleSubmit}>
                <TextField
                title="Moto Nickname: "
                name="motoNickName"
                value={motorcycle.motoNickname}
                onChange={handleUpdateChange}
                />
                <button>go</button>
            </Main>
            <NavBar />
        </Page>
    );
}