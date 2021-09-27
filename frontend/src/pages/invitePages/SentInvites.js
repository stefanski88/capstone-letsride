import {useAuth} from "../../auth/AuthProvider";
import {useEffect, useState} from "react";
import {deleteInvite, getAllSentInvites} from "../../services/API-Service";
import Main from "../../components/Main";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import SentInviteCard from "../../components/cards/SentInviteCard";
import Page from "../../components/Page";
import {useHistory} from "react-router-dom";

export default function SentInvites() {

    const {token} = useAuth()
    const [invites, setInvites] = useState([])
    const history = useHistory()

    useEffect(() => {
        getAllSentInvites(token)
            .then(invites => setInvites(invites))
    }, [])

    const reloadPage = () => {
        getAllSentInvites(token)
            .then(invites => setInvites(invites))
    }

    return (
        <Page>
            <Header/>
            <Main>
                {invites.map(sentInv => (
                    <section>
                        <SentInviteCard key={sentInv.inviteID} sentInv={sentInv}/>
                        <button onClick={() =>
                            deleteInvite(sentInv.inviteID, token).then(reloadPage)}>Delete Invite
                        </button>
                    </section>
                ))}
            </Main>
            <NavBar/>
        </Page>
    );
}