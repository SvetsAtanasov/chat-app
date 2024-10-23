import { PropsWithChildren } from "react";

const ModalHeader = ({ children }: PropsWithChildren) => {
  return <div className="modal-header">{children}</div>;
};

export default ModalHeader;
