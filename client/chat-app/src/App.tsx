import { BrowserRouter as Router } from "react-router-dom";

import { SideNav, Box } from "./components";
import AppRouter from "./router";

import "./dist/styles.css";

function App() {
  return (
    <>
      <Router>
        <Box
          height="calc(100vh - 40px)"
          padding="20px"
          flexDirection="row"
          className="wrapper"
        >
          <SideNav />
          <AppRouter />
        </Box>
      </Router>
    </>
  );
}

export default App;
