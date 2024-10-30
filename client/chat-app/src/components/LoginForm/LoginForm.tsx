import { ChangeEvent, FormEvent, useState } from "react";

import Input from "../Input/Input";
import Form from "../Form/Form";
import { useAuth } from "../../context/AuthProvider/AuthProvider";

const LoginForm = () => {
  const { handleLogin } = useAuth();

  const [{ email, password }, setFormData] = useState<{
    email: string;
    password: string;
  }>({ email: "", password: "" });

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleLogin(email, password);
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <h1>Login</h1>

      <Input value={email} onChange={handleOnChange} name="email" id="email" />

      <Input
        value={password}
        onChange={handleOnChange}
        type="password"
        name="password"
        id="password"
      />

      <button>Login</button>
    </Form>
  );
};

export default LoginForm;
