import {useState} from "react";
import RiderCard from "../components/RiderCard";
import {getUsers} from "../services/API-Service";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";
import NavBar from "../components/NavBar";
import Header from "../components/Header";


export default function Landing() {

    const [riders, setRiders] = useState([])

    const handleClick = () => {
        getUsers().then(setRiders)
    }

    return(
        <section>
            <Header />
            {riders.map(rider => (
                <RiderCard key={rider.id} rider={rider}/>
            ))}
            <button onClick={handleClick}>load riders</button>
            <NavBar />
        </section>



    );
}