import "./button.css";

const Button = ({ width, title, setOpenCart }) => {
  return (
    <>
      <button
        style={{ width: `${width}` }}
        className="button-back"
        onClick={() => setOpenCart(false)}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
