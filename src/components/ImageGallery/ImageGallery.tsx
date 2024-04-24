import { useEffect, useRef } from "react";
import ImageCard from "../ImageCard/ImageCard.js";
import css from "./ImageGallery.module.css";
import { GalleryProps } from "./ImageGallery.types";

const ImageGallery:React.FC<GalleryProps> = ({ photos, handleSelectPhoto }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [photos]);

  return (
    <ul className={css.gallery_list}>
      {photos !== null &&
        Array.isArray(photos) &&
        photos.map((photo, index) => (
          <li key={photo.id}>
            {index === photos.length - 1 ? (
              <div ref={elementRef}>
                <ImageCard img={photo} handleSelectPhoto={handleSelectPhoto} />
              </div>
            ) : (
              <ImageCard img={photo} handleSelectPhoto={handleSelectPhoto} />
            )}
          </li>
        ))}
    </ul>
  );
};
export default ImageGallery;
