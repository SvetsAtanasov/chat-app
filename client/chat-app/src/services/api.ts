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
  } catch (err: any) {}
};
