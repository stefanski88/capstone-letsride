import Main from "../../components/Main";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import {useAuth} from "../../auth/AuthProvider";
import {useEffect, useState} from "react";
import {getAllReceivedInvites} from "../../services/API-Service";
import ReceivedInviteCard from "../../components/cards/ReceivedInviteCard";
import Page from "../../components/Page";


export default function ReceivedInvites() {

    const {token} = useAuth()
    const [invites, setInvites] = useState([])

    useEffect(() => {
        getAllReceivedInvites(token)
            .then(invites => setInvites(invites))
    }, [])

    return (
        <Page>
            <Header/>
            <Main>
                <div>
                    {invites.map(recInv => (
                        <ReceivedInviteCard key={recInv.id} recInv={recInv}/>
                    ))}
                </div>
            </Main>
            <NavBar/>
        </Page>
    );
}