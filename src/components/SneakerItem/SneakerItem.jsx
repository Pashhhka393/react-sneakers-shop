import { memo } from "react";
import "./sneakeritem.css";

const SneakerItem = ({
  id,
  img,
  title,
  price,
  liked,
  inCart,
  toggleLiked,
  toggleInCart,
  isBuy,
  isFavourite,
}) => {
  return (
    <div className="sneaker-card">
      <div
        onClick={() => toggleLiked(id, liked)}
        style={{ cursor: "pointer" }}
        className="sneaker__card-image"
      >
        {isFavourite ? (
          <img src="./liked.svg" />
        ) : liked ? (
          <img src="./liked.svg" />
        ) : (
          <img src="./unliked.svg" />
        )}
      </div>
      <div className="card-image">
        <img src={img} alt="sneakers-image" />
      </div>
      <p>{title}</p>
      <div className="add-sneakers">
        <div className="price">
          <div className="price-item">
            <span>Цена: </span>
            <span>{price} руб.</span>
          </div>
          <div onClick={() => toggleInCart(id, inCart)}>
            {isBuy ? (
              <img style={{ cursor: "pointer" }} src="./add.svg" />
            ) : inCart ? (
              <img style={{ cursor: "pointer" }} src="./add.svg" />
            ) : (
              <img style={{ cursor: "pointer" }} src="./plus.svg" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(SneakerItem);
