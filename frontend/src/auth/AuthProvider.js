import {useContext, useState} from "react";
import jwt from 'jsonwebtoken'
import {getToken} from "../services/API-Service";
import AuthContext from "./AuthContext";

export default function AuthProvider({ children }) {

    const [token, setToken] = useState()

    const claims = jwt.decode(token)

    const user = claims && {
        username: claims.sub,
        role: claims.role,
    }

    const login = credentials => getToken(credentials).then(setToken)

    const logout = () => setToken()
    // const deleteUser = (token) => deleteAPI(token) wasn dat?



    return(
      <AuthContext.Provider value={{ token, user, login, logout }}>
          { children }
      </AuthContext.Provider>
    );
}
export const useAuth = () => useContext(AuthContext)