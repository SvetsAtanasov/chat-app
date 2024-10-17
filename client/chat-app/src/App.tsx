import { BrowserRouter as Router } from "react-router-dom";

import { SideNav, Box } from "./components";
import AppRouter from "./router";

import "./dist/styles.css";

function App() {
  return (
    <>
      <Router>
        <Box className="wrapper">
          <SideNav />
          <AppRouter />
        </Box>
      </Router>
    </>
  );
}

export default App;
