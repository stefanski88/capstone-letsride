import Login from "./pages/Login";
import AuthProvider from "./auth/AuthProvider";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Landing from "./pages/Landing";
import Registration from "./pages/userPages/Registration";
import DeleteAccount from "./pages/userPages/DeleteAccount";
import EditAccount from "./pages/userPages/EditAccount";
import Logout from "./pages/Logout";
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

function App() {

  return (
      <AuthProvider>
          <Router>
              <Switch>
                  <Route exact path="/landing" component={Landing} />
                  <Route path="/login" component={Login} />
                  <Route path="/myMotorcycle/:id" component={MyMotorcycle} />
                  <Route path="/foundRider/:user" component={FoundRider} />
                  <ProtectedRoute path="/registration" component={Registration} />
                  <ProtectedRoute path="/logout" component={Logout} />
                  <ProtectedRoute path="/deleteAccount" component={DeleteAccount} />
                  <ProtectedRoute path="/editAccount" component={EditAccount} />
                  <ProtectedRoute path="/myMotorcycles" component={MyMotorcycles} />
                  <ProtectedRoute path="/createMotorcycle" component={CreateMotorcycle} />
                  <ProtectedRoute path="/receivedInvites" component={ReceivedInvites} />
                  <Route path="/receivedInvite/:id" component={ReceivedInvite} />
                  <ProtectedRoute path="/sentInvites" component={SentInvites} />
                  <Route path="/sentInvite/:id" component={SentInvite} />
                  <ProtectedRoute path="/createInvite" component={CreateInvite} />
                  <ProtectedRoute path="/search" component={Search} />
              </Switch>
          </Router>
      </AuthProvider>
  );
}
export default App;
