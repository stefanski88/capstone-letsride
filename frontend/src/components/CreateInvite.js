import {useAuth} from "../auth/AuthProvider";
import {useState} from "react";
import Main from "./Main";
import TextField from "./TextField";
import Header from "./Header";
import NavBar from "./NavBar";


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