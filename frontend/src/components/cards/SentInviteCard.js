import {useHistory} from "react-router-dom";
import {StyledSection} from "../StyledSection";


export default function SentInviteCard( { sentInv } ) {

    const history = useHistory()

    function selectSentInvite(id) {
        history.push(`sentInvite/${id}`)
    }

    return(
        <StyledSection onClick={()=>{selectSentInvite(sentInv.inviteID)}}>
            <p>Invite sent to: {sentInv.sender}</p>
            <p>Status: {sentInv.status}</p>
        </StyledSection>
    );
}