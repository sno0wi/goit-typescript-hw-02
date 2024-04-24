import css from "./ImageModal.module.css";
import Modal from "react-modal";
import { ModalProps } from "./ImageModal.types";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
};

Modal.setAppElement("#root");

const ImageModal:React.FC< ModalProps> = ({ selectedImg, closeModal, modalIsOpen }) => {
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div>
          <img
            src={selectedImg.urls.regular}
            alt={selectedImg.alt_description}
            className={css.img}
          />
        </div>
      </Modal>
    </>
  );
};

export default ImageModal;
