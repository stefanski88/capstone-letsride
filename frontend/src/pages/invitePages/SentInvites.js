import {useAuth} from "../../auth/AuthProvider";
import {useEffect, useState} from "react";
import {getAllSentInvites} from "../../services/API-Service";
import Main from "../../components/Main";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import SentInviteCard from "../../components/cards/SentInviteCard";
import Page from "../../components/Page";

export default function SentInvites() {

    const {token} = useAuth()
    const [invites, setInvites] = useState([])

    useEffect(() => {
        getAllSentInvites(token)
            .then(invites => setInvites(invites))
    }, [])

    return (
        <Page>
            <Header/>
            <Main>
                {invites.map(sentInv => (
                    <SentInviteCard key={sentInv.id} sentInv={sentInv}/>
                ))}
            </Main>
            <NavBar/>
        </Page>
    );
}