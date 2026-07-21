import { useCart } from "../../../context/CartContext";
import "./button.css";

const Button = ({ width, title }) => {
  const { toggleCart } = useCart();

  return (
    <>
      <button
        style={{ width: `${width}` }}
        className="button-back"
        onClick={() => toggleCart()}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
