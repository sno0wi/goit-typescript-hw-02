import { PhotosProps} from '../App/App.types'

export interface GalleryProps {
    photos: PhotosProps[] | null;
    handleSelectPhoto: (img:PhotosProps) => void;
}