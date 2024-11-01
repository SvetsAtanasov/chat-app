import { storeToken } from "./../utils/localStorage/localStorage";
export const register = async (
  email: string,
  password: string,
  repeatPassword: string
) => {
  try {
    const res = await fetch("http://localhost:8888/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, repeatPassword }),
    });
  } catch (err: any) {}
};

export const login = async (email: string, password: string) => {
  try {
    const res = await fetch("http://localhost:8888/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    storeToken(JSON.stringify(data.jwtToken));
    localStorage.setItem("email", JSON.stringify(data.email));
    window.dispatchEvent(new Event("storage-update"));

    return data.jwtToken;
  } catch (err: any) {}
};
