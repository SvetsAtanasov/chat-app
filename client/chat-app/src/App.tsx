import { BrowserRouter as Router } from "react-router-dom";

import { AuthProvider } from "./context";

import "./dist/styles.css";
import { useAuth } from "./context/AuthProvider/AuthProvider";
import { Page } from "./components";

function App() {
  const { isAuth } = useAuth();
  console.log(isAuth);

  return (
    <>
      <AuthProvider>
        <Router>
          <Page />
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
