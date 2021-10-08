import Header from "../components/Header";
import NavBar from "../components/NavBar";
import {useAuth} from "../auth/AuthProvider";
import {useEffect, useState} from "react";
import {getCitiesFromGeoNames, getUsers} from "../services/API-Service";
import RiderCard from "../components/cards/RiderCard";
import Page from "../components/Page";
import {MenuItem} from "@material-ui/core";
import Select from '@mui/material/Select';
import TextField from "@mui/material/TextField";
import {UserInfoTextField} from "../components/UserInfoTextField";
import MainGallery from "../components/MainGallery";
import LocationCityIcon from '@mui/icons-material/LocationCity';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';


export default function Search() {

    const {token} = useAuth()
    const [drivingStyle, setDrivingStyle] = useState('')
    const [drivingExp, setDrivingExp] = useState('')
    const [riders, setRiders] = useState([])
    const [error, setError] = useState()

    const [searchPlaceName, setSearchPlaceName] = useState('')
    const [locationsAPI, setLocationsAPI] = useState([])

    useEffect(() => {
        console.log({riders})
    }, [riders])

    useEffect(() => {
        getUsers()
            .then(riders => setRiders(riders))
            .catch(error => setError(error))
    }, [])
/*
    useEffect(() => {
        getCitiesFromGeoNames()
            .then(locationsAPI => setLocationsAPI(locationsAPI))
            .catch(error => setError(error))
    },[])
 */

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
    console.log("mappedLocations by placeName: ", mappedLocationsByPlaceName)


    const filteredLocations = locationsAPI.filter(filteredLoc =>
        filteredLoc.placeName.toLowerCase().includes(searchPlaceName.toLowerCase()))
    console.log("filteredLocations by placeName: ", filteredLocations)

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
            <MainGallery>
                <UserInfoTextField>
                    <InputLabel>Driving Experience</InputLabel>
                    <Select sx={{width: 200}}
                        name="drivingExp"
                        value={drivingExp}
                        onChange={handleChangeDrivingExp}
                            input={<OutlinedInput label="Name" />}
                    >
                        <MenuItem value="beginner">beginner</MenuItem>
                        <MenuItem value="experienced">experienced</MenuItem>
                        <MenuItem value="expert">expert</MenuItem>
                    </Select>
                </UserInfoTextField>
                <UserInfoTextField>
                    <InputLabel>Driving Style</InputLabel>
                    <Select sx={{width: 200}}
                        name="drivingStyle"
                        value={drivingStyle}
                        onChange={handleChangeDrivingStyle}
                    >
                        <MenuItem value="comfortable">comfortable</MenuItem>
                        <MenuItem value="sporty">sporty</MenuItem>
                        <MenuItem value="knee slider">knee slider</MenuItem>
                    </Select>
                </UserInfoTextField>
                <UserInfoTextField>
                    <LocationCityIcon sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                    <TextField variant="standard"
                               name="age"
                               type="text"
                               value={searchPlaceName}
                               placeholder="Location"
                               onChange={handleSearchPlaceName}/>
                </UserInfoTextField>
            </MainGallery>

            {filteredRiders.length === 0 &&
            <p>No Riders have been found yet! <br/>Change driving style, driving experience, or location to find
                company.</p>}
            {filteredRiders.map(filteredRider => (
                <RiderCard key={filteredRider.userName} rider={filteredRider}/>
            ))}
            <NavBar/>
        </Page>
    );
}