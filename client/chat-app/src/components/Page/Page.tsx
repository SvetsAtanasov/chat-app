import { useAuth } from "../../context/AuthProvider/AuthProvider";
import AppRouter from "../../router";
import Box from "../Box/Box";
import SideNav from "../SideNav/SideNav";

const Page = () => {
  const { isAuth } = useAuth();

  return (
    <Box height="calc(100vh - 40px)" padding="20px" className="wrapper">
      {isAuth && <SideNav />}
      <AppRouter />
    </Box>
  );
};

export default Page;
