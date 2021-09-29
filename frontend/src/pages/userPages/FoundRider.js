import NavBar from "../../components/NavBar";
import Page from "../../components/Page";
import Header from "../../components/Header";
import Main from "../../components/Main";
import {useEffect, useState} from "react";
import {useAuth} from "../../auth/AuthProvider";
import {createInvite, getUser} from "../../services/API-Service";
import {useParams} from "react-router-dom";
import RiderCard from "../../components/cards/RiderCard";
import Datetime from 'react-datetime';
import moment from 'moment';

export default function FoundRider() {

    const {token} = useAuth()
    const {user} = useParams()

    const [rider, setRider] = useState({})
    const [loading, setLoading] = useState(false)
    const [dateTime, setDateTime] = useState(new Date())
    const [inputLocation, setInputLocation] = useState('')

    useEffect(() => {
        getUser(user)
            .then(data => setRider(data))
    }, [])

    const formattedDateTime = moment(dateTime).format('lll').toString()

    useEffect(() => {
        setDateTime(dateTime)
        console.log(dateTime)
    }, [])

    const handleCreateInvite = async () => {
        if (!dateTime) {
            alert('please select a date')
            return
        }
        setLoading(true)
        const createRequest = await createInvite({
                receiver: rider.userName,
                timeStamp: formattedDateTime,
                location: inputLocation,
            },
            token);
        setLoading(false)
        if (createRequest) {
            alert(`The invite to ${rider.userName} has been sent`)
        } else {
            console.error('An Error happened while creating')
        }
    }

    const handleInputChange = event => {
        setInputLocation(event.target.value)
    }

    return (
        <div>
            <Datetime locale="de"
                      value={dateTime}
                      onChange={setDateTime}/>
            <Page>
                <Header/>
                <Main>
                    <RiderCard rider={rider}/>
                    <button onClick={handleCreateInvite}>invite rider!</button>
                    <button>go back</button>
                    <h5>Suggest a meeting location that is easy to reach.</h5>
                    <input
                        type="text"
                        value={inputLocation}
                        onChange={handleInputChange}
                    />
                </Main>
                <NavBar/>
            </Page>
        </div>
    );
}