import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCart } from "../store/store";
import { cartActions } from "../store/cartSlice";

const Cart = () => {
  const navigate = useNavigate();
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();
  console.log(cart);
  const handleOnRemove = (id: number) => {
    dispatch(cartActions.removeFromCart(id));
  };

  return (
    <div>
      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <img src={item.images[1]} alt="" />
          <p>{item.price / 10}</p>
          <p>Cantidad: {item.quantity}</p>
          <button type="button" onClick={() => handleOnRemove(item.id)}>
            Remove From Cart
          </button>
        </div>
      ))}
      <button type="button" onClick={() => navigate("/")}>
        Seguir comprando
      </button>
    </div>
  );
};

export default Cart;
