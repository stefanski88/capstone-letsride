import {useHistory} from "react-router-dom";
import {StyledSection} from "../StyledSection";

export default function ReceivedInviteCard( {recInv} ) {

    const history = useHistory()

    function selectReceivedInvite(id) {
        history.push(`ReceivedInvite/${id}`)
    }

    return(
        <StyledSection onClick={()=>{selectReceivedInvite(recInv.inviteID)}}>
            <p>Invite from: {recInv.sender}</p>
            <p>Status: {recInv.status}</p>
        </StyledSection>
    );
}