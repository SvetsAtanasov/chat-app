import { DialogHTMLAttributes } from "react";

const Modal = ({
  children,
  ...props
}: DialogHTMLAttributes<HTMLDialogElement>) => {
  return (
    <dialog {...props} className="modal">
      {children}
    </dialog>
  );
};

export default Modal;
