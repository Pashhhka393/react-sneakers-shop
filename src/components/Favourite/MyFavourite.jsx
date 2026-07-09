import { Link } from "react-router-dom";
import IconBack from "../UI/IconBack/IconBack";
import "./myfavourite.css";
import SneakerItem from "../SneakerItem/SneakerItem";

const MyFavourite = ({ filteredFavouriteSneakers }) => {
  return (
    <>
      {filteredFavouriteSneakers.length === 0 ? (
        <div className="empty-favourite">
          <div className="empty-emoji">
            <img src="./sad-emoji-2.svg" alt="emoji-image" />
          </div>
          <div className="empty__profile-info">
            <h1>Закладок нет :(</h1>
            <p>Вы ничего не добавляли в закладки</p>
            <Link to="/">
              <button> Вернуться назад</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="my-profile">
          <div className="profile-title">
            <Link to="/">
              <IconBack />
            </Link>
            <h1>Мои закладки</h1>
          </div>
          <div className="profile-buy">
            {filteredFavouriteSneakers.map((item) => {
              return (
                <SneakerItem
                  key={item.id}
                  img={item.img}
                  title={item.title}
                  price={item.price}
                  isFavourite={true}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
export default MyFavourite;
