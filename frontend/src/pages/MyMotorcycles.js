import Main from "../components/Main";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import {useEffect, useState} from "react";
import {useAuth} from "../auth/AuthProvider";
import {getMyMotorcycles} from "../services/API-Service";
import MotoCard from "../components/MotoCard";
import Page from "../components/Page";

export default function MyMotorcycles() {

    const {token} = useAuth()
    const [motorcycles, setMotorcycles] = useState([])

    useEffect(() => {
        getMyMotorcycles(token)
            .then(motorcycles => setMotorcycles(motorcycles))
    }, [])
    console.log(motorcycles)

    return (
        <Page>
            <Header/>

            <Main>
                <div>
                    {motorcycles.map(moto => (
                        <MotoCard key={moto.motoID} moto={moto}/>
                    ))}
                </div>

            </Main>
            <NavBar/>
        </Page>
    );
}