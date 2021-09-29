import Login from "./pages/userPages/Login";
import AuthProvider from "./auth/AuthProvider";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Registration from "./pages/userPages/Registration";
import DeleteAccount from "./pages/userPages/DeleteAccount";
import EditAccount from "./pages/userPages/EditAccount";
import Logout from "./pages/userPages/Logout";
import MyMotorcycles from "./pages/motorcyclePages/MyMotorcycles";
import MyMotorcycle from "./pages/motorcyclePages/MyMotorcycle";
import ReceivedInvites from "./pages/invitePages/ReceivedInvites";
import CreateMotorcycle from "./pages/motorcyclePages/CreateMotorcycle";
import SentInvites from "./pages/invitePages/SentInvites";
import CreateInvite from "./pages/invitePages/CreateInvite";
import Search from "./pages/Search";
import ProtectedRoute from "./auth/ProtectedRoute";
import SentInvite from "./pages/invitePages/SentInvite";
import ReceivedInvite from "./pages/invitePages/ReceivedInvite";
import FoundRider from "./pages/userPages/FoundRider";
import Landing from "./pages/Landing";

function App() {
    return (
        <AuthProvider>
            <Router>
                <Switch>
                    <Route exact path="/" component={Landing}/>
                    <Route path="/registration" component={Registration}/>
                    <Route path="/login" component={Login}/>
                    <ProtectedRoute path="/myMotorcycle/:id" component={MyMotorcycle}/>
                    <ProtectedRoute path="/foundRider/:user" component={FoundRider}/>
                    <ProtectedRoute path="/logout" component={Logout}/>
                    <ProtectedRoute path="/deleteAccount" component={DeleteAccount}/>
                    <ProtectedRoute path="/editAccount" component={EditAccount}/>
                    <ProtectedRoute path="/myMotorcycles" component={MyMotorcycles}/>
                    <ProtectedRoute path="/createMotorcycle" component={CreateMotorcycle}/>
                    <ProtectedRoute path="/receivedInvites" component={ReceivedInvites}/>
                    <ProtectedRoute path="/receivedInvite/:id" component={ReceivedInvite}/>
                    <ProtectedRoute path="/sentInvites" component={SentInvites}/>
                    <ProtectedRoute path="/sentInvite/:id" component={SentInvite}/>
                    <ProtectedRoute path="/createInvite" component={CreateInvite}/>
                    <Route path="/search" component={Search}/>
                </Switch>
            </Router>
        </AuthProvider>
    );
}
export default App;
