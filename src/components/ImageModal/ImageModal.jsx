import css from "./ImageModal.module.css";
import Modal from "react-modal";

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

const ImageModal = ({ selectedImg, closeModal, modalIsOpen }) => {
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
