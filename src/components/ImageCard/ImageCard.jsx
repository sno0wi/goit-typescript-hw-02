import css from "./ImageCard.module.css";

const ImageCard = ({ img, handleSelectPhoto }) => {
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
