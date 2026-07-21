import { memo } from "react";
import SkeletonItem from "../SkeletonItem/SkeletonItem";
import "./skeleton.css";
import Spinner from "../Spinner/Spinner";

const Skeleton = () => {
  return (
    <>
      <div className="skeleton-mobile">
        <Spinner />
        <p>Загрузка...</p>
      </div>
      <div className="sneakers-cards desktop-only">
        {Array(12)
          .fill()
          .map((_, i) => (
            <SkeletonItem key={i} />
          ))}
      </div>
    </>
  );
};

export default memo(Skeleton);
