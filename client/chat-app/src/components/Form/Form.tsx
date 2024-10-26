import { FormHTMLAttributes } from "react";

const Form = ({ children, ...props }: FormHTMLAttributes<HTMLFormElement>) => {
  return <form {...props}>{children}</form>;
};

export default Form;
