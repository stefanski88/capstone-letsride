import NavBar from "../../components/NavBar";
import Page from "../../components/Page";
import Header from "../../components/Header";
import Main from "../../components/Main";
import {useAuth} from "../../auth/AuthProvider";
import {useState} from "react";
import {useParams} from "react-router-dom";
import {deleteInvite} from "../../services/API-Service";

export default function SentInvite() {

    const {token} = useAuth()
    console.log(token)
    const {id} = useParams()
    console.log(id)

    const [loading, setLoading] = useState(false)


    const handleDeletion = async (event) => {
        event.preventDefault();
        setLoading(true)
        const deleteRequest = await deleteInvite(id, token);
        setLoading(false)
        if (deleteRequest) {
            alert(`The invite ${deleteRequest.inviteID} has been deleted`)
        } else {
            console.error('An error happened when deleting user')
        }

    }

    return (
        <Page>
            <Header/>
            <Main>
                <button onClick={handleDeletion}>Delete Invite</button>
            </Main>
            <NavBar/>
        </Page>
    );
}