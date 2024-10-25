import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type AuthContextProps = {
  isAuth: boolean;
};

const AuthContext = createContext<AuthContextProps>({ isAuth: false });

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("Component is not wrapped in AuthProvider");
  }

  return context;
};

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [token, setToken] = useState(false);

  useEffect(() => {
    window.addEventListener("storage", () => {
      const isAuth = !!localStorage.getItem("token");

      setToken(isAuth);
    });

    return;
  }, []);

  const isAuth = useMemo(() => token, [token]);

  return (
    <AuthContext.Provider value={{ isAuth }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
