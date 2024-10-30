import { ChangeEvent, FormEvent, useState } from "react";

import Input from "../Input/Input";
import Form from "../Form/Form";
import { register } from "../../services/api";

const RegisterForm = () => {
  const [{ email, password, repeatPassword }, setFormData] = useState<{
    email: string;
    password: string;
    repeatPassword: string;
  }>({ email: "", password: "", repeatPassword: "" });

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await register(email, password, repeatPassword);
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <h1>Register</h1>

      <Input value={email} onChange={handleOnChange} name="email" id="email" />

      <Input
        value={password}
        onChange={handleOnChange}
        type="password"
        name="password"
        id="password"
      />

      <Input
        value={repeatPassword}
        onChange={handleOnChange}
        type="password"
        name="repeatPassword"
        id="repeatPassword"
      />

      <button>Submit</button>
    </Form>
  );
};

export default RegisterForm;
