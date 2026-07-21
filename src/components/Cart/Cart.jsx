import { useCart } from "../../context/CartContext";
import EmptyCart from "../EmptyCart/EmptyCart";
import OrderCart from "../OrderCart/OrderCart";
import SneakersInfo from "../SneakersInfo/SneakersInfo";
import "./cart.css";

const Cart = ({
  toggleInCart,
  sumAllSneakers,
  taxAllSneaker,
  setOrderCart,
  orderCart,
  clearAllCartItems,
}) => {
  const { cartItems } = useCart();

  return (
    <>
      {orderCart ? (
        <OrderCart setOrderCart={setOrderCart} />
      ) : cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <SneakersInfo
          toggleInCart={toggleInCart}
          sumAllSneakers={sumAllSneakers}
          taxAllSneaker={taxAllSneaker}
          setOrderCart={setOrderCart}
          clearAllCartItems={clearAllCartItems}
        />
      )}
    </>
  );
};

export default Cart;
