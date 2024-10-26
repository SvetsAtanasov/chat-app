import { BrowserRouter as Router } from "react-router-dom";

import { SideNav, Box } from "./components";
import { AuthProvider } from "./context";
import AppRouter from "./router";

import "./dist/styles.css";
import { useAuth } from "./context/AuthProvider/AuthProvider";

function App() {
  const { isAuth } = useAuth();

  return (
    <>
      <AuthProvider>
        <Router>
          <Box className="wrapper">
            {isAuth && <SideNav />}
            <AppRouter />
          </Box>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
