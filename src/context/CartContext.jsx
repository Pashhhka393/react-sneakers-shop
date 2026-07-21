import { useContext, createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const saveCartItems = localStorage.getItem("cartSneakers");
    try {
      return saveCartItems ? JSON.parse(saveCartItems) : [];
    } catch (e) {
      console.log("Ошибка: ", e);
      return [];
    }
  });
  const [openCart, setOpenCart] = useState(false);

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };
  const toggleCart = () => {
    setOpenCart((prev) => !prev);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, openCart, toggleCart, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
