import { Link } from "react-router-dom";
import SneakerItem from "../SneakerItem/SneakerItem";
import IconBack from "../UI/IconBack/IconBack";
import "./myprofile.css";

const MyProfile = ({ emptyProfile }) => {
  return (
    <>
      {emptyProfile.length === 0 ? (
        <div className="empty-profile">
          <div className="empty-emoji">
            <img src="./sad-emoji.svg" alt="emji-image" />
          </div>
          <div className="empty__profile-info">
            <h1>У вас нет заказов</h1>
            <p>Вы нищеброд? Оформите хотя бы один заказ.</p>
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
            <h1>Мои покупки</h1>
          </div>
          <div className="profile-buy">
            {emptyProfile.map((sneaker) => {
              return (
                <SneakerItem
                  key={sneaker.id}
                  img={sneaker.img}
                  title={sneaker.title}
                  price={sneaker.price}
                  isBuy={true}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default MyProfile;
