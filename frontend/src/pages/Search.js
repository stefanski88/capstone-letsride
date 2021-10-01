import Main from "../components/Main";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import {useAuth} from "../auth/AuthProvider";
import {useEffect, useState} from "react";
import {getCitiesFromGeoNames, getUsers} from "../services/API-Service";
import {drivingStyleOptions, drivingExpOptions, locations} from '../services/FilterOptions'
import RiderCard from "../components/cards/RiderCard";
import Page from "../components/Page";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import {MenuItem} from "@material-ui/core";
import Select from '@mui/material/Select';
import AccountCircle from "@mui/icons-material/AccountCircle";
import TextField from "@mui/material/TextField";

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

    /*                <Select
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
*/

    return (
        <Page>
            <Header/>
            <Main>
                <TextSnippetOutlinedIcon sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                <Select
                    label="Driving Experience"
                    name="drivingExp"
                    value={drivingExp}
                    onChange={handleChangeDrivingExp}
                >
                    <MenuItem value="beginner">beginner</MenuItem>
                    <MenuItem value="experienced">experienced</MenuItem>
                    <MenuItem value="expert">expert</MenuItem>
                </Select>
                <TextSnippetOutlinedIcon sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                <Select
                    label="Driving Style"
                    name="drivingStyle"
                    value={drivingStyle}
                    onChange={handleChangeDrivingStyle}
                    >
                    <MenuItem value="comfortable">comfortable</MenuItem>
                    <MenuItem value="sporty">sporty</MenuItem>
                    <MenuItem value="knee slider">knee slider</MenuItem>
                </Select>
                <AccountCircle sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                <TextField variant="standard"
                           name="age"
                           type="text"
                           value={searchPlaceName}
                           onChange={handleSearchPlaceName}/>
            </Main>
            {filteredRiders.length === 0 && <p>No Riders found yet! Change the driving style, experience, or location.</p>}
            {filteredRiders.map(filteredRider => (
                <RiderCard key={filteredRider.userName} rider={filteredRider}/>
            ))}
            <NavBar/>
        </Page>
    );
}