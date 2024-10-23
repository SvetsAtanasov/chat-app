import { PropsWithChildren } from "react";

type CustomBoxProps = PropsWithChildren<{
  className?: string;
  flexDirection?: "row" | "column";
  display?: "flex";
  padding?: string;
  height?: string;
  alignItems?: "start" | "center" | "end";
  justifyContent?: "left" | "center" | "right";
  margin?: string;
}>;

const Box = ({
  display = "flex",
  alignItems = "start",
  justifyContent = "left",
  margin = "0",
  className,
  children,
  flexDirection = "row",
  padding = "0",
  height = "",
}: CustomBoxProps) => {
  return (
    <div
      className={className}
      style={{
        flexDirection,
        padding,
        display,
        height,
        margin,
        justifyContent,
        alignItems,
      }}
    >
      {children}
    </div>
  );
};

export default Box;
