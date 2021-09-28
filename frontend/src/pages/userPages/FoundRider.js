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
    const [value, onChange] = useState(new Date())

    useEffect(() => {
        getUser(user)
            .then(data => setRider(data))
    }, [])

    const formattedDateTime = moment(value).format('lll').toString()

    useEffect(() => {
        onChange(value)
    },[value])





    const handleCreateInvite = async () => {
        if (!value) {
            alert('please select a date')
            return
        }
        setLoading(true)

        const createRequest = await createInvite({
            receiver: rider.userName,
            timeStamp: formattedDateTime},
            token);

        setLoading(false)
        if (createRequest) {
            //BUG
            alert(`The invite to ${createRequest.receiver} has been sent`)
        } else {
            console.error('An Error happened while creating')
        }
    }



    return (
        <div>
            <Datetime locale="de"
                value={value}
                onChange={onChange}/>;
            <Page>
                <Header/>
                <Main>
                    <RiderCard rider={rider}/>
                    <button onClick={handleCreateInvite}>invite rider!</button>
                    <button>go back</button>
                </Main>
                <NavBar/>
            </Page>

        </div>
    );
}