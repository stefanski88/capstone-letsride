import Main from "../../components/Main";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import {useEffect, useState} from "react";
import {useAuth} from "../../auth/AuthProvider";
import {deleteMotorcycle, getMyMotorcycles} from "../../services/API-Service";
import MotoCard from "../../components/cards/MotoCard";
import Page from "../../components/Page";
import {useHistory} from "react-router-dom";

export default function MyMotorcycles() {

    const {token} = useAuth()
    const [motorcycles, setMotorcycles] = useState([])
    const history = useHistory()

    useEffect(() => {
        getMyMotorcycles(token)
            .then(motorcycles => setMotorcycles(motorcycles))
    }, [])

    const reloadPage = () => {
        getMyMotorcycles(token)
            .then(motorcycles => setMotorcycles(motorcycles))
    }

    return (
        <Page>
            <Header/>
            <Main>
                {motorcycles.map(moto => (
                    <section>
                        <MotoCard key={moto.motoID} moto={moto}/>
                        <button onClick={() =>
                            deleteMotorcycle(moto.motoID, token).then(reloadPage)}>Delete Motorcycle
                        </button>
                    </section>
                ))}
                <button onClick={history.goBack}>back</button>
            </Main>
            <NavBar/>
        </Page>
    );
}