import Login from "./pages/Login";
import Header from "./components/Header";
import AuthProvider from "./auth/AuthProvider";


function App() {
  return (
      <AuthProvider>
          <Header />
          <Login />
        </AuthProvider>
  );
}

export default App;
