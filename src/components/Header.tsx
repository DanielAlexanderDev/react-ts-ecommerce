import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCart } from "../store/store";
import { BsCart } from "react-icons/bs";

const Header = () => {
  const cart = useSelector(selectCart);
  const cartNumber = cart.reduce((acc, curr) => curr.quantity + acc, 0);

  return (
    <nav className="bg-light mb-5  w-100">
      <ul className="d-flex  flex-row justify-content-between align-items-center">
        <li className=" list-unstyled fs-1 text-center">
          <Link className="text-decoration-none fg text-dark" to={"/"}>
            MY STORE
          </Link>
        </li>
        <li className="text-decoration-none list-unstyled position-relative mx-4">
          <Link className="text-decoration-none fg text-dark" to={"/cart"}>
            <BsCart color="black" size={"2em"} />
            <p className="position-absolute top-0 end-0 fs-5 mt-3 px-2 bg-warning rounded-circle list-unstyled">
              {cartNumber}
            </p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
