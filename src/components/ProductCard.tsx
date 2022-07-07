import { CartProduct, Product } from "../types/types";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";

const ProductCard = ({
  title,
  id,
  price,
  images,
  description,
  category,
}: Product) => {
  const dispatch = useDispatch();
  const handleAddToCart = (payload: CartProduct) => {
    dispatch(cartActions.addToCart(payload));
    // navigate(`/cart`);
  };

  const handleRemoveFromCart = (id: number) => {
    dispatch(cartActions.removeFromCart(id));
  };
  return (
    <div>
      <img src={images[1]} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{price / 10}</p>
      <button
        type="button"
        onClick={() =>
          handleAddToCart({ id, title, images, price, quantity: 0 })
        }
      >
        Anadir a Carrito
      </button>
      <button type="button" onClick={() => handleRemoveFromCart(id)}>
        Remove
      </button>
    </div>
  );
};

export default ProductCard;
