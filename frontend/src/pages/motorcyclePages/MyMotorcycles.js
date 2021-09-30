import Main from "../../components/Main";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import {useEffect, useState} from "react";
import {useAuth} from "../../auth/AuthProvider";
import {deleteMotorcycle, getMyMotorcycles} from "../../services/API-Service";
import MotoCard from "../../components/cards/MotoCard";
import Page from "../../components/Page";
import {StyledSection} from "../../components/StyledSection";
import {Button} from "@material-ui/core";

export default function MyMotorcycles() {

    const {token} = useAuth()
    const [motorcycles, setMotorcycles] = useState([])

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
                <StyledSection>
                    {motorcycles.map(moto => (
                        <section>
                            <MotoCard key={moto.motoID} moto={moto}/>
                            <Button onClick={() =>
                                deleteMotorcycle(moto.motoID, token).then(reloadPage)}>Delete Motorcycle
                            </Button>
                        </section>
                    ))}
                </StyledSection>
            </Main>
            <NavBar/>
        </Page>
    );
}