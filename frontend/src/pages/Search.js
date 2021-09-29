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

    const [drivingStyle, setDrivingStyle] = useState('')
    const [drivingExp, setDrivingExp] = useState('')
    const [riders, setRiders] = useState([])

    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)

    const [searchPlaceName, setSearchPlaceName] = useState('')
    const [locationsAPI, setLocationsAPI] = useState([])
/*
    useEffect(() => {
        setLocationsAPI(locations) //DUMMY DATA
        //getCitiesFromGeoNames().then(request => setLocationsAPI(request))
    },[])
    console.log("fetched data: ",locationsAPI)
 */
    useEffect(() => {
        console.log({riders})
    },[riders])

    useEffect(() => {
        getUsers()
            .then(riders => setRiders(riders))
            .catch(error => setError(error))
    },[])

    const handleChangeDrivingExp = event => {
        setDrivingExp(event.target.value)
    }

    const handleChangeDrivingStyle = event => {
        setDrivingStyle(event.target.value)
    }

    const handleSearchPlaceName = event => {
        const newSearch = event.target.value
        setSearchPlaceName(newSearch)
    }

    const mappedLocationsByPlaceName = locationsAPI.map(singleLocation => {
        return singleLocation.placeName
    })
    console.log("mappedLocations by placeName: ",mappedLocationsByPlaceName)


    const filteredLocations = locationsAPI.filter(filteredLoc =>
         filteredLoc.placeName.toLowerCase().includes(searchPlaceName.toLowerCase()))
    console.log("filteredLocations by placeName: ",filteredLocations)

    const locationMatch = (rider, search) => {
        if (!search) {
            return false
        }
        return rider.location.toLowerCase().includes(search.toLowerCase())
    }

    const filteredRiders = riders.filter(rider =>
        rider.drivingStyle === (drivingStyle) &&
        rider.drivingExp === (drivingExp) &&
        locationMatch(rider, searchPlaceName))

    return (
        <Page>
            <Header/>
            <Main>
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
                <input
                    type="text"
                    onChange={handleSearchPlaceName}
                    value={searchPlaceName}
                    placeholder="Search by location.."
                />
            </Main>
            {filteredRiders.length === 0 && <p>No Riders found yet! Change the driving style, experience, or location.</p>}
            {filteredRiders.map(filteredRider => (
                <RiderCard key={filteredRider.userName} rider={filteredRider}/>
            ))}
            <NavBar/>
        </Page>
    );
}