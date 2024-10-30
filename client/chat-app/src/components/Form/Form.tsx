import { FormHTMLAttributes } from "react";

const Form = ({ children, ...props }: FormHTMLAttributes<HTMLFormElement>) => {
  return (
    <form className="form" {...props}>
      {children}
    </form>
  );
};

export default Form;
