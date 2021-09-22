import Main from "../components/Main";
import Header from "../components/Header";
import TextField from "../components/TextField";
import {useEffect, useState} from "react";
import {useAuth} from "../auth/AuthProvider";
import {getMyMotorcycle, getMyMotorcycles} from "../services/API-Service";
import NavBar from "../components/NavBar";
import {useParams} from 'react-router-dom'

export default function MyMotorcycle() {
const {id}=useParams()
    const {token}  = useAuth()
    useEffect(()=>
    {
        console.log(token)
        console.log(id)
if(!id)return
        getMyMotorcycle(token,id).then(moto=>{
            console.log(moto)
        })
    },[])


    return(
        <Main as="form" onSubmit={null}>
            <Header />
            <TextField
                title="Motorcycle Nickname: "
                name="motoNickName"
                value={null}
                onChange={null}
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
                <button>delete?!</button>
            <NavBar />
        </Main>
    );
}