import { PhotosProps} from '../App/App.types'

export interface CardProps {
    img: PhotosProps;
    handleSelectPhoto: (img:PhotosProps) => void;
}