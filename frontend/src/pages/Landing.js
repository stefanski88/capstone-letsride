import {useState} from "react";
import RiderCard from "../components/RiderCard";
import {getUsers} from "../services/API-Service";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Main from "../components/Main";


export default function Landing() {

    const [riders, setRiders] = useState([])

    const handleClick = () => {
        getUsers().then(setRiders)
    }

    return(
        <Main>
            <Header />
            {riders.map(rider => (
                <RiderCard key={rider.id} rider={rider}/>
            ))}
            <button onClick={handleClick}>load riders</button>
            <NavBar />
        </Main>
    );
}