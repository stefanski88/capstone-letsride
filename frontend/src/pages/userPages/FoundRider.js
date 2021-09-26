import NavBar from "../../components/NavBar";
import Page from "../../components/Page";
import Header from "../../components/Header";
import Main from "../../components/Main";
import {useEffect, useState} from "react";
import {useAuth} from "../../auth/AuthProvider";
import {createInvite, getUser} from "../../services/API-Service";

export default function FoundRider() {

    const {token, user} = useAuth()
    const [rider, setRider] = useState({})
    const [invite, setInvite] = useState({})
    const [loading, setLoading] = useState(false)


    useEffect(() =>{
      getUser(user.username)
    },[])

    const handleCreateInvite = async (event) => {
        event.preventDefault();
        setLoading(true)
        const createRequest = await createInvite(invite, token);
        setLoading(false)
        if (createRequest) {
            alert(`The invite ${createRequest.inviteID} has been sent`)
        } else {
            console.error('An Error happened while creating')
        }
    }

    return (
        <Page>
            <Header />
            <Main>



            </Main>
            <NavBar />
        </Page>
    );
}