import { memo } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = ({ setOpenCart, sumAllSneakers }) => {
  return (
    <div className="header">
      <div className="container">
        <div className="header-items">
          <div style={{ cursor: "pointer" }} className="header__items-logo">
            <img src="/sneakers-logo.svg" alt="logo-image" />
            <div className="header-text">
              <h1 className="header-title">REACT SNEAKERS</h1>
              <span className="headre-span">Магазин лучших кроссовок</span>
            </div>
          </div>

          <div className="header-user">
            <div className="user-items">
              <div
                onClick={() => setOpenCart(true)}
                style={{ cursor: "pointer" }}
                className="cart__item"
              >
                <img src="/sneakers-cart.svg" alt="cart-image" />
                <span className="cart-item-count">{sumAllSneakers} руб.</span>
              </div>

              <Link to="/favourite">
                <div style={{ cursor: "pointer" }} className="like-item">
                  <img src="/sneakers-heart.svg" alt="heart-image" />
                  <span>Избранное</span>
                </div>
              </Link>

              <Link to="/profile">
                <div style={{ cursor: "pointer" }} className="user-item">
                  <img src="/sneakers-user.svg" alt="user-image" />
                  <span>Профиль</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
