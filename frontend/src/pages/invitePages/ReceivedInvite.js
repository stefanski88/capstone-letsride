import Page from "../../components/Page";
import {useAuth} from "../../auth/AuthProvider";
import {Redirect, useHistory, useParams} from "react-router-dom";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import Main from "../../components/Main";
import {deleteInvite, updateInvite} from "../../services/API-Service";
import {useState} from "react";
import Select from "../../components/Select";


export default function ReceivedInvite() {

    const {token} = useAuth()
    console.log(token)
    const {id} = useParams()
    const history = useHistory()
    console.log(id)

    const [deletion, setDeletion] = useState({})


    //JSX ausbessern!!
    const handleSelect = async (selectValue) => {
        if (selectValue === 'reject')
        {
            const deleteRequest = await deleteInvite(id, token);
            if (deleteRequest) {
                alert(`The invite ${deleteRequest.inviteID} has been rejected and deleted`)
            } else {
                console.error('error in invite deletion')
            }
        }
        if (selectValue === 'accept')
        {
            const updateRequest = await updateInvite(id, {status: "accept"}, token)
            if (updateRequest) {
                alert(`invite ${updateRequest.inviteID} has been accepted.`)
            } else {
                console.error('error in invite update')
            }
        }
    }

    return (
        <Page>
        <Header />
            <Main >
                <select onChange={(event) => {
                    handleSelect(event.target.value)
                    console.log(event.target.value)
                }}>
                    <option value="">Please select..</option>
                    <option value="accept">accept</option>
                    <option value="reject">reject</option>
                </select>


            </Main>
            <button onClick={history.goBack} >back </button>
        <NavBar />
        </Page>
    );
}