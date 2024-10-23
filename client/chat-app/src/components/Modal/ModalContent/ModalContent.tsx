import { PropsWithChildren } from "react";

const ModalContent = ({ children }: PropsWithChildren) => {
  return <div className="modal-content">{children}</div>;
};

export default ModalContent;
