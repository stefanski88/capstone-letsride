import Main from "../components/Main";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import {useAuth} from "../auth/AuthProvider";
import {useEffect, useState} from "react";
import {getCitiesFromGeoNames, getUsers} from "../services/API-Service";
import Select from "../components/Select";
import {drivingStyleOptions, drivingExpOptions, locations} from '../services/FilterOptions'
import RiderCard from "../components/cards/RiderCard";
import Page from "../components/Page";

export default function Search() {

    const {token} = useAuth()
    console.log(token)

    const [riders, setRiders] = useState([])
    const [error, setError] = useState()
    const [location, setLocation] = useState('')
    /*
    const [locationsAPI, setLocationsAPI] = useState(
        getCitiesFromGeoNames()
            .then(data => setLocationsAPI(data))
    )
    console.log("locationsAPI: ",locationsAPI)


     */

/*
    useEffect(() => {
        getCities().then(request => setLocationsAPI(request))
    },[])
 */


    const [drivingStyle, setDrivingStyle] = useState('')
    const [drivingExp, setDrivingExp] = useState('')

    const handleSearch = event => {
        event.preventDefault()
        getUsers()
            .then(riders => setRiders(riders))
            .catch(error => setError(error))
    }

    const handleChangeLocation = event => {
        setLocation(event.target.value)
    }

    const handleChangeDrivingExp = event => {
        setDrivingExp(event.target.value)
    }

    const handleChangeDrivingStyle = event => {
        setDrivingStyle(event.target.value)
    }

    const filteredRiders = riders.filter(rider =>
    rider.drivingStyle === (drivingStyle) &&
    rider.drivingExp === (drivingExp) &&
    rider.location === (location))

    return (
        <Page>
            <Header/>
            <button onClick={handleSearch}>Search Riders!</button>
            <Main as="form">
                <Select
                    name="locations"
                    value={location}
                    options={locations}
                    onChange={handleChangeLocation}
                    title="Location: "
                />
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
            </Main>
            {filteredRiders.length === 0 && <p>No Riders found 🤷‍️</p>}
            {filteredRiders.map(filteredRider => (
                <RiderCard key={filteredRider.id} rider={filteredRider}/>
            ))}
            <NavBar/>
        </Page>
    );
}