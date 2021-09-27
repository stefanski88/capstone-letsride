import {useState} from "react";
import RiderCard from "../components/cards/RiderCard";
import {getUsers} from "../services/API-Service";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Main from "../components/Main";
import Page from "../components/Page";

export default function Landing() {

    const [riders, setRiders] = useState([])

    const handleClick = () => {
        getUsers().then(setRiders)
    }

    return (
        <Page>
            <Header/>
            <button onClick={handleClick}>load riders</button>
            <Main>
                {riders.map(rider => (
                    <RiderCard key={rider.userName} rider={rider}/>
                ))}
            </Main>
            <NavBar/>
        </Page>
    );
}