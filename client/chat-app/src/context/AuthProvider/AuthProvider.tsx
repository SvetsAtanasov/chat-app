import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { login } from "../../services/api";
import { getToken, removeToken } from "../../utils/localStorage/localStorage";

type AuthContextProps = {
  isAuth: boolean;
  handleLogin: (email: string, password: string) => void;
  handleLogout: () => void;
};

const AuthContext = createContext<AuthContextProps>({
  isAuth: false,
  handleLogin(email, password) {},
  handleLogout() {},
});
const { Provider } = AuthContext;

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("Component is not wrapped in AuthProvider");
  }

  return context;
};

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [token, setToken] = useState(false);

  const handleStorageEvent = () => {
    const isAuth = getToken();

    setToken(!!isAuth);
  };

  const handleLogin = async (email: string, password: string) => {
    await login(email, password);
  };

  const handleLogout = () => {
    removeToken();
    window.dispatchEvent(new Event("storage-update"));
  };

  useEffect(() => {
    handleStorageEvent();

    window.addEventListener("storage-update", handleStorageEvent);

    return () =>
      window.removeEventListener("storage-update", handleStorageEvent);
  }, []);

  const isAuth = useMemo(() => token, [token]);

  return (
    <Provider value={{ isAuth, handleLogin, handleLogout }}>
      {children}
    </Provider>
  );
};

export default AuthProvider;
