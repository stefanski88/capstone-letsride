import Main from "../../components/Main";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import {useAuth} from "../../auth/AuthProvider";
import {useEffect, useState} from "react";
import {
    deleteInvite,
    getAllReceivedInvites,
    updateInvite
} from "../../services/API-Service";
import ReceivedInviteCard from "../../components/cards/ReceivedInviteCard";
import Page from "../../components/Page";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {InviteSection} from "../../components/InviteSection";

export default function ReceivedInvites() {

    const {token} = useAuth()
    const [invites, setInvites] = useState([])
    const [getID, setID] = useState('')
    console.log("getID: ", getID)

    useEffect(() => {
        getAllReceivedInvites(token)
            .then(invites => setInvites(invites))
    }, [])

    const handleSelect = async (selectValue) => {
        if (selectValue === 'reject') {
            const deleteRequest = await deleteInvite(getID, token);
            if (deleteRequest) {
                alert(`The invite ${deleteRequest.inviteID} has been rejected and deleted`)
            } else {
                console.error('error in invite deletion')
            }
        }
        if (selectValue === 'accept') {
            const updateRequest = await updateInvite(getID, {status: "accept"}, token)
            if (updateRequest) {
                alert(`invite ${updateRequest.inviteID} has been accepted.`)
            } else {
                console.error('error in invite update')
            }
        }
    }

    const reloadPage = () => {
        getAllReceivedInvites(token)
            .then(invites => (setInvites(invites)))
    }

    return (
        <Page>
            <Header/>
            <Main>
                {invites && <div>
                    {invites.map(recInv => (
                        <InviteSection onClick={() => setID(recInv.inviteID)}>
                            <ReceivedInviteCard key={recInv.id} recInv={recInv}/>
                                <Stack direction="row" spacing={2}>
                                    <Button variant="outlined" size="small" startIcon={<DeleteIcon/>}
                                            onClick={() =>
                                                deleteInvite(recInv.inviteID, token)
                                                    .then(reloadPage)}
                                    >
                                        Delete
                                    </Button>
                                    <Button variant="contained" size="small" endIcon={<SendIcon/>}
                                            onClick={() =>
                                            updateInvite(recInv.inviteID, {status:"accept", token})
                                                .then(reloadPage)}
                                    >
                                        Accept Invite
                                    </Button>
                                </Stack>
                        </InviteSection>
                    ))}
                </div>}
            </Main>
            <NavBar/>
        </Page>
    );
}