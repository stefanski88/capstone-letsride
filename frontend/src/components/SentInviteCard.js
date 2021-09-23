import {useHistory} from "react-router-dom";


export default function SentInviteCard( {sentInv} ) {

    const history = useHistory()

    function selectSentInvite(id) {
        history.push(`SentInvite/${id}`)
    }

    return(
        <section onClick={()=>{selectSentInvite(sentInv.id)}}>
            <p>Sent Invite: {sentInv.status}</p>
        </section>
    );
}