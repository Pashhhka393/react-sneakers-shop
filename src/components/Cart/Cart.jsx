import EmptyCart from "../EmptyCart/EmptyCart";
import OrderCart from "../OrderCart/OrderCart";
import SneakersInfo from "../SneakersInfo/SneakersInfo";
import "./cart.css";

const Cart = ({
  setOpenCart,
  cartItems,
  toggleInCart,
  sumAllSneakers,
  taxAllSneaker,
  setOrderCart,
  orderCart,
  clearAllCartItems,
}) => {
  return (
    <>
      {orderCart ? (
        <OrderCart setOpenCart={setOpenCart} setOrderCart={setOrderCart} />
      ) : cartItems.length === 0 ? (
        <EmptyCart setOpenCart={setOpenCart} />
      ) : (
        <SneakersInfo
          setOpenCart={setOpenCart}
          toggleInCart={toggleInCart}
          cartItems={cartItems}
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
