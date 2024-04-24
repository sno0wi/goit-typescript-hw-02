import {PhotosProps} from "../App/App.types"

export interface ModalProps {
    selectedImg: PhotosProps;
    closeModal: () => void;
    modalIsOpen: boolean;
}