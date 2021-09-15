import Login from "./pages/Login";
import AuthProvider from "./auth/AuthProvider";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Landing from "./pages/Landing";
import Header from "./components/Header";
import Registration from "./pages/Registration";

function App() {
  return (
      <AuthProvider>
          <Router>
              <Header />
              <Switch>
                  <Route exact path="/landing" component={Landing}/>
                  <Route path="/login" component={Login}/>
                  <Route path="/registration" component={Registration}/>
              </Switch>
          </Router>
      </AuthProvider>
  );
}

export default App;
