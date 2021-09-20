import {useAuth} from "./AuthProvider";
import {Redirect} from "react-router-dom";
import {getToken} from "../services/API-Service";

export default function ProtectedRoute() {
    const { user } = useAuth()

    if (!user) {
        return <Redirect to = "/login" />
    }
}