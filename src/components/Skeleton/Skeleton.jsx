import { memo } from "react";
import SkeletonItem from "../SkeletonItem/SkeletonItem";
import "./skeleton.css";

const Skeleton = () => {
  return (
    <div className="sneakers-cards">
      {Array(12)
        .fill()
        .map((_, i) => (
          <SkeletonItem key={i} />
        ))}
    </div>
  );
};

export default memo(Skeleton);
