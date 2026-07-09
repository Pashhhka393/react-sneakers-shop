import { useCallback, useMemo, useState } from "react";
import Search from "../../Search/Search";
import SneakersList from "../../SneakersList/SneakersList";
import Cart from "../../Cart/Cart";
const MainPage = ({
  cartItems,
  setCartItems,
  openCart,
  setOpenCart,
  taxAllSneaker,
  isLoading,
  sumAllSneakers,
  setEmptyProfile,
  sneakers,
  setSneakers,
}) => {
  const [search, setSearch] = useState("");
  const [orderCart, setOrderCart] = useState(false);

  const filteredSneakers = useMemo(() => {
    const searchSneakers = search.trim().toLowerCase();
    return sneakers.filter(({ title }) => {
      return title.toLocaleLowerCase().includes(searchSneakers);
    });
  }, [search, sneakers]);
  const emptyFilteredSneakers = filteredSneakers.length === 0;

  const toggleLiked = useCallback(
    (id, liked) => {
      fetch(`https://sneakers-api-9ysh.onrender.com/sneakers/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ liked: !liked }),
      })
        .then((response) => response.json())
        .then((updSneakers) => {
          setSneakers((prev) =>
            prev.map((item) => {
              return item.id === id ? updSneakers : item;
            })
          );
        })
        .catch((error) => console.error("Ошибка:", error));
    },
    [setSneakers]
  );
  const toggleInCart = useCallback(
    (id, inCart) => {
      fetch(`https://sneakers-api-9ysh.onrender.com/sneakers/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ inCart: !inCart }),
      })
        .then((res) => res.json())
        .then((updSneakers) => {
          setSneakers((prev) => {
            return prev.map((item) => {
              return item.id === id ? updSneakers : item;
            });
          });
          if (!inCart) {
            setCartItems((prev) => {
              const exists = prev.some((item) => item.id === id);
              if (exists) return prev;
              return [...prev, updSneakers];
            });
          } else {
            setCartItems((prev) => prev.filter((item) => item.id !== id));
          }
        })
        .catch((error) => console.log("Ошибка:", error));
    },
    [setSneakers, setCartItems]
  );
  const clearAllCartItems = () => {
    Promise.all(
      cartItems.map((item) => {
        return fetch(
          `https://sneakers-api-9ysh.onrender.com/sneakers/${item.id}`,
          {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ inCart: false }),
          }
        );
      })
    )
      .then(() => {
        setSneakers((prev) => {
          return prev.map((item) => {
            return cartItems.some((cartItem) => cartItem.id === item.id)
              ? { ...item, inCart: false }
              : item;
          });
        });
        setOrderCart(true);
        setCartItems([]);
        setEmptyProfile((prev) => [...prev, ...cartItems]);
      })
      .catch((error) => console.log("Ошибка: ", error));
  };
  return (
    <>
      <Search search={search} setSearch={setSearch} />
      <SneakersList
        sneakers={filteredSneakers}
        isLoading={isLoading}
        toggleLiked={toggleLiked}
        toggleInCart={toggleInCart}
      />
      {emptyFilteredSneakers ? (
        <h1 className="empty-title">Ничего не найдено!</h1>
      ) : (
        ""
      )}

      {openCart ? (
        <Cart
          toggleInCart={toggleInCart}
          setOpenCart={setOpenCart}
          cartItems={cartItems}
          sumAllSneakers={sumAllSneakers}
          taxAllSneaker={taxAllSneaker}
          orderCart={orderCart}
          setOrderCart={setOrderCart}
          clearAllCartItems={clearAllCartItems}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default MainPage;
