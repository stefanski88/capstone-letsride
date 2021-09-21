import Main from "../components/Main";
import {useAuth} from "../auth/AuthProvider";


export default function EditAccount() {

    const {user} = useAuth()




    return(
        <div>
            <p>TEST</p>
        </div>

    );
}