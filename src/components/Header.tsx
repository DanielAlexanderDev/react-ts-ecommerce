import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCart } from "../store/store";
import { BsCart } from "react-icons/bs";

const Header = () => {
  const cart = useSelector(selectCart);
  const cartNumber = cart.reduce((acc, curr) => curr.quantity + acc, 0);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={"/cart"}>
              <BsCart color="black" />
            </Link>
          </li>
        </ul>
        <p>{cartNumber}</p>
      </nav>
    </div>
  );
};

export default Header;
