import Main from "../components/Main";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import {useAuth} from "../auth/AuthProvider";
import {useEffect, useState} from "react";
import {getAllReceivedInvites} from "../services/API-Service";
import ReceivedInviteCard from "../components/ReceivedInviteCard";


export default function ReceivedInvites() {

    const {token} = useAuth()
    const [invites, setInvites] = useState([])

    useEffect(() => {
        getAllReceivedInvites(token)
            .then(invites => setInvites(invites))
    }, [])

    return(
      <Main>
          <Header />
          <div>
              {invites.map(recInv => (
                  <ReceivedInviteCard key={recInv.id} recInv={recInv}/>
              ))}
          </div>
          <NavBar />
      </Main>
    );
}