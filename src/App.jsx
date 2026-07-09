import { useEffect, useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import MainPage from "./components/Router/MainPage/MainPage";
import MyProfile from "./components/Profile/MyProfile";
import MyFavourite from "./components/Favourite/MyFavourite";

const App = () => {
  const [sneakers, setSneakers] = useState([]);
  const [cartItems, setCartItems] = useState(() => {
    const saveCartItems = localStorage.getItem("cartSneakers");
    try {
      return saveCartItems ? JSON.parse(saveCartItems) : [];
    } catch (e) {
      console.log("Ошибка: ", e);
      return [];
    }
  });
  const [emptyProfile, setEmptyProfile] = useState(() => {
    const saveBuySneakers = localStorage.getItem("myBuySneakers");
    try {
      return saveBuySneakers ? JSON.parse(saveBuySneakers) : [];
    } catch (e) {
      console.log(e);
      return [];
    }
  });
  const [openCart, setOpenCart] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/sneakers");
        const data = await response.json();
        setSneakers(data);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      } catch (error) {
        console.log("Ошибка: ", error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    localStorage.setItem("cartSneakers", JSON.stringify(cartItems));
  }, [cartItems]);
  useEffect(() => {
    localStorage.setItem("myBuySneakers", JSON.stringify(emptyProfile));
  }, [emptyProfile]);

  const sumAllSneakers = useMemo(() => {
    return cartItems.reduce((summator, item) => {
      console.log("перерисовка");
      return summator + +item.price.replaceAll(" ", "");
    }, 0);
  }, [cartItems]);
  const taxAllSneaker = useMemo(
    () => Math.round(sumAllSneakers * 0.05),
    [sumAllSneakers]
  );

  const filteredFavouriteSneakers = sneakers.filter(({ liked }) => liked);

  return (
    <div className="bg-wrapper">
      <Header setOpenCart={setOpenCart} sumAllSneakers={sumAllSneakers} />
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              cartItems={cartItems}
              setCartItems={setCartItems}
              openCart={openCart}
              setOpenCart={setOpenCart}
              sumAllSneakers={sumAllSneakers}
              taxAllSneaker={taxAllSneaker}
              emptyProfile={emptyProfile}
              setEmptyProfile={setEmptyProfile}
              isLoading={isLoading}
              sneakers={sneakers}
              setSneakers={setSneakers}
            />
          }
        ></Route>
        <Route
          path="/profile"
          element={<MyProfile emptyProfile={emptyProfile} />}
        ></Route>
        <Route
          path="/favourite"
          element={
            <MyFavourite
              filteredFavouriteSneakers={filteredFavouriteSneakers}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
};
export default App;
