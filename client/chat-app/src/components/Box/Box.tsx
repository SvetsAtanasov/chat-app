import { PropsWithChildren } from "react";

type CustomBoxProps = PropsWithChildren<{
  className?: string;
}>;

const Box = ({ className, children }: CustomBoxProps) => {
  return <div className={`box ${className}`}>{children}</div>;
};

export default Box;
