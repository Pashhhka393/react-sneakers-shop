import "./ordercart.css";

const OrderCart = ({ setOpenCart, setOrderCart }) => {
  return (
    <>
      <div className="cart-overlay"></div>
      <div className="cart">
        <h1 style={{ padding: "30px 30px" }}>Корзина</h1>
        <div className="empty-cart">
          <img src="./order-image.svg" alt="order-image" />
          <span className="order-title">Заказ оформлен!</span>
          <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
          <button
            onClick={() => {
              setOpenCart(false);
              setOrderCart(false);
            }}
            className="button-back__order"
          >
            Вернуться назад
          </button>
        </div>
      </div>
    </>
  );
};

export default OrderCart;
