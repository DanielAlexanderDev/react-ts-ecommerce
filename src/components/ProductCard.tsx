import { CartProduct, Product } from "../types/types";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";
import { Button, Card } from "react-bootstrap";

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
    <Card className="flex-fill shadow-sm m-2" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Img className="mb-3" src={images[1]} alt={title} />
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2">${price / 10}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <div className="d-flex gap-2 justify-content-center">
          <Button
            className="bg-purple"
            variant="primary"
            type="button"
            onClick={() =>
              handleAddToCart({ id, title, images, price, quantity: 0 })
            }
          >
            Anadir a Carrito
          </Button>
          <Button
            variant="danger"
            type="button"
            onClick={() => handleRemoveFromCart(id)}
          >
            Remove
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
