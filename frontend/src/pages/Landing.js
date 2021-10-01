import {useState} from "react";
import RiderCard from "../components/cards/RiderCard";
import {getUsers} from "../services/API-Service";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import MainGallery from "../components/MainGallery";
import Page from "../components/Page";
import Main from "../components/Main";


export default function Landing() {

    const [riders, setRiders] = useState([])

    const handleClick = () => {
        getUsers().then(setRiders)
    }

    return (
        <Page>
            <Header/>
            <MainGallery>
                <button onClick={handleClick}>load riders</button>
                {riders.map(rider => (
                    <RiderCard key={rider.userName} rider={rider}/>
                ))}
            </MainGallery>
            <NavBar/>

        </Page>
    );
}