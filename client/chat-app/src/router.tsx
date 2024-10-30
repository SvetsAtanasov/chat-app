import { useRoutes } from "react-router-dom";

import { HomePage, LoginPage, RegisterPage } from "./pages";
import MessagesPage from "./pages/HomePage/MessagesPage";
import { ProtectedRoute, PublicRoute } from "./components";

const AppRouter = () => {
  const routes = useRoutes([
    { path: "/register", element: <PublicRoute element={<RegisterPage />} /> },
    { path: "/login", element: <PublicRoute element={<LoginPage />} /> },
    { path: "/home", element: <ProtectedRoute element={<HomePage />} /> },
    {
      path: "/messages",
      element: <ProtectedRoute element={<MessagesPage />} />,
    },
  ]);

  return routes;
};

export default AppRouter;
