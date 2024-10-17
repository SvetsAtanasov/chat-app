import { useRoutes } from "react-router-dom";
import { HomePage } from "./pages";

const AppRouter = () => {
  const routes = useRoutes([{ path: "/home", element: <HomePage /> }]);

  return routes;
};

export default AppRouter;
