import { useEffect, useMemo, useState } from "react";
import { useCart } from "./context/CartContext";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import MainPage from "./components/Router/MainPage/MainPage";
import MyProfile from "./components/Profile/MyProfile";
import MyFavourite from "./components/Favourite/MyFavourite";
import { getSneakers } from "./api/sneakers";

const App = () => {
  const { cartItems } = useCart();
  const [sneakers, setSneakers] = useState([]);
  const [emptyProfile, setEmptyProfile] = useState(() => {
    const saveBuySneakers = localStorage.getItem("myBuySneakers");
    try {
      return saveBuySneakers ? JSON.parse(saveBuySneakers) : [];
    } catch (e) {
      console.log(e);
      return [];
    }
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSneakers();
        setSneakers(data);
        setIsLoading(false);
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
      return summator + +item.price.replaceAll(" ", "");
    }, 0);
  }, [cartItems]);
  const taxAllSneaker = useMemo(
    () => Math.round(sumAllSneakers * 0.05),
    [sumAllSneakers],
  );

  const filteredFavouriteSneakers = sneakers.filter(({ liked }) => liked);

  return (
    <div className="bg-wrapper">
      <Header sumAllSneakers={sumAllSneakers} />
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
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
