import Login from "./pages/Login";
import AuthProvider from "./auth/AuthProvider";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Landing from "./pages/Landing";
import Registration from "./pages/Registration";
import DeleteAccount from "./pages/DeleteAccount";
import ProtectedRoute from "./auth/ProtectedRoute";
import EditAccount from "./pages/EditAccount";
import Logout from "./pages/Logout";
import MyMotorcycles from "./pages/MyMotorcycles";
import MyMotorcycle from "./pages/MyMotorcycle";

function App() {

  return (
      <AuthProvider>
          <Router>
              <Switch>
                  <Route exact path="/landing" component={Landing} />
                  <Route path="/login" component={Login} />
                  <Route path="/registration" component={Registration} />
                  <Route path="/deleteAccount" component={DeleteAccount} />
                  <Route path="/editAccount" component={EditAccount}  />
                  <Route path="/logout" component={Logout} />
                  <Route path="/myMotorcycle/:id" component={MyMotorcycle}  />
                  <Route path="/myMotorcycles" component={MyMotorcycles} />
              </Switch>
          </Router>
      </AuthProvider>
  );
}

export default App;
