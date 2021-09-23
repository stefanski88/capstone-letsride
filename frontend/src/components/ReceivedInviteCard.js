import {useHistory} from "react-router-dom";


export default function ReceivedInviteCard( {recInv} ) {

    const history = useHistory()

    function selectReceivedInvite(id) {
        history.push(`ReceivedInvite/${id}`)
    }

    return(
        <section onClick={()=>{selectReceivedInvite(recInv.id)}}>
            <p>Received Invite: {recInv.status}</p>
        </section>
    );
}