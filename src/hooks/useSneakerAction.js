import { useCallback } from "react";
import { updateLiked, updateInCart } from "../api/sneakers";
import { useCart } from "../context/CartContext";
import { clearCartItems } from "../api/sneakers";

export const useSneakersActions = (setSneakers, setEmptyProfile) => {
  const { cartItems, addToCart, removeFromCart } = useCart();

  const toggleLiked = useCallback(
    (id, liked) => {
      return updateLiked(id, liked)
        .then((updSneakers) => {
          setSneakers((prev) =>
            prev.map((item) => {
              return item.id === id ? updSneakers : item;
            }),
          );
        })
        .catch((error) => console.error("Ошибка:", error));
    },
    [setSneakers],
  );

  const toggleInCart = useCallback(
    (id, inCart) => {
      updateInCart(id, inCart)
        .then((updSneakers) => {
          setSneakers((prev) => {
            return prev.map((item) => {
              return item.id === id ? updSneakers : item;
            });
          });
          if (!inCart) {
            addToCart(updSneakers);
          } else {
            removeFromCart(id);
          }
        })
        .catch((error) => console.log("Ошибка:", error));
    },
    [setSneakers, addToCart, removeFromCart],
  );

  const clearAllCartItems = () => {
    Promise.all(cartItems.map((item) => clearCartItems(item)))
      .then(() => {
        setSneakers((prev) => {
          return prev.map((item) => {
            return cartItems.some((cartItem) => cartItem.id === item.id)
              ? { ...item, inCart: false }
              : item;
          });
        });
        cartItems.forEach((item) => removeFromCart(item.id));
        setEmptyProfile((prev) => [...prev, ...cartItems]);
      })
      .catch((error) => console.log("Ошибка: ", error));
  };

  return { toggleLiked, toggleInCart, clearAllCartItems };
};
