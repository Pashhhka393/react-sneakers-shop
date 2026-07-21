import { useCart } from "../../context/CartContext";
import SneakersInfoItem from "../SneakersInfoItem/SneakersInfoItem";
import "./sneakersinfo.css";

const SneakersInfo = ({
  toggleInCart,
  sumAllSneakers,
  taxAllSneaker,
  clearAllCartItems,
}) => {
  const { toggleCart } = useCart();

  return (
    <>
      <div className="cart-overlay"></div>
      <div className="cart">
        <div className="cart-header">
          <h1>Корзина</h1>
          <button onClick={() => toggleCart()} className="remove-header__btn">
            Вернуться назад
          </button>
        </div>
        <div className="cart-items">
          <SneakersInfoItem toggleInCart={toggleInCart} />
        </div>

        <div className="end-price">
          <div className="price-answer-1">
            <p>Итого: </p>
            <div className="border-price-1"></div>
            <p>{sumAllSneakers} руб.</p>
          </div>

          <div className="price-answer-2">
            <p>Налог 5%: </p>
            <div className="border-price-2"></div>
            <p>{taxAllSneaker} руб.</p>
          </div>
        </div>
        <button onClick={clearAllCartItems} className="button-back__info">
          Оформить заказ
        </button>
      </div>
    </>
  );
};

export default SneakersInfo;
