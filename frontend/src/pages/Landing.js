import {useState} from "react";
import RiderCard from "../components/RiderCard";
import {getUser} from "../services/API-Service";


export default function Landing() {

    const [riders, setRiders] = useState({})

    const handleClick = () => {
        getUser().then(setRiders)
    }

    return(
        <div>
            <RiderCard riders={riders}/>
            <button onClick={handleClick}>load riders</button>


        </div>
    );
}