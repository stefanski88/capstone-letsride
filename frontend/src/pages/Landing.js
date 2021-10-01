import {useState} from "react";
import RiderCard from "../components/cards/RiderCard";
import {getUsers} from "../services/API-Service";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import MainGallery from "../components/MainGallery";
import Page from "../components/Page";

export default function Landing() {

    const [riders, setRiders] = useState([])

    const handleClick = () => {
        getUsers().then(setRiders)
    }

    return (
        <Page>
            <Header/>
            <div>
            <MainGallery>
                {riders.map(rider => (
                    <RiderCard key={rider.userName} rider={rider}/>
                ))}
            </MainGallery>
                <button onClick={handleClick}>load riders</button>

            </div>

            <NavBar/>
        </Page>
    );
}