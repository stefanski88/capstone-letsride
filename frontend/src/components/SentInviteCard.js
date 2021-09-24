import {useHistory} from "react-router-dom";
import {StyledSection} from "./StyledSection";


export default function SentInviteCard( {sentInv} ) {

    const history = useHistory()

    function selectSentInvite(id) {
        history.push(`SentInvite/${id}`)
    }

    return(
        <StyledSection onClick={()=>{selectSentInvite(sentInv.id)}}>
            <p>Sent Invite: {sentInv.status}</p>
        </StyledSection>
    );
}