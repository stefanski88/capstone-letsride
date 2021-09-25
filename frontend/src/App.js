import Login from "./pages/Login";
import AuthProvider from "./auth/AuthProvider";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Landing from "./pages/Landing";
import Registration from "./pages/Registration";
import DeleteAccount from "./pages/DeleteAccount";
import EditAccount from "./pages/EditAccount";
import Logout from "./pages/Logout";
import MyMotorcycles from "./pages/MyMotorcycles";
import MyMotorcycle from "./pages/MyMotorcycle";
import ReceivedInvites from "./pages/ReceivedInvites";
import CreateMotorcycle from "./pages/CreateMotorcycle";
import SentInvites from "./pages/SentInvites";
import CreateInvite from "./pages/CreateInvite";
import Search from "./pages/Search";
import ProtectedRoute from "./auth/ProtectedRoute";

function App() {

  return (
      <AuthProvider>
          <Router>
              <Switch>
                  <Route exact path="/landing" component={Landing} />
                  <Route path="/login" component={Login} />
                  <ProtectedRoute path="/registration" component={Registration} />
                  <ProtectedRoute path="/deleteAccount" component={DeleteAccount} />
                  <ProtectedRoute path="/editAccount" component={EditAccount}  />
                  <ProtectedRoute path="/logout" component={Logout} />
                  <ProtectedRoute path="/myMotorcycle/:id" component={MyMotorcycle}  />
                  <ProtectedRoute path="/myMotorcycles" component={MyMotorcycles} />
                  <ProtectedRoute path="/createMotorcycle" component={CreateMotorcycle} />
                  <ProtectedRoute path="/receivedInvites" component={ReceivedInvites} />
                  <ProtectedRoute path="/sentInvites" component={SentInvites} />
                  <ProtectedRoute path="/createInvite" component={CreateInvite} />
                  <ProtectedRoute path="/search" component={Search} />
              </Switch>
          </Router>
      </AuthProvider>
  );
}

export default App;
