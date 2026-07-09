const SneakersInfoItem = ({ cartItems, toggleInCart }) => {
  return (
    <>
      {cartItems.map((sneaker) => {
        return (
          <div key={sneaker.id} className="cart-item">
            <img className="cart-image" src={sneaker.img} alt="" />
            <div className="cart-item-info">
              <p>{sneaker.title}</p>
              <p>{sneaker.price} руб.</p>
            </div>
            <button
              onClick={() => toggleInCart(sneaker.id, sneaker.inCart)}
              className="remove-btn"
            >
              х
            </button>
          </div>
        );
      })}
    </>
  );
};

export default SneakersInfoItem;
