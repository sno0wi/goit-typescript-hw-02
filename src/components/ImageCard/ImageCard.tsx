import css from "./ImageCard.module.css";
import { CardProps } from "./ImageCard.types";

const ImageCard:React.FC<CardProps> = ({ img, handleSelectPhoto }) => {
  return (
    <div className={css.gallery_item}>
      <img
        className={css.gallery_img}
        src={img.urls.small}
        alt={img.slug}
        onClick={() => {
          handleSelectPhoto(img);
        }}
      />
    </div>
  );
};

export default ImageCard;
