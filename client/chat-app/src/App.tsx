import { BrowserRouter as Router } from "react-router-dom";

import { SideNav, Box } from "./components";
import { AuthProvider } from "./context";
import AppRouter from "./router";

import "./dist/styles.css";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Box className="wrapper">
            <SideNav />
            <AppRouter />
          </Box>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
