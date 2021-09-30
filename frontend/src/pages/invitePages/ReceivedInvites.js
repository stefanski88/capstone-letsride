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
import {StyledSection} from "../../components/StyledSection";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function ReceivedInvites() {

    const {token} = useAuth()
    const [invites, setInvites] = useState([])
    const [getID, setID] = useState('')

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
            const updateRequest = await updateInvite(getID, {status: "accepted"}, token)
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

    /*
    <select onChange={(event) => {
                                handleSelect(event.target.value)
                            }}>
                                <option value="">Please select..</option>
                                <option value="accept">accept</option>
                                <option value="reject">reject</option>
                            </select>
     */

    return (
        <Page>
            <Header/>
            <Main>
                {invites && <div>
                    {invites.map(recInv => (
                        <StyledSection onClick={() => setID(recInv.inviteID)}>
                            <ReceivedInviteCard key={recInv.id} recInv={recInv}/>
                            <FormControl variant="standard">

                                <InputLabel>please choose..</InputLabel>
                                <Select onChange={(event) => {
                                    handleSelect(event.target.value).then(reloadPage)
                                }}
                                >
                                    <MenuItem value="accept">accept</MenuItem>
                                    <MenuItem value="reject">reject</MenuItem>
                                </Select>
                            </FormControl>

                        </StyledSection>
                    ))}
                </div>}
            </Main>
            <NavBar/>
        </Page>
    );
}