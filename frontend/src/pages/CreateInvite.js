import {useAuth} from "../auth/AuthProvider";
import {useState} from "react";
import Main from "../components/Main";
import TextField from "../components/TextField";
import Header from "../components/Header";
import NavBar from "../components/NavBar";


export default function CreateInvite() {

    const {token} = useAuth()
    console.log(token)
    const [error, setError] = useState()

    return(
        <Main as="form" onSubmit={null}>
            <Header />
            <TextField
            title="Status"
            name="status"
            value={null}
            onChange={null}
            />
            <NavBar />
        </Main>
    );
}