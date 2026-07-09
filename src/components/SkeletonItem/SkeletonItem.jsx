const SkeletonItem = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-image"></div>
      <div className="skeleton-text">
        <div className="skeleton-title-1"></div>
        <div className="skeleton-title-2"></div>
      </div>
      <div className="price-and-cart">
        <div className="skeleton-price"></div>
        <div className="skeleton-cart"></div>
      </div>
    </div>
  );
};

export default SkeletonItem;
