import {Router, Route, Switch} from "react-router-dom";
import Login from "./pages/Login";
import Header from "./components/Header";


function App() {
  return (
      <div>
          <Header />
          <Login />
      </div>
  );
}

export default App;
