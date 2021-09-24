import Main from "../components/Main";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import {useAuth} from "../auth/AuthProvider";
import {useState} from "react";
import {getUsers} from "../services/API-Service";
import Select from "../components/Select";
import {drivingStyleOptions, drivingExpOptions} from '../services/FilterOptions'
import RiderCard from "../components/RiderCard";

export default function Search() {

    const {token} = useAuth()
    console.log(token)

    const [riders, setRiders] = useState([])
    const [error, setError] = useState()

    const [drivingStyle, setDrivingStyle] = useState('')
    const [drivingExp, setDrivingExp] = useState('')

    const filteredRiders = riders.filter(rider =>
        rider.drivingStyle === (drivingStyle) &&
        rider.drivingExp === (drivingExp))

    const handleSearch = event => {
        event.preventDefault()
        getUsers()
            .then(riders => setRiders(riders))
            .catch(error => setError(error))
    }

    const handleChangeDrivingExp = event => {
        setDrivingExp(event.target.value)
    }

    const handleChangeDrivingStyle = event => {
        setDrivingStyle(event.target.value)
    }

    return (
        <Main as="form">
            <Header/>
            <label>Choose Driving Style</label>
            <Select
                name="drivingExp"
                value={drivingExp}
                options={drivingExpOptions}
                onChange={handleChangeDrivingExp}
                title="Driving Experience: "
            />
            <Select
                name="drivingStyle"
                value={drivingStyle}
                options={drivingStyleOptions}
                onChange={handleChangeDrivingStyle}
                title="Driving Style: "
            />
            <button onClick={handleSearch}>Search Riders!</button>
            {filteredRiders.length === 0 && <p>No Riders found 🤷‍️</p>}
            {filteredRiders.map(filteredRider => (
                <RiderCard key={filteredRider.id} rider={filteredRider} />
                ))}
            <NavBar/>
        </Main>
    );
}