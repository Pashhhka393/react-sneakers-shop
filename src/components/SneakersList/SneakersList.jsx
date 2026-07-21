import { memo } from "react";
import Skeleton from "../Skeleton/Skeleton";

import SneakerItem from "../SneakerItem/SneakerItem";
import "./sneakerslist.css";

const SneakersList = ({ sneakers, isLoading, toggleLiked, toggleInCart }) => {
  if (isLoading) {
    return <Skeleton />;
  }
  return (
    <div className="sneakers-cards">
      {sneakers.map((sneakerObj) => {
        return (
          <SneakerItem
            key={sneakerObj.id}
            id={sneakerObj.id}
            img={sneakerObj.img}
            title={sneakerObj.title}
            price={sneakerObj.price}
            liked={sneakerObj.liked}
            inCart={sneakerObj.inCart}
            toggleLiked={toggleLiked}
            toggleInCart={toggleInCart}
          />
        );
      })}
    </div>
  );
};

export default memo(SneakersList);
