import { useRoutes } from "react-router-dom";

import { HomePage } from "./pages";
import MessagesPage from "./pages/HomePage/MessagesPage";

const AppRouter = () => {
  const routes = useRoutes([
    { path: "/home", element: <HomePage /> },
    { path: "/messages", element: <MessagesPage /> },
  ]);

  return routes;
};

export default AppRouter;
