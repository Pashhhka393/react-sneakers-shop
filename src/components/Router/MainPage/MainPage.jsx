import { useMemo, useState } from "react";
import { useCart } from "../../../context/CartContext";
import Search from "../../Search/Search";
import SneakersList from "../../SneakersList/SneakersList";
import Cart from "../../Cart/Cart";
import { useSneakersActions } from "../../../hooks/useSneakerAction";

const MainPage = ({
  taxAllSneaker,
  isLoading,
  sumAllSneakers,
  setEmptyProfile,
  sneakers,
  setSneakers,
}) => {
  const { openCart } = useCart();
  const { toggleInCart, toggleLiked, clearAllCartItems } = useSneakersActions(
    setSneakers,
    setEmptyProfile,
  );

  const [search, setSearch] = useState("");
  const [orderCart, setOrderCart] = useState(false);

  const filteredSneakers = useMemo(() => {
    const searchSneakers = search.trim().toLowerCase();
    return sneakers.filter(({ title }) => {
      return title.toLocaleLowerCase().includes(searchSneakers);
    });
  }, [search, sneakers]);
  const emptyFilteredSneakers = filteredSneakers.length === 0;

  return (
    <>
      <Search search={search} setSearch={setSearch} />
      <SneakersList
        sneakers={filteredSneakers}
        isLoading={isLoading}
        toggleLiked={toggleLiked}
        toggleInCart={toggleInCart}
      />
      {!isLoading && emptyFilteredSneakers ? (
        <h1 className="empty-title">Ничего не найдено!</h1>
      ) : (
        ""
      )}

      {openCart ? (
        <Cart
          toggleInCart={toggleInCart}
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
