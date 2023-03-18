import { FC, PropsWithChildren } from "react";
import "./Modal.scss";
import ReactModal from "react-modal";
interface ModalProps {
  closeModal: () => void;
  open: boolean;
}

const Modal: FC<PropsWithChildren<ModalProps>> = ({
  children,
  open,
  closeModal,
}) => {
  return (
    <ReactModal
      isOpen={open}
      appElement={document.getElementById("root")!}
      contentLabel="City"
      onRequestClose={() => closeModal()}
      className="Modal__Content"
      overlayClassName="Modal__Overlay"
    >
      <div className="Modal__Close" onClick={() => closeModal()}>
        &times;
      </div>
      <div className="Modal__Body">{children}</div>
    </ReactModal>
  );
};

export default Modal;
