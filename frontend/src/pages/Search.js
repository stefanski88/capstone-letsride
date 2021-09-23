import Main from "../components/Main";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import {useAuth} from "../auth/AuthProvider";
import {useEffect, useState} from "react";
import {drivingStyleOptions} from "../components/SearchOptions";
import Select from "../components/Select";


export default function Search() {

    const {token} = useAuth()
    const [riders, setRiders] = useState({})

    /*
    useEffect(() => {
        getUsers().then(riders)
        console.log(riders)
    })
     */

    return(
        <Main as="form">
            <Header />
            <label>Choose Driving Style</label>
                <Select
                    name="drivingStyle"
                    value={riders.drivingStyle}
                    values={drivingStyleOptions}
                    />
            <button onClick={null}>Search Riders!</button>
            <NavBar />
        </Main>
    );
}