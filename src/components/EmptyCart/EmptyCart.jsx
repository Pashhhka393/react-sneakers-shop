import Button from "../UI/Button/Button";

const EmptyCart = ({ setOpenCart }) => {
  return (
    <>
      <div className="cart-overlay"></div>
      <div className="cart">
        <h1 style={{ padding: "30px 30px" }}>Корзина</h1>
        <div className="empty-cart">
          <img src="./empty-cart.svg" alt="cart-image" />
          <span className="empty-title">Корзина пустая</span>
          <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
          <Button
            setOpenCart={setOpenCart}
            width="245px"
            title="Вернуться назад"
          />
        </div>
      </div>
    </>
  );
};

export default EmptyCart;
