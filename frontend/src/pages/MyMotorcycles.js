import Main from "../components/Main";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import {useEffect, useState} from "react";
import {useAuth} from "../auth/AuthProvider";
import {getMyMotorcycle, getMyMotorcycles} from "../services/API-Service";
import MotoCard from "../components/MotoCard";
import MyMotorcycle from "./MyMotorcycle";
import {NavLink, Redirect} from "react-router-dom";

export default function MyMotorcycles() {

    const {token} = useAuth()
    const [motorcycles, setMotorcycles] = useState([])

    useEffect(() => {
        getMyMotorcycles(token)
            .then(motorcycles => setMotorcycles(motorcycles))
    }, [])
    console.log(motorcycles)

    const editMoto = () => {
        return <NavLink to="/myMotorcycle" />
    }

    return(
        <Main>
            <Header />
            <div>
            {motorcycles.map(moto => (
                <MotoCard key={moto.motoID} moto={moto}/>
            ))}
            </div>
            <NavBar />
        </Main>
    );
}