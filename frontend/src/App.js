import Login from "./pages/Login";
import AuthProvider from "./auth/AuthProvider";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Landing from "./pages/Landing";
import Header from "./components/Header";

function App() {
  return (
      <AuthProvider>
          <Router>
              <Header />
              <Switch>
                  <Route exact path="/landing" component={Landing}/>
                  <Route path="/login" component={Login}/>
              </Switch>
          </Router>
      </AuthProvider>
  );
}

export default App;
