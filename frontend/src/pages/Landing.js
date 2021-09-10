import {useState} from "react";
import RiderCard from "../components/RiderCard";
import {getUsers} from "../services/API-Service";
import Footer from "../components/Footer";


export default function Landing() {

    const [riders, setRiders] = useState([])

    const handleClick = () => {
        getUsers().then(setRiders)
    }

    return(
        <section>
            {riders.map(rider => (
                <RiderCard key={rider.id} rider={rider}/>
            ))}
            <button onClick={handleClick}>load riders</button>
        <Footer />
        </section>



    );
}