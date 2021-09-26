import NavBar from "../../components/NavBar";
import Page from "../../components/Page";
import Header from "../../components/Header";
import Main from "../../components/Main";
import {useEffect, useState} from "react";
import {useAuth} from "../../auth/AuthProvider";
import {createInvite, getUser} from "../../services/API-Service";
import {useParams} from "react-router-dom";
import RiderCard from "../../components/cards/RiderCard";

export default function FoundRider() {

    const {token} = useAuth()
    const {user} = useParams()
    console.log("user:", user)

    const [rider, setRider] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getUser(user)
            .then(data => setRider(data))
    },[])
    console.log("found rider", rider)



    const handleCreateInvite = async (event) => {
        event.preventDefault();                             
        setLoading(true)
        const createRequest = await createInvite(rider.receiver, token);
        setLoading(false)
        if (createRequest) {
            alert(`The invite ${createRequest.rider.receiver} has been sent`)
        } else {
            console.error('An Error happened while creating')
        }
    }

    return (
        <Page>
            <Header />
            <Main>
                <RiderCard rider={rider}/>
                <button onClick={handleCreateInvite}>invite rider!</button>
                <button>go back</button>
            </Main>
            <NavBar />
        </Page>
    );
}