import Login from "./pages/Login";
import AuthProvider from "./auth/AuthProvider";
import {Route, Router, Switch} from "react-router-dom";
import Landing from "./pages/Landing";


function App() {
  return (
      <AuthProvider>
          <Landing />
          <Login />
        </AuthProvider>
  );
}

export default App;
